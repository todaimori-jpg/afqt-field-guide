window.ASVAB = window.ASVAB || {};
window.ASVAB.wk = {
  lessons: [
    {
      id: "how-wk-works",
      title: "How Word Knowledge Works and the 30-Second Routine",
      summary: "Run a four-step routine on every question and never stare at the choices without an answer in mind.",
      minutes: 6,
      blocks: [
        { type: "h", text: "What Word Knowledge asks" },
        { type: "p", text: "Word Knowledge gives you about 16 questions in roughly 8 minutes, close to 30 seconds each. Two formats appear: a straight synonym item that asks which word is closest in meaning to a target word, and a vocabulary-in-context item that asks what a capitalized word means inside a sentence. There is no time to reason at length, so you need a routine you can run on autopilot." },
        { type: "h", text: "The 30-second routine" },
        { type: "list", ordered: true, items: [
          "Step 1 — Read the target word slowly, all the way through. Misreading the first three letters is the cheapest way to miss an easy point.",
          "Step 2 — Predict your own answer before you look at the choices. Think of a simple word or short phrase: for ABANDON, think leave or give up on.",
          "Step 3 — Match your prediction to the choices and pick the one that sits in the same meaning neighborhood.",
          "Step 4 — If nothing matches your prediction, cross out the two choices you know are wrong and judge the remaining two."
        ] },
        { type: "p", text: "Step 2 is the one students skip, and it costs the most points. The wrong choices are written to look plausible once you see them; a word that seemed to fit on second glance pulls you in. A prediction you formed before looking is immune to that pull, because you are matching two ideas instead of testing four strangers." },
        { type: "example", prompt: "Select the word closest in meaning to: ABRIDGE. Choices: shorten, widen, delay, approve.", steps: [
          "Read the target: ABRIDGE.",
          "Before looking down the list, predict: shorten or cut down.",
          "Scan the choices for shorten and find it in the first position.",
          "Confirm nothing else is close: widen, delay and approve are unrelated or opposite."
        ], answer: "shorten", note: "The prediction did the work; the choices only had to confirm it." },
        { type: "example", prompt: "Select the word closest in meaning to: BENEVOLENT, a word you do not recognize. Choices: hostile, kindly, clumsy, wealthy.", steps: [
          "Split the word: bene- is the prefix meaning good or well, as in benefit and beneficial.",
          "The ending -ent marks an adjective, so the word describes something or someone.",
          "Assemble a rough meaning: wishing or doing good, with a positive charge.",
          "Match: kindly fits; hostile is the opposite; clumsy and wealthy are off topic."
        ], answer: "kindly", note: "Word parts plus connotation rescue you when memory does not." },
        { type: "p", text: "When you have never seen the word, do not guess blind. Break it into parts you recognize, note whether it feels positive or negative, and for a sentence item lean on the surrounding words. A guess made this way wins far more often than a coin flip." },
        { type: "tip", label: "TIP", text: "Give each item about 40 seconds at most. If you have no answer by then, commit to your best elimination and move on. Every question is worth the same, and easier items may be waiting." },
        { type: "key", label: "KEY RULE", text: "Predict before you peek. An answer formed before you see the choices cannot be talked out of you." }
      ]
    },
    {
      id: "word-parts",
      title: "Prefixes, Suffixes and Roots",
      summary: "Decode unfamiliar words by splitting them into prefix, root and suffix instead of guessing blind.",
      minutes: 12,
      blocks: [
        { type: "h", text: "Reverse-engineer the word" },
        { type: "p", text: "Most tested vocabulary is built from Latin and Greek parts. A prefix adjusts the meaning, a root carries the core idea, and a suffix tells you the part of speech. Learn the parts once and you can decode hundreds of words you have never seen. This is the highest-value lesson on the subtest." },
        { type: "h", text: "Common prefixes" },
        { type: "list", ordered: false, items: [
          "ab- — away from, off: abstain (hold away from), abduct (lead away)",
          "ad- — to, toward: adhere (stick to), advance",
          "anti- — against: antiwar, antidote",
          "bene- — good, well: benefit, benevolent",
          "bi- — two: bicycle, biannual",
          "contra- — against, opposite: contradict, contrast",
          "de- — down, away, remove: descend, defuse",
          "dis- — not, apart, opposite: disperse, disagree",
          "en- / em- — put into, cause to be: enable, empower",
          "ex- — out of, former: export, ex-champion",
          "in- / im- / il- / ir- — not: inactive, immature, illegal, irregular (but sometimes in or into: inscribe)",
          "inter- — between, among: interrupt, interstate",
          "mal- — bad, wrongly: malfunction, malnourished",
          "mis- — wrongly: misjudge, misplace",
          "post- — after: postpone, postwar",
          "pre- — before: predict, prevent",
          "re- — again, back: return, recall",
          "sub- — under, below: subway, subordinate",
          "super- — above, beyond: supervise, superhuman",
          "trans- — across, beyond: transport, transmit",
          "un- — not, reversal: unfair, undo"
        ] },
        { type: "h", text: "Common roots" },
        { type: "list", ordered: false, items: [
          "aud — hear: audible, audience",
          "bio — life: biology, biography",
          "chron — time: chronology, chronic",
          "dict — say, speak: dictate, predict",
          "fer — carry, bring: transfer, refer",
          "ject — throw: eject, reject",
          "man / manu — hand: manual, manufacture",
          "mit / miss — send: transmit, mission",
          "port — carry: transport, portable",
          "rupt — break, burst: rupture, interrupt",
          "scrib / script — write: scribble, manuscript",
          "sect — cut: dissect, section",
          "spec / spect — look, see: inspect, spectator",
          "greg — flock, group: gregarious, segregate",
          "cred — believe: credible, credit",
          "struct — build: construct, structure",
          "tract — pull, draw: attract, tractor",
          "vid / vis — see: visible, vision",
          "voc — voice, call: vocal, advocate"
        ] },
        { type: "h", text: "Common suffixes and what they signal" },
        { type: "list", ordered: false, items: [
          "-able / -ible — able to be (adjective): readable, visible",
          "-al — relating to (adjective): legal, natural",
          "-ance / -ence — state or quality (noun): silence, independence",
          "-ful — full of (adjective): careful, hopeful",
          "-ic — relating to, like (adjective): heroic, rustic",
          "-ion / -tion / -ation — act or result (noun): action, celebration",
          "-ive — tending toward, having the nature of (adjective): active, creative",
          "-less — without (adjective): hopeless, fearless",
          "-ly — in the manner of (adverb, sometimes adjective): quickly, friendly",
          "-ment — result or means (noun): movement, argument",
          "-ness — state or quality (noun): kindness, darkness",
          "-ous / -eous / -ious — full of, having (adjective): famous, mysterious",
          "-y — marked by, like (adjective): rainy, sticky"
        ] },
        { type: "p", text: "Run a decode in three moves: strip the suffix to learn the part of speech, split the prefix from the root, then assemble a rough meaning and sanity-check it against the sentence if there is one. You do not need a perfect definition, only enough to match a choice." },
        { type: "example", prompt: "Select the word closest in meaning to: TRANSCRIBE. Choices: erase, copy in writing, translate aloud, interrupt.", steps: [
          "Spot the prefix trans- meaning across or over.",
          "Spot the root scrib meaning write, as in scribble and manuscript.",
          "Assemble: to write across, that is, to write something over into another form.",
          "Match: copy in writing fits; the others point to erasing, speaking or breaking in."
        ], answer: "copy in writing", note: "Two recognized parts carry the whole word." },
        { type: "example", prompt: "The negotiator faced an INTRACTABLE dispute that had resisted every previous attempt at settlement. Intractable most nearly means. Choices: stubborn, simple, popular, brief.", steps: [
          "Strip the suffix -able: an adjective meaning able to be or tending to be.",
          "Find the prefix in-: here it means not, as in inactive.",
          "Find the root tract meaning pull or draw, as in tractor and attract.",
          "Assemble: not able to be pulled or managed. The sentence agrees, since the dispute resisted every attempt. Match: stubborn."
        ], answer: "stubborn", note: "The sentence backs the decode, which is exactly how to use context and word parts together." },
        { type: "key", label: "KEY RULE", text: "Split unfamiliar words into parts you know. A word you cannot define is often a word you can decode." }
      ]
    },
    {
      id: "connotation-intensity",
      title: "Connotation and Intensity",
      summary: "Break ties between two choices that both look right by comparing charge (positive or negative) and strength.",
      minutes: 8,
      blocks: [
        { type: "h", text: "Two words, one dictionary entry" },
        { type: "p", text: "Synonyms share a core meaning but differ in charge, positive or negative, and in strength, mild or strong. The test exploits that gap: two choices will both sit in the right topic, and only one matches the target in charge and intensity. When your prediction matches two choices, charge and strength are the tie-breakers." },
        { type: "h", text: "Contrast pairs with the same topic, opposite charge" },
        { type: "list", ordered: false, items: [
          "frugal / thrifty (positive: smart with money) vs stingy / miserly (negative: unwilling to spend or share)",
          "confident (positive: assured) vs arrogant (negative: superior and boastful)",
          "curious (positive: eager to learn) vs nosy (negative: prying into other people's business)",
          "slender (positive: gracefully thin) vs scrawny (negative: unhealthily thin)",
          "persistent (positive: keeps trying) vs stubborn (negative: refuses to move even when wrong)",
          "youthful (positive: energetic for one's age) vs childish (negative: immature)"
        ] },
        { type: "p", text: "Read the target for its charge before you touch the choices. If the target is negative, the pleasant-sounding choice is a decoy; if the target is neutral or positive, the harsh choice is the decoy. Then check strength: a mild target needs a mild match." },
        { type: "h", text: "Intensity ladders, mild to strong" },
        { type: "list", ordered: false, items: [
          "anger: displeased, then irate, then livid",
          "dislike: dislike, then despise, then loathe",
          "size: large, then immense, then colossal",
          "strangeness: odd, then peculiar, then bizarre",
          "praise: approve, then applaud, then exalt"
        ] },
        { type: "example", prompt: "Select the word closest in meaning to: STINGY. Choices: frugal, miserly, generous, tidy.", steps: [
          "Define: stingy means unwilling to give or spend, said with disapproval. The charge is negative.",
          "Frugal is a money word too, but its charge is positive, smart spending, so it is the decoy.",
          "Generous is the near opposite and tidy is off topic.",
          "Miserly matches both the meaning and the negative charge."
        ], answer: "miserly", note: "The charge check removes the decoy in seconds." },
        { type: "example", prompt: "Select the word closest in meaning to: FURIOUS. Choices: annoyed, livid, displeased, uneasy.", steps: [
          "Define: furious means extremely angry, a strong word.",
          "Displeased and annoyed are real anger words but sit low on the intensity ladder.",
          "Uneasy means worried, a different emotion entirely.",
          "Livid sits at the top of the anger ladder, matching furious in strength."
        ], answer: "livid", note: "When every choice is in the right topic, match intensity instead." },
        { type: "warn", label: "WATCH OUT", text: "Never pick a choice for being in the same topic. Wealthy is a money word, but it is the opposite of stingy. A topic match without a meaning match scores zero." },
        { type: "key", label: "KEY RULE", text: "When two choices both look right, compare charge and strength. The closest synonym matches both." }
      ]
    },
    {
      id: "context-clues",
      title: "Vocabulary in Context",
      summary: "Recover a word's meaning from the sentence using four clue types, and expect secondary meanings on test day.",
      minutes: 8,
      blocks: [
        { type: "h", text: "Four clues hiding in the sentence" },
        { type: "p", text: "A context item hands you the definition in disguise. Writers signal a word's meaning in four ways: they restate it, contrast it, illustrate it, or build it into the logic of the sentence. Spot the signal and the answer becomes fast and safe." },
        { type: "list", ordered: false, items: [
          "Definition or restatement: the meaning sits after a comma, a dash, or the words that is and or.",
          "Contrast: although, but, however, unlike and despite signal that the target word means the opposite of the nearby idea.",
          "Example: listed instances reveal the category the word names.",
          "General sense: no signal word appears, so substitute each choice into the sentence and keep the one that preserves the logic."
        ] },
        { type: "example", prompt: "The committee's final report was VAGUE, that is, it stated no clear position anyone could act on. As used in the sentence, VAGUE most nearly means. Choices: hasty, unclear, lengthy, stern.", steps: [
          "Spot the signal: that is announces a restatement.",
          "Read the restatement: no clear position anyone could act on.",
          "Predict: unclear or indefinite.",
          "Match: unclear. Lengthy is about duration and stern is about tone, not clarity."
        ], answer: "unclear", note: "Restatement clues give the definition outright." },
        { type: "example", prompt: "Unlike her TACITURN brother, Rena talked with everyone at the party. As used in the sentence, TACITURN most nearly means. Choices: reserved, outgoing, clumsy, witty.", steps: [
          "Spot the signal: unlike sets up an opposition between brother and sister.",
          "The sister talked with everyone, so the brother is described as the opposite.",
          "Predict: quiet or uncommunicative.",
          "Match: reserved. Outgoing would describe Rena, not her brother."
        ], answer: "reserved", note: "Contrast clues let you define a word from its opposite." },
        { type: "example", prompt: "Conditions in the desert are ARID: the ground is cracked, the creeks run dry, and even cacti struggle. As used in the sentence, ARID most nearly means. Choices: humid, parched, dusty, fertile.", steps: [
          "Spot the signal: the colon introduces examples.",
          "The examples all point to one condition: extreme dryness.",
          "Predict: dry.",
          "Match: parched. Dusty is about dust on surfaces, and humid and fertile point the opposite way."
        ], answer: "parched", note: "Examples reveal the category; here, dryness." },
        { type: "example", prompt: "The manager tried to EXPEDITE the shipment so it would arrive before the holiday rush. As used in the sentence, EXPEDITE most nearly means. Choices: delay, inspect, speed up, pay for.", steps: [
          "No signal word appears, so substitute each choice into the sentence.",
          "Delay fails: trying to delay the shipment contradicts arriving before the rush.",
          "Inspect and pay for fit the grammar but do nothing to serve the purpose.",
          "Speed up preserves the logic of beating the rush."
        ], answer: "speed up", note: "Substitution is the fallback when no explicit clue exists." },
        { type: "warn", label: "WATCH OUT", text: "The tested word often carries a secondary meaning, not its most common one. Wanting can mean lacking, appreciate can mean rise in value, and qualify can mean limit. Trust the sentence over your first instinct." },
        { type: "key", label: "KEY RULE", text: "Find the clue, predict, then match. If no clue exists, substitute each choice and keep the one that keeps the sentence true." }
      ]
    },
    {
      id: "high-frequency-words",
      title: "High-Frequency Words Worth Memorizing",
      summary: "Memorize a 44-word bank grouped by theme, drilled in short sessions until recall is automatic.",
      minutes: 10,
      blocks: [
        { type: "h", text: "Build your recall bank" },
        { type: "p", text: "Word Knowledge is the subtest most improved by memorization. The words below recur across vocabulary tests of this kind, grouped by theme so related words reinforce one another. Treat each group as a deck of flashcards: word on the front, meaning on the back." },
        { type: "list", ordered: false, items: [
          "affable — friendly, easy to talk to",
          "apathetic — showing no interest or concern",
          "arrogant — overly proud and self-important",
          "astute — sharp-minded, quick to notice what others miss",
          "diligent — hardworking and careful",
          "gregarious — sociable, drawn to company",
          "humble — modest, not boastful",
          "indignant — angry about something unfair",
          "obstinate — stubborn, refusing to change",
          "reserved — quiet, keeping thoughts to oneself"
        ] },
        { type: "list", ordered: false, items: [
          "abundant — plentiful, more than enough",
          "concise — short and to the point",
          "exhaustive — complete, covering every detail",
          "immense — extremely large",
          "inadequate — not enough for the purpose",
          "negligible — so small it hardly matters",
          "surplus — an amount left over beyond what is needed",
          "tentative — not final, subject to change",
          "unprecedented — never having happened before",
          "viable — able to work or succeed"
        ] },
        { type: "list", ordered: false, items: [
          "coerce — force someone to act through pressure or threats",
          "curb — to hold back or restrain",
          "exacerbate — to make a problem worse",
          "impede — to slow the progress of",
          "instigate — to stir up or set off, usually something bad",
          "nullify — to cancel out or make void",
          "perpetuate — to keep something going over time",
          "revoke — to take back officially, cancel",
          "subside — to become less intense, die down",
          "suppress — to put down or hold back by force",
          "transform — to change completely in form or character",
          "withdraw — to pull back or remove"
        ] },
        { type: "list", ordered: false, items: [
          "conspicuous — easily seen, standing out",
          "credible — believable, worthy of trust",
          "eloquent — fluent and persuasive in speech",
          "frugal — careful with money, sparing",
          "impetuous — acting quickly without thinking",
          "lucid — clear and easy to understand",
          "novice — a beginner, someone new to a field",
          "obsolete — outdated, no longer in use",
          "pragmatic — practical, focused on what works",
          "resilient — able to recover quickly from difficulty",
          "scrutinize — to examine closely and critically",
          "vindicate — to clear of blame or prove right"
        ] },
        { type: "example", prompt: "Drill check, front to back: what does GREGARIOUS mean?", steps: [
          "Recall the root greg, meaning flock or group, from the word-parts lesson.",
          "Gregarious describes someone drawn to the group.",
          "State the meaning, then self-check against the list."
        ], answer: "sociable, drawn to company", note: "Hooking a list word to a root makes it stick." },
        { type: "example", prompt: "Drill check, back to front: which study word means able to recover quickly from a setback?", steps: [
          "Scan the quality and manner group for a match.",
          "Resilient fits: it describes something that springs back.",
          "Confirm by using it: a resilient team bounces back after a loss."
        ], answer: "resilient", note: "Testing meaning to word is the harder direction and locks in recall." },
        { type: "tip", label: "TIP", text: "Drill 10 to 12 words per short session, once in the morning and once at night. Shuffle the four groups across days and retest yesterday's words first. Several short sessions beat one long cram, because recall strengthens every time you retrieve a word from memory." }
      ]
    }
  ],
  practice: {
    title: "Word Knowledge Practice Set",
    subtitle: "Twenty synonym and vocabulary-in-context items in the style of the Word Knowledge subtest. Budget about 8 minutes, roughly 24 seconds per question.",
    timeLimitMinutes: 8,
    passages: [],
    questions: [
      {
        id: "wk-01",
        prompt: "Select the word closest in meaning to: ABSTAIN",
        choices: ["refrain", "indulge", "detain", "retain"],
        answer: 0,
        explain: "ABSTAIN means to choose not to do or take something, holding yourself back from it. Refrain matches that meaning exactly. The strongest trap is retain, which shares the -tain root but means to keep possession of something, nearly the opposite of giving something up. Indulge is the near opposite, and detain means to hold someone in custody."
      },
      {
        id: "wk-02",
        prompt: "Select the word closest in meaning to: CANDID",
        choices: ["timid", "frank", "sly", "informal"],
        answer: 1,
        explain: "CANDID means open, honest and straightforward in speech. Frank is the closest match in meaning and tone. The trap is informal, which connects to the phrase a candid photo but means relaxed or casual, not honest. Sly is close to the opposite, and timid means shy."
      },
      {
        id: "wk-03",
        prompt: "Select the word closest in meaning to: FEASIBLE",
        choices: ["impossible", "flexible", "workable", "generous"],
        answer: 2,
        explain: "FEASIBLE means able to be done or carried out successfully. Workable matches it directly. The trap is flexible, which shares the general idea of adaptability but means able to bend rather than able to be done. Impossible is the near opposite, and generous is unrelated to difficulty."
      },
      {
        id: "wk-04",
        prompt: "Select the word closest in meaning to: FUTILE",
        choices: ["potent", "hasty", "fertile", "pointless"],
        answer: 3,
        explain: "FUTILE means producing no useful result and having no chance of succeeding. Pointless matches it. The trap is fertile, which partly echoes the sound of futile but means nearly the opposite, able to produce abundantly. Potent means powerful or effective, and hasty means done too quickly."
      },
      {
        id: "wk-05",
        prompt: "Select the word closest in meaning to: IMPARTIAL",
        choices: ["unbiased", "partial", "unequal", "urgent"],
        answer: 0,
        explain: "IMPARTIAL means treating every side equally, without favoritism. Unbiased matches it. The trap is partial, which shares the same root but carries the opposite meaning, favoring one side. Unequal stays in the fairness topic but means not the same in size or amount, and urgent means needing immediate attention."
      },
      {
        id: "wk-06",
        prompt: "Select the word closest in meaning to: METICULOUS",
        choices: ["careless", "painstaking", "fussy", "slow"],
        answer: 1,
        explain: "METICULOUS means showing extremely careful attention to detail. Painstaking matches it. The trap is fussy, which also involves small details but describes someone hard to please about trivia, a temperament rather than careful work. Careless is the opposite, and slow describes pace, not care."
      },
      {
        id: "wk-07",
        prompt: "Select the word closest in meaning to: PREVALENT",
        choices: ["rare", "urgent", "widespread", "punctual"],
        answer: 2,
        explain: "PREVALENT means commonly found or widespread in a place or group. Widespread matches it. The trap is punctual, which belongs to the same time-and-habit territory but means arriving exactly on time. Rare is the near opposite, and urgent means pressing."
      },
      {
        id: "wk-08",
        prompt: "Select the word closest in meaning to: SUPERFICIAL",
        choices: ["thorough", "supreme", "sincere", "shallow"],
        answer: 3,
        explain: "SUPERFICIAL means concerned only with the surface and not going deep. Shallow matches it. The trap is supreme, which looks like the super- root but means greatest or highest in rank. Thorough is the near opposite, and sincere describes honesty rather than depth."
      },
      {
        id: "wk-09",
        prompt: "Select the word closest in meaning to: TEDIOUS",
        choices: ["tiresome", "exciting", "lengthy", "gentle"],
        answer: 0,
        explain: "TEDIOUS means boring and dull, usually because it drags on. Tiresome matches it. The trap is lengthy, which captures the feeling tedious produces, long-lasting, but means only that something is long. Exciting is the opposite, and gentle means mild."
      },
      {
        id: "wk-10",
        prompt: "Select the word closest in meaning to: VERSATILE",
        choices: ["rigid", "adaptable", "mobile", "limited"],
        answer: 1,
        explain: "VERSATILE means able to do many different things well or serve many purposes. Adaptable matches it. The trap is mobile, which shares the idea of movement but means physically able to move rather than broadly capable. Rigid is a near opposite, and limited also points the other way."
      },
      {
        id: "wk-11",
        prompt: "At the public meeting, several residents ADVOCATED a new bus route, urging the council to approve it. As used in the sentence, ADVOCATED most nearly means",
        choices: ["opposed", "ignored", "supported", "regulated"],
        answer: 2,
        explain: "To advocate something is to publicly support or argue in favor of it. The residents urge approval, so supported is correct. The trap is regulated, which fits the civic setting but means to control by rules, not to back a proposal. Opposed is the near opposite, and ignored contradicts their speaking up."
      },
      {
        id: "wk-12",
        prompt: "Because the instructions were AMBIGUOUS, half the class began on question ten while the other half began on question one. As used in the sentence, AMBIGUOUS most nearly means",
        choices: ["precise", "optional", "lengthy", "unclear"],
        answer: 3,
        explain: "Ambiguous means open to more than one interpretation. The class split into two readings, so unclear is correct. The trap is optional, which connects ambiguity to choice, but the problem here is confusion about meaning, not freedom to pick. Precise is the near opposite, and lengthy means long."
      },
      {
        id: "wk-13",
        prompt: "There was AMPLE time before the bus arrived, so Devon reviewed his notes one more time. As used in the sentence, AMPLE most nearly means",
        choices: ["abundant", "scarce", "exact", "prompt"],
        answer: 0,
        explain: "Ample means more than enough. Devon had time to spare and used it for an extra review, so abundant is correct. The trap is prompt, which shares the schedule topic but means on time rather than plentiful. Scarce is the near opposite, and exact means precisely measured."
      },
      {
        id: "wk-14",
        prompt: "The misspelled title on the program cover DETRACTED from an otherwise polished yearbook. As used in the sentence, DETRACTED most nearly means",
        choices: ["enhanced", "weakened", "extracted", "assembled"],
        answer: 1,
        explain: "To detract from something is to lessen its value, quality or effect. The typo lowered the polish of the book, so weakened is correct. The trap is extracted, which shares the -tract root but means pulled out or physically removed, which is not what a typo does. Enhanced is the near opposite, and assembled means put together."
      },
      {
        id: "wk-15",
        prompt: "The detective's calm, patient questions finally ELICITED an admission from the suspect, who had stayed silent for hours. As used in the sentence, ELICITED most nearly means",
        choices: ["withhold", "illicit", "repeat", "prompt"],
        answer: 3,
        explain: "To elicit something is to draw it out or bring it forth. The questions brought the admission forth, so prompt is correct. The trap is illicit, which sounds identical but means forbidden by law. Withhold is the near opposite, meaning to hold back, and repeat means to say again."
      },
      {
        id: "wk-16",
        prompt: "Constant background chatter can INHIBIT concentration, making it harder to stay focused on dense reading. As used in the sentence, INHIBIT most nearly means",
        choices: ["hinder", "encourage", "exhibit", "observe"],
        answer: 0,
        explain: "To inhibit is to hold back, check or hinder. Chatter makes focus harder, so hinder is correct. The trap is exhibit, which shares the -hibit root but means to show or display, nearly the opposite effect. Encourage also points the opposite way, and observe means to watch."
      },
      {
        id: "wk-17",
        prompt: "The city planted rows of trees along the highway to MITIGATE the traffic noise reaching nearby homes. As used in the sentence, MITIGATE most nearly means",
        choices: ["worsen", "eliminate", "lessen", "measure"],
        answer: 2,
        explain: "To mitigate is to make something less severe. The trees soften the noise reaching the homes, so lessen is correct. The trap is eliminate, which is too strong: the trees reduce the noise but cannot remove it entirely. Worsen is the near opposite, and measure means to gauge a quantity."
      },
      {
        id: "wk-18",
        prompt: "Priya's account of the power outage was PLAUSIBLE, and the story could easily have happened just as she told it. As used in the sentence, PLAUSIBLE most nearly means",
        choices: ["impossible", "believable", "practical", "generous"],
        answer: 1,
        explain: "Plausible means believable, seeming likely to be true. Her story could easily be true, so believable is correct. The trap is practical, which shares the sensible-sounding feel of plausible but means useful in real situations. Impossible is the near opposite, and generous means giving."
      },
      {
        id: "wk-19",
        prompt: "Using laboratory results, the researchers REFUTED the claim that the supplement cures fatigue, showing that it performs no better than a placebo. As used in the sentence, REFUTED most nearly means",
        choices: ["refuse", "confirm", "rephrase", "disprove"],
        answer: 3,
        explain: "To refute a claim is to prove it wrong with evidence or argument. The data showed the claim false, so disprove is correct. The trap is refuse, which looks and sounds similar but means to decline. Confirm is the near opposite, and rephrase means to state again in different words."
      },
      {
        id: "wk-20",
        prompt: "After two packages never arrived, Ines grew WARY of the online marketplace and began double-checking every seller's reviews. As used in the sentence, WARY most nearly means",
        choices: ["trusting", "weary", "cautious", "curious"],
        answer: 2,
        explain: "Wary means cautious and on guard, watchful for trouble. Her double-checking shows caution, so cautious is correct. The trap is weary, which looks similar but means tired. Trusting is the near opposite, and curious means interested."
      }
    ]
  }
};
