window.ASVAB = window.ASVAB || {};

/**
 * Quiz / test engine. One component, two modes.
 *   practice — one question at a time, immediate feedback and explanation.
 *   test     — sectioned and timed, no feedback until the whole thing is submitted.
 */
window.ASVAB.quiz = (function () {
  "use strict";

  var ui = window.ASVAB.ui;
  var el = ui.el;

  /* AFQT band mapping. Deliberately coarse and disclosed in the UI:
     this practice test is not normed against the official reference sample. */
  var BANDS = [
    { min: 0.85, cat: "I – II", range: "65 – 99 percentile", label: "Scoring in the top third of test-takers." },
    { min: 0.7, cat: "II – IIIA", range: "50 – 92 percentile", label: "Comfortably above the enlistment baseline." },
    { min: 0.55, cat: "IIIA", range: "50 – 64 percentile", label: "Above the midpoint — the usual baseline for enlistment." },
    { min: 0.4, cat: "IIIB", range: "31 – 49 percentile", label: "Below the midpoint. Study the weakest section and retest." },
    { min: 0.25, cat: "IV", range: "10 – 30 percentile", label: "Needs substantial work before test day." },
    { min: -1, cat: "V", range: "1 – 9 percentile", label: "Start with the lessons before taking another practice test." }
  ];

  function bandFor(ratio) {
    for (var i = 0; i < BANDS.length; i++) if (ratio >= BANDS[i].min) return BANDS[i];
    return BANDS[BANDS.length - 1];
  }

  function run(config) {
    var container = config.container;
    var mode = config.mode === "test" ? "test" : "practice";
    var sections = config.sections || [];
    var passages = config.passages || {};
    var isTest = mode === "test";

    var state = {
      si: 0,
      qi: 0,
      responses: {},
      checked: {},
      flags: {},
      sectionElapsed: {},
      sectionSecondsLeft: {},
      finished: false
    };

    sections.forEach(function (sec) {
      state.sectionSecondsLeft[sec.id] = sec.timeLimitMinutes ? sec.timeLimitMinutes * 60 : null;
      state.sectionElapsed[sec.id] = 0;
    });

    var timerId = null;
    var root = el("div", { class: "quiz-shell" + (needsPassage() ? " is-wide" : "") });
    container.appendChild(root);

    function needsPassage() {
      return sections.some(function (s) {
        return s.questions.some(function (q) { return q.passageId; });
      });
    }

    function currentSection() { return sections[state.si]; }
    function currentQuestion() { return currentSection().questions[state.qi]; }
    function allQuestions() {
      return sections.reduce(function (acc, s) { return acc.concat(s.questions); }, []);
    }
    function totalAnswered() {
      return Object.keys(state.responses).filter(function (k) { return state.responses[k] !== null; }).length;
    }

    /* ---------------- timer ---------------- */

    function startTimer() {
      stopTimer();
      timerId = setInterval(tick, 1000);
    }
    function stopTimer() {
      if (timerId) { clearInterval(timerId); timerId = null; }
    }
    function tick() {
      var sec = currentSection();
      if (!sec || state.finished) return;
      state.sectionElapsed[sec.id] = (state.sectionElapsed[sec.id] || 0) + 1;
      var left = state.sectionSecondsLeft[sec.id];
      if (isTest && left !== null) {
        left -= 1;
        state.sectionSecondsLeft[sec.id] = left;
        if (left <= 0) {
          state.sectionSecondsLeft[sec.id] = 0;
          paintBar();
          advanceSection(true);
          return;
        }
      }
      paintBar();
    }

    /* ---------------- rendering ---------------- */

    var barNode, progressFill, countNode, timerNode, bodyNode;

    function paintBar() {
      var sec = currentSection();
      if (!sec || !barNode) return;
      var done = totalAnswered();
      var total = allQuestions().length;
      progressFill.style.width = ui.pct(done, total) + "%";
      countNode.textContent = done + " / " + total + " answered";

      var left = state.sectionSecondsLeft[sec.id];
      if (isTest && left !== null) {
        timerNode.hidden = false;
        timerNode.textContent = ui.clock(left);
        timerNode.classList.toggle("is-low", left <= 60);
        timerNode.setAttribute("aria-label", "Time left in this section: " + ui.clock(left));
      } else {
        timerNode.hidden = false;
        timerNode.textContent = ui.clock(state.sectionElapsed[sec.id] || 0);
        timerNode.classList.remove("is-low");
        timerNode.setAttribute("aria-label", "Time elapsed: " + ui.clock(state.sectionElapsed[sec.id] || 0));
      }
    }

    function render() {
      root.textContent = "";
      root.className = "quiz-shell" + (needsPassage() ? " is-wide" : "");

      barNode = el(
        "div",
        { class: "quiz-bar" },
        el("span", { class: "quiz-bar-title", text: isTest ? currentSection().label : config.title }),
        el("div", { class: "quiz-progress" }, el("div", { class: "quiz-progress-track" }, (progressFill = el("div", { class: "quiz-progress-fill", style: "width:0%" })))),
        (countNode = el("span", { class: "quiz-count", role: "status" })),
        (timerNode = el("div", { class: "timer", "aria-live": "off" }))
      );
      root.appendChild(barNode);

      bodyNode = el("div");
      root.appendChild(bodyNode);

      if (isTest) renderNavGrid();
      renderQuestion();
      paintBar();
    }

    var navGridNode = null;

    function renderNavGrid() {
      var sec = currentSection();
      var grid = el("div", { class: "quiz-nav-grid", "aria-label": "Jump to question" });
      sec.questions.forEach(function (q, i) {
        var cls = "qjump";
        if (state.responses[q.id] !== undefined && state.responses[q.id] !== null) cls += " is-answered";
        if (state.flags[q.id]) cls += " is-flagged";
        if (i === state.qi) cls += " is-current";
        grid.appendChild(
          el("button", {
            class: cls,
            type: "button",
            text: String(i + 1),
            "aria-label": "Question " + (i + 1) + (state.flags[q.id] ? ", flagged for review" : "") + (state.responses[q.id] != null ? ", answered" : ""),
            onclick: function () { state.qi = i; render(); }
          })
        );
      });

      if (navGridNode && navGridNode.isConnected) navGridNode.parentNode.replaceChild(grid, navGridNode);
      else bodyNode.appendChild(grid);
      navGridNode = grid;
    }

    function renderQuestion() {
      var sec = currentSection();
      var q = currentQuestion();
      var picked = state.responses[q.id];
      var revealed = isTest ? false : !!state.checked[q.id];

      if (q.passageId && passages[q.passageId]) {
        var p = passages[q.passageId];
        bodyNode.appendChild(
          el(
            "section",
            { class: "passage", "aria-label": "Reading passage" },
            p.title ? el("div", { class: "passage-title", text: p.title }) : null,
            el("div", { class: "passage-text" }, ui.paragraphs(p.text))
          )
        );
      }

      var tag = el(
        "div",
        { class: "q-tag" },
        el("span", { text: sec.label + " — question " + (state.qi + 1) + " of " + sec.questions.length }),
        isTest
          ? el("button", {
              class: "btn btn-ghost btn-sm",
              type: "button",
              style: "margin-left:auto",
              text: state.flags[q.id] ? "Flagged" : "Flag for review",
              "aria-pressed": state.flags[q.id] ? "true" : "false",
              onclick: function (ev) {
                state.flags[q.id] = !state.flags[q.id];
                ev.currentTarget.textContent = state.flags[q.id] ? "Flagged" : "Flag for review";
                ev.currentTarget.setAttribute("aria-pressed", state.flags[q.id] ? "true" : "false");
                renderNavGrid();
              }
            })
          : null
      );

      var group = el("div", {
        class: "choices",
        role: "radiogroup",
        "aria-label": "Answer choices",
        onKeydown: onChoiceKey
      });

      q.choices.forEach(function (choice, i) {
        var cls = "choice";
        if (revealed) {
          if (i === q.answer) cls += " is-correct";
          else if (i === picked) cls += " is-wrong";
          else cls += " is-dim";
        } else if (picked === i) {
          /* aria-checked carries the selected state */
        }

        group.appendChild(
          el(
            "button",
            {
              class: cls,
              type: "button",
              role: "radio",
              "aria-checked": picked === i ? "true" : "false",
              tabindex: picked === null || picked === undefined ? (i === 0 ? "0" : "-1") : (picked === i ? "0" : "-1"),
              disabled: revealed ? true : null,
              "data-index": i,
              onclick: function () { pick(i); }
            },
            el("span", { class: "letter", "aria-hidden": "true", text: ui.LETTERS[i] }),
            el("span", { text: choice })
          )
        );
      });

      var feedback = null;
      if (revealed) {
        var ok = picked === q.answer;
        feedback = el(
          "div",
          { class: "feedback", dataset: { ok: String(ok) }, role: "status" },
          el("div", { class: "feedback-verdict", text: picked === null ? "Skipped" : ok ? "Correct" : "Incorrect" }),
          el("div", { class: "feedback-explain", text: q.explain })
        );
      }

      bodyNode.appendChild(
        el("div", { class: "q-card" }, tag, el("div", { class: "q-prompt", text: q.prompt }), group, feedback)
      );

      renderActions(revealed, picked);
    }

    function check() {
      var q = currentQuestion();
      state.checked[q.id] = true;
      if (state.responses[q.id] === undefined) state.responses[q.id] = null;
      render();
    }

    function renderActions(revealed, picked) {
      var sec = currentSection();
      var lastInSection = state.qi === sec.questions.length - 1;
      var lastOverall = lastInSection && state.si === sections.length - 1;
      var hasPick = picked !== null && picked !== undefined;

      var left = el(
        "div",
        null,
        isTest
          ? el("button", {
              class: "btn btn-ghost",
              type: "button",
              disabled: state.qi === 0 ? true : null,
              onclick: function () { state.qi--; render(); }
            }, el("span", { class: "arrow", "aria-hidden": "true", text: "←" }), "Back")
          : el("button", {
              class: "btn btn-ghost",
              type: "button",
              onclick: function () { if (config.onExit) config.onExit(); }
            }, "Leave practice")
      );

      var right = el("div", { class: "quiz-actions-right" });

      if (!isTest) {
        if (!revealed) {
          right.appendChild(
            el("button", {
              class: "btn btn-ghost",
              type: "button",
              onclick: function () {
                state.responses[currentQuestion().id] = null;
                state.checked[currentQuestion().id] = true;
                render();
              }
            }, "Skip and reveal")
          );
          right.appendChild(
            el("button", {
              class: "btn",
              type: "button",
              disabled: hasPick ? null : true,
              onclick: check
            }, "Check answer")
          );
        } else {
          right.appendChild(
            el("button", {
              class: "btn",
              type: "button",
              onclick: function () {
                if (lastOverall) finish();
                else if (lastInSection) { state.si++; state.qi = 0; render(); }
                else { state.qi++; render(); }
              }
            }, lastOverall ? "See results" : el("span", null, "Next question", el("span", { class: "arrow", "aria-hidden": "true", text: " →" })))
          );
        }
      } else if (!lastInSection) {
        right.appendChild(
          el("button", {
            class: "btn",
            type: "button",
            onclick: function () { state.qi++; render(); }
          }, "Next", el("span", { class: "arrow", "aria-hidden": "true", text: "→" }))
        );
      } else {
        right.appendChild(
          el("button", {
            class: "btn btn-amber",
            type: "button",
            onclick: confirmSection
          }, lastOverall ? "Submit test" : "Submit section")
        );
      }

      bodyNode.appendChild(el("div", { class: "quiz-actions" }, left, right));
    }

    function onChoiceKey(ev) {
      var keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"];
      if (keys.indexOf(ev.key) === -1) return;
      ev.preventDefault();
      var buttons = Array.prototype.slice.call(ev.currentTarget.querySelectorAll(".choice"));
      if (!buttons.length) return;
      var at = buttons.indexOf(document.activeElement);
      if (at === -1) at = 0;
      var dir = ev.key === "ArrowDown" || ev.key === "ArrowRight" ? 1 : -1;
      var next = buttons[(at + dir + buttons.length) % buttons.length];
      buttons.forEach(function (b) { b.setAttribute("tabindex", "-1"); });
      next.setAttribute("tabindex", "0");
      next.focus();
      pick(Number(next.dataset.index));
    }

    function pick(i) {
      var q = currentQuestion();
      if (state.checked[q.id]) return;
      state.responses[q.id] = i;
      var group = root.querySelector(".choices");
      if (group) {
        Array.prototype.forEach.call(group.querySelectorAll(".choice"), function (b, bi) {
          b.setAttribute("aria-checked", bi === i ? "true" : "false");
          b.setAttribute("tabindex", bi === i ? "0" : "-1");
        });
      }
      if (isTest) renderNavGrid();
      else refreshPracticeButtons();
    }

    function refreshPracticeButtons() {
      var actions = root.querySelector(".quiz-actions");
      if (!actions) return;
      actions.remove();
      renderActions(false, state.responses[currentQuestion().id]);
    }

    function confirmSection() {
      var sec = currentSection();
      var unanswered = sec.questions.filter(function (q) {
        return state.responses[q.id] === undefined || state.responses[q.id] === null;
      }).length;
      var flagged = sec.questions.filter(function (q) { return state.flags[q.id]; }).length;
      var lastOverall = state.si === sections.length - 1;

      if (unanswered === 0 && flagged === 0) { advanceSection(false); return; }

      var msg = [];
      if (unanswered) msg.push(unanswered + " question" + (unanswered === 1 ? "" : "s") + " still unanswered");
      if (flagged) msg.push(flagged + " flagged for review");
      var ok = window.confirm(
        lastOverall
          ? "Submit the whole test? " + msg.join(" and ") + " in this section."
          : "Submit " + sec.label + "? " + msg.join(" and ") + "."
      );
      if (ok) advanceSection(false);
    }

    function advanceSection(auto) {
      if (state.si === sections.length - 1) { finish(auto); return; }
      state.si++;
      state.qi = 0;
      render();
    }

    /* ---------------- results ---------------- */

    function scoreSection(sec) {
      var correct = 0;
      sec.questions.forEach(function (q) {
        if (state.responses[q.id] === q.answer) correct++;
      });
      return correct;
    }

    function finish(auto) {
      stopTimer();
      state.finished = true;
      root.textContent = "";
      root.className = "quiz-shell is-wide";

      var results = sections.map(function (sec) {
        return {
          id: sec.id,
          label: sec.label,
          code: sec.code || sec.id.toUpperCase(),
          correct: scoreSection(sec),
          total: sec.questions.length,
          questions: sec.questions,
          seconds: state.sectionElapsed[sec.id] || 0
        };
      });

      var totalCorrect = results.reduce(function (a, r) { return a + r.correct; }, 0);
      var totalQ = results.reduce(function (a, r) { return a + r.total; }, 0);

      root.appendChild(renderSummary(results, totalCorrect, totalQ, auto));
      root.appendChild(renderAfqt(results));
      root.appendChild(renderReview(results));
      root.appendChild(
        el(
          "div",
          { class: "quiz-actions", style: "margin-top:30px" },
          el("button", { class: "btn btn-ghost", type: "button", onclick: function () { if (config.onExit) config.onExit(); } }, "Leave results"),
          el("div", { class: "quiz-actions-right" },
            el("button", { class: "btn", type: "button", onclick: function () { if (config.onRestart) config.onRestart(); } }, "Take this again")
          )
        )
      );
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function renderSummary(results, totalCorrect, totalQ, auto) {
      return el(
        "div",
        { class: "score-hero", style: "margin-top:22px" },
        el("div", { class: "section-label", text: config.title }),
        auto
          ? el("p", { class: "tiny", style: "color:var(--night-muted);margin-bottom:14px", text: "Time ran out on a section, so it was submitted automatically." })
          : null,
        el(
          "div",
          { class: "score-big" },
          el("span", { class: "score-num", text: String(totalCorrect) }),
          el("span", { class: "score-den", text: "/ " + totalQ + " correct" }),
          el("span", { class: "score-pct", text: ui.pct(totalCorrect, totalQ) + "%" })
        ),
        el(
          "div",
          { class: "sec-scores" },
          results.map(function (r) {
            return el(
              "div",
              { class: "sec-score" },
              el(
                "div",
                { class: "sec-score-top" },
                el("span", { class: "sec-score-name", text: r.code + " — " + r.label }),
                el("span", { class: "sec-score-val", text: r.correct + " / " + r.total + "  (" + ui.pct(r.correct, r.total) + "%)" })
              ),
              el("div", { class: "sec-score-bar" }, el("i", { style: "width:" + ui.pct(r.correct, r.total) + "%" }))
            );
          })
        )
      );
    }

    function renderAfqt(results) {
      var byId = {};
      results.forEach(function (r) { byId[r.id] = r; });
      if (!(byId.ar && byId.mk && byId.wk && byId.pc)) return el("div");

      var ve = byId.wk.correct + byId.pc.correct;
      var veMax = byId.wk.total + byId.pc.total;
      var raw = 2 * ve + byId.ar.correct + byId.mk.correct;
      var rawMax = 2 * veMax + byId.ar.total + byId.mk.total;
      var ratio = raw / rawMax;
      var band = bandFor(ratio);
      var meta = window.ASVAB.meta;

      function row(k, v, isTotal) {
        return el("div", { class: "afqt-row" + (isTotal ? " is-total" : "") }, el("span", { class: "k", text: k }), el("span", { class: "v", text: v }));
      }

      return el(
        "div",
        { class: "afqt-box" },
        el("div", { class: "section-label", text: "AFQT estimate" }),
        el(
          "div",
          { class: "afqt-calc" },
          row("Verbal Expression  (WK " + byId.wk.correct + " + PC " + byId.pc.correct + ")", ve + " / " + veMax),
          row("2 × Verbal Expression", 2 * ve + " / " + 2 * veMax),
          row("Arithmetic Reasoning", byId.ar.correct + " / " + byId.ar.total),
          row("Mathematics Knowledge", byId.mk.correct + " / " + byId.mk.total),
          row("AFQT raw composite", raw + " / " + rawMax + "   (" + ui.pct(raw, rawMax) + "% of maximum)", true)
        ),
        el(
          "div",
          { class: "band-chip" },
          el("span", { class: "cat", text: "Category " + band.cat }),
          el("span", { text: band.range + " — " + band.label })
        ),
        el("p", { class: "tiny", style: "margin-top:16px;max-width:78ch", text: meta.afqt.estimateMethod })
      );
    }

    function renderReview(results) {
      var items = [];
      results.forEach(function (r) {
        r.questions.forEach(function (q) { items.push({ q: q, sec: r }); });
      });

      var listNode = el("div", { class: "review-list" });
      var filter = "all";

      function paint() {
        listNode.textContent = "";
        items.forEach(function (item) {
          var q = item.q;
          var picked = state.responses[q.id];
          var isCorrect = picked === q.answer;
          var isSkip = picked === null || picked === undefined;
          if (filter === "missed" && isCorrect) return;
          if (filter === "flagged" && !state.flags[q.id]) return;
          listNode.appendChild(reviewItem(q, item.sec, picked, isCorrect, isSkip));
        });
        if (!listNode.childNodes.length) {
          listNode.appendChild(
            el("p", { class: "tiny", style: "padding:14px 4px", text: filter === "missed" ? "Nothing missed in this filter. Every question was correct." : "No questions match this filter." })
          );
        }
      }

      function chip(label, value) {
        return el("button", {
          class: "chip",
          type: "button",
          text: label,
          "aria-pressed": filter === value ? "true" : "false",
          onclick: function (ev) {
            filter = value;
            Array.prototype.forEach.call(ev.currentTarget.parentNode.querySelectorAll(".chip"), function (c) {
              c.setAttribute("aria-pressed", String(c === ev.currentTarget));
            });
            paint();
          }
        });
      }

      var missed = items.filter(function (i) { return state.responses[i.q.id] !== i.q.answer; }).length;
      var flagged = items.filter(function (i) { return state.flags[i.q.id]; }).length;

      paint();

      return el(
        "div",
        { style: "margin-top:38px" },
        el("div", { class: "section-label", text: "Answer review" }),
        el(
          "div",
          { class: "review-filters" },
          chip("All (" + items.length + ")", "all"),
          chip("Missed (" + missed + ")", "missed"),
          chip("Flagged (" + flagged + ")", "flagged")
        ),
        listNode
      );
    }

    function reviewItem(q, sec, picked, isCorrect, isSkip) {
      var cls = "review-item " + (isSkip ? "is-skip" : isCorrect ? "is-correct" : "is-wrong");
      var passage = q.passageId && passages[q.passageId] ? passages[q.passageId] : null;

      return el(
        "article",
        { class: cls },
        el(
          "div",
          { class: "review-head" },
          el("span", { class: "review-tag sec", text: sec.code }),
          isSkip
            ? el("span", { class: "review-tag skip", text: "Not answered" })
            : el("span", { class: "review-tag " + (isCorrect ? "ok" : "bad"), text: isCorrect ? "Correct" : "Incorrect" }),
          state.flags[q.id] ? el("span", { class: "review-tag skip", text: "Flagged" }) : null
        ),
        passage ? el("div", { class: "review-passage", text: passage.text }) : null,
        el("div", { class: "review-prompt", text: q.prompt }),
        el(
          "ul",
          { class: "review-choices" },
          q.choices.map(function (choice, i) {
            var liCls = "";
            var mark = "";
            if (i === q.answer) { liCls = "correct"; mark = "Correct answer"; }
            else if (i === picked) { liCls = "picked-wrong"; mark = "Your answer"; }
            return el(
              "li",
              { class: liCls },
              el("span", { class: "L", "aria-hidden": "true", text: ui.LETTERS[i] }),
              el("span", { text: choice }),
              mark ? el("span", { class: "mark", text: mark }) : null
            );
          })
        ),
        el("div", { class: "review-explain" }, el("b", { text: "Why: " }), q.explain)
      );
    }

    /* ---------------- lifecycle ---------------- */

    render();
    startTimer();

    return {
      destroy: function () {
        stopTimer();
        state.finished = true;
        if (root.parentNode) root.parentNode.removeChild(root);
      }
    };
  }

  return { run: run, bandFor: bandFor };
})();
