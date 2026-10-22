window.ASVAB = window.ASVAB || {};
window.ASVAB.ar = {
  lessons: [
    {
      id: "words-to-equations",
      title: "Translating Words to Equations",
      summary: "Turn any word problem into one equation before computing, and report the exact quantity asked for.",
      minutes: 12,
      blocks: [
        { type: "h", text: "Why Setup Beats Speed" },
        { type: "p", text: "Arithmetic Reasoning gives you generous time per question, so lost points come from setting a problem up wrong, not from working slowly. The fix is mechanical: name a variable, translate the English into one equation, and only then do any arithmetic. This lesson walks that routine end to end and adds a rescue method for when the setup stalls." },
        { type: "list", ordered: false, items: [
          "of, times, product — multiply",
          "per, each, every — divide, or a rate",
          "is, was, will be, results in — equals",
          "sum, more than, increased by — add",
          "less than, fewer than — subtract, with the order reversed",
          "twice, double — multiply by 2; half of — multiply by 1/2"
        ] },
        { type: "key", label: "KEY RULE", text: "Write the full equation before you compute anything. An equation can be checked; mental math cannot." },
        { type: "warn", label: "WATCH OUT", text: "Less than flips the order. Five less than n is n − 5, never 5 − n." },
        { type: "example", prompt: "Notebooks cost $3 each. Maria buys n notebooks and pays with a $20 bill, receiving $5 in change. How many notebooks did she buy?", steps: ["Name the variable with units: n = number of notebooks.", "Money she spent: 20 − 5 = 15 dollars.", "Translate price × count = spent: 3n = 15.", "Solve: n = 15 ÷ 3 = 5."], answer: "5 notebooks", note: "Turning the story into 3n = 15 first reduces the whole problem to one division." },
        { type: "example", prompt: "Seven less than twice a number is 25. What is the number?", steps: ["Let x = the number.", "Twice the number is 2x; seven less than that is 2x − 7 — the order flips.", "Equation: 2x − 7 = 25.", "Add 7: 2x = 32. Divide by 2: x = 16.", "Check: 2 × 16 − 7 = 32 − 7 = 25."], answer: "16", note: "The check by substitution catches an order reversal immediately." },
        { type: "h", text: "Answer the Question Asked" },
        { type: "p", text: "After solving, reread the final sentence. Many wrong choices are a correct number attached to the wrong quantity: the discount instead of the sale price, the smallest instead of the largest, the leftover dollars instead of the months. Label each step with units so your last line names exactly what was asked." },
        { type: "example", prompt: "A car rental costs $45 per day plus $0.20 per mile. Ken rents the car for 3 days and the bill is $154.00. How many miles did he drive?", steps: ["Let m = number of miles.", "Daily charge: 45 × 3 = 135 dollars.", "Equation: 135 + 0.20m = 154.00.", "Subtract: 0.20m = 19.00.", "Divide: m = 19 ÷ 0.20 = 95."], answer: "95 miles", note: "The bill total 154 is never the answer — only m is." },
        { type: "tip", label: "TIP", text: "Stuck on the setup? Test the answer choices in the story instead. With clean numbers, plugging in the answers is faster than solving, and exactly one choice fits." }
      ]
    },
    {
      id: "ratios-and-percents",
      title: "Ratios, Proportions and Percents",
      summary: "Set up ratios and proportions correctly, and handle percent problems forward and in reverse.",
      minutes: 14,
      blocks: [
        { type: "h", text: "Part-to-Part vs Part-to-Whole" },
        { type: "p", text: "A ratio compares parts to each other, not to the whole. If cats and dogs are in a 3:5 ratio, cats are not 3/5 of the animals — they are 3 parts out of 3 + 5 = 8 total parts. Almost every ratio error is mixing up these two ideas, so find the total number of parts first, every time." },
        { type: "example", prompt: "An animal shelter houses cats and dogs in a ratio of 3:5. There are 40 animals in all. How many of them are dogs?", steps: ["Total ratio parts: 3 + 5 = 8.", "Each part is worth 40 ÷ 8 = 5 animals.", "Dogs hold 5 parts: 5 × 5 = 25.", "Check: cats = 3 × 5 = 15, and 15 + 25 = 40."], answer: "25 dogs", note: "Dividing by the sum of the ratio terms converts parts into animals in one move." },
        { type: "tip", label: "TIP", text: "A ratio of 3:5 forces the total to be a multiple of 8. If a choice is not a multiple of the summed ratio terms, cross it out before you calculate." },
        { type: "h", text: "Proportions and Cross-Multiplying" },
        { type: "p", text: "A proportion sets two rates equal, such as parts over minutes. Keep the same units in the same position on both sides, cross-multiply, and divide. One clear equation beats a chain of short conversions." },
        { type: "example", prompt: "A machine produces 45 parts in 12 minutes. Working at the same rate, how many minutes does it need to produce 150 parts?", steps: ["Set rates equal: 45 parts / 12 minutes = 150 parts / t minutes.", "Cross-multiply: 45t = 12 × 150 = 1,800.", "Divide: t = 1,800 ÷ 45 = 40."], answer: "40 minutes", note: "Matching units position-for-position is what makes cross-multiplication legal." },
        { type: "h", text: "Percents, Forward and in Reverse" },
        { type: "p", text: "Forward problems compute a percent of an amount: multiply. Increases and decreases act on the current amount, so a 20% raise multiplies by 1.20 and a 20% discount multiplies by 0.80. Reverse problems hide the original: write percent × original = result, then divide." },
        { type: "warn", label: "WATCH OUT", text: "In reverse-percent problems, divide by the percent that remains. After a 20% discount the sale price is 80% of the original — so divide by 0.80. Never add 20% of the sale price back on." },
        { type: "example", prompt: "After a 20% discount, a jacket sells for $64. What was the original price?", steps: ["Let p = original price. A 20% discount leaves 80%: 0.80p = 64.", "Divide: p = 64 ÷ 0.80 = 80.", "Check: 20% of 80 is 16, and 80 − 16 = 64."], answer: "$80", note: "Adding 20% of 64 back gives 76.80 — a wrong answer built from a right-looking step." },
        { type: "key", label: "KEY RULE", text: "Every percent acts on the original amount. In reverse problems, divide by the rate that remains; never apply the percent to the changed value." }
      ]
    },
    {
      id: "rates-and-work",
      title: "Rates, Distance and Work",
      summary: "Use distance = rate × time, convert units inside rate problems, and combine workers by adding rates.",
      minutes: 14,
      blocks: [
        { type: "h", text: "Distance = Rate × Time" },
        { type: "p", text: "Nearly every rate question is the same fact in a different costume: distance equals rate times time. Cover the quantity you want and the other two show you the operation. Convert units before computing, not after — keep one consistent unit system per line." },
        { type: "list", ordered: false, items: [
          "distance = rate × time",
          "rate = distance ÷ time",
          "time = distance ÷ rate",
          "mph means miles per hour: miles ÷ hours",
          "1 hour = 3,600 seconds; 1 mile = 5,280 feet"
        ] },
        { type: "example", prompt: "A jet cruises at 480 miles per hour. What is its speed in feet per second?", steps: ["Miles to feet: 480 × 5,280 = 2,534,400 feet per hour.", "Hours to seconds: divide by 3,600.", "2,534,400 ÷ 3,600 = 704 feet per second."], answer: "704 feet per second", note: "Chaining both conversions in one line, 480 × 5,280 ÷ 3,600, avoids rounding from two separate divisions." },
        { type: "warn", label: "WATCH OUT", text: "Round-trip average speed is total distance ÷ total time, not the average of the two speeds. The two speeds only average cleanly when both legs take the same amount of time." },
        { type: "example", prompt: "Ines rides 15 miles to town at 10 mph, then returns along the same road at 15 mph. What is her average speed for the whole trip?", steps: ["Time out: 15 ÷ 10 = 1.5 hours.", "Time back: 15 ÷ 15 = 1 hour.", "Total: 30 miles in 2.5 hours.", "Average speed: 30 ÷ 2.5 = 12 mph."], answer: "12 mph", note: "The average of 10 and 15 is 12.5 — close enough to look right, which is exactly why the trap works." },
        { type: "h", text: "Work Problems: Add the Rates" },
        { type: "p", text: "In combined-work problems, add what each worker finishes per hour, never the hours. A job done alone in a hours is a rate of 1/a per hour. Two workers together finish 1/a + 1/b per hour, so the combined time is the reciprocal of that sum." },
        { type: "example", prompt: "Dana can mow a lawn in 3 hours and her brother can mow the same lawn in 6 hours. Working together, how long does the lawn take?", steps: ["Dana's rate: 1/3 lawn per hour; her brother's: 1/6.", "Add: 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 lawn per hour.", "A half lawn per hour means the whole lawn takes 2 hours."], answer: "2 hours", note: "Check: in 2 hours Dana does 2/3 and her brother does 1/3 — one full lawn." },
        { type: "key", label: "KEY RULE", text: "Rates add; times never do. Convert every time to a per-hour (or per-minute) rate before combining workers." }
      ]
    },
    {
      id: "averages-and-mixtures",
      title: "Averages and Weighted Mixtures",
      summary: "Rearrange mean = total ÷ count, weight averages by group size, and blend mixtures with value equations.",
      minutes: 12,
      blocks: [
        { type: "h", text: "Mean = Total ÷ Count" },
        { type: "p", text: "The mean is a division you can run backwards. Multiply the average by the count to get the hidden total; totals are what add and subtract cleanly. Missing-value questions are almost always one multiplication followed by one subtraction." },
        { type: "example", prompt: "The average of four numbers is 15. When one number is removed, the average of the remaining three is 13. What number was removed?", steps: ["Original total: 4 × 15 = 60.", "New total: 3 × 13 = 39.", "Removed value: 60 − 39 = 21."], answer: "21", note: "Averages hide totals; recover the totals first and the answer falls out by subtraction." },
        { type: "h", text: "Weighted Averages" },
        { type: "p", text: "When groups have different sizes, each average counts for only its share of the people. Multiply each average by its group size, add the products, and divide by everyone. Equal-sized groups are the only case where averaging the averages is legal." },
        { type: "example", prompt: "In a class of 24 students, the 16 who attended review sessions averaged 84 on the exam, and the other 8 averaged 66. What was the class average?", steps: ["Group totals: 16 × 84 = 1,344 and 8 × 66 = 528.", "Class total: 1,344 + 528 = 1,872 points.", "Divide by everyone: 1,872 ÷ 24 = 78."], answer: "78", note: "The class is two-thirds attendees, so the answer sits two-thirds of the way from 66 up to 84." },
        { type: "warn", label: "WATCH OUT", text: "Never average two averages directly unless the groups are the same size. Weight by group size first, or the answer tilts toward the wrong group." },
        { type: "h", text: "Mixture Problems" },
        { type: "p", text: "Blend questions are value equations: each ingredient contributes (price per unit) × (units), and the contributions must sum to the blend's total value. Write that one equation with x as the unknown amount, and the rest is ordinary arithmetic." },
        { type: "example", prompt: "How many pounds of nuts priced at $6 per pound must be mixed with 10 pounds of nuts priced at $3 per pound to make a blend worth $5 per pound?", steps: ["Let x = pounds of $6 nuts. Blend weight: x + 10 pounds.", "Value equation: 6x + 3(10) = 5(x + 10).", "Expand: 6x + 30 = 5x + 50.", "Solve: x = 20.", "Check: 20 × 6 + 10 × 3 = 150 dollars for 30 pounds = $5 per pound."], answer: "20 pounds", note: "Total value ÷ total weight is the blend price — one equation captures the whole story." },
        { type: "key", label: "KEY RULE", text: "Total = average × count. Every average question is a total question wearing a disguise." }
      ]
    },
    {
      id: "money-problems",
      title: "Money, Interest and Profit",
      summary: "Compute simple and compound interest, markups, discounts, unit prices, and profit by hand.",
      minutes: 12,
      blocks: [
        { type: "h", text: "The Money Formulas" },
        { type: "list", ordered: false, items: [
          "Simple interest: I = P × r × t (principal, annual rate as a decimal, time in years)",
          "Profit = revenue − cost",
          "Markup and discount are percent changes applied to the current price",
          "Unit price = total price ÷ number of units"
        ] },
        { type: "p", text: "Simple interest is linear: the same dollars of interest arrive every year, so I = P × r × t with t in years. Write the rate as a decimal (5% = 0.05), and check that the rate and the time use the same clock before multiplying." },
        { type: "example", prompt: "A savings account pays 4% simple interest per year on a deposit of $600. How much interest does it earn in 3 years?", steps: ["Rate as a decimal: 4% = 0.04.", "One year of interest: 600 × 0.04 = $24.", "Three years: 24 × 3 = $72."], answer: "$72", note: "Finding one year first keeps the multiplication small and easy to check." },
        { type: "warn", label: "WATCH OUT", text: "A rate quoted per year applies to years only. Nine months is 9/12 = 0.75 year — plugging 9 in as the time multiplies the interest by 12." },
        { type: "example", prompt: "Sofia borrows $800 at 6% simple interest per year and repays it after 6 months. How much interest does she owe?", steps: ["Convert time first: 6 months = 6/12 = 0.5 year.", "One year of interest: 800 × 0.06 = $48.", "Half a year: 48 × 0.5 = $24."], answer: "$24", note: "Converting t before touching I = Prt makes the wrong-clock error impossible." },
        { type: "h", text: "Compound Interest in Plain Terms" },
        { type: "p", text: "Compound interest pays interest on interest, so the balance grows by a growing amount. At 10% per year, $100 becomes $110, then $121, then $133.10 — while simple interest adds a flat $10 each year and reaches only $130. Compounding means repeated multiplication by the growth factor, which always beats simple interest given enough time." },
        { type: "example", prompt: "A store buys a tool for $40 and marks it up 60%. At a clearance sale the marked price is cut by 25%. What is the store's profit per tool at the sale price?", steps: ["Markup: 40 × 1.60 = $64 marked price.", "Discount: 25% off leaves 75%, so 64 × 0.75 = $48 sale price.", "Profit: revenue − cost = 48 − 40 = $8."], answer: "$8", note: "Each percent multiplies the current price: × 1.60 then × 0.75 nets to × 1.20 overall." },
        { type: "tip", label: "TIP", text: "For best-buy questions divide price by quantity, not the other way around. The bigger package usually wins, but stores count on you assuming it — check the unit price." },
        { type: "key", label: "KEY RULE", text: "Profit = revenue − cost, and interest = principal × rate × time with rate and time on the same clock. Money problems are percent problems wearing prices." }
      ]
    },
    {
      id: "geometry-words",
      title: "Geometry Word Problems",
      summary: "Apply perimeter, area, volume, and the Pythagorean theorem to fences, paint, tanks, and ladders.",
      minutes: 12,
      blocks: [
        { type: "h", text: "Match the Question to the Formula" },
        { type: "p", text: "Geometry word problems are translation drills: the question word tells you the formula. Fencing, border, and trim ask for perimeter; carpet, paint, and grass ask for area; fill, pour, and hold ask for volume. Underline the question word before you compute." },
        { type: "list", ordered: false, items: [
          "Rectangle: P = 2(l + w); A = l × w",
          "Triangle: A = ½ × base × height",
          "Circle: C = 2πr; A = πr²",
          "Rectangular solid: V = l × w × h",
          "Pythagorean theorem: a² + b² = c²"
        ] },
        { type: "example", prompt: "A rectangular field is 40 feet long and 24 feet wide. Fencing costs $3 per foot. What does it cost to fence all four sides?", steps: ["Fencing means perimeter: 2 × (40 + 24) = 2 × 64 = 128 feet.", "Cost: 128 × 3 = $384."], answer: "$384", note: "One glance at the verb (fence) picks the formula." },
        { type: "warn", label: "WATCH OUT", text: "Perimeter and area answer different questions. A 30 × 20 yard has a perimeter of 100 feet but an area of 600 square feet — computing one when the question asks for the other is the most common geometry miss." },
        { type: "example", prompt: "A classroom wall is 18 feet long and 9 feet high. It has a door measuring 3 feet by 7 feet and two windows each measuring 2 feet by 3 feet. A roll of wallpaper covers 30 square feet. How many whole rolls are needed to cover the rest of the wall?", steps: ["Wall area: 18 × 9 = 162 square feet.", "Door: 3 × 7 = 21. Windows: 2 × (2 × 3) = 12.", "Coverable area: 162 − 21 − 12 = 129 square feet.", "Rolls: 129 ÷ 30 = 4.3, so buy 5 whole rolls."], answer: "5 rolls", note: "Subtract the openings before dividing, and round up — partial rolls are not sold." },
        { type: "h", text: "Volume and the Pythagorean Theorem" },
        { type: "p", text: "Filling questions live in cubic units: volume = length × width × height, then divide by the flow rate to get time. Leaning and diagonal questions are Pythagorean: the wall, the ground, and the ladder form a right triangle, with the ladder as the hypotenuse." },
        { type: "example", prompt: "An empty rectangular tank is 5 feet long, 4 feet wide, and 3 feet deep. A pump adds 5 cubic feet of water per minute. How many minutes does it take to fill the tank?", steps: ["Volume: 5 × 4 × 3 = 60 cubic feet.", "Time: 60 ÷ 5 = 12 minutes."], answer: "12 minutes", note: "Cubic feet divided by cubic feet per minute leaves minutes — the units confirm the setup." },
        { type: "example", prompt: "A 13-foot ladder leans against a wall with its base 5 feet from the wall. How high up the wall does the ladder reach?", steps: ["The ladder is the hypotenuse: 5² + h² = 13².", "25 + h² = 169, so h² = 144.", "h = √144 = 12."], answer: "12 feet", note: "Pythagorean triples like 5-12-13 appear constantly; recognizing them saves a minute." },
        { type: "key", label: "KEY RULE", text: "Fence → perimeter. Cover → area. Fill → volume. Lean or diagonal → Pythagorean theorem. Read the verb, pick the formula." }
      ]
    }
  ],
  practice: {
    title: "Arithmetic Reasoning Practice Set",
    subtitle: "Sixteen word problems in the style of the Arithmetic Reasoning subtest. Work without a calculator; plan on about 39 minutes.",
    timeLimitMinutes: 39,
    passages: [],
    questions: [
      {
        id: "ar-01",
        prompt: "Eight less than four times a number is 40. What is the number?",
        choices: ["-8", "8", "10", "12"],
        answer: 3,
        explain: "Translate in order: 4n − 8 = 40, so 4n = 48 and n = 12. The tempting 10 comes from ignoring the phrase 'eight less than' and computing 40 ÷ 4. Choosing 8 adds 8 instead of subtracting (4n + 8 = 40), and -8 reverses the order entirely (8 − 4n = 40)."
      },
      {
        id: "ar-02",
        prompt: "The ratio of wrenches to hammers in a tool crib is 5 to 3. There are 24 more wrenches than hammers. How many hammers are in the crib?",
        choices: ["12", "24", "36", "72"],
        answer: 2,
        explain: "Let the counts be 5k wrenches and 3k hammers. The setup is 5k − 3k = 24, so 2k = 24, k = 12, and hammers = 3 × 12 = 36. The tempting 24 is the given difference — but 24 is two ratio parts, not a hammer count. Choosing 12 stops at one part and forgets hammers hold 3 parts."
      },
      {
        id: "ar-03",
        prompt: "A fire engine travels one mile in 45 seconds. At that rate, how many miles can it travel in one hour?",
        choices: ["45", "60", "80", "90"],
        answer: 2,
        explain: "One hour holds 3,600 seconds, so rate = 3,600 ÷ 45 = 80 miles per hour. The tempting 60 treats the mile as taking a full minute. The choice 90 divides by 40, as if the mile took only 40 seconds."
      },
      {
        id: "ar-04",
        prompt: "An investor puts $1,200 into a bond paying 5% simple interest per year. How much interest does the bond pay over 2 years?",
        choices: ["$60", "$120", "$240", "$1,320"],
        answer: 1,
        explain: "Setup: I = P × r × t = 1,200 × 0.05 × 2 = $120. The tempting $60 is one year of interest — it forgets to multiply by the 2 years. Choosing $1,320 reports the ending balance, not the interest earned."
      },
      {
        id: "ar-05",
        prompt: "Lena's first four quiz scores are 78, 84, 90, and 76. What score does she need on a fifth quiz to raise her quiz average to 85?",
        choices: ["85", "87", "90", "97"],
        answer: 3,
        explain: "Five quizzes at an 85 average need a total of 5 × 85 = 425 points. The first four total 78 + 84 + 90 + 76 = 328, so the fifth score is 425 − 328 = 97. The tempting 85 assumes the last score should equal the target average, which only works if the first four already averaged 85."
      },
      {
        id: "ar-06",
        prompt: "A rectangular yard is 30 feet long and 20 feet wide. A fence around the entire yard costs $7 per foot. What is the total cost of the fence?",
        choices: ["$350", "$600", "$700", "$1,400"],
        answer: 2,
        explain: "Fencing follows the perimeter: 2 × (30 + 20) = 100 feet, and 100 × 7 = $700. The tempting $350 fences only one length and one width (50 × 7) and forgets the other two sides. Choosing $600 uses the area, 30 × 20, which fencing never needs."
      },
      {
        id: "ar-07",
        prompt: "A gym charges a one-time sign-up fee of $25 plus $12 per month. Renata's total payments to the gym so far come to $133. For how many months has she been a member?",
        choices: ["9", "11", "108", "133"],
        answer: 0,
        explain: "Setup: 12m + 25 = 133, so 12m = 108 and m = 108 ÷ 12 = 9 months. The tempting 11 comes from dividing the whole bill by 12 (133 ÷ 12 ≈ 11) and ignoring the sign-up fee. Choosing 108 reports the leftover dollars, not a number of months."
      },
      {
        id: "ar-08",
        prompt: "A stereo that normally sells for $240 is marked 15% off. What is the sale price?",
        choices: ["$36", "$204", "$216", "$225"],
        answer: 1,
        explain: "Setup: 240 − 0.15 × 240 = 240 − 36 = $204. The tempting $36 is the discount itself — the question asks what you pay, not what you save. Choosing $216 takes only 10% off."
      },
      {
        id: "ar-09",
        prompt: "Marcus borrows $900 at 8% simple interest per year and repays the loan after 9 months. How much interest does he owe?",
        choices: ["$48", "$54", "$72", "$648"],
        answer: 1,
        explain: "Convert time first: 9 months = 9/12 = 0.75 year. Then I = 900 × 0.08 × 0.75 = $54. The tempting $648 multiplies one year of interest ($72) by 9 — using months as if they were years. Choosing $72 charges a full year of interest."
      },
      {
        id: "ar-10",
        prompt: "Ortiz drives 60 miles to a depot at an average speed of 30 mph, then returns along the same road at 60 mph. What is his average speed for the entire round trip?",
        choices: ["40", "45", "60", "90"],
        answer: 0,
        explain: "Average speed = total distance ÷ total time. The trip out takes 60 ÷ 30 = 2 hours and the return takes 60 ÷ 60 = 1 hour, so 120 ÷ 3 = 40 mph. The tempting 45 is (30 + 60) ÷ 2, which is valid only when both legs take equal time — here they take 2 hours versus 1."
      },
      {
        id: "ar-11",
        prompt: "A platoon of 20 soldiers takes a fitness assessment. The 14 men average 80 points and the 6 women average 95 points. What is the average score for the whole platoon?",
        choices: ["80", "84.5", "85", "90.5"],
        answer: 1,
        explain: "Total points: 14 × 80 + 6 × 95 = 1,120 + 570 = 1,690, and 1,690 ÷ 20 = 84.5. The tempting 85 is (80 + 95) ÷ 2, which is legal only when the groups are the same size. Because the larger group sits near 80, the true average pulls toward 80; the choice 90.5 swaps the group sizes."
      },
      {
        id: "ar-12",
        prompt: "A warehouse wall is 40 feet long and 10 feet high, with a roll-up door 10 feet wide and 8 feet high set into it. One gallon of paint covers 160 square feet. How many gallons are needed to paint the wall, not counting the door, with one coat?",
        choices: ["2", "2.5", "3", "4"],
        answer: 0,
        explain: "Setup: (40 × 10) − (10 × 8) = 400 − 80 = 320 square feet, and 320 ÷ 160 = 2 gallons. The tempting 2.5 skips the subtraction and divides the full 400 by 160. Choosing 3 adds the door area back instead of subtracting it; 4 paints the wall twice."
      },
      {
        id: "ar-13",
        prompt: "The sum of three consecutive whole numbers is 96. What is the largest of the three numbers?",
        choices: ["30", "31", "32", "33"],
        answer: 3,
        explain: "Setup: n + (n + 1) + (n + 2) = 96 gives 3n + 3 = 96, so 3n = 93 and n = 31. The numbers are 31, 32, and 33, and the largest is 33. The tempting 31 is the smallest — you solved for n and stopped; 30 forgets the +3, and 32 is the middle number."
      },
      {
        id: "ar-14",
        prompt: "One printer finishes a training packet run in 12 minutes. A faster printer finishes the same run in 6 minutes. Working together at the same time, how many minutes does the run take?",
        choices: ["3", "4", "9", "18"],
        answer: 1,
        explain: "Add the rates: 1/12 + 1/6 = 1/12 + 2/12 = 3/12 = 1/4 of the run per minute, so together the printers need 4 minutes. The tempting 9 is the average of the two times, which only works when each machine runs alone for the same duration. Choosing 18 adds the times instead of the rates."
      },
      {
        id: "ar-15",
        prompt: "After a 25% discount, a desk sells for $270. What was the desk's original price?",
        choices: ["$270", "$337.50", "$360", "$1,080"],
        answer: 2,
        explain: "Setup: 25% off leaves 75%, so 0.75P = 270 and P = 270 ÷ 0.75 = $360. The tempting $337.50 adds 25% of 270 back onto 270 — but the 25% came off the original price, not the sale price. Choosing $270 just restates the sale price."
      },
      {
        id: "ar-16",
        prompt: "A roaster blends coffee worth $9 per pound with coffee worth $5 per pound. How many pounds of the $9 coffee should be mixed with 15 pounds of the $5 coffee to make a blend worth $6 per pound?",
        choices: ["5", "10", "15", "20"],
        answer: 0,
        explain: "Value equation: 9x + 5(15) = 6(x + 15), so 9x + 75 = 6x + 90, 3x = 15, and x = 5 pounds. Check: 5 × 9 + 15 × 5 = $120 for 20 pounds, which is $6 per pound. The tempting 15 is the amount of cheap coffee handed to you in the problem; 20 is the total blend weight, not the amount added."
      }
    ]
  }
};
