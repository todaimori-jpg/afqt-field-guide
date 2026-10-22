window.ASVAB = window.ASVAB || {};

(function () {
  "use strict";

  var DATA = window.ASVAB;
  var ui = DATA.ui;
  var el = ui.el;
  var META = DATA.meta;

  var main = document.getElementById("main");
  var nav = document.getElementById("nav");
  var activeQuiz = null;
  var SUBTEST_KEYS = ["ar", "mk", "wk", "pc"];

  document.getElementById("footer-note").textContent = META.course.disclaimer;

  function pack(key) { return DATA[key]; }
  function meta(key) {
    return META.subtests.filter(function (s) { return s.key === key; })[0];
  }
  function hasLessons(key) {
    var p = pack(key);
    return !!(p && p.lessons && p.lessons.length);
  }
  function totalLessons() {
    return SUBTEST_KEYS.reduce(function (n, k) { return n + (hasLessons(k) ? pack(k).lessons.length : 0); }, 0);
  }
  /** Practice-set questions only; the diagnostic is counted separately. */
  function totalQuestions() {
    return SUBTEST_KEYS.reduce(function (n, k) {
      var p = pack(k);
      return n + (p && p.practice ? p.practice.questions.length : 0);
    }, 0);
  }

  function diagnosticSections() {
    var dm = DATA.diagnosticMath;
    var dv = DATA.diagnosticVerbal;
    var all = [];
    if (dm && dm.practice) all = all.concat(dm.practice.questions);
    if (dv && dv.practice) all = all.concat(dv.practice.questions);

    return META.subtests.map(function (s) {
      return {
        id: s.key,
        code: s.code,
        label: s.name,
        timeLimitMinutes: s.catMinutes,
        questions: all.filter(function (q) { return q.section === s.key; })
      };
    }).filter(function (sec) { return sec.questions.length > 0; });
  }

  function diagnosticPassages() {
    var out = {};
    var dv = DATA.diagnosticVerbal;
    if (dv && dv.practice) {
      (dv.practice.passages || []).forEach(function (p) { out[p.id] = p; });
    }
    return out;
  }

  function diagnosticQuestions() {
    return diagnosticSections().reduce(function (acc, s) { return acc.concat(s.questions); }, []);
  }

  /* =========================================================
     Router
     ========================================================= */

  function parse() {
    var parts = String(location.hash || "").replace(/^#\/?/, "").split("/").filter(Boolean);
    return parts.map(decodeURIComponent);
  }

  function go(path) {
    if (location.hash === path) route();
    else location.hash = path;
  }

  function route() {
    if (activeQuiz) { activeQuiz.destroy(); activeQuiz = null; }
    var p = parse();
    var view;

    if (p.length === 0) view = viewHome();
    else if (p[0] === "scoring") view = viewScoring();
    else if (p[0] === "diagnostic") view = p[1] === "run" ? viewDiagnosticRun() : viewDiagnosticBrief();
    else if (p[0] === "lesson" && p[1] && p[2]) view = viewLesson(p[1], p[2]);
    else if (p[0] === "practice" && p[1]) view = viewPractice(p[1]);
    else if (SUBTEST_KEYS.indexOf(p[0]) !== -1) view = viewHub(p[0]);
    else view = viewNotFound(p.join("/"));

    main.textContent = "";
    main.appendChild(view);
    paintNav(p);
    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = titleFor(p);
  }

  function titleFor(p) {
    var base = "AFQT Field Guide";
    if (!p.length) return base + " — ASVAB prep for the four subtests that count";
    if (p[0] === "scoring") return "How the AFQT is scored — " + base;
    if (p[0] === "diagnostic") return "Diagnostic test — " + base;
    if (p[0] === "practice" && meta(p[1])) return meta(p[1]).name + " practice set — " + base;
    if (p[0] === "lesson" && meta(p[1])) {
      var l = findLesson(p[1], p[2]);
      return (l ? l.title : "Lesson") + " — " + base;
    }
    if (meta(p[0])) return meta(p[0]).name + " — " + base;
    return "Page not found — " + base;
  }

  function paintNav(p) {
    var current = p[0] === "lesson" || p[0] === "practice" ? p[1] : p[0];
    nav.textContent = "";
    var items = SUBTEST_KEYS.map(function (k) { return { href: "#/" + k, label: meta(k).code, match: current === k }; });
    items.push({ href: "#/diagnostic", label: "Diagnostic", match: p[0] === "diagnostic" });
    items.push({ href: "#/scoring", label: "Scoring", match: p[0] === "scoring" });
    items.forEach(function (it) {
      nav.appendChild(
        el("a", { href: it.href, text: it.label, "aria-current": it.match ? "page" : null })
      );
    });
  }

  /* =========================================================
     Shared fragments
     ========================================================= */

  function crumbs(parts) {
    var node = el("nav", { class: "crumbs", "aria-label": "Breadcrumb" });
    parts.forEach(function (part, i) {
      if (i) node.appendChild(el("span", { "aria-hidden": "true", text: "/" }));
      node.appendChild(
        part.href
          ? el("a", { href: part.href, text: part.text })
          : el("span", { "aria-current": "page", text: part.text })
      );
    });
    return node;
  }

  function missing(key) {
    return el(
      "div",
      { class: "wrap page" },
      el(
        "div",
        { class: "empty-state" },
        el("h2", { class: "h-sec", text: "This section is still loading" }),
        el("p", { class: "muted", text: "The content pack for " + (meta(key) ? meta(key).name : key) + " did not load. Reload the page, and if it persists the data file is missing." }),
        el("a", { class: "btn", href: "#/", text: "Back to the course" })
      )
    );
  }

  function subtestCard(s) {
    var p = pack(s.key);
    var lessons = p && p.lessons ? p.lessons.length : 0;
    var questions = p && p.practice ? p.practice.questions.length : 0;
    return el(
      "a",
      { class: "card", href: "#/" + s.key },
      el("div", { class: "card-code", text: s.code + " — " + s.group }),
      el("h3", { class: "card-title", text: s.name }),
      el("p", { class: "card-body", text: s.blurb }),
      el(
        "div",
        { class: "card-meta" },
        el("span", { text: lessons + " lessons" }),
        el("span", { text: questions + " practice Qs" }),
        el("span", { text: s.catQuestions + " Qs / " + s.catMinutes + " min" })
      ),
      el("div", { class: "card-cta" }, el("span", { class: "btn btn-sm btn-ghost", text: "Study " + s.code }))
    );
  }

  /* =========================================================
     Home
     ========================================================= */

  function viewHome() {
    var diag = diagnosticQuestions().length;

    return el(
      "div",
      { class: "wrap" },

      el(
        "section",
        { class: "hero" },
        el("p", { class: "hero-kicker", text: "ASVAB prep — AFQT only" }),
        el("h1", { class: "h-display", text: "Four subtests decide whether you enlist." }),
        el("p", { class: "lede", text: META.course.intro }),
        el(
          "dl",
          { class: "stat-strip" },
          [
            { k: "Subtests", v: "4", note: " of the 10 on the ASVAB" },
            { k: "Lessons", v: String(totalLessons()), note: " with worked examples" },
            { k: "Practice questions", v: String(totalQuestions()), note: " every one explained" },
            { k: "Diagnostic", v: String(diag), note: " questions, timed by section" }
          ].map(function (s) {
            return el("div", { class: "stat" },
              el("dt", { text: s.k }),
              el("dd", null, s.v, el("em", { text: s.note }))
            );
          })
        )
      ),

      el(
        "section",
        { class: "section" },
        el("div", { class: "section-label", text: "Section 01 — The four that count" }),
        el("h2", { class: "h-sec", style: "margin-bottom:20px", text: "Pick a subtest" }),
        el("div", { class: "grid grid-4" }, META.subtests.map(subtestCard))
      ),

      el(
        "section",
        { class: "section" },
        el(
          "div",
          { class: "band-dark" },
          el(
            "div",
            { class: "band-inner" },
            el(
              "div",
              null,
              el("div", { class: "section-label", text: "Section 02 — Diagnostic" }),
              el("h2", { class: "h-sec", text: "Find out where you actually stand" }),
              el("p", {
                style: "margin-top:12px",
                text: diag + " questions across all four subtests, run under real section time limits: AR " +
                  META.subtests[0].catMinutes + " min, MK " + META.subtests[1].catMinutes + " min, WK " +
                  META.subtests[2].catMinutes + " min, PC " + META.subtests[3].catMinutes + " min. You get a full answer review and an AFQT band estimate at the end."
              }),
              el("p", { class: "tiny", style: "color:var(--night-muted);margin-top:10px", text: "Take it before you study, then again after. No calculator, no notes — that is the point." })
            ),
            el("a", { class: "btn btn-amber", href: "#/diagnostic" }, "Start the diagnostic", el("span", { class: "arrow", "aria-hidden": "true", text: " →" }))
          )
        )
      ),

      el(
        "section",
        { class: "section" },
        el("div", { class: "section-label", text: "Section 03 — How scoring works" }),
        el("h2", { class: "h-sec", style: "margin-bottom:8px", text: "Why these four and not the other six" }),
        el("p", { class: "lede", style: "margin-bottom:22px", text: "The ASVAB has ten subtests, but only four feed the AFQT — the single score that determines enlistment eligibility. The other six contribute to job line scores, which matter after you qualify, not before." }),
        el(
          "div",
          { class: "grid grid-2" },
          el(
            "ul",
            { class: "formula" },
            META.afqt.formula.map(function (f) {
              return el("li", null, el("span", { class: "f-label", text: f.label }), el("span", { class: "f-text", text: f.text }));
            })
          ),
          el(
            "div",
            { class: "callout-note" },
            el("strong", { text: "Verbal is doubled. " }),
            "Word Knowledge and Paragraph Comprehension are added together into Verbal Expression, and that sum counts twice. Per question, the verbal subtests are worth more than the math subtests — which is why this course gives vocabulary and reading as much attention as algebra."
          )
        ),
        el(
          "div",
          { class: "callout-note", style: "margin-top:14px;border-left-color:var(--olive);background:var(--olive-tint);color:#2f3a26" },
          el("strong", { style: "color:#28331f", text: "Air Force target. " }),
          "The published minimum AFQT is 31 with a high school diploma and 50 with a GED. Clearing that makes you eligible to enlist, but Air Force careers are assigned from separate Mechanical, Administrative, General and Electronic composites built on subtests this course does not cover. ",
          el("a", { href: "#/scoring", style: "color:#28331f", text: "Full scoring breakdown." })
        ),
        el("div", { style: "margin-top:22px" }, el("a", { class: "btn btn-ghost", href: "#/scoring" }, "Read the full scoring breakdown", el("span", { class: "arrow", "aria-hidden": "true", text: " →" })))
      ),

      el(
        "section",
        { class: "section" },
        el("div", { class: "section-label", text: "Section 04 — How to use this course" }),
        el(
          "ol",
          { class: "blk-list", dataset: { ordered: "true" } },
          [
            "Take the diagnostic cold, before you study anything. You need a baseline or you will not know what the lessons are worth.",
            "Work the two weakest sections first. Read the lesson, then do the worked examples with a pencil before you reveal the solution.",
            "Run that subtest's practice set. Every question has a written explanation — read it even on the ones you got right.",
            "Retake the diagnostic and compare. Repeat on whichever section is still lagging."
          ].map(function (t) { return el("li", { text: t }); })
        )
      )
    );
  }

  /* =========================================================
     Subtest hub
     ========================================================= */

  function viewHub(key) {
    var s = meta(key);
    if (!s) return viewNotFound(key);
    var p = pack(key);
    if (!p) return missing(key);

    var idx = META.subtests.indexOf(s);
    var prev = META.subtests[(idx - 1 + META.subtests.length) % META.subtests.length];
    var next = META.subtests[(idx + 1) % META.subtests.length];
    var practice = p.practice;

    return el(
      "div",
      { class: "wrap page" },
      crumbs([{ text: "Course", href: "#/" }, { text: s.code }]),

      el(
        "header",
        { class: "hub-head" },
        el("div", { class: "hub-code", "aria-hidden": "true", text: s.code }),
        el(
          "div",
          null,
          el("div", { class: "card-code", text: s.group + " — subtest " + s.order + " of 4" }),
          el("h1", { class: "h-page", style: "margin-top:6px", text: s.name }),
          el("p", { class: "lede", style: "margin-top:12px", text: s.blurb }),
          el(
            "dl",
            { class: "fact-grid" },
            [
              { k: "Computerized test", v: s.catQuestions + " Qs / " + s.catMinutes + " min" },
              { k: "Paper version", v: s.paperQuestions + " Qs / " + s.paperMinutes + " min" },
              { k: "Lessons here", v: String(p.lessons ? p.lessons.length : 0) },
              { k: "Practice set", v: practice ? practice.questions.length + " Qs" : "—" }
            ].map(function (f) {
              return el("div", { class: "fact" }, el("dt", { text: f.k }), el("dd", { text: f.v }));
            })
          )
        )
      ),

      el(
        "section",
        { class: "section" },
        el("div", { class: "section-label", text: "What it covers" }),
        el("ul", { class: "skill-list" }, s.skills.map(function (sk) { return el("li", { text: sk }); })),
        el("p", { class: "tiny", style: "margin-top:16px", text: "AFQT weighting: " + s.afqt })
      ),

      el(
        "section",
        { class: "section" },
        el("div", { class: "section-label", text: "Lessons" }),
        p.lessons && p.lessons.length
          ? el(
              "ol",
              { class: "lesson-index" },
              p.lessons.map(function (l) {
                return el(
                  "li",
                  null,
                  el(
                    "a",
                    { class: "lesson-row", href: "#/lesson/" + key + "/" + l.id },
                    el("div", null, el("h3", { text: l.title }), el("p", { text: l.summary })),
                    el("span", { class: "lesson-min", text: l.minutes + " min" })
                  )
                );
              })
            )
          : el("p", { class: "muted", text: "No lessons in this pack yet." })
      ),

      practice
        ? el(
            "section",
            { class: "section" },
            el(
              "div",
              { class: "band-dark" },
              el(
                "div",
                { class: "band-inner" },
                el(
                  "div",
                  null,
                  el("div", { class: "section-label", text: "Practice set" }),
                  el("h2", { class: "h-sec", text: practice.title }),
                  el("p", { style: "margin-top:10px", text: practice.subtitle }),
                  el("p", { class: "tiny", style: "color:var(--night-muted);margin-top:8px", text: practice.questions.length + " questions. Answers and explanations appear immediately after each one, so you can learn as you go." })
                ),
                el("a", { class: "btn btn-amber", href: "#/practice/" + key }, "Start practice", el("span", { class: "arrow", "aria-hidden": "true", text: " →" }))
              )
            )
          )
        : null,

      el(
        "div",
        { class: "lesson-foot" },
        el("a", { class: "btn btn-ghost", href: "#/" + prev.key }, el("span", { class: "arrow", "aria-hidden": "true", text: "←" }), prev.code + " " + prev.name),
        el("a", { class: "btn btn-ghost", href: "#/" + next.key }, next.code + " " + next.name, el("span", { class: "arrow", "aria-hidden": "true", text: "→" }))
      )
    );
  }

  /* =========================================================
     Lesson
     ========================================================= */

  function findLesson(key, id) {
    var p = pack(key);
    if (!p || !p.lessons) return null;
    return p.lessons.filter(function (l) { return l.id === id; })[0] || null;
  }

  function viewLesson(key, id) {
    var s = meta(key);
    var p = pack(key);
    if (!s || !p) return missing(key);
    var lesson = findLesson(key, id);
    if (!lesson) return viewNotFound("lesson/" + key + "/" + id);

    var at = p.lessons.indexOf(lesson);
    var prev = p.lessons[at - 1] || null;
    var next = p.lessons[at + 1] || null;

    var body = el("div");
    body.appendChild(ui.renderBlocks(lesson.blocks, lesson.id + "-"));
    var exCount = body.querySelectorAll(".blk-example").length;

    return el(
      "div",
      { class: "wrap page" },
      crumbs([
        { text: "Course", href: "#/" },
        { text: s.code, href: "#/" + key },
        { text: "Lesson " + (at + 1) }
      ]),

      el(
        "div",
        { class: "lesson-shell" },
        el(
          "div",
          { class: "lesson-main" },
          el(
            "header",
            { class: "lesson-head" },
            el("div", { class: "card-code", text: s.code + " — " + s.name + " — lesson " + (at + 1) + " of " + p.lessons.length }),
            el("h1", { class: "h-page", text: lesson.title }),
            el("p", { class: "lede", text: lesson.summary }),
            el("p", { class: "tiny", style: "margin-top:12px", text: "About " + lesson.minutes + " minutes · " + exCount + " worked examples" })
          ),
          body,
          el(
            "div",
            { class: "lesson-foot" },
            prev
              ? el("a", { class: "btn btn-ghost", href: "#/lesson/" + key + "/" + prev.id }, el("span", { class: "arrow", "aria-hidden": "true", text: "←" }), prev.title)
              : el("a", { class: "btn btn-ghost", href: "#/" + key }, el("span", { class: "arrow", "aria-hidden": "true", text: "←" }), "All " + s.code + " lessons"),
            next
              ? el("a", { class: "btn btn-ghost", href: "#/lesson/" + key + "/" + next.id }, next.title, el("span", { class: "arrow", "aria-hidden": "true", text: "→" }))
              : el("a", { class: "btn", href: "#/practice/" + key }, "Practice " + s.code, el("span", { class: "arrow", "aria-hidden": "true", text: " →" }))
          )
        ),

        el(
          "aside",
          { class: "lesson-aside", "aria-label": s.code + " lessons" },
          el("div", { class: "aside-title", text: s.code + " lessons" }),
          el(
            "div",
            { class: "aside-nav" },
            p.lessons.map(function (l) {
              return el("a", {
                href: "#/lesson/" + key + "/" + l.id,
                text: l.title,
                "aria-current": l.id === lesson.id ? "step" : null
              });
            })
          ),
          el("div", { style: "margin-top:16px" }, el("a", { class: "btn btn-sm btn-block", href: "#/practice/" + key, text: "Practice set" }))
        )
      )
    );
  }

  /* =========================================================
     Practice
     ========================================================= */

  function viewPractice(key) {
    var s = meta(key);
    var p = pack(key);
    if (!s || !p || !p.practice) return missing(key);

    var passages = {};
    (p.practice.passages || []).forEach(function (pg) { passages[pg.id] = pg; });

    var host = el("div");
    var head = el(
      "div",
      { class: "wrap", style: "padding-top:34px" },
      crumbs([{ text: "Course", href: "#/" }, { text: s.code, href: "#/" + key }, { text: "Practice" }]),
      el("div", { class: "card-code", text: s.code + " — practice" }),
      el("h1", { class: "h-page", style: "margin:6px 0 8px", text: p.practice.title }),
      el("p", { class: "lede", text: p.practice.subtitle })
    );

    var mount = el("div", { class: "wrap" });

    setTimeout(function () {
      activeQuiz = DATA.quiz.run({
        container: mount,
        mode: "practice",
        title: p.practice.title,
        passages: passages,
        sections: [{
          id: key,
          code: s.code,
          label: s.name,
          timeLimitMinutes: null,
          questions: p.practice.questions
        }],
        onExit: function () { go("#/" + key); },
        onRestart: function () { route(); }
      });
    }, 0);

    host.appendChild(head);
    host.appendChild(mount);
    return host;
  }

  /* =========================================================
     Diagnostic
     ========================================================= */

  function viewDiagnosticBrief() {
    var secs = diagnosticSections();
    if (!secs.length) return missing("diagnosticMath");

    var totalQ = secs.reduce(function (a, s) { return a + s.questions.length; }, 0);
    var totalMin = secs.reduce(function (a, s) { return a + s.timeLimitMinutes; }, 0);

    return el(
      "div",
      { class: "wrap brief" },
      crumbs([{ text: "Course", href: "#/" }, { text: "Diagnostic" }]),
      el("div", { class: "card-code", text: "Full-length practice test" }),
      el("h1", { class: "h-page", style: "margin:8px 0 12px", text: "AFQT diagnostic test" }),
      el("p", { class: "lede", style: "margin-bottom:24px", text: totalQ + " questions across all four AFQT subtests, run one section at a time under the real computerized-test time limits. You will not see whether an answer is right until you submit, exactly as on test day." }),

      el(
        "div",
        { class: "brief-card" },
        el("div", { class: "section-label", text: "Sections and time limits" }),
        el(
          "div",
          { class: "tbl-wrap", style: "border:0;background:transparent" },
          el(
            "table",
            { class: "data" },
            el(
              "thead",
              null,
              el("tr", null,
                el("th", { scope: "col", text: "Section" }),
                el("th", { scope: "col", text: "Questions" }),
                el("th", { scope: "col", text: "Time limit" }),
                el("th", { scope: "col", text: "Pace" })
              )
            ),
            el(
              "tbody",
              null,
              secs.map(function (s) {
                return el("tr", null,
                  el("td", null, el("strong", { text: s.code }), " — " + s.label),
                  el("td", { class: "num", text: String(s.questions.length) }),
                  el("td", { class: "num", text: s.timeLimitMinutes + " min" }),
                  el("td", { class: "num", text: Math.round((s.timeLimitMinutes * 60) / s.questions.length) + " sec each" })
                );
              })
            ),
            el(
              "tfoot",
              null,
              el("tr", null,
                el("td", null, el("strong", { text: "Total" })),
                el("td", { class: "num" }, el("strong", { text: String(totalQ) })),
                el("td", { class: "num" }, el("strong", { text: totalMin + " min" })),
                el("td", null)
              )
            )
          )
        )
      ),

      el(
        "div",
        { class: "brief-card", style: "margin-top:18px" },
        el("div", { class: "section-label", text: "Test conditions" }),
        el(
          "ol",
          { class: "rule-list" },
          [
            "No calculator. The ASVAB does not allow one, and neither does this test. Every question here is solvable with pencil and paper.",
            "No notes, no phone, no searching. If you look something up, the score stops meaning anything.",
            "Each section has its own clock. When it hits zero the section submits itself and you move on — you cannot go back to a finished section.",
            "Within a section you can move freely between questions and flag ones to revisit. Flagging is the single most useful habit to build.",
            "Answer every question. The ASVAB does not penalise wrong answers, so a blank is strictly worse than a guess.",
            "Pencil and paper beside you before you start. Roughly " + totalMin + " minutes of uninterrupted time."
          ].map(function (t, i) {
            return el("li", null, el("span", { class: "n", text: String(i + 1).padStart(2, "0") }), el("span", { text: t }));
          })
        )
      ),

      el(
        "div",
        { class: "callout-note", style: "margin-top:18px" },
        el("strong", { text: "What the score estimate is and is not. " }),
        "At the end you get your raw section scores, the real AFQT formula applied to them, and a rough category band. That band is a study aid, not a prediction. This test is not the ASVAB and is not normed against the official reference sample, so its difficulty will not match the real exam. Only the actual ASVAB produces an official AFQT percentile."
      ),

      el(
        "div",
        { style: "margin-top:26px;display:flex;gap:12px;flex-wrap:wrap" },
        el("a", { class: "btn btn-amber", href: "#/diagnostic/run" }, "Begin the diagnostic", el("span", { class: "arrow", "aria-hidden": "true", text: " →" })),
        el("a", { class: "btn btn-ghost", href: "#/scoring" }, "How scoring works")
      )
    );
  }

  function viewDiagnosticRun() {
    var secs = diagnosticSections();
    if (!secs.length) return missing("diagnosticMath");

    var host = el("div", { class: "wrap" });
    setTimeout(function () {
      activeQuiz = DATA.quiz.run({
        container: host,
        mode: "test",
        title: "AFQT diagnostic test",
        passages: diagnosticPassages(),
        sections: secs,
        onExit: function () { go("#/diagnostic"); },
        onRestart: function () { route(); }
      });
    }, 0);
    return host;
  }

  /* =========================================================
     Scoring reference
     ========================================================= */

  function viewScoring() {
    return el(
      "div",
      { class: "wrap page" },
      crumbs([{ text: "Course", href: "#/" }, { text: "Scoring" }]),
      el("h1", { class: "h-page", style: "margin-bottom:10px", text: "How the AFQT is scored" }),
      el("p", { class: "lede", style: "margin-bottom:30px", text: "Ten subtests go in. One number comes out — a percentile from 1 to 99 that decides whether you can enlist, and a second set of line scores that decide which jobs you qualify for. This page covers the first number." }),

      el(
        "section",
        { class: "section-tight" },
        el("div", { class: "section-label", text: "The formula" }),
        el(
          "ul",
          { class: "formula" },
          META.afqt.formula.map(function (f) {
            return el("li", null, el("span", { class: "f-label", text: f.label }), el("span", { class: "f-text", text: f.text }));
          })
        ),
        el("p", { class: "tiny", style: "margin-top:12px", text: "Raw scores are simply counts of correct answers. The verbal doubling is the part most people miss: WK and PC are worth twice as much per question as AR or MK." })
      ),

      el(
        "section",
        { class: "section" },
        el("div", { class: "section-label", text: "AFQT categories" }),
        el(
          "div",
          { class: "tbl-wrap" },
          el(
            "table",
            { class: "data" },
            el("caption", { text: "Percentile ranges and what they generally mean" }),
            el(
              "thead",
              null,
              el("tr", null,
                el("th", { scope: "col", text: "Category" }),
                el("th", { scope: "col", text: "Percentile" }),
                el("th", { scope: "col", text: "What it means" })
              )
            ),
            el(
              "tbody",
              null,
              META.afqt.categories.map(function (c) {
                return el("tr", null,
                  el("td", { class: "cat", text: c.cat }),
                  el("td", { class: "num", text: c.range }),
                  el("td", { text: c.note })
                );
              })
            )
          )
        ),
        el("div", { class: "callout-note", style: "margin-top:18px" }, el("strong", { text: "Service minimums change. " }), META.afqt.categoryNote)
      ),

      el(
        "section",
        { class: "section" },
        el("div", { class: "section-label", text: "Air Force" }),
        el("h2", { class: "h-sec", style: "margin-bottom:16px", text: META.airForce.heading }),
        el(
          "div",
          { class: "tbl-wrap" },
          el(
            "table",
            { class: "data" },
            el("caption", { text: "Published minimum AFQT for enlisted Air Force accession" }),
            el(
              "thead",
              null,
              el("tr", null,
                el("th", { scope: "col", text: "Credential" }),
                el("th", { scope: "col", text: "Minimum AFQT" }),
                el("th", { scope: "col", text: "Note" })
              )
            ),
            el(
              "tbody",
              null,
              META.airForce.minimums.map(function (m) {
                return el("tr", null,
                  el("td", { text: m.credential }),
                  el("td", { class: "cat", text: m.afqt }),
                  el("td", { text: m.note })
                );
              })
            )
          )
        ),
        el("div", { class: "callout-note", style: "margin-top:18px" }, el("strong", { text: "Eligible is not the same as qualified. " }), META.airForce.mage),
        el("p", { class: "tiny", style: "margin-top:12px", text: META.airForce.verify })
      ),

      el(
        "section",
        { class: "section" },
        el("div", { class: "section-label", text: "Question counts and time limits" }),
        el(
          "div",
          { class: "tbl-wrap" },
          el(
            "table",
            { class: "data" },
            el("caption", { text: "The four AFQT subtests" }),
            el(
              "thead",
              null,
              el("tr", null,
                el("th", { scope: "col", text: "Subtest" }),
                el("th", { scope: "col", text: "CAT-ASVAB" }),
                el("th", { scope: "col", text: "Paper version" }),
                el("th", { scope: "col", text: "AFQT role" })
              )
            ),
            el(
              "tbody",
              null,
              META.subtests.map(function (s) {
                return el("tr", null,
                  el("td", null, el("strong", { text: s.code }), " — " + s.name),
                  el("td", { class: "num", text: s.catQuestions + " Qs / " + s.catMinutes + " min" }),
                  el("td", { class: "num", text: s.paperQuestions + " Qs / " + s.paperMinutes + " min" }),
                  el("td", { text: s.key === "wk" || s.key === "pc" ? "Doubled, via Verbal Expression" : "Counted once" })
                );
              })
            )
          )
        ),
        el("p", { class: "tiny", style: "margin-top:12px", text: META.timingNote })
      ),

      el(
        "section",
        { class: "section" },
        el("div", { class: "section-label", text: "About the estimate on this site" }),
        el("p", { class: "muted", style: "max-width:74ch", text: META.afqt.estimateMethod }),
        el("div", { style: "margin-top:22px;display:flex;gap:12px;flex-wrap:wrap" },
          el("a", { class: "btn", href: "#/diagnostic" }, "Take the diagnostic"),
          el("a", { class: "btn btn-ghost", href: "#/", text: "" }, "Back to the course")
        )
      ),

      el(
        "section",
        { class: "section" },
        el("div", { class: "section-label", text: "Scope" }),
        el("p", { class: "muted", style: "max-width:74ch", text: META.course.disclaimer })
      )
    );
  }

  /* =========================================================
     404
     ========================================================= */

  function viewNotFound(path) {
    return el(
      "div",
      { class: "wrap page" },
      el(
        "div",
        { class: "empty-state" },
        el("div", { class: "card-code", style: "justify-content:center", text: "Error 404" }),
        el("h2", { class: "h-sec", style: "margin-top:8px", text: "Nothing at that address" }),
        el("p", { class: "muted", text: "No page matches " + (path ? "#/" + path : "that route") + "." }),
        el("a", { class: "btn", href: "#/", style: "margin-top:14px", text: "Back to the course" })
      )
    );
  }

  /* =========================================================
     Boot
     ========================================================= */

  window.addEventListener("hashchange", route);
  document.addEventListener("DOMContentLoaded", function () {
    if (!location.hash) location.replace("#/");
    route();
  });
  if (document.readyState !== "loading") {
    if (!location.hash) location.replace("#/");
    route();
  }
})();
