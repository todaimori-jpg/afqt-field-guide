// Math Knowledge (MK) content pack — original practice material in the style of the ASVAB.
window.ASVAB = window.ASVAB || {};
window.ASVAB.mk = {
  lessons: [
    {
      id: "number-properties",
      title: "Number Properties and Order of Operations",
      summary: "Apply integer sign rules, primes, GCF/LCM, absolute value, and order of operations to evaluate expressions.",
      minutes: 10,
      blocks: [
        { type: "h", text: "What This Lesson Covers" },
        { type: "p", text: "Math Knowledge questions hand you the math directly — an expression to evaluate or a rule to apply — so points come from clean arithmetic and memorized rules. This lesson covers integer types, sign rules for multiplying and dividing, factors and multiples, primes, GCF and LCM, absolute value, and order of operations." },
        { type: "list", ordered: false, items: [
          "Even and odd: even × even = even, even × odd = even, odd × odd = odd. Sums: even + even = even, odd + odd = even, odd + even = odd.",
          "Sign rules for × and ÷: same signs give a positive result, different signs give a negative result. The rules are identical for multiplication and division.",
          "Factors divide a number exactly (factors of 12: 1, 2, 3, 4, 6, 12); multiples are the number times an integer (multiples of 12: 12, 24, 36, ...). The GCF is the largest shared factor; the LCM is the smallest shared multiple.",
          "A prime number has exactly two factors, 1 and itself: 2, 3, 5, 7, 11, 13, 17, 19, 23. The number 1 is not prime, and 2 is the only even prime.",
          "Absolute value |x| is distance from zero, so |−7| = 7 and |7| = 7. It is never negative."
        ] },
        { type: "p", text: "Order of operations: Parentheses, Exponents, Multiply and Divide left to right, then Add and Subtract left to right. Multiplication does not automatically come before division — they share a rank, so you work them in order from the left." },
        { type: "key", label: "KEY RULE", text: "PEMDAS: Parentheses, Exponents, Multiply/Divide left to right, Add/Subtract left to right." },
        { type: "warn", label: "WATCH OUT", text: "−3² means −(3²) = −9, but (−3)² = 9. The exponent attaches to the negative sign only when the sign is inside the parentheses. This trap appears constantly." },
        { type: "example", prompt: "Evaluate: 24 ÷ (−4) + 3(−2)²",
          steps: [
            "Exponents first: (−2)² = (−2)(−2) = 4.",
            "Division next, left to right: 24 ÷ (−4) = −6 (different signs, negative result).",
            "Multiplication: 3 × 4 = 12.",
            "Add: −6 + 12 = 6."
          ],
          answer: "6",
          note: "Handle exponents and every multiply/divide before any adding — collapsing left to right too early is the main error." },
        { type: "example", prompt: "Find the GCF and the LCM of 12 and 18.",
          steps: [
            "Prime-factor each number: 12 = 2² × 3 and 18 = 2 × 3².",
            "GCF takes each shared prime at its lower power: 2 × 3 = 6.",
            "LCM takes each prime at its higher power: 2² × 3² = 36.",
            "Check: 36 ÷ 12 = 3 and 36 ÷ 18 = 2, so 36 is a multiple of both."
          ],
          answer: "GCF = 6, LCM = 36",
          note: "GCF is built from the shared primes; LCM from all primes at their highest powers." },
        { type: "tip", label: "TIP", text: "GCF is never larger than the smaller number; LCM is never smaller than the larger one. If your GCF for 12 and 18 beats 12, or your LCM loses to 18, you swapped them." }
      ]
    },
    {
      id: "fractions-decimals-percents",
      title: "Fractions, Decimals and Percents",
      summary: "Work fractions and mixed numbers and convert between fractions, decimals and percents quickly.",
      minutes: 10,
      blocks: [
        { type: "h", text: "What This Lesson Covers" },
        { type: "p", text: "A large share of Math Knowledge questions are fraction and percent arithmetic in disguise. Four skills must be automatic: adding with unlike denominators, multiplying and dividing, reducing, and converting between the three forms." },
        { type: "p", text: "To add or subtract with unlike denominators, rewrite both fractions over the least common denominator, then combine only the numerators. To divide, keep the first fraction, change ÷ to ×, and flip the second fraction. To multiply, go straight across. Convert mixed numbers to improper fractions first: 3 1/2 = 7/2." },
        { type: "example", prompt: "Subtract: 3 1/2 − 1 3/4",
          steps: [
            "Convert to improper fractions: 3 1/2 = 7/2 and 1 3/4 = 7/4.",
            "Rewrite over the LCD of 4: 7/2 = 14/4.",
            "Subtract the numerators: 14/4 − 7/4 = 7/4.",
            "Convert back: 7/4 = 1 3/4."
          ],
          answer: "1 3/4" },
        { type: "example", prompt: "Divide: 5/6 ÷ 2/9",
          steps: [
            "Keep, change, flip: 5/6 × 9/2.",
            "Cancel the common factor of 3 from 6 and 9: 5/2 × 3/2.",
            "Multiply straight across: (5 × 3)/(2 × 2) = 15/4.",
            "Convert: 15/4 = 3 3/4."
          ],
          answer: "3 3/4",
          note: "Canceling before multiplying keeps the numbers small enough to handle mentally." },
        { type: "list", ordered: false, items: [
          "1/2 = 0.5 = 50%",
          "1/4 = 0.25 = 25%  and  3/4 = 0.75 = 75%",
          "1/5 = 0.2 = 20%",
          "1/8 = 0.125 = 12.5%",
          "1/3 = 0.333... ≈ 33 1/3%  and  2/3 = 0.666... ≈ 66 2/3%",
          "1/10 = 0.1 = 10%"
        ] },
        { type: "tip", label: "TIP", text: "Compare two fractions by cross-multiplying: for a/b versus c/d, compare a × d with b × c. For 3/8 versus 5/12: 3 × 12 = 36 and 5 × 8 = 40, so 5/12 is larger." },
        { type: "warn", label: "WATCH OUT", text: "When dividing by a fraction, flip only the second fraction. 1/2 ÷ 1/4 = 2, because dividing by a number smaller than 1 makes the result bigger — 2, not 1/8." },
        { type: "key", label: "KEY RULE", text: "Decimal to percent, move the decimal two places right (0.375 → 37.5%); percent to decimal, two places left (37.5% → 0.375)." }
      ]
    },
    {
      id: "exponents-roots",
      title: "Exponents, Roots and Scientific Notation",
      summary: "Apply the exponent rules, simplify radicals, and multiply and divide in scientific notation.",
      minutes: 12,
      blocks: [
        { type: "h", text: "What This Lesson Covers" },
        { type: "p", text: "Exponent questions are rule-recall questions. If you know the five rules and can pull perfect squares out of a radical, these are the fastest points on the subtest." },
        { type: "list", ordered: false, items: [
          "Product rule: a^m × a^n = a^(m + n). Example: x² × x³ = x⁵.",
          "Quotient rule: a^m ÷ a^n = a^(m − n). Example: x⁷ ÷ x³ = x⁴.",
          "Power rule: (a^m)^n = a^(mn). Example: (x²)³ = x⁶.",
          "Zero exponent: a⁰ = 1 for any nonzero base. Example: 7⁰ = 1.",
          "Negative exponent: a^(−n) = 1/a^n. Example: 2⁻³ = 1/8.",
          "Fractional exponent: a^(1/n) is the nth root. Example: 8^(1/3) = 2 and 9^(1/2) = 3."
        ] },
        { type: "p", text: "Simplify a square root by pulling out the largest perfect-square factor: √72 = √(36 × 2) = 6√2. To estimate a root, bracket it between perfect squares: 50 sits between 49 and 64, so √50 is between 7 and 8, just above 7." },
        { type: "warn", label: "WATCH OUT", text: "A negative exponent does not make the answer negative. 2⁻³ = 1/8, a positive number. The minus sign means take the reciprocal, not drop below zero." },
        { type: "example", prompt: "Simplify: 3⁴ × 3² ÷ 3⁵",
          steps: [
            "Same base throughout, so combine exponents: 4 + 2 − 5 = 1.",
            "The expression equals 3¹.",
            "Confirm with values: 81 × 9 = 729, and 729 ÷ 243 = 3."
          ],
          answer: "3",
          note: "Adding and subtracting exponents is faster and safer than computing 729 ÷ 243 by hand." },
        { type: "example", prompt: "Simplify completely: √72",
          steps: [
            "Find the largest perfect square that divides 72: 72 = 36 × 2.",
            "Split the root: √36 × √2.",
            "Take the square root of 36: 6√2."
          ],
          answer: "6√2",
          note: "Factoring out only 4 leaves 2√18, which needs another round — scan for 36, 25, 16, 9 first." },
        { type: "example", prompt: "Multiply and express the result in scientific notation: (3 × 10⁴)(4 × 10³)",
          steps: [
            "Multiply the coefficients: 3 × 4 = 12.",
            "Add the exponents of ten: 10⁴ × 10³ = 10⁷.",
            "Repair the form so exactly one nonzero digit sits before the decimal: 12 × 10⁷ = 1.2 × 10⁸."
          ],
          answer: "1.2 × 10⁸",
          note: "Scientific notation needs one nonzero digit in front of the decimal — 12 × 10⁷ is not a finished answer." },
        { type: "tip", label: "TIP", text: "To divide in scientific notation, divide the coefficients and subtract the exponents: (8 × 10⁶) ÷ (2 × 10²) = 4 × 10⁴." },
        { type: "key", label: "KEY RULE", text: "Multiplying adds exponents, dividing subtracts them, and a power of a power multiplies them — but only when the bases are the same." }
      ]
    },
    {
      id: "algebra",
      title: "Algebra: Expressions, Equations and Inequalities",
      summary: "Solve linear equations, systems, inequalities and factored quadratics step by step.",
      minutes: 12,
      blocks: [
        { type: "h", text: "What This Lesson Covers" },
        { type: "p", text: "Algebra carries the most weight of any Math Knowledge topic. Nearly every question reduces to the same loop: simplify each side, then undo operations to isolate the variable, doing the same thing to both sides." },
        { type: "p", text: "Combine like terms: 3x + 5x = 8x. Distribute before collecting terms, and track signs: −2(x − 5) = −2x + 10. To solve a two-step equation, undo addition or subtraction first, then multiplication or division — the reverse of the order of operations." },
        { type: "list", ordered: false, items: [
          "Difference of squares: a² − b² = (a + b)(a − b). Example: x² − 49 = (x + 7)(x − 7).",
          "Simple trinomial: x² + bx + c = (x + p)(x + q) where p + q = b and p × q = c.",
          "Example: x² + 7x + 12 = (x + 3)(x + 4) because 3 + 4 = 7 and 3 × 4 = 12.",
          "Zero product rule: if A × B = 0, then A = 0 or B = 0 — this is how factoring solves an equation.",
          "Systems: substitution replaces a variable using one equation; elimination adds or subtracts the equations to cancel one variable."
        ] },
        { type: "warn", label: "WATCH OUT", text: "Multiplying or dividing an inequality by a negative number reverses the sign: −2x > 6 becomes x < −3. Forgetting the flip is the most-missed algebra move on the test." },
        { type: "example", prompt: "Solve: 3(x − 4) = 2x + 5",
          steps: [
            "Distribute: 3x − 12 = 2x + 5.",
            "Subtract 2x from both sides: x − 12 = 5.",
            "Add 12 to both sides: x = 17.",
            "Check: 3(17 − 4) = 39 and 2(17) + 5 = 39."
          ],
          answer: "x = 17" },
        { type: "example", prompt: "Solve the system: x + y = 10 and 2x − y = 5",
          steps: [
            "The y terms are +y and −y, so add the equations to eliminate y: 3x = 15.",
            "Divide by 3: x = 5.",
            "Substitute into x + y = 10: 5 + y = 10, so y = 5.",
            "Check in the second equation: 2(5) − 5 = 5."
          ],
          answer: "x = 5, y = 5",
          note: "When one variable shows up with opposite signs, elimination beats substitution — no fractions appear." },
        { type: "example", prompt: "Solve: x² − 5x − 14 = 0",
          steps: [
            "Find two numbers that multiply to −14 and add to −5: −7 and 2.",
            "Factor: (x − 7)(x + 2) = 0.",
            "Zero product rule: x − 7 = 0 or x + 2 = 0.",
            "Solutions: x = 7 or x = −2."
          ],
          answer: "x = 7 or x = −2" },
        { type: "tip", label: "TIP", text: "Solving a literal formula uses the same loop. To solve A = ½bh for h, multiply both sides by 2 (2A = bh), then divide by b: h = 2A/b." },
        { type: "key", label: "KEY RULE", text: "Whatever you do to one side of an equation, do to the other — and when the variable appears on both sides, gather all x terms on one side first." }
      ]
    },
    {
      id: "geometry",
      title: "Geometry",
      summary: "Use angle rules and area, volume and coordinate formulas to solve geometry questions without a figure.",
      minutes: 15,
      blocks: [
        { type: "h", text: "What This Lesson Covers" },
        { type: "p", text: "Geometry questions reward two habits: writing the formula before substituting, and sketching the figure from the words when none is shown. Almost every needed fact is a memorized formula or an angle rule." },
        { type: "p", text: "Angle facts: complementary angles sum to 90°, supplementary angles sum to 180°, vertical angles (across an X) are equal, angles on a straight line sum to 180°, and angles around a point sum to 360°. When parallel lines are cut by a transversal, all the acute angles are equal, all the obtuse angles are equal, and any acute-obtuse pair sums to 180°." },
        { type: "p", text: "Triangle facts: the three angles sum to 180°. A 45-45-90 triangle has sides in the ratio x : x : x√2; a 30-60-90 triangle has sides x : x√3 : 2x, with the hypotenuse twice the short leg. The Pythagorean theorem a² + b² = c² applies to every right triangle; memorize the triples 3-4-5, 5-12-13 and 8-15-17 and all their multiples." },
        { type: "list", ordered: false, items: [
          "Rectangle: A = lw; perimeter P = 2(l + w).",
          "Triangle: A = ½bh, with b and h perpendicular.",
          "Parallelogram: A = bh.",
          "Trapezoid: A = ½(b₁ + b₂)h — the average of the parallel sides times the height.",
          "Circle: C = 2πr and A = πr².",
          "Rectangular solid: V = lwh; surface area SA = 2(lw + lh + wh).",
          "Cylinder: V = πr²h; lateral surface 2πrh."
        ] },
        { type: "warn", label: "WATCH OUT", text: "Mixing up the circle formulas is a classic miss: circumference is 2πr (a length, in units) and area is πr² (in square units). Match the answer's units to the question — area wants square units, volume wants cubic." },
        { type: "example", prompt: "A right triangle has legs of 9 inches and 12 inches. How long is the hypotenuse?",
          steps: [
            "Write the theorem: c² = a² + b².",
            "Substitute: c² = 9² + 12² = 81 + 144 = 225.",
            "Take the square root: c = √225 = 15.",
            "Shortcut: 9-12-15 is the 3-4-5 triple times 3."
          ],
          answer: "15 inches",
          note: "Spotting a multiple of 3-4-5 skips the squaring entirely." },
        { type: "example", prompt: "Find the distance between the points (−1, 2) and (3, 5).",
          steps: [
            "Formula: d = √((x₂ − x₁)² + (y₂ − y₁)²).",
            "Differences: 3 − (−1) = 4 and 5 − 2 = 3.",
            "Substitute: d = √(4² + 3²) = √(16 + 9) = √25.",
            "Simplify: d = 5."
          ],
          answer: "5 units",
          note: "Plotting first shows a 3-by-4 step — the distance formula is just the Pythagorean theorem on that step." },
        { type: "example", prompt: "A cylinder has a radius of 3 feet and a height of 4 feet. What is its volume?",
          steps: [
            "Formula: V = πr²h.",
            "Substitute: V = π(3)²(4).",
            "Compute: V = π(9)(4) = 36π cubic feet."
          ],
          answer: "36π cubic feet",
          note: "Keep answers in terms of π — the test almost never requires a decimal for π." },
        { type: "example", prompt: "Two supplementary angles are in a 1:3 ratio. What is the measure of each angle?",
          steps: [
            "Let the angles be x and 3x; supplementary means they sum to 180°.",
            "Equation: x + 3x = 180, so 4x = 180.",
            "Solve: x = 45.",
            "Angles: 45° and 3(45) = 135°. Check: 45 + 135 = 180."
          ],
          answer: "45° and 135°" },
        { type: "p", text: "Coordinate geometry: slope m = (y₂ − y₁)/(x₂ − x₁) — a positive slope rises left to right, a negative slope falls. Midpoint coordinates are the averages of the endpoints: ((x₁ + x₂)/2, (y₁ + y₂)/2). A horizontal line has slope 0; a vertical line has undefined slope." },
        { type: "tip", label: "TIP", text: "Know the quadrilateral family cold: a square has 4 equal sides and 4 right angles, a rectangle has right angles with equal opposite sides, a parallelogram has parallel equal opposite sides, and a trapezoid has exactly one pair of parallel sides." },
        { type: "key", label: "KEY RULE", text: "Write the formula first, then substitute. Most missed geometry points come from a half-remembered formula, not from the arithmetic." }
      ]
    },
    {
      id: "probability-statistics",
      title: "Probability and Statistics",
      summary: "Find mean, median, mode and range, count outcomes, and compute basic and successive probabilities.",
      minutes: 10,
      blocks: [
        { type: "h", text: "What This Lesson Covers" },
        { type: "p", text: "Statistics questions are definitions plus one clean computation: mean, median, mode, range, or a missing value rebuilt from a known mean. Probability questions are favorable ÷ total, sometimes multiplied out across successive events." },
        { type: "list", ordered: false, items: [
          "Mean = sum ÷ count. Rearranged: sum = mean × count — the key to finding a missing value.",
          "Median = middle value after sorting; with an even count, average the two middle values.",
          "Mode = the most frequent value (there can be none, one, or several). Range = largest − smallest.",
          "Fundamental counting rule: if one choice has m options and another has n, the pair has m × n outcomes.",
          "Permutations count arrangements where order matters; combinations count groups where it does not. ABC and BAC are one combination but two permutations."
        ] },
        { type: "p", text: "Probability of one event = favorable outcomes ÷ total outcomes. Complementary probability: P(not E) = 1 − P(E). For independent successive events — a coin and a die, or drawing with replacement — multiply the individual probabilities." },
        { type: "example", prompt: "The mean of five test scores is 82. Four of the scores are 78, 85, 80 and 84. What is the fifth score?",
          steps: [
            "Total needed: sum = mean × count = 82 × 5 = 410.",
            "Add the known scores: 78 + 85 + 80 + 84 = 327.",
            "Subtract: 410 − 327 = 83."
          ],
          answer: "83",
          note: "Never average the four known scores — multiply the mean by the full count first." },
        { type: "example", prompt: "A bag holds 3 red and 5 blue marbles. A marble is drawn, replaced, and a second marble is drawn. What is the probability that both are red?",
          steps: [
            "One draw: P(red) = 3/8.",
            "The marble goes back, so the draws are independent: multiply.",
            "P(both red) = 3/8 × 3/8 = 9/64."
          ],
          answer: "9/64",
          note: "With replacement the second denominator stays 8; without it, the second draw would be 2/7." },
        { type: "warn", label: "WATCH OUT", text: "Draws without replacement are not independent — the total shrinks by one each time (3/8, then 2/7). Check whether the item is replaced before you multiply." },
        { type: "tip", label: "TIP", text: "At least one questions are complement questions: P(at least one) = 1 − P(none). For two coin flips, P(at least one head) = 1 − P(two tails) = 1 − 1/4 = 3/4." },
        { type: "key", label: "KEY RULE", text: "For any mean question, immediately convert to a total: sum = mean × count. Most mean problems hide a missing value inside that product." }
      ]
    }
  ],
  practice: {
    title: "Math Knowledge Practice Set",
    subtitle: "Sixteen questions in the Math Knowledge style: algebra, geometry, number properties, roots, and basic statistics. Budget about 20 minutes and work without a calculator.",
    timeLimitMinutes: 20,
    passages: [],
    questions: [
      {
        id: "mk-01",
        prompt: "Evaluate: −4² + (−4)²",
        choices: ["−16", "0", "16", "32"],
        answer: 1,
        explain: "The term −4² means −(4²) = −16, because the exponent applies only to the 4. The term (−4)² squares the entire quantity: (−4)(−4) = 16. Adding gives −16 + 16 = 0. Choice −16 counts only the first term, and choice 32 treats both terms as positive."
      },
      {
        id: "mk-02",
        prompt: "What is the least common multiple of 8 and 12?",
        choices: ["4", "12", "24", "96"],
        answer: 2,
        explain: "List multiples: 8, 16, 24, ... and 12, 24, ... The first multiple both share is 24, so the LCM is 24. Choice 4 is actually the greatest common factor of 8 and 12, and choice 12 is a multiple of 12 but not of 8."
      },
      {
        id: "mk-03",
        prompt: "Which of these fractions has the greatest value?",
        choices: ["1/3", "3/8", "2/5", "5/12"],
        answer: 3,
        explain: "Cross-multiply to compare: 5/12 versus 2/5 gives 5 × 5 = 25 against 2 × 12 = 24, so 5/12 is larger. Checking the rest: 3/8 = 0.375 and 1/3 ≈ 0.333 both fall below 2/5 = 0.4. The greatest fraction is 5/12."
      },
      {
        id: "mk-04",
        prompt: "What is 37.5% of 64?",
        choices: ["16", "21", "24", "32"],
        answer: 2,
        explain: "Convert the percent to the fraction 3/8, since 37.5% = 0.375 = 3/8. Then 64 ÷ 8 = 8, and 3 × 8 = 24. Choice 32 comes from taking half of 64 instead, and choice 16 comes from taking a quarter."
      },
      {
        id: "mk-05",
        prompt: "Simplify: (x⁵ · x³) ÷ x⁶",
        choices: ["x²", "x⁴", "x⁸", "x¹⁴"],
        answer: 0,
        explain: "Apply the product rule to the numerator: x⁵ · x³ = x^(5 + 3) = x⁸. Then apply the quotient rule: x⁸ ÷ x⁶ = x^(8 − 6) = x². Choice x⁸ forgets to divide by x⁶, and choice x¹⁴ multiplies the exponents."
      },
      {
        id: "mk-06",
        prompt: "Simplify completely: √50 + √8",
        choices: ["√58", "7√2", "13√2", "25√2"],
        answer: 1,
        explain: "Pull perfect squares out of each root: √50 = √(25 × 2) = 5√2 and √8 = √(4 × 2) = 2√2. Then add like radicals: 5√2 + 2√2 = 7√2. Choice √58 comes from wrongly adding 50 + 8 under a single root."
      },
      {
        id: "mk-07",
        prompt: "If 4(x − 2) = 3x + 1, then x =",
        choices: ["−9", "7", "9", "11"],
        answer: 2,
        explain: "Distribute: 4x − 8 = 3x + 1. Subtract 3x from both sides to get x − 8 = 1, then add 8: x = 9. Check: 4(9 − 2) = 28 and 3(9) + 1 = 28. Choice −9 comes from mishandling the sign when moving terms across."
      },
      {
        id: "mk-08",
        prompt: "Solve for x: −2x + 5 > 11",
        choices: ["x < −3", "x > −3", "x < 3", "x > 3"],
        answer: 0,
        explain: "Subtract 5 from both sides: −2x > 6. Divide both sides by −2, which flips the inequality to x < −3. Choice x > −3 is the result of doing the division but forgetting the sign flip, the most common error on this type."
      },
      {
        id: "mk-09",
        prompt: "If 2x + y = 11 and x − y = 1, what is the value of y?",
        choices: ["2", "3", "4", "5"],
        answer: 1,
        explain: "Add the two equations to eliminate y: (2x + y) + (x − y) = 3x = 12, so x = 4. Substitute into x − y = 1: 4 − y = 1, which gives y = 3. Check in the first equation: 2(4) + 3 = 11. Choice 4 is the value of x, not y."
      },
      {
        id: "mk-10",
        prompt: "What are all the solutions of x² − 3x − 28 = 0?",
        choices: ["x = −14 or x = 2", "x = −7 or x = 4", "x = −4 or x = 7", "x = −2 or x = 14"],
        answer: 2,
        explain: "Find two numbers that multiply to −28 and add to −3: −7 and 4. Factor: (x − 7)(x + 4) = 0, so x = 7 or x = −4. Choice x = −7 or x = 4 reverses the signs inside the factors, a common slip."
      },
      {
        id: "mk-11",
        prompt: "Two angles of a triangle measure 47° and 68°. How many degrees are in the third angle?",
        choices: ["55", "65", "75", "115"],
        answer: 1,
        explain: "Triangle angles sum to 180°, so the third angle = 180 − (47 + 68) = 180 − 115 = 65°. Choice 115 is the sum of the two given angles — it forgets to subtract from 180."
      },
      {
        id: "mk-12",
        prompt: "A right triangle has legs measuring 5 cm and 12 cm. How many centimeters long is the hypotenuse?",
        choices: ["13", "15", "17", "60"],
        answer: 0,
        explain: "By the Pythagorean theorem, c² = 5² + 12² = 25 + 144 = 169, so c = √169 = 13 cm — the 5-12-13 triple. Choice 60 comes from multiplying the legs, which computes the triangle's area instead of the hypotenuse."
      },
      {
        id: "mk-13",
        prompt: "The area of a circle is 36π square inches. What is its circumference, in inches?",
        choices: ["6π", "12π", "36π", "72π"],
        answer: 1,
        explain: "From A = πr² = 36π, the radius is r = 6 inches. Then C = 2πr = 2π(6) = 12π inches. Choice 36π mistakes the given area for the circumference, and choice 6π reports only the radius."
      },
      {
        id: "mk-14",
        prompt: "A cylinder has a radius of 2 feet and a height of 6 feet. What is its volume, in cubic feet?",
        choices: ["12π", "24π", "36π", "48π"],
        answer: 1,
        explain: "Use V = πr²h and substitute: V = π(2)²(6) = π(4)(6) = 24π cubic feet. Choice 12π comes from using πrh and forgetting to square the radius."
      },
      {
        id: "mk-15",
        prompt: "The mean of five numbers is 14. Four of the numbers are 10, 12, 15, and 16. What is the fifth number?",
        choices: ["14", "16", "17", "19"],
        answer: 2,
        explain: "Convert the mean to a total: sum = mean × count = 14 × 5 = 70. The four known numbers sum to 10 + 12 + 15 + 16 = 53, so the fifth number is 70 − 53 = 17. Choice 14 just repeats the mean instead of finding the missing value."
      },
      {
        id: "mk-16",
        prompt: "A fair coin is flipped and a fair six-sided die is rolled. What is the probability that the coin shows heads and the die shows an even number?",
        choices: ["1/12", "1/6", "1/4", "2/3"],
        answer: 2,
        explain: "The events are independent, so multiply: P(heads) = 1/2 and P(even on a die) = 3/6 = 1/2, giving 1/2 × 1/2 = 1/4. Choice 1/12 answers heads and one specific number, and choice 2/3 comes from adding the two probabilities instead of multiplying."
      }
    ]
  }
};

