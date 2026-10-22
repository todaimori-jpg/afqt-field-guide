window.ASVAB = window.ASVAB || {};
window.ASVAB.diagnosticMath = {
  "lessons": [],
  "practice": {
    "title": "Diagnostic Test — Math Sections",
    "subtitle": "Arithmetic Reasoning and Mathematics Knowledge, 32 questions. No calculator.",
    "timeLimitMinutes": 59,
    "passages": [],
    "questions": [
      {
        "id": "dar-01",
        "section": "ar",
        "prompt": "A number is increased by 12, and the result is multiplied by 3 to give 63. What is the number?",
        "choices": ["9", "17", "21", "27"],
        "answer": 0,
        "explain": "Let n be the number. The words translate to (n + 12) × 3 = 63. Divide by 3 first: n + 12 = 21, so n = 9. Choice 17 undoes the steps in the wrong order — subtracting 12 before dividing by 3."
      },
      {
        "id": "dar-02",
        "section": "ar",
        "prompt": "A 12-ounce can of juice concentrate costs $2.40. A 16-ounce can of the same concentrate costs $3.36. What is the unit price, in cents per ounce, of the better buy?",
        "choices": ["20", "21", "24", "28"],
        "answer": 0,
        "explain": "Work in cents and divide cost by ounces. The 12-ounce can: 240 ÷ 12 = 20 cents per ounce. The 16-ounce can: 336 ÷ 16 = 21 cents per ounce. The smaller can is the better buy, at 20 cents per ounce. Choice 21 is the unit price of the worse buy — the second division most students compute."
      },
      {
        "id": "dar-03",
        "section": "ar",
        "prompt": "A grill is regularly priced at $80. It goes on sale at 25% off. What is the sale price?",
        "choices": ["$20", "$55", "$60", "$64"],
        "answer": 2,
        "explain": "The discount is 0.25 × 80 = $20, so the sale price is 80 − 20 = $60. Choice $20 reports the discount instead of the price after it, and choice $64 takes only 20% off."
      },
      {
        "id": "dar-04",
        "section": "ar",
        "prompt": "A bus travels at a steady 44 miles per hour for 2.5 hours. How far does the bus travel?",
        "choices": ["88 miles", "99 miles", "110 miles", "132 miles"],
        "answer": 2,
        "explain": "Distance = rate × time = 44 × 2.5. Split it: 44 × 2 = 88 and 44 × 0.5 = 22, so 88 + 22 = 110 miles. Choice 88 drops the half hour and multiplies by 2; choice 132 rounds the time up to 3 hours."
      },
      {
        "id": "dar-05",
        "section": "ar",
        "prompt": "The ages of four cousins are 12, 15, 17, and 20. What is their average age in years?",
        "choices": ["16", "17", "32", "64"],
        "answer": 0,
        "explain": "Add, then divide: 12 + 15 + 17 + 20 = 64, and 64 ÷ 4 = 16. Choice 64 is the sum with the division skipped, and 32 divides by 2 instead of 4. Choice 17 is the median, not the mean."
      },
      {
        "id": "dar-06",
        "section": "ar",
        "prompt": "At a public pool, the ratio of adults to children is 3 to 5. There are 96 people at the pool in all. How many children are there?",
        "choices": ["36", "60", "64", "96"],
        "answer": 1,
        "explain": "The ratio has 3 + 5 = 8 parts, and 96 ÷ 8 = 12 people per part. Children hold 5 parts: 5 × 12 = 60. Choice 36 counts the adults — 3 parts — instead of the children."
      },
      {
        "id": "dar-07",
        "section": "ar",
        "prompt": "A store raised the price of a desk by 15%. The desk now sells for $322. What was the price before the increase?",
        "choices": ["$273.70", "$280", "$307", "$322"],
        "answer": 1,
        "explain": "The new price is 115% of the old price, so the old price is 322 ÷ 1.15 = 280. Check: 280 + 0.15 × 280 = 280 + 42 = 322. The tempting $273.70 comes from computing 0.85 × 322, which takes 15% off the new price instead of undoing a 15% increase."
      },
      {
        "id": "dar-08",
        "section": "ar",
        "prompt": "A closed storage box is 50 centimeters long, 20 centimeters wide, and 30 centimeters tall. Given that 1 liter = 1,000 cubic centimeters, how many liters does the box hold?",
        "choices": ["30 liters", "300 liters", "3,000 liters", "30,000 liters"],
        "answer": 0,
        "explain": "Volume = 50 × 20 × 30 = 30,000 cubic centimeters. Divide by 1,000 to convert: 30,000 ÷ 1,000 = 30 liters. Every other choice stops the conversion short — dividing by 100, by 10, or not at all."
      },
      {
        "id": "dar-09",
        "section": "ar",
        "prompt": "A cyclist rides 15 miles in 45 minutes. At the same rate, how many miles will she ride in 3 hours?",
        "choices": ["20 miles", "45 miles", "60 miles", "90 miles"],
        "answer": 2,
        "explain": "Convert 3 hours to 180 minutes. She covers one 15-mile stretch every 45 minutes, and 180 ÷ 45 = 4 stretches, so 4 × 15 = 60 miles. Choice 45 treats the rate as 15 miles per hour; choice 20 is her speed in miles per hour, not the distance asked for."
      },
      {
        "id": "dar-10",
        "section": "ar",
        "prompt": "The sum of three consecutive odd integers is 87. What is the largest of the three integers?",
        "choices": ["25", "27", "29", "31"],
        "answer": 3,
        "explain": "Call them x, x + 2, and x + 4. Then 3x + 6 = 87, so 3x = 81 and x = 27. The integers are 27, 29, and 31, and the largest is 31. Choice 29 is the middle integer, where you land if you divide 87 by 3 and stop."
      },
      {
        "id": "dar-11",
        "section": "ar",
        "prompt": "One copy machine prints a report in 6 minutes. A second copy machine prints the same report in 12 minutes. Working together at these rates, how many minutes will the two machines need to print one report?",
        "choices": ["4 minutes", "6 minutes", "9 minutes", "18 minutes"],
        "answer": 0,
        "explain": "Combined rate: 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 of the report per minute. One report at 1/4 per minute takes 4 minutes. Choice 9 is the simple average of 6 and 12 — combined rates never average that way."
      },
      {
        "id": "dar-12",
        "section": "ar",
        "prompt": "A math club has 10 eighth-graders with an average test score of 90 and 15 seventh-graders with an average test score of 78. What is the average test score for the whole club?",
        "choices": ["78", "82.8", "84", "90"],
        "answer": 1,
        "explain": "Weighted average = total points ÷ total students = (10 × 90 + 15 × 78) ÷ 25 = (900 + 1,170) ÷ 25 = 2,070 ÷ 25 = 82.8. Choice 84 averages the two group averages, which ignores that more of the students scored 78."
      },
      {
        "id": "dar-13",
        "section": "ar",
        "prompt": "A rectangular garden measures 14 feet long and 9 feet wide. Fencing is sold in 8-foot sections that cost $13 each. How much will it cost to buy enough fencing to enclose the garden?",
        "choices": ["$65", "$71.50", "$78", "$91"],
        "answer": 2,
        "explain": "Fencing follows the perimeter: 2 × (14 + 9) = 46 feet. At 8 feet per section, 46 ÷ 8 = 5.75, so 6 full sections are needed: 6 × $13 = $78. Choice $71.50 prices 5.75 sections, but partial sections are not sold, and $65 buys only 5."
      },
      {
        "id": "dar-14",
        "section": "ar",
        "prompt": "Maya drives 120 miles to a lake at an average speed of 60 mph. She returns along the same road at an average speed of 40 mph. What is her average speed for the entire trip?",
        "choices": ["40 mph", "48 mph", "50 mph", "60 mph"],
        "answer": 1,
        "explain": "Time out: 120 ÷ 60 = 2 hours. Time back: 120 ÷ 40 = 3 hours. Average speed = total distance ÷ total time = 240 ÷ 5 = 48 mph. Choice 50 is the average of 60 and 40 — a trap, because she spends more time at the slower speed."
      },
      {
        "id": "dar-15",
        "section": "ar",
        "prompt": "A rectangular living room is 15 feet long and 12 feet wide. Carpet costs $2.75 per square foot installed. How much will it cost to carpet the room?",
        "choices": ["$148.50", "$412.50", "$495", "$540"],
        "answer": 2,
        "explain": "Carpeting follows the area: 15 × 12 = 180 square feet, and 180 × 2.75 = $495. The tempting $148.50 multiplies the rate by the perimeter, 2 × (15 + 12) = 54 feet, instead of by the area."
      },
      {
        "id": "dar-16",
        "section": "ar",
        "prompt": "Teresa deposits $2,500 in an account that pays 6% simple interest per year. How much interest does the account earn in 8 months?",
        "choices": ["$25", "$50", "$100", "$150"],
        "answer": 2,
        "explain": "I = P × r × t, with t in years. One year of interest: 2,500 × 0.06 = $150. Eight months is 8/12 = 2/3 of a year, so I = 150 × 2/3 = $100. Choice $150 charges a full year of interest and skips the time conversion."
      },
      {
        "id": "dmk-01",
        "section": "mk",
        "prompt": "What is the value of −3² + (−3)²?",
        "choices": ["−18", "0", "9", "18"],
        "answer": 1,
        "explain": "The exponent applies before the negative sign, so −3² = −(3 × 3) = −9. The parentheses change everything: (−3)² = (−3) × (−3) = 9. The sum is −9 + 9 = 0. Choice 18 treats both terms as positive 9."
      },
      {
        "id": "dmk-02",
        "section": "mk",
        "prompt": "What is the least common multiple of 9 and 12?",
        "choices": ["3", "18", "36", "108"],
        "answer": 2,
        "explain": "Multiples of 9: 9, 18, 27, 36... Multiples of 12: 12, 24, 36... The smallest number on both lists is 36. Choice 3 is the greatest common factor — the reverse question — and 108 is the product, a common multiple but not the least. Choice 18 is a multiple of 9 but not of 12."
      },
      {
        "id": "dmk-03",
        "section": "mk",
        "prompt": "Which of the following fractions is the largest?",
        "choices": ["7/12", "3/5", "5/8", "2/3"],
        "answer": 3,
        "explain": "Compare with the common denominator 120: 7/12 = 70/120, 3/5 = 72/120, 5/8 = 75/120, and 2/3 = 80/120. The largest is 2/3. Choice 5/8 is the second largest and draws students who compare only the numerators."
      },
      {
        "id": "dmk-04",
        "section": "mk",
        "prompt": "What is 4 1/3 − 1 3/4?",
        "choices": ["2 5/12", "2 7/12", "3 1/12", "3 5/12"],
        "answer": 1,
        "explain": "Rewrite in twelfths: 4 1/3 = 4 4/12 and 1 3/4 = 1 9/12. Borrow once: 3 16/12 − 1 9/12 = 2 7/12. Choice 3 5/12 skips the borrow — it subtracts 4 − 1 = 3 whole and drops the negative sign on the fraction difference."
      },
      {
        "id": "dmk-05",
        "section": "mk",
        "prompt": "What is √72 written in simplest radical form?",
        "choices": ["2√6", "6√2", "6√3", "It cannot be simplified."],
        "answer": 1,
        "explain": "Factor out the largest perfect square: √72 = √(36 × 2) = √36 × √2 = 6√2. The wrong radicals pair 72 with the wrong factors: 2√6 equals √24 and 6√3 equals √108."
      },
      {
        "id": "dmk-06",
        "section": "mk",
        "prompt": "Simplify (y⁶ × y⁵) ÷ y⁷.",
        "choices": ["y¹¹", "y⁶", "y⁴", "y¹⁸"],
        "answer": 2,
        "explain": "Multiply first: y⁶ × y⁵ = y¹¹. Dividing like bases subtracts exponents, so y¹¹ ÷ y⁷ = y⁴. Choice y¹¹ stops after multiplying and ignores the division, y¹⁸ adds all three exponents, and y⁶ subtracts in the wrong order (7 + 5 − 6)."
      },
      {
        "id": "dmk-07",
        "section": "mk",
        "prompt": "Solve for x: 7x + 4 = 3x − 12",
        "choices": ["−16", "−4", "−2", "4"],
        "answer": 1,
        "explain": "Subtract 3x from both sides: 4x + 4 = −12, so 4x = −16 and x = −4. Check: 7(−4) + 4 = −24 and 3(−4) − 12 = −24. Choice −16 stops one step early, before dividing by 4."
      },
      {
        "id": "dmk-08",
        "section": "mk",
        "prompt": "If 2x + y = 11 and x − y = 1, what is the value of x?",
        "choices": ["−3", "3", "4", "7"],
        "answer": 2,
        "explain": "Add the two equations to cancel y: 3x = 12, so x = 4. Then y = 4 − 1 = 3, and the check 2(4) + 3 = 11 holds. Choice 3 is the value of y — the variable most students find first."
      },
      {
        "id": "dmk-09",
        "section": "mk",
        "prompt": "Factor completely: x² − 7x + 12",
        "choices": ["(x − 2)(x − 6)", "(x + 3)(x + 4)", "(x − 12)(x + 1)", "(x − 3)(x − 4)"],
        "answer": 3,
        "explain": "Find two numbers with product +12 and sum −7: they are −3 and −4, so x² − 7x + 12 = (x − 3)(x − 4). The tempting (x + 3)(x + 4) multiplies to 12 but expands to x² + 7x + 12 — a sign error."
      },
      {
        "id": "dmk-10",
        "section": "mk",
        "prompt": "Solve the inequality: −3x + 5 > 20",
        "choices": ["x < −5", "x > −5", "x < 5", "x > 5"],
        "answer": 0,
        "explain": "Subtract 5 from both sides: −3x > 15. Divide by −3 and reverse the inequality sign: x < −5. Choice x > −5 is the result of dividing by −3 and forgetting to flip the sign."
      },
      {
        "id": "dmk-11",
        "section": "mk",
        "prompt": "Two angles of a triangle measure 42° and 68°. What is the measure of the third angle?",
        "choices": ["70°", "110°", "112°", "138°"],
        "answer": 0,
        "explain": "Triangle angles sum to 180°: 42 + 68 = 110, and 180 − 110 = 70°. Choice 110° adds the two known angles instead of subtracting their sum from 180."
      },
      {
        "id": "dmk-12",
        "section": "mk",
        "prompt": "What is the area of a circle with a radius of 7 inches? Use 22/7 for π.",
        "choices": ["22 square inches", "44 square inches", "49 square inches", "154 square inches"],
        "answer": 3,
        "explain": "A = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 square inches. Choice 44 is the circumference, 2πr — the two circle formulas are easy to swap under time pressure."
      },
      {
        "id": "dmk-13",
        "section": "mk",
        "prompt": "A right triangle has legs measuring 6 cm and 8 cm. What is the length of the hypotenuse?",
        "choices": ["10 cm", "14 cm", "48 cm", "100 cm"],
        "answer": 0,
        "explain": "Pythagorean theorem: c² = 6² + 8² = 36 + 64 = 100, so c = √100 = 10 cm. Choice 100 skips the final square root, and 14 simply adds the two legs."
      },
      {
        "id": "dmk-14",
        "section": "mk",
        "prompt": "What is the surface area of a rectangular solid that is 10 cm long, 8 cm wide, and 4 cm high?",
        "choices": ["152 cm²", "304 cm²", "320 cm²", "608 cm²"],
        "answer": 1,
        "explain": "SA = 2(lw + lh + wh) = 2(10 × 8 + 10 × 4 + 8 × 4) = 2(80 + 40 + 32) = 2 × 152 = 304 cm². Choice 320 is the volume, 10 × 8 × 4 — the most common swap on solids — and 152 adds the three face pairs once without doubling."
      },
      {
        "id": "dmk-15",
        "section": "mk",
        "prompt": "After four tests, a student's mean score is 80. She scores 90 on the fifth test. What is her mean score after five tests?",
        "choices": ["80", "82", "85", "90"],
        "answer": 1,
        "explain": "Four tests at a mean of 80 total 4 × 80 = 320 points. Add the fifth: (320 + 90) ÷ 5 = 410 ÷ 5 = 82. Choice 85 averages 80 and 90 directly, treating the new score as half the grade when it is only one of five."
      },
      {
        "id": "dmk-16",
        "section": "mk",
        "prompt": "A jar contains 5 red, 3 blue, and 4 green marbles. One marble is drawn at random. What is the probability that it is not blue?",
        "choices": ["1/4", "5/12", "7/12", "3/4"],
        "answer": 3,
        "explain": "There are 5 + 3 + 4 = 12 marbles, and 5 + 4 = 9 are not blue, so P(not blue) = 9/12 = 3/4. Choice 1/4 is the probability of drawing blue — the complement of what was asked."
      }
    ]
  }
};
