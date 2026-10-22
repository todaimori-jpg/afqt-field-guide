/* Validates every content pack against the schema contract.
   Lives outside dist/ so it is never published. */
"use strict";

const path = require("path");
const ROOT = path.join(__dirname, "..", "dist", "data");
const errs = [];
const warn = [];
function bad(f, id, msg) { errs.push(`[${f}] ${id}: ${msg}`); }
function soft(f, id, msg) { warn.push(`[${f}] ${id}: ${msg}`); }

global.window = {};
const FILES = ["meta.js", "ar.js", "mk.js", "wk.js", "pc.js", "diagnostic-math.js", "diagnostic-verbal.js"];
const missingFiles = [];
for (const f of FILES) {
  const abs = path.join(ROOT, f);
  if (!require("fs").existsSync(abs)) { missingFiles.push(f); continue; }
  try { require(abs); }
  catch (e) { bad(f, "load", e.message); }
}

const D = global.window.ASVAB || {};
const BLOCK_TYPES = new Set(["h", "p", "list", "key", "tip", "warn", "example"]);
const LABELS = { key: "KEY RULE", tip: "TIP", warn: "WATCH OUT" };
const allIds = new Map();
const FILE_FOR = {
  ar: "ar.js", mk: "mk.js", wk: "wk.js", pc: "pc.js",
  diagnosticMath: "diagnostic-math.js", diagnosticVerbal: "diagnostic-verbal.js"
};
function notYetWritten(key) { return missingFiles.indexOf(FILE_FOR[key]) !== -1; }

function checkPack(key, opts) {
  const o = opts || {};
  const p = D[key];
  if (!p) {
    if (notYetWritten(key)) { soft(key, "pack", `skipped — ${FILE_FOR[key]} not written yet`); return null; }
    bad(key, "pack", "missing from window.ASVAB");
    return null;
  }

  // ---- lessons ----
  if (!Array.isArray(p.lessons)) { bad(key, "lessons", "not an array"); return p; }
  if (o.expectLessons && p.lessons.length !== o.expectLessons) {
    bad(key, "lessons", `expected ${o.expectLessons}, found ${p.lessons.length}`);
  }
  const lessonIds = new Set();
  p.lessons.forEach((l, li) => {
    const tag = l.id || `#${li}`;
    if (!l.id || !l.title || !l.summary) bad(key, tag, "missing id/title/summary");
    if (!Number.isFinite(l.minutes) || l.minutes < 1) bad(key, tag, "bad minutes");
    if (l.summary && l.summary.length > 150) soft(key, tag, `summary ${l.summary.length} chars`);
    if (lessonIds.has(l.id)) bad(key, tag, "duplicate lesson id");
    lessonIds.add(l.id);
    if (!Array.isArray(l.blocks) || !l.blocks.length) { bad(key, tag, "no blocks"); return; }

    let examples = 0;
    l.blocks.forEach((b, bi) => {
      const bt = `${tag}.blocks[${bi}]`;
      if (!BLOCK_TYPES.has(b.type)) { bad(key, bt, `unknown block type "${b.type}"`); return; }
      if (b.type === "h" || b.type === "p") {
        if (typeof b.text !== "string" || !b.text.trim()) bad(key, bt, "empty text");
        if (b.type === "p" && b.text && b.text.length > 1400) soft(key, bt, `paragraph ${b.text.length} chars`);
      }
      if (b.type === "list") {
        if (!Array.isArray(b.items) || b.items.length < 2) bad(key, bt, "list needs >=2 items");
        if (typeof b.ordered !== "boolean") soft(key, bt, "list.ordered not boolean");
        (b.items || []).forEach((it, ii) => {
          if (typeof it !== "string" || !it.trim()) bad(key, `${bt}.items[${ii}]`, "empty item");
        });
      }
      if (b.type === "key" || b.type === "tip" || b.type === "warn") {
        if (b.label !== LABELS[b.type]) bad(key, bt, `label must be exactly "${LABELS[b.type]}", got "${b.label}"`);
        if (typeof b.text !== "string" || !b.text.trim()) bad(key, bt, "empty text");
      }
      if (b.type === "example") {
        examples++;
        if (typeof b.prompt !== "string" || !b.prompt.trim()) bad(key, bt, "example needs prompt");
        if (!Array.isArray(b.steps) || b.steps.length < 2) bad(key, bt, "example needs >=2 steps");
        if (typeof b.answer !== "string" || !b.answer.trim()) bad(key, bt, "example needs answer string");
        if (b.note !== undefined && typeof b.note !== "string") bad(key, bt, "note must be a string");
        (b.steps || []).forEach((s, si) => {
          if (typeof s !== "string" || !s.trim()) bad(key, `${bt}.steps[${si}]`, "empty step");
        });
      }
    });
    if (examples < 2) bad(key, tag, `needs >=2 example blocks, has ${examples}`);
    if (l.blocks[0].type !== "h") soft(key, tag, "does not open with a heading block");
  });

  // ---- practice ----
  const pr = p.practice;
  if (!pr) { bad(key, "practice", "missing"); return p; }
  if (!pr.title || !pr.subtitle) bad(key, "practice", "missing title/subtitle");
  if (!Number.isFinite(pr.timeLimitMinutes)) soft(key, "practice", "no timeLimitMinutes");
  if (!Array.isArray(pr.passages)) bad(key, "practice", "passages must be an array");
  if (!Array.isArray(pr.questions)) { bad(key, "practice", "questions not an array"); return p; }

  if (o.expectQuestions && pr.questions.length !== o.expectQuestions) {
    bad(key, "practice", `expected ${o.expectQuestions} questions, found ${pr.questions.length}`);
  }

  const passageIds = new Set((pr.passages || []).map((x) => x.id));
  (pr.passages || []).forEach((pg) => {
    if (!pg.id || !pg.text) bad(key, `passage ${pg.id}`, "missing id/text");
    const words = String(pg.text || "").trim().split(/\s+/).length;
    if (words < 25) soft(key, `passage ${pg.id}`, `only ${words} words`);
  });

  const dist = [0, 0, 0, 0];
  let run = 0, lastIdx = -1, maxRun = 0;
  pr.questions.forEach((q, qi) => {
    const tag = q.id || `#${qi}`;
    if (!q.id) bad(key, tag, "missing id");
    if (allIds.has(q.id)) bad(key, tag, `duplicate question id (also in ${allIds.get(q.id)})`);
    allIds.set(q.id, key);

    if (!Array.isArray(q.choices) || q.choices.length !== 4) bad(key, tag, `needs exactly 4 choices, has ${(q.choices || []).length}`);
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) bad(key, tag, `answer must be 0-3, got ${q.answer}`);
    if (typeof q.explain !== "string" || q.explain.trim().length < 30) bad(key, tag, "explain missing or too short");
    if (typeof q.prompt !== "string" || !q.prompt.trim()) bad(key, tag, "empty prompt");

    (q.choices || []).forEach((c, ci) => {
      if (typeof c !== "string" || !c.trim()) bad(key, `${tag}.choices[${ci}]`, "empty choice");
    });
    if (new Set(q.choices || []).size !== (q.choices || []).length) bad(key, tag, "duplicate choice text");

    if (o.sections) {
      if (o.sections.indexOf(q.section) === -1) bad(key, tag, `bad section "${q.section}"`);
    } else if (q.section !== undefined) {
      soft(key, tag, "unexpected section field");
    }

    if (q.passageId) {
      if (!passageIds.has(q.passageId)) bad(key, tag, `orphan passageId "${q.passageId}"`);
    } else if (o.requiresPassage) {
      bad(key, tag, "PC question missing passageId");
    }

    if (Number.isInteger(q.answer)) {
      dist[q.answer]++;
      if (q.answer === lastIdx) { run++; maxRun = Math.max(maxRun, run); }
      else { lastIdx = q.answer; run = 1; }
    }
  });

  const n = pr.questions.length;
  if (n) {
    const maxShare = Math.max(...dist) / n;
    if (maxShare > 0.42) soft(key, "practice", `answer index skew: ${dist.join("/")} (max ${(maxShare * 100).toFixed(0)}%)`);
    if (maxRun > 3) soft(key, "practice", `longest run of same answer index: ${maxRun}`);
    if (dist.some((d) => d === 0)) soft(key, "practice", `an answer index is never correct: ${dist.join("/")}`);
  }
  return p;
}

console.log("=== content pack validation ===\n");

checkPack("ar", { expectLessons: 6, expectQuestions: 16 });
checkPack("mk", { expectLessons: 6, expectQuestions: 16 });
checkPack("wk", { expectLessons: 5, expectQuestions: 20 });
checkPack("pc", { expectLessons: 5, expectQuestions: 10, requiresPassage: true });
checkPack("diagnosticMath", { expectLessons: 0, expectQuestions: 32, sections: ["ar", "mk"] });
checkPack("diagnosticVerbal", { expectLessons: 0, expectQuestions: 27, sections: ["wk", "pc"] });

// diagnostic section counts must line up with the CAT-ASVAB figures in meta
const META = D.meta;
if (META) {
  const secs = {};
  ["diagnosticMath", "diagnosticVerbal"].forEach((k) => {
    const p = D[k];
    if (!p || !p.practice) return;
    p.practice.questions.forEach((q) => { secs[q.section] = (secs[q.section] || 0) + 1; });
  });
  META.subtests.forEach((s) => {
    const owner = s.key === "ar" || s.key === "mk" ? "diagnosticMath" : "diagnosticVerbal";
    if (notYetWritten(owner)) return;
    const got = secs[s.key] || 0;
    if (got !== s.catQuestions) {
      bad("diagnostic", s.code, `${got} questions but meta says CAT-ASVAB has ${s.catQuestions}`);
    }
  });
  // practice packs must not reuse diagnostic ids and should be non-empty
  META.subtests.forEach((s) => {
    const p = D[s.key];
    if (p && p.practice && !p.practice.questions.length) bad(s.key, "practice", "empty question set");
  });
} else bad("meta", "pack", "meta.js did not load");

// Real duplication checks: identical prompts, repeated WK target words, repeated passages.
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const seenPrompt = new Map();
["ar", "mk", "wk", "pc", "diagnosticMath", "diagnosticVerbal"].forEach((k) => {
  const p = D[k];
  if (!p || !p.practice) return;
  p.practice.questions.forEach((q) => {
    // PC stems legitimately repeat across different passages, so scope them to the passage.
    // Qualify with the pack key — both packs number their passages p1, p2, ...
    const n = norm((q.passageId ? k + ":" + q.passageId + " | " : "") + q.prompt);
    if (seenPrompt.has(n)) bad("dupes", q.id, `identical prompt to ${seenPrompt.get(n)}`);
    else seenPrompt.set(n, q.id);
  });
});

// A vocabulary word must not be tested twice, within a pack or across the WK practice
// set and the diagnostic. An in-context item capitalises its target twice, so dedupe first.
const seenWord = new Map();
["wk", "diagnosticVerbal"].forEach((k) => {
  const p = D[k];
  if (!p || !p.practice) return;
  p.practice.questions.forEach((q) => {
    const caps = Array.from(new Set(String(q.prompt).match(/\b[A-Z]{4,}\b/g) || []));
    caps.forEach((w) => {
      const key = w.toLowerCase().replace(/[^a-z]/g, "");
      if (seenWord.has(key)) bad("dupes", q.id, `vocab target "${w}" already tested by ${seenWord.get(key)}`);
      else seenWord.set(key, q.id);
    });
  });
});

// Passages must not be reused.
const seenPassage = new Map();
["pc", "diagnosticVerbal"].forEach((k) => {
  const p = D[k];
  if (!p || !p.practice || !Array.isArray(p.practice.passages)) return;
  p.practice.passages.forEach((pg) => {
    const n = norm(pg.text).slice(0, 220);
    if (seenPassage.has(n)) bad("dupes", pg.id, `passage resembles ${seenPassage.get(n)}`);
    else seenPassage.set(n, `${k}:${pg.id}`);
  });
});

let qTotal = 0, lTotal = 0;
["ar", "mk", "wk", "pc"].forEach((k) => {
  const p = D[k]; if (!p) return;
  lTotal += (p.lessons || []).length;
  qTotal += (p.practice ? p.practice.questions.length : 0);
});
const diagQ = ["diagnosticMath", "diagnosticVerbal"].reduce((a, k) => a + (D[k] && D[k].practice ? D[k].practice.questions.length : 0), 0);

console.log(`Packs loaded: ${Object.keys(D).filter((k) => k !== "ui" && k !== "quiz" && k !== "meta").length}`);
console.log(`Lessons: ${lTotal}   Practice questions: ${qTotal}   Diagnostic questions: ${diagQ}`);
console.log(`Unique question ids: ${allIds.size}\n`);

if (warn.length) {
  console.log(`--- ${warn.length} warnings ---`);
  warn.forEach((w) => console.log("  ! " + w));
  console.log();
}
if (errs.length) {
  console.log(`--- ${errs.length} ERRORS ---`);
  errs.forEach((e) => console.log("  X " + e));
  process.exit(1);
}
console.log("VALIDATION PASSED");
