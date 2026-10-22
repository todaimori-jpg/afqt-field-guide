window.ASVAB = window.ASVAB || {};

window.ASVAB.meta = {
  course: {
    title: "AFQT Field Guide",
    kicker: "ASVAB prep",
    intro:
      "Four of the ten ASVAB subtests decide your AFQT score, and the AFQT score decides whether you can enlist at all. This course teaches only those four, and teaches them in the order that scores points fastest.",
    disclaimer:
      "Original practice material written in the style of the ASVAB. This is not a published test form, not endorsed by the Department of Defense or the United States Air Force, and not a source of official scores. Nothing here replaces talking to a recruiter."
  },

  airForce: {
    heading: "If you are testing for the Air Force",
    minimums: [
      { credential: "High school diploma or current senior", afqt: "31", note: "The published minimum AFQT for a regular enlistment." },
      { credential: "GED or other alternative credential", afqt: "50", note: "A higher floor, and these enlistments are quota-limited." }
    ],
    mage:
      "Getting past the AFQT minimum makes you eligible to enlist. It does not by itself qualify you for a job. The Air Force assigns careers using four composite scores — Mechanical, Administrative, General aptitude and Electronic, known together as MAGE. Those composites are built from subtests this course does not cover, including General Science, Electronics Information, Auto Information, Shop Information and Mechanical Comprehension. If a specific career field matters to you, ask a recruiter which composite it needs and what the current cutoff is.",
    verify:
      "Minimums and career cutoffs are set by Air Force recruiting policy and they do change. Treat every number on this page as the published figure at the time it was written, and confirm the current requirement with a recruiter before you rely on it."
  },

  subtests: [
    {
      key: "ar",
      code: "AR",
      name: "Arithmetic Reasoning",
      group: "Math",
      order: 1,
      catQuestions: 16,
      catMinutes: 39,
      paperQuestions: 30,
      paperMinutes: 36,
      blurb:
        "Word problems. The arithmetic is usually easy; the difficulty is turning an English paragraph into a correct equation before you start calculating.",
      skills: [
        "Translating a word problem into an equation",
        "Ratios, proportions and percents, including reverse-percent setups",
        "Rate, distance and time, with unit conversion",
        "Combined work problems",
        "Averages and weighted averages",
        "Simple interest, discounts, unit price and profit",
        "Perimeter, area and volume in practical situations"
      ],
      afqt: "Counted once in the AFQT composite. The most heavily time-budgeted subtest on the exam."
    },
    {
      key: "mk",
      code: "MK",
      name: "Mathematics Knowledge",
      group: "Math",
      order: 2,
      catQuestions: 16,
      catMinutes: 20,
      paperQuestions: 25,
      paperMinutes: 24,
      blurb:
        "Direct math. The expression, equation or shape is handed to you. This subtest rewards recall of rules and formulas plus clean hand arithmetic under time pressure.",
      skills: [
        "Number properties, primes, factors, multiples and order of operations",
        "Fractions, decimals and percents, and converting between them",
        "Exponent rules, roots and scientific notation",
        "Linear equations, inequalities, systems and factoring quadratics",
        "Angles, triangles, quadrilaterals and circles",
        "Perimeter, area, volume and surface area",
        "Coordinate geometry, probability and basic statistics"
      ],
      afqt: "Counted once in the AFQT composite. Roughly 75 seconds per question on the computerized test."
    },
    {
      key: "wk",
      code: "WK",
      name: "Word Knowledge",
      group: "Verbal",
      order: 3,
      catQuestions: 16,
      catMinutes: 8,
      paperQuestions: 35,
      paperMinutes: 11,
      blurb:
        "Synonyms, either straight or embedded in a sentence. About thirty seconds per question, so it rewards memorized systems over slow reasoning.",
      skills: [
        "Predicting the answer before reading the choices",
        "Decoding unfamiliar words from prefixes, roots and suffixes",
        "Matching connotation and intensity, not just topic",
        "Using context clues: restatement, contrast, example",
        "Recognizing secondary meanings of familiar words"
      ],
      afqt: "Combined with Paragraph Comprehension into Verbal Expression, which is doubled in the AFQT composite."
    },
    {
      key: "pc",
      code: "PC",
      name: "Paragraph Comprehension",
      group: "Verbal",
      order: 4,
      catQuestions: 11,
      catMinutes: 22,
      paperQuestions: 15,
      paperMinutes: 13,
      blurb:
        "Short passages followed by questions about main idea, stated detail, inference, author's purpose and tone, and word meaning in context.",
      skills: [
        "Separating the topic from the main idea",
        "Rejecting answers that are too broad, too narrow or off-topic",
        "Scanning for stated details and seeing through paraphrase traps",
        "Making inferences one step from the text, not three",
        "Naming the author's purpose and tone from word choice",
        "Determining what a word means as the passage uses it"
      ],
      afqt: "Combined with Word Knowledge into Verbal Expression, which is doubled in the AFQT composite."
    }
  ],

  afqt: {
    formula: [
      { label: "VE", text: "Verbal Expression = WK raw score + PC raw score" },
      { label: "AFQT raw", text: "AFQT raw = (2 × VE) + AR raw + MK raw" },
      {
        label: "Percentile",
        text: "The raw composite is converted to a percentile from 1 to 99 against a national reference sample of 18- to 23-year-olds."
      }
    ],
    categories: [
      { cat: "I", range: "93 – 99", note: "Top tier. Qualifies for every enlistment option and the widest range of jobs." },
      { cat: "II", range: "65 – 92", note: "Strong. Qualifies broadly, including most selective and technical jobs." },
      { cat: "IIIA", range: "50 – 64", note: "Above the national midpoint. This is the threshold most enlistments require." },
      { cat: "IIIB", range: "31 – 49", note: "Below the midpoint. Enlistment is restricted and often needs a waiver." },
      { cat: "IV", range: "10 – 30", note: "Very limited. Generally requires a high school diploma and a waiver, and is rarely granted." },
      { cat: "V", range: "1 – 9", note: "Not qualifying for enlistment." }
    ],
    categoryNote:
      "Each service sets its own minimum inside these categories, and those minimums change. Category IIIA or above is the usual baseline for a regular enlistment. Confirm the current requirement for the branch and job you want with a recruiter rather than relying on any website, including this one.",
    estimateMethod:
      "The estimate on your diagnostic result page is a rough band, not a percentile. It takes your AFQT raw score as a percentage of the maximum available on this practice test and maps that percentage to a category band. This practice test is not the ASVAB and is not normed against the official reference sample, so its difficulty will not match the real exam. Use the band to decide what to study next, not to predict your score."
  },

  timingNote:
    "Figures below are the commonly cited question counts and time limits. The computerized CAT-ASVAB is adaptive, so the items you receive and your effective pacing vary with your performance. The paper version combines Auto and Shop Information into one section and is not covered by this course. Always confirm current timing at your test site."
};
