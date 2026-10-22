window.ASVAB = window.ASVAB || {};

window.ASVAB.pc = {
  lessons: [
    {
      id: "how-pc-works",
      title: "How Paragraph Comprehension Works",
      summary: "Learn the five Paragraph Comprehension question types and a routine for answering each from the text.",
      minutes: 12,
      blocks: [
        { type: "h", text: "What Paragraph Comprehension Asks of You" },
        { type: "p", text: "Paragraph Comprehension gives you short passages, most between 25 and 200 words, and asks a few pointed questions about each. On the computerized test you get about 11 questions in 22 minutes. The passages cover ordinary subjects — science, health, history, government, work — and none of them require special background knowledge. Everything you need is on the screen." },
        { type: "list", ordered: false, items: [
          "Main idea — what is this passage mostly about? One claim has to cover every sentence.",
          "Stated detail — what does the passage actually say? The answer sits in one sentence.",
          "Inference — what does the passage imply without saying? The right answer is one small step from the text.",
          "Author's purpose and tone — why did the author write this, and what attitude do the word choices reveal?",
          "Word meaning in context — what does this word mean as this passage uses it? The surrounding sentences supply the definition."
        ] },
        { type: "h", text: "A Routine That Works on Every Passage" },
        { type: "list", ordered: true, items: [
          "Read the passage once, actively. Name the topic in a word or two, then ask what the author claims about that topic.",
          "Notice the organization: problem then solution, claim then examples, steps in order, or a story with a point.",
          "Read the question stem before the choices so you know what to hunt for.",
          "Go back to the text and point at the sentence that answers the question. Do not answer from a general impression.",
          "Eliminate choices that miss the text: too narrow, too broad, beyond it, or against it."
        ] },
        { type: "p", text: "This subtest rewards precision, not broad reading skill. Two answers often look fine at a glance; the passage itself breaks the tie. Students lose points by answering from their impression of a paragraph instead of from its exact words." },
        { type: "example", prompt: "Read the passage. The community garden behind the Elm Street school was started by six families in one weekend. They hauled away trash, built twelve raised beds, and planted tomatoes, beans, and marigolds. Within a year the garden was producing more vegetables than the families could use, so they began delivering the surplus to the food pantry. Neighbors who had lived side by side for years started stopping to talk, and the city reported fewer complaints about illegal dumping in the lot next door. Question: What is the main idea of the passage?", steps: [
          "Name the topic: the community garden.",
          "Check what each sentence adds: built quickly, sends surplus to the pantry, brings neighbors together, cut illegal dumping. The garden improved the neighborhood in several ways.",
          "Reject the choice about the food pantry: it covers only one sentence — too narrow.",
          "Reject the choice that the lot had been dangerous: the passage never says that — beyond the text."
        ], answer: "The garden improved the neighborhood in ways that went beyond growing vegetables.", note: "Summing each sentence's contribution in one line makes the right scope obvious before you even look at the choices." },
        { type: "example", prompt: "Read the passage. Before 1916, an American grocery shopper asked a clerk for every item and waited while it was fetched from a shelf behind the counter. The first self-service store, which opened in Memphis that year, turned the system around: customers carried baskets, chose their own goods, and paid at a single checkout. Serving each customer cost the store less, and prices dropped. Question: According to the passage, self-service lowered prices mainly because", steps: [
          "Scan the stem for the key words: lowered prices and because.",
          "Find the cause sentence: serving each customer cost the store less.",
          "Match the choice that restates that in fresh words: the store needed less labor per customer.",
          "Reject the choice that repeats the phrase single checkout but attaches a reason the passage never gives."
        ], answer: "Because shoppers fetched their own goods, serving them cost less, and the savings cut prices.", note: "Detail questions are lookup jobs: find the sentence, then match its meaning rather than its wording." },
        { type: "tip", label: "TIP", text: "Read the question stem before the answer choices. Knowing whether you are hunting for a date, a reason, or the author's attitude tells you what to look for on the second pass through the passage." },
        { type: "warn", label: "WATCH OUT", text: "Do not answer from what you already believe about the topic. If the passage says a remedy lacks proven benefits, the question tests the passage, not your health opinions. The correct choice can be one you personally doubt." },
        { type: "key", label: "KEY RULE", text: "Every correct answer is inside the passage. If you cannot point to the sentence that supports it, the answer is not proven." }
      ]
    },
    {
      id: "main-idea",
      title: "Finding the Main Idea",
      summary: "Separate topic from main idea, and use the too-narrow, too-broad, and off-topic tests to eliminate fast.",
      minutes: 12,
      blocks: [
        { type: "h", text: "Topic Versus Main Idea" },
        { type: "p", text: "The topic is the subject in a word or two: coffee prices, a bus route, houseplants. The main idea is a complete claim about that topic — what the author wants you to understand about it. A topic is a label; a main idea is a sentence. The question asks for the sentence." },
        { type: "p", text: "In a short passage the main idea often lives in the first sentence or the last sentence, so check both. But some passages never state it outright. When no single sentence declares the point, the main idea is the one claim that every sentence supports." },
        { type: "list", ordered: false, items: [
          "Too narrow — true of only part of the passage. It often comes from one sentence in the middle.",
          "Too broad — bigger than the passage. A general truth the paragraph would merely be one example of.",
          "Off-topic — real-sounding, even true in the world, but not what this passage is about."
        ] },
        { type: "p", text: "A correct main-idea answer covers the whole passage and stops there. It should not need outside facts, and it should not shrink to one detail." },
        { type: "example", prompt: "Read the passage. A pencil looks simple, but every part of it is engineered. The core mixes graphite with clay; more clay gives a harder, lighter line. The casing is usually cedar, chosen because it sharpens cleanly without splintering. Even the paint has a job: the classic yellow marked the finest graphite when the style began, and the color stuck. Question: What is the main idea of the passage?", steps: [
          "Topic: the pencil. Ask what the passage claims about it: how it is priced, where it came from, or why each part is the way it is?",
          "Every sentence names one part — core, casing, paint — and its practical reason.",
          "Reject the choice about cedar: it is stated, but it covers only the third sentence — too narrow.",
          "Reject the choice about writing tools in general: the passage never discusses pens or markers — too broad."
        ], answer: "Every part of a pencil, from core to paint, exists for a practical reason.", note: "Check each sentence against the choice: if any sentence does not support it, the choice is too narrow or off the point." },
        { type: "example", prompt: "Read the passage. A bicycle helmet works by destroying itself. In a crash, the foam layer crushes, and the crushing absorbs the energy that would otherwise reach the skull. That foam does not spring back, so a helmet that has taken one hard hit will not absorb the next one. Replace any helmet after a serious fall, even if it looks undamaged. Question: What is the main idea of the passage?", steps: [
          "Ask what the author claims: that helmets save lives in general, or how helmets work and what that means for the rider?",
          "The passage explains the crushable foam, then draws the practical conclusion: replace the helmet after a hit.",
          "Reject the choice that safety equipment saves lives — a true slogan, but the passage never says it — too broad.",
          "Reject the choice about crushable foam alone: it is the middle of the passage and drops the replacement advice — too narrow."
        ], answer: "Bicycle helmets protect by crushing, which is why a helmet must be replaced after a hard hit.", note: "The right answer holds the passage's two halves — how it works and what to do about it — in one claim." },
        { type: "warn", label: "WATCH OUT", text: "The first sentence is not always the main idea. Some passages open with a hook or an example and state the point at the end — or never state it at all. Test the claim against every sentence, not just the first one." },
        { type: "key", label: "KEY RULE", text: "The main idea is a complete claim that every sentence supports and nothing in the passage contradicts." }
      ]
    },
    {
      id: "details",
      title: "Stated Details and Scanning",
      summary: "Scan for the exact sentence behind a detail question and learn to beat the paraphrase trap.",
      minutes: 10,
      blocks: [
        { type: "h", text: "Find the Sentence, Read It Twice" },
        { type: "p", text: "A stated-detail question has one job: point to the fact. The answer is in a single sentence, worded differently in the choices than in the passage. Detail questions are the most reliable points on the test — if you find the sentence, you get the question right." },
        { type: "list", ordered: true, items: [
          "Pull the scan terms from the stem: names, dates, numbers, places, and distinctive nouns.",
          "Sweep the passage for those terms, line by line.",
          "When you find a term, read that sentence and the one after it. The fact may be completed in the next line.",
          "Match the choice that says the same thing in different words."
        ] },
        { type: "p", text: "Beware the paraphrase trap. The correct choice restates the passage in fresh words. Wrong choices often copy the passage's exact phrases and quietly change one thing — the person, the date, the direction of cause and effect. Exact wording is bait; meaning is the answer." },
        { type: "warn", label: "WATCH OUT", text: "Matching vocabulary between the question and a choice is not evidence of anything. A choice can repeat three words from the passage and still be wrong. The only proof is that the choice's full meaning matches the sentence you found." },
        { type: "tip", label: "TIP", text: "Number and date questions are free points. When the stem asks how long, how many, or when, scan only for the digits, jot the two numbers down, and do the small step — a difference or a sum — before touching the choices." },
        { type: "example", prompt: "Read the passage. The building now called Willis Tower held the title of tallest building in the world from 1973 until 1998, when the Petronas Towers in Kuala Lumpur passed it. Its Skydeck, on the 103rd floor, still draws about 1.7 million visitors a year. Question: For how long did the building hold the world's tallest title?", steps: [
          "Scan for the years: 1973 and 1998.",
          "Read the sentence holding them and note what each year marks: gained the title, lost the title.",
          "Subtract: 1998 minus 1973 is 25.",
          "Reject the choice of 103 — that is the floor number the passage also mentions, parked where the answer belongs."
        ], answer: "25 years, from 1973 to 1998.", note: "The stem asked how long, so a subtraction was needed before any choice could be checked — and the passage supplied a second number as bait." },
        { type: "example", prompt: "Read the passage. Volcanic soil is unusually rich in minerals, and crops grow quickly in it. That is why farmers in parts of Italy, Indonesia, and Central America keep working land at the foot of volcanoes, even though the same ground can erupt and bury a harvest. Question: The passage indicates that farmers near volcanoes accept the risk of an eruption mainly because", steps: [
          "Scan for risk and because — the stem wants the trade-off.",
          "Find the cause: the soil is rich in minerals and crops grow quickly.",
          "Match the fresh-worded version: the land grows far more food than ordinary fields.",
          "Reject the choice that the farmers believe eruptions are unlikely — the word risk is lifted from the passage, but the farmers' beliefs are never described."
        ], answer: "Because the soil is so fertile that the harvest is worth the risk.", note: "The correct choice contains almost no words from the passage; the trap choice borrows the word risk and invents the rest." },
        { type: "key", label: "KEY RULE", text: "A detail answer is only proven when you can point to the sentence and show that the choice's meaning matches it." }
      ]
    },
    {
      id: "inference",
      title: "Inference and Implied Meaning",
      summary: "Draw only the conclusions the passage forces — one step from the text, never three.",
      minutes: 12,
      blocks: [
        { type: "h", text: "One Step From the Text, Not Three" },
        { type: "p", text: "An inference is something the passage does not say but does force. If every word of the passage is true, a valid inference must also be true — necessarily or overwhelmingly. Ask of each choice: must this follow? Could the passage be entirely true and this choice still be false? If it could, the choice is out." },
        { type: "key", label: "KEY RULE", text: "The right inference is one small step from a stated fact. Wrong choices take three steps, lean on outside knowledge, or answer a question the passage never raises." },
        { type: "list", ordered: false, items: [
          "An inference is forced by the text: if the passage is true, the choice must be true.",
          "An assumption is something you add to make a story work; the passage never forces it.",
          "Outside knowledge may be true in the real world and still wrong here. The test is the passage, not your memory."
        ] },
        { type: "warn", label: "WATCH OUT", text: "The most tempting wrong inference is a true statement. Real-world facts the passage never mentions are wrong answers on this test, every time. Judge each choice only against this passage." },
        { type: "example", prompt: "Read the passage. The Riverton bus line runs every fifteen minutes on weekdays. On Saturdays the wait is a full half hour, and on Sundays only four buses make the complete loop all day. When a festival fills the streets, the transit board can add buses, but the drivers must be paid overtime rates, so the board rarely does it. Question: The passage suggests that", steps: [
          "Test each choice with the question: must this follow?",
          "Overtime rates plus rare additions give one small step: extra festival buses cost more than the regular schedule.",
          "Reject the choice that the Riverton system loses money every year — plausible, but no revenue or loss figures appear.",
          "Reject the choice that most residents ride on Sundays — the Sunday schedule is thin, which if anything points the other way."
        ], answer: "Adding buses for a festival costs the board more than running the ordinary schedule, which is why it rarely happens.", note: "Both halves of the correct answer — overtime and rarely — come from one sentence, so the step is small and safe." },
        { type: "example", prompt: "Read the passage. Every morning, Mr. Okafor waters his tomato plants before the sun climbs high. A neighbor once asked why he started so early. He said that water vanishes fast in afternoon heat, and leaves left wet in full sun can scald. On the night a frost was forecast, he went out again and draped cloth over the seedlings. Question: The passage suggests that", steps: [
          "The frost sentence is new information: cloth over the seedlings on a cold night.",
          "Take one step: gardeners can shield young plants from cold with cloth.",
          "Reject the choice that Mr. Okafor sells tomatoes at a market — the passage never says what happens to the crop.",
          "Reject the choice that watering in the evening ruins tomato plants — the passage praises morning watering but never judges evening watering."
        ], answer: "Cloth can protect young plants from a cold night.", note: "Ask what the frost detail is for — authors include details so you can draw exactly one conclusion from them." },
        { type: "tip", label: "TIP", text: "Cover the choices and predict the inference yourself before reading them. If your predicted step appears, take it. Trap choices are built to sound wise; your prediction came from the text." }
      ]
    },
    {
      id: "purpose-tone",
      title: "Author's Purpose, Tone and Word Choice",
      summary: "Identify why a passage was written, name its tone from word choice, and define words from context.",
      minutes: 12,
      blocks: [
        { type: "h", text: "Why Written, How It Feels, What It Means" },
        { type: "p", text: "Purpose questions ask why the author put words on the page: to inform, persuade, describe, explain, criticize, entertain, refute, or caution. Tone questions ask what the word choices reveal about the author's attitude. Both are answered from the same evidence — the moves the author makes." },
        { type: "list", ordered: false, items: [
          "Inform — neutral facts and findings; no side is taken.",
          "Explain — how or why something works, often with steps or causes.",
          "Describe — sensory detail that paints a person, place, or scene.",
          "Persuade — a position plus reasons; look for ought, should, and it is time.",
          "Criticize — fault-finding aimed at a specific target.",
          "Refute — states a claim and then knocks it down.",
          "Caution — warns of a danger and urges care.",
          "Entertain — an anecdote built for amusement; the point is the story."
        ] },
        { type: "p", text: "Tone is carried by loaded words. A passage that calls a policy reckless has taken a side; one that calls it new has not. Accurate tone labels from a realistic set include approving, skeptical, admiring, matter-of-fact, wry, concerned, dismissive, and urgent. Match intensity: doubtful and skeptical are close; hostile and skeptical are not." },
        { type: "p", text: "Word-meaning questions work the same way. The passage defines the word in its own surrounding sentences, and the everyday meaning is not always the intended one. Charged can mean accused or filled; run can mean manage or flow. Cover the word, read the sentence, and predict what idea the slot needs." },
        { type: "tip", label: "TIP", text: "For a word-in-context question, put your own word in the slot before reading the choices. Then pick the choice that matches your word — and be ready for a choice that is a fine synonym of the wrong sense." },
        { type: "warn", label: "WATCH OUT", text: "Purpose choices come in pairs that differ by strength. Convinces and tries to persuade are different claims; a passage can only show an attempt, so choose the attempt, not the result." },
        { type: "example", prompt: "Read the passage. Every spring we lose an hour of sleep so that evenings stay bright, and every fall we hand the hour back. Hospitals report a jump in car accidents and heart attacks in the days after the switch. Two states have already dropped the whole ritual, and their citizens appear no worse for it. It is time for the rest to admit the experiment failed. Question: The author wrote this passage mainly to", steps: [
          "The passage takes a side: the switch costs sleep and accidents, and it should end.",
          "Find the persuasion markers: it is time for the rest to admit the experiment failed.",
          "Reject inform — facts are present, but a conclusion is being pushed.",
          "Reject criticize alone — the author is not merely finding fault but urging a specific change."
        ], answer: "Persuade readers that the seasonal clock change should be abandoned.", note: "The final sentence carries the purpose; everything before it is the evidence the author assembled to win you over." },
        { type: "example", prompt: "Read the passage. The engineer proposed a novel way to span the canyon: instead of lifting steel sections with cranes, crews would slide each one across cables already strung over the gap, which cut the work from months to weeks. Question: As used in the passage, the word novel most nearly means", steps: [
          "Cover the word and read on: the colon introduces the method, and the method is unusual — sliding, not lifting.",
          "Predict the slot: new, original, not done this way before.",
          "Match the choice meaning original.",
          "Reject the choice meaning a printed story — a real sense of novel, but the context is a method, not a book."
        ], answer: "Original — a method not used before.", note: "The sentence after the word did the defining; the colon signposted it." },
        { type: "key", label: "KEY RULE", text: "Purpose, tone, and word meaning are all read from the author's choices of words. Find the loaded words, the verbs of argument, and the defining sentence, and all three question types open up." }
      ]
    }
  ],

  practice: {
    title: "Paragraph Comprehension Practice Set",
    subtitle: "Four passages and ten questions in twenty-two minutes. Every correct answer comes from the passage itself.",
    timeLimitMinutes: 22,
    passages: [
      {
        id: "p1",
        title: "Why Leaves Turn",
        text: "Each autumn, the leaves of many trees turn from green to brilliant red, orange, and yellow before falling. The green pigment, chlorophyll, lets a leaf capture sunlight and make food during spring and summer. As days grow shorter and cooler, trees stop producing chlorophyll and the green fades. This unmasks yellow and orange pigments that were in the leaf all along. Red is different: it is made fresh in autumn, when sunny days and cool nights trap sugars in the leaf. Weather can therefore change how red a forest looks from one year to the next."
      },
      {
        id: "p2",
        title: "Credit on the Ice",
        text: "When Robert Peary announced in 1909 that he had reached the North Pole, the newspapers celebrated him alone. Yet Peary did not walk those miles by himself. Beside him, nearly every step, was Matthew Henson, a sailor who had explored alongside Peary for nearly two decades. Henson fixed sledges, learned the Inuit language, and, by most accounts, broke trail so Peary could ride and rest. Peary himself praised Henson as the best companion he could wish for. Still, Henson came home to a job as a stock clerk in a New York store, while honors and lecture fees went to Peary. History was slow to correct the record: not until 2000, nearly a century later, did Henson receive the National Geographic Society's highest honor."
      },
      {
        id: "p3",
        title: "Getting the Deposit Back",
        text: "When you rent an apartment, most landlords ask for a security deposit: money you pay up front, usually equal to one month's rent. The deposit is not extra rent. It sits untouched as protection for the landlord. If you move out owing rent, or if you leave damage beyond normal wear, the landlord can use the deposit to cover the loss. Many states require the landlord to keep your deposit in a separate account and to return it within a set number of days after you move out, along with an itemized list of any deductions. Because disputes are common, protect yourself. Photograph every room before you move in and again after you move out, and keep copies of the lease and every payment record. A tenant with dated photos and receipts rarely loses a deposit dispute."
      },
      {
        id: "p4",
        title: "The Penny Problem",
        text: "It costs the United States Mint more than two cents to make each one-cent penny, so every penny produced loses the government money. Several other countries, including Canada and New Zealand, have stopped making their smallest coins and simply round cash totals to the nearest five cents. Prices paid by card are not rounded, and supporters of rounding note that customers in those countries have not noticed lasting price increases."
      }
    ],
    questions: [
      {
        id: "pc-01",
        passageId: "p1",
        prompt: "Which statement best expresses the main idea of the passage?",
        choices: [
          "Chlorophyll gives leaves their green color through the growing season.",
          "Autumn leaf colors come from pigments that are either uncovered or newly made as chlorophyll fades.",
          "Cool nights damage leaves and cause them to drop early.",
          "The best red displays follow a rainy summer."
        ],
        answer: 1,
        explain: "The passage makes one claim about leaf color — green fades, yellow and orange were hidden all along, and red is made fresh from trapped sugars — and only the second choice covers all of it. The chlorophyll choice is too narrow: it is stated, but it covers only the middle sentences. The cool-nights choice borrows a passage detail (cool nights trap sugars) and changes what the nights do; the passage never says they make leaves fall."
      },
      {
        id: "pc-02",
        passageId: "p1",
        prompt: "According to the passage, the red color in autumn leaves",
        choices: [
          "is present in the leaf all summer, waiting to appear.",
          "protects the leaf from cold weather.",
          "comes from sugars that sunny days and cool nights trap in the leaf.",
          "is made by the same pigment that colors the leaf yellow."
        ],
        answer: 2,
        explain: "The passage states plainly: 'Red is different: it is made fresh in autumn, when sunny days and cool nights trap sugars in the leaf.' The strongest distractor is the first one, because the passage does say the yellow and orange pigments were in the leaf all along — but it marks red as the exception, made fresh. The passage never discusses cold weather protecting the leaf or names the pigments at all."
      },
      {
        id: "pc-03",
        passageId: "p2",
        prompt: "Which statement best expresses the main idea of the passage?",
        choices: [
          "Matthew Henson did work essential to the polar expedition but received far less credit than Peary.",
          "Matthew Henson learned the Inuit language during his years with Peary.",
          "Robert Peary announced that he had reached the North Pole in 1909.",
          "Newspapers care more about heroic stories than about accurate ones."
        ],
        answer: 0,
        explain: "Every sentence serves one point: Henson was essential (fixed sledges, learned the language, broke trail, praised by Peary) and the credit went elsewhere (honors and fees to Peary, correction delayed to 2000). The two stated-detail choices are too narrow — each covers a single sentence. The newspaper choice goes beyond the passage: it reports who was celebrated, not why the papers did it."
      },
      {
        id: "pc-04",
        passageId: "p2",
        prompt: "The passage suggests that Henson received little public recognition after the 1909 expedition mainly because",
        choices: [
          "he preferred a quiet life and turned down public attention.",
          "the expedition's success was later proved to be exaggerated.",
          "few people outside New York had ever heard of the expedition.",
          "the credit for reaching the Pole had already been given to Peary."
        ],
        answer: 3,
        explain: "The passage says the 'newspapers celebrated him alone' and that 'honors and lecture fees went to Peary,' so one small step gives the reason: the credit was already Peary's. The strongest distractor is the exaggeration claim — a real-world debate you may have heard of — but the passage never questions whether the Pole was reached; it questions who got the credit. Nothing is said about Henson's preferences about attention."
      },
      {
        id: "pc-05",
        passageId: "p2",
        prompt: "The author's attitude toward Matthew Henson can best be described as",
        choices: [
          "matter-of-fact, reporting only dates and events",
          "admiring, with sympathy for the credit Henson was denied",
          "skeptical, doubting that Henson's work mattered",
          "dismissive, treating Henson as a minor figure"
        ],
        answer: 1,
        explain: "The loaded words give it away: 'Yet,' 'Still,' 'by most accounts, broke trail so Peary could ride and rest,' and 'History was slow to correct the record' all show the author's sympathy. The strongest distractor is matter-of-fact, because the passage reads like a report — but the argumentative turns signal judgment, not neutrality. Nothing in the passage doubts Henson's work or treats him as minor."
      },
      {
        id: "pc-06",
        passageId: "p3",
        prompt: "According to the passage, a security deposit is",
        choices: [
          "an extra month of rent the landlord keeps no matter what happens.",
          "usually equal to three months' rent.",
          "money paid up front, usually equal to one month's rent.",
          "returned to the tenant before the apartment is vacated."
        ],
        answer: 2,
        explain: "The first sentence defines it directly: 'a security deposit: money you pay up front, usually equal to one month's rent.' The strongest distractor is the first choice, which matches what many renters suspect — but the passage explicitly denies it with 'The deposit is not extra rent' and says the landlord can take from it only for unpaid rent or damage. The return is described as happening after you move out, not before."
      },
      {
        id: "pc-07",
        passageId: "p3",
        prompt: "The passage suggests that",
        choices: [
          "a tenant with dated photos and receipts is better prepared for a deposit dispute than one without them.",
          "landlords in most states must pay interest on deposits.",
          "most deposit disputes are decided by a judge in the tenant's favor.",
          "a landlord may keep an entire deposit whenever a tenant moves out without notice."
        ],
        answer: 0,
        explain: "The passage urges 'protect yourself' through photographs and records because 'a tenant with dated photos and receipts rarely loses a deposit dispute' — one small step to the documented tenant being better off. The strongest distractor is the judge generalization: it stretches 'rarely loses a dispute' into most disputes and adds a courtroom the passage never mentions. Interest on deposits and keeping a whole deposit without cause are never discussed."
      },
      {
        id: "pc-08",
        passageId: "p3",
        prompt: "As used in the passage, the phrase 'normal wear' most nearly means",
        choices: [
          "clothing suitable for everyday use",
          "damage a tenant causes on purpose",
          "the effort needed to keep rooms clean",
          "the ordinary fading and deterioration that comes from living in a place"
        ],
        answer: 3,
        explain: "Context defines the phrase: the landlord deducts for 'damage beyond normal wear,' meaning real damage, as opposed to the ordinary aging every apartment suffers when people live in it. The strongest distractor is the clothing sense of wear — a real meaning, but the context is an apartment's condition, not a wardrobe. Purposeful damage and cleaning effort are the opposite of what normal wear describes."
      },
      {
        id: "pc-09",
        passageId: "p4",
        prompt: "What is the main idea of the passage?",
        choices: [
          "The penny is the oldest coin still made by the United States Mint.",
          "Making a penny costs more than it is worth, and some countries have dropped their smallest coins in response.",
          "Canada and New Zealand round cash totals to the nearest five cents.",
          "Rounding cash totals always raises prices for shoppers."
        ],
        answer: 1,
        explain: "Sentence one states the problem (a penny costs more than a penny), sentence two gives other countries' response (drop the smallest coins and round), and sentence three answers the obvious objection — so the second choice covers the whole passage. The Canada and New Zealand choice is stated but too narrow: it is only the middle of the passage. The oldest-coin choice is the kind of real-world fact the passage never addresses, and the last choice is contradicted by the supporters' note."
      },
      {
        id: "pc-10",
        passageId: "p4",
        prompt: "According to the passage, in countries that have stopped making their smallest coins, cash totals are",
        choices: [
          "rounded to the nearest ten cents.",
          "rounded to the nearest dollar.",
          "rounded to the nearest five cents.",
          "avoided altogether, since shoppers must pay by card."
        ],
        answer: 2,
        explain: "The passage states it exactly: these countries 'simply round cash totals to the nearest five cents.' The strongest distractor is the ten-cent version — the right shape of answer with the wrong number, which is how detail distractors are built. Card totals are not rounded, and nothing suggests card payment is required."
      }
    ]
  }
};
