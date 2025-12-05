// questions.js
// Master list of questions (exact text you approved). Order here doesn't matter,
// because index.html will shuffle them at runtime.

const QUESTIONS = [
  {
    q: `Which RB became the third player in NFL history to record 1,000 rushing yards and 1,000 receiving yards in a single season (2019)?`,
    a: `Christian McCaffrey`,
    hint: `Panthers RB, wears #22.`
  },
  {
    q: `Which WR set the NFL single-season receiving yards record with 1,964 yards?`,
    a: `Calvin Johnson`,
    hint: `Lions legend nicknamed "Megatron".`
  },
  {
    q: `Which QB started the 2017 AFC Championship Game for the Jaguars?`,
    a: `Blake Bortles`,
    hint: `#5 for the Jags.`
  },
  {
    q: `Whose NFL record did Cam Little break when he made the 68-yard field goal?`,
    a: `Justin Tucker`,
    hint: `Ravens kicker known for a 66-yarder vs the Lions.`
  },
  {
    q: `Which WR put up six straight 100+ catch seasons from 2013–2018?`,
    a: `Antonio Brown`,
    hint: `Steelers WR, wore #84.`
  },
  {
    q: `Which RB scored six rushing touchdowns on Christmas Day 2020, winning countless fantasy titles?`,
    a: `Alvin Kamara`,
    hint: `Saints RB, wore red & green cleats that day.`
  },
  {
    q: `Which QB threw 50 touchdown passes and over 5,000 yards in 2018?`,
    a: `Patrick Mahomes`,
    hint: `Chiefs QB, no-look passes, #15.`
  },
  {
    q: `Which RB ripped off a 99-yard touchdown run against Jacksonville in 2018?`,
    a: `Derrick Henry`,
    hint: `Titans RB, built like a defensive end.`
  },
  {
    q: `Which return specialist holds the NFL record for most combined return touchdowns?`,
    a: `Devin Hester`,
    hint: `Bears returner, opened a Super Bowl with a kick return TD.`
  },
  {
    q: `Which WR owns the record for most receptions in a single season (149)?`,
    a: `Michael Thomas`,
    hint: `Saints WR, "Can't Guard Mike".`
  },
  {
    q: `Which WR scored 23 receiving TDs in a single season, the NFL record?`,
    a: `Randy Moss`,
    hint: `Joined the 2007 Patriots.`
  },
  {
    q: `Which QB has the most playoff victories in NFL history?`,
    a: `Tom Brady`,
    hint: `Won 7 Super Bowls.`
  },
  {
    q: `Which WR caught 30+ postseason passes and over 500 yards in the 2008 playoffs?`,
    a: `Larry Fitzgerald`,
    hint: `Cardinals legend, wore #11.`
  },
  {
    q: `Which RB set the single-game rushing record with 296 yards?`,
    a: `Adrian Peterson`,
    hint: `Did it as a Viking vs the Chargers in 2007.`
  },
  {
    q: `Which RB scored 31 total touchdowns in his 2006 MVP season?`,
    a: `LaDainian Tomlinson`,
    hint: `Chargers RB, wore #21.`
  },
  {
    q: `Which WR is the NFL’s all-time leader in receiving yards?`,
    a: `Jerry Rice`,
    hint: `49ers legend, also played for the Raiders.`
  },
  {
    q: `Which QB started 297 consecutive regular-season games?`,
    a: `Brett Favre`,
    hint: `Packers ironman QB, wore #4.`
  },
  {
    q: `Which pass rusher holds the official single-season sack record (22.5)?`,
    a: `Michael Strahan`,
    hint: `Giants DE, big gap-toothed smile.`
  },
  {
    q: `Which Saints QB has the most 5,000-yard passing seasons in history?`,
    a: `Drew Brees`,
    hint: `Shorter QB, #9 for the Saints.`
  },
  {
    q: `Which WR led the 1998 Vikings’ historic offense alongside Cris Carter?`,
    a: `Randy Moss`,
    hint: `Deep-threat rookie phenom that year.`
  },
  {
    q: `Which Browns RB improbably landed on the cover of Madden NFL 12?`,
    a: `Peyton Hillis`,
    hint: `Power back for Cleveland, one breakout year.`
  },
  {
    q: `Which Browns return man was a Pro Bowl kick and punt returner in the late 2000s?`,
    a: `Josh Cribbs`,
    hint: `Wore #16 for the Browns.`
  },
  {
    q: `Which Jaguars QB became a cult hero for his mustache and aviators starting in 2019?`,
    a: `Gardner Minshew`,
    hint: `Mississippi Mustache.`
  },
  {
    q: `Which QB’s “Fitzmagic” run in 2018 included back-to-back 400-yard games?`,
    a: `Ryan Fitzpatrick`,
    hint: `Journeyman QB with a famous beard.`
  },
  {
    q: `Which undrafted grocery-store stocker became a Super Bowl–winning QB with the Rams?`,
    a: `Kurt Warner`,
    hint: `Led the "Greatest Show on Turf".`
  },
  {
    q: `Which QB holds the NFL record for most passing yards in a single game in the Super Bowl era with 554 yards?`,
    a: `Ben Roethlisberger`,
    hint: `Steelers QB nicknamed "Big Ben".`
  },
  {
    q: `Which RB set the rookie scrimmage yards record with 2,314 total yards in 1999?`,
    a: `Edgerrin James`,
    hint: `Colts RB drafted ahead of Ricky Williams.`
  },
  {
    q: `Which Chiefs TE has multiple 1,000-yard seasons and is considered one of the best ever?`,
    a: `Travis Kelce`,
    hint: `#87 for Kansas City.`
  },
  {
    q: `Which Patriots TE set a then-record for TDs by a TE with 17 in 2011?`,
    a: `Rob Gronkowski`,
    hint: `Spike-loving TE known as "Gronk".`
  },
  {
    q: `Which Broncos LB won Super Bowl 50 MVP?`,
    a: `Von Miller`,
    hint: `Edge rusher, #58 for Denver.`
  },
  {
    q: `Which offensive innovator created the modern West Coast Offense?`,
    a: `Bill Walsh`,
    hint: `49ers head coach in the 1980s.`
  },
  {
    q: `Who replaced Tony Dungy and won a Super Bowl immediately with the Buccaneers?`,
    a: `Jon Gruden`,
    hint: `Fiery coach nicknamed "Chucky".`
  },
  {
    q: `Which defensive coordinator helped build the 2000 Ravens’ legendary defense?`,
    a: `Rex Ryan`,
    hint: `Later became head coach of the Jets and Bills.`
  },
  {
    q: `Which QB lost three Super Bowls in the ’80s before winning two in the ’90s?`,
    a: `John Elway`,
    hint: `Broncos QB, #7.`
  },
  {
    q: `Which WR recorded 1,848 receiving yards in 2015, the second-most in NFL history at the time?`,
    a: `Julio Jones`,
    hint: `Falcons WR, wore #11.`
  },
  {
    q: `Which QB holds the record for most career 4th-quarter comebacks in NFL history?`,
    a: `Matt Ryan`,
    hint: `Falcons QB involved in 28–3.`
  },
  {
    q: `Which WR wore #88 for Dallas as part of “The Triplets”?`,
    a: `Michael Irvin`,
    hint: `Hall of Fame Cowboys WR.`
  },
  {
    q: `Which Rams QB famously went from grocery clerk to Super Bowl MVP?`,
    a: `Kurt Warner`,
    hint: `Same QB as the "Greatest Show on Turf".`
  },
  {
    q: `Which LB holds the NFL record for most tackles in a single season with 214?`,
    a: `Ray Lewis`,
    hint: `Ravens linebacker and emotional leader.`
  },
  {
    q: `Which defensive back led the NFL with 10 interceptions in 2007?`,
    a: `Antonio Cromartie`,
    hint: `Cornerback who played for the Chargers and Jets.`
  },
  {
    q: `Which QB set the NFL record for most passing yards in a season by a rookie with 4,374 yards?`,
    a: `Andrew Luck`,
    hint: `Colts QB drafted 1st overall in 2012.`
  },
  {
    q: `Which QB holds the NFL record for most pass attempts in a single season with 727?`,
    a: `Matthew Stafford`,
    hint: `Lions QB at the time, now with the Rams.`
  },
  {
    q: `Which QB caught a touchdown and won Super Bowl MVP in the same game?`,
    a: `Nick Foles`,
    hint: `"Philly Special" QB.`
  },
  {
    q: `Which TE threw the TD pass in the “Philly Special”?`,
    a: `Trey Burton`,
    hint: `Eagles tight end / gadget player on that play.`
  },
  {
    q: `Which WR put up insane playoff numbers for Arizona in 2008?`,
    a: `Larry Fitzgerald`,
    hint: `Cardinals WR, #11.`
  },
  {
    q: `Which WR holds the NFL rookie record for receptions with 104?`,
    a: `Jaylen Waddle`,
    hint: `Dolphins WR from Alabama.`
  },
  {
    q: `Which RB produced a 99-yard TD run AND multiple playoff monster games?`,
    a: `Derrick Henry`,
    hint: `King Henry for the Titans.`
  },
  {
    q: `Which kicker holds the NFL postseason record with five field goals made from 50+ yards?`,
    a: `Robbie Gould`,
    hint: `Longtime Bears and 49ers kicker.`
  },
  {
    q: `Which RB holds the NFL record for highest yards per carry in a career (5.4, minimum 1,000 attempts)?`,
    a: `Jamaal Charles`,
    hint: `Chiefs RB, extremely efficient runner.`
  },
  {
    q: `Which WR holds the NFL record for most receptions in a game with 20?`,
    a: `Brandon Marshall (2009)`,
    hint: `Did it as a Bronco vs the Colts.`
  }
];
