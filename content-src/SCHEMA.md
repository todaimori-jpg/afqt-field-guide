# Content pack contract

You are authoring one content pack for an ASVAB prep website. Write **one file only**, to the exact path given in your brief. Do not create other files, do not edit anything else, do not run git or build commands.

## Output file shape

Plain browser JavaScript (loaded with a `<script>` tag, no modules, no imports). It must assign one global:

```js
window.ASVAB = window.ASVAB || {};
window.ASVAB.ar = {
  lessons: [ /* ... */ ],
  practice: { /* ... */ }
};
```

Use the exact key your brief names (`ar`, `mk`, `wk`, `pc`, `diagnosticMath`, `diagnosticVerbal`).

### Hard syntax rules

- Double-quoted JS strings. Escape any literal `"` inside prose as `\"`. Straight apostrophes (`'`) need no escaping inside double quotes — use them freely.
- No backtick template literals, no `${}`.
- The literal sequence `</script>` must never appear in a string.
- Valid UTF-8. Plain ASCII is safest; use `—`, `×`, `÷`, `½`, `²`, `√` directly where helpful.
- No trailing commas after the last element of an array/object.
- The file must parse with zero errors. Before finishing, verify it (see Verification).

## Data structures

### Lesson

```js
{
  id: "lowercase-kebab-slug",
  title: "Lesson Title",
  summary: "One sentence describing what the student will be able to do. Max 110 chars.",
  minutes: 12,
  blocks: [ /* ordered content blocks */ ]
}
```

### Block types

Only these seven. Rendered in array order.

```js
{ "type": "h",    "text": "Section heading" }
{ "type": "p",    "text": "One paragraph of prose. Keep under 500 characters." }
{ "type": "list", "ordered": false, "items": ["First item", "Second item"] }
{ "type": "key",  "label": "KEY RULE", "text": "The single most important takeaway. Short." }
{ "type": "tip",  "label": "TIP",      "text": "A test-day shortcut or trap to avoid. Short." }
{ "type": "warn", "label": "WATCH OUT", "text": "A common error students make. Short." }
{ "type": "example", "prompt": "The question or problem.",
                     "steps": ["Step 1 shown as work", "Step 2", "Step 3"],
                     "answer": "Final answer, stated plainly",
                     "note": "One sentence on why this method is the fast one. Optional — omit the key if empty." }
```

`label` on key/tip/warn must be the exact strings shown above.

Lesson shape guidance: 6 to 12 blocks. Open with an `h` + `p` that says what this lesson covers and why it scores points. Put at least **two `example` blocks** in every lesson. Close with a `key` or `tip`.

### Practice set

```js
{
  "title": "Arithmetic Reasoning Practice Set",
  "subtitle": "One line telling the student what to expect and roughly how long it should take.",
  "timeLimitMinutes": 30,
  "passages": [ { "id": "p1", "title": "Optional passage title", "text": "..." } ],
  "questions": [ /* ... */ ]
}
```

`passages` is only used for Paragraph Comprehension. For AR/MK/WK, include `"passages": []`.

### Question

```js
{
  "id": "ar-01",
  "passageId": "p1",            // only for PC; omit the key entirely for AR/MK/WK
  "prompt": "The question text.",
  "choices": ["Choice A text", "Choice B text", "Choice C text", "Choice D text"],
  "answer": 2,                   // ZERO-BASED index into choices
  "explain": "Two to four sentences: why the correct choice is right, and why the most tempting wrong choice is wrong."
}
```

- Exactly **four** choices, always. ASVAB is four-option multiple choice.
- `answer` must be 0, 1, 2 or 3 and must point at the genuinely correct choice.
- Vary the correct index across the set. Do not put more than three correct answers in a row at the same index, and do not let one index hold more than 40% of the set.
- Numeric choices must be plausible results of real mistakes (wrong operation, off-by-one, unit error) — not obviously wrong filler like "42" against answers near 3.
- List numeric choices in ascending order.

## Quality bar — this is the important part

**Every answer key must be correct.** Solve each question twice, independently, before you commit an answer index. A wrong answer key is the single worst failure mode for this project: a student who studies this and learns the wrong thing is worse off than a student who never opened it.

- Exactly one defensibly correct choice. If a reasonable person could argue two choices, rewrite the question.
- No question may require information not given.
- No trick wording, no double negatives used to confuse, no "all of the above"/"none of the above".
- Math: keep arithmetic clean enough to do by hand. The ASVAB forbids calculators — design every math question so it is solvable in 60–90 seconds with pencil and paper. Avoid answers that require a calculator to verify.
- Word Knowledge: synonyms must be true synonyms at the same register and intensity. If the target word is "frugal," the key must not be "cheap" (different connotation) when "thrifty" is available. Distractors should be real words with real, wrong meanings — including near-antonyms and same-root lookalikes, which is what the actual test does.
- Paragraph Comprehension: every correct answer must be **supportable from the passage text alone**. Never require outside knowledge. Distractors should be statements that are true in the real world but not stated or implied in the passage — again, what the real test does.
- Do not reuse a passage, a vocabulary word, a scenario, or a question between packs or within your own pack.
- Write at a level appropriate for US high-school students and enlistment candidates. Plain, direct prose. No academic throat-clearing.

## Voice

Second person where natural ("Set up the proportion..."), present tense, no filler. Every sentence should teach something or tell the student what to do. No marketing language, no exclamation marks, no emoji.

Do not mention the ASVAB's publisher, the US military's official scoring tables, or claim these questions are real released ASVAB items. They are original practice material in the style of the test.

## Verification (required before you finish)

Run this and confirm it prints `OK` with no errors:

```bash
cd "C:/Users/Internet10/Documents/Qoder/2026-10-22/22e6227d"
node -e "global.window={};require('./dist/data/FILE.js');const k=Object.keys(window.ASVAB)[0];const d=window.ASVAB[k];let n=0;for(const q of d.practice.questions){if(q.choices.length!==4)throw new Error('choices '+q.id);if(!(q.answer>=0&&q.answer<=3))throw new Error('answer '+q.id);if(!q.explain)throw new Error('explain '+q.id);if(q.passageId&&!d.practice.passages.some(p=>p.id===q.passageId))throw new Error('orphan '+q.id);n++}for(const l of d.lessons){if(!l.id||!l.title||!l.summary||!l.minutes)throw new Error('lesson meta '+l.id);if(l.blocks.filter(b=>b.type==='example').length<2)throw new Error('need 2 examples in '+l.id);for(const b of l.blocks){if(!b.type)throw new Error('block type '+l.id)}}console.log('OK',n,'questions',d.lessons.length,'lessons')"
```

Replace `FILE.js` with your actual filename. For diagnostic packs the questions live under `practice.questions` too — the same check applies.

Then report back, in under 150 words: the file path, lesson count, question count, and confirmation the check printed OK. Flag anything you were unsure about.
