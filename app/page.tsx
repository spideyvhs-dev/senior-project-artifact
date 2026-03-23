import QuizGame from "./components/QuizGame";

const timelineData = [
  { year: "2020", record: "7-9", coach: "Belichick", qb: "Cam Newton", note: "First losing season since 2000. Brady departs for Tampa Bay.", bad: true },
  { year: "2021", record: "10-7", coach: "Belichick", qb: "Mac Jones", note: "Wild Card playoff berth — but destroyed by the Bills 47-17.", bad: false },
  { year: "2022", record: "8-9", coach: "Belichick", qb: "Jones / Zappe", note: "McDaniels leaves for Las Vegas. Matt Patricia installed as OC. Disaster.", bad: true },
  { year: "2023", record: "4-13", coach: "Belichick", qb: "Jones / Zappe", note: "Rock bottom. Belichick's worst season ever. Earned the 3rd overall pick.", bad: true },
  { year: "2024", record: "4-13", coach: "Jerod Mayo", qb: "Brissett → Maye", note: "Back-to-back 4-13. Mayo fired 2 hours after the finale.", bad: true },
  { year: "2025", record: "14-3", coach: "Mike Vrabel", qb: "Drake Maye", note: "AFC East champions. 9-0 road record (first in NFL history). Super Bowl LX.", bad: false, great: true },
];

const stats = [
  { label: "2025 Passer Rating", value: "113.5", sub: "Led NFL" },
  { label: "Completion %", value: "72.0%", sub: "Led NFL" },
  { label: "Passing TDs", value: "31", sub: "2025 Season" },
  { label: "Regular Season W", value: "14-3", sub: "2025 Record" },
];

const keyPlayers = [
  { name: "Christian Gonzalez", pos: "CB", info: "17th pick, 2023. Second-Team All-Pro. Key INT in AFC Championship." },
  { name: "Will Campbell", pos: "OT", info: "4th pick, 2025. Protected Maye's blindside from Day 1 as a rookie." },
  { name: "Milton Williams", pos: "DT", info: "$104M deal. Won Super Bowl LIX with Philadelphia weeks before signing." },
  { name: "TreVeyon Henderson", pos: "RB", info: "1,132 scrimmage yards, 10 TDs as a rookie in 2025." },
  { name: "Stefon Diggs", pos: "WR", info: "3-year free agent deal. Veteran target for Maye's breakout year." },
  { name: "Kyle Williams", pos: "WR", info: "3rd round, 2025 (Washington State). Explosive rookie playmaker." },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5 bg-pats-darker/80">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-white font-black uppercase tracking-widest text-sm">The Pats Pod</span>
          <div className="hidden sm:flex items-center gap-6 text-xs uppercase tracking-widest text-pats-silver/60 font-semibold">
            <a href="#drake" className="hover:text-white transition-colors">Drake Maye</a>
            <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
            <a href="#people" className="hover:text-white transition-colors">Architects</a>
            <a href="#quiz" className="hover:text-pats-red transition-colors text-pats-red/80">Trivia</a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-pats-darker via-pats-dark to-pats-darker" />
        <div className="absolute inset-0">
          {/* Diagonal accent lines */}
          <div className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-pats-red/30 to-transparent top-[20%] -left-1/2" style={{ transform: "rotate(-30deg)" }} />
          <div className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-white/8 to-transparent top-[45%] -left-1/2" style={{ transform: "rotate(-30deg)" }} />
          <div className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-pats-red/20 to-transparent top-[70%] -left-1/2" style={{ transform: "rotate(-30deg)" }} />
        </div>
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-pats-red/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pats-navy/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-pats-red/10 border border-pats-red/20 rounded-full px-4 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-pats-red animate-pulse" />
            <span className="text-pats-red text-xs font-bold uppercase tracking-[0.2em]">BHS Senior Project — Beckett Baldwin</span>
          </div>

          <h1 className="block-title text-white text-8xl sm:text-[10rem] md:text-[14rem] leading-none mb-0 text-glow-subtle">
            THE
          </h1>
          <h1 className="block-title text-pats-red text-8xl sm:text-[10rem] md:text-[14rem] leading-none text-glow-red">
            PATS
          </h1>
          <h1 className="block-title text-white text-8xl sm:text-[10rem] md:text-[14rem] leading-none mb-8 text-glow-subtle">
            POD
          </h1>

          <p className="text-pats-silver/70 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            How the New England Patriots went from <strong className="text-white">4-13</strong> to Super Bowl LX in one season —
            a 10-game turnaround that tied for the <strong className="text-pats-red">largest in NFL history</strong>.
          </p>

          {/* Hero stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/4 backdrop-blur-sm border border-white/8 rounded-2xl p-4">
                <p className="text-pats-red text-2xl sm:text-3xl font-black leading-none mb-1">{s.value}</p>
                <p className="text-white/50 text-[10px] uppercase tracking-widest font-semibold">{s.sub}</p>
                <p className="text-white/30 text-[9px] mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <a
            href="#drake"
            className="inline-flex items-center gap-2 bg-pats-red hover:bg-pats-red/80 text-white font-bold uppercase tracking-widest px-8 py-4 rounded-xl transition-all text-sm shadow-lg shadow-pats-red/20"
          >
            Explore the Story
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ─── DRAKE MAYE ─── */}
      <section id="drake" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-pats-red" />
            <span className="text-pats-red text-xs font-bold uppercase tracking-[0.2em]">The Quarterback</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white uppercase mb-2">Drake Maye</h2>
          <p className="text-pats-silver/50 text-sm uppercase tracking-widest mb-14">QB · #10 · New England Patriots</p>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {/* Bio card */}
            <div className="lg:col-span-2 bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-white/15 transition-colors">
              <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-pats-red" /> Background
              </h3>
              <p className="text-pats-silver/70 text-sm leading-relaxed mb-4">
                Born <span className="text-white font-semibold">August 30, 2002</span> in Huntersville, North Carolina.
                His father <span className="text-white font-semibold">Mark Maye</span> was a QB at UNC in the 1980s.
                Brother <span className="text-white font-semibold">Luke Maye</span> hit the iconic buzzer-beater
                to send UNC to the 2017 Final Four. Brother <span className="text-white font-semibold">Cole Maye</span> won
                the 2017 College World Series with Florida.
              </p>
              <p className="text-pats-silver/70 text-sm leading-relaxed">
                At Myers Park High School in Charlotte, Drake threw for <span className="text-pats-red font-semibold">6,713 yards and 86 TDs</span> across
                two prep seasons and held Division I basketball offers before committing to football.
              </p>
            </div>

            {/* Draft card */}
            <div className="bg-gradient-to-br from-pats-red/15 to-pats-navy/20 border border-pats-red/25 rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-5 flex items-center gap-2">
                  <span className="w-4 h-px bg-pats-red" /> 2024 NFL Draft
                </h3>
                <p className="text-pats-red text-7xl font-black leading-none mb-2">#3</p>
                <p className="text-white/60 text-xs uppercase tracking-widest mb-4">Overall Pick</p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-pats-silver/60"><span className="text-white/40">#1</span> Caleb Williams · Chicago</p>
                <p className="text-pats-silver/60"><span className="text-white/40">#2</span> Jayden Daniels · Washington</p>
                <p className="text-white font-semibold"><span className="text-pats-red">#3</span> Drake Maye · New England</p>
              </div>
              <p className="text-pats-silver/40 text-xs mt-4 italic">"As long as it ain't 12; can't fill those shoes."</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* College */}
            <div className="bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-white/15 transition-colors">
              <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-pats-red" /> UNC (2021–2023)
              </h3>
              <p className="text-pats-silver/70 text-sm leading-relaxed mb-4">
                Redshirted behind Sam Howell in 2021, then exploded in 2022 with
                <span className="text-pats-red font-semibold"> 4,321 yards, 38 TDs, 7 INTs</span> plus 698 rushing yards.
                Led the NCAA in total offense with 5,019 yards. Swept all four ACC awards — only
                the second player ever to do so after Jameis Winston.
              </p>
              <p className="text-pats-silver/50 text-xs">Career totals: <span className="text-white">8,018 yards · 63 TDs · 16 INTs</span></p>
            </div>

            {/* Rookie year */}
            <div className="bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-white/15 transition-colors">
              <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-pats-red" /> Rookie Year (2024)
              </h3>
              <p className="text-pats-silver/70 text-sm leading-relaxed mb-4">
                Named starter October 8 after Brissett went 1-4 in 5 games. In 13 starts:
                <span className="text-white font-semibold"> 2,276 yards, 15 TDs, 10 INTs, 67% completion, 88.1 passer rating</span>.
                Named to the 2025 Pro Bowl as Josh Allen's replacement despite the team going 4-13.
              </p>
              <p className="text-pats-silver/50 text-xs">Supporting cast ranked among the worst in the NFL that season.</p>
            </div>
          </div>

          {/* Year 2 spotlight */}
          <div className="bg-gradient-to-r from-pats-darker via-pats-navy/30 to-pats-darker border border-pats-red/20 rounded-2xl p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-4 h-px bg-pats-red" />
              <span className="text-pats-red text-xs font-bold uppercase tracking-[0.2em]">Year 2 Breakout</span>
              <span className="bg-pats-red/15 text-pats-red text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-pats-red/30">2025 Season</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              {[
                { val: "4,394", label: "Passing Yards" },
                { val: "31 / 8", label: "TDs / INTs" },
                { val: "113.5", label: "Passer Rating (1st in NFL)" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-pats-red text-4xl font-black mb-1">{s.val}</p>
                  <p className="text-white/50 text-xs uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-pats-silver/70 text-sm leading-relaxed">
              Under HC Mike Vrabel and returning OC Josh McDaniels, Maye authored one of the great sophomore QB seasons in NFL history.
              MVP runner-up (lost to Matthew Stafford by a single first-place vote, 23-24). Notable:
              <span className="text-white"> Week 7 vs Tennessee</span> — 21-of-23 (91.3%), setting the franchise completion % record (surpassing Brady's 88.5%).
              <span className="text-white"> Week 17 vs Jets</span> — 19-of-21, 256 yards, 5 TDs, 99.8 QBR (highest single-game QBR in NFL history).
            </p>
          </div>

          {/* Quotes */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                quote: "I wouldn't say it's that much of a burden. I think it's a blessing. It's an opportunity. To play quarterback for the New England Patriots, what a dream come true.",
                attr: "Drake Maye on Brady's legacy"
              },
              {
                quote: "When I watch Drake play, it just looks to me like he's in a flow state. He's not thinking — he's just playing. And that's where you want to get to in that system.",
                attr: "Brian Hoyer (8 seasons with the Patriots)"
              },
            ].map((q) => (
              <div key={q.attr} className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors">
                <div className="text-pats-red text-4xl font-black leading-none mb-3 opacity-40">"</div>
                <p className="text-white/80 text-sm leading-relaxed italic mb-4">{q.quote}</p>
                <p className="text-pats-silver/40 text-xs">— {q.attr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section id="timeline" className="py-28 px-6 bg-white/[0.015]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-pats-red" />
            <span className="text-pats-red text-xs font-bold uppercase tracking-[0.2em]">The Journey</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white uppercase mb-2">The Rebuild</h2>
          <p className="text-pats-silver/50 text-sm mb-6">Brady's departure to Super Bowl LX — season by season.</p>

          {/* Brady context */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 mb-12">
            <p className="text-pats-silver/70 text-sm leading-relaxed">
              On <span className="text-white font-semibold">March 17, 2020</span>, Tom Brady announced he would not return
              after 20 seasons. He signed with Tampa Bay on a 2-year, $50M fully guaranteed deal.
              His Patriots legacy: <span className="text-pats-red font-semibold">219-66 record · 74,571 yards · 541 TDs · 6 Super Bowls · 3 NFL MVPs</span>.
              He won a 7th ring with Tampa Bay, then retired permanently February 1, 2023 with all-time records
              in wins (251), yards (84,520), and TDs (624).
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="relative">
            <div className="absolute left-[1.75rem] top-0 bottom-0 w-px bg-gradient-to-b from-pats-red/40 via-white/10 to-pats-red/60" />
            <div className="space-y-4">
              {timelineData.map((s, i) => (
                <div key={s.year} className="relative flex gap-6 items-start">
                  {/* Dot */}
                  <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-full border-2 flex flex-col items-center justify-center transition-all
                    ${s.great
                      ? "bg-pats-red border-pats-red shadow-lg shadow-pats-red/30"
                      : s.bad
                        ? "bg-pats-darker border-white/15"
                        : "bg-pats-navy/40 border-pats-navy"
                    }`}>
                    <span className={`text-xs font-black ${s.great ? "text-white" : s.bad ? "text-white/50" : "text-white"}`}>{s.year}</span>
                  </div>
                  {/* Card */}
                  <div className={`flex-1 mb-2 rounded-2xl border p-5 transition-all hover:border-opacity-60
                    ${s.great
                      ? "bg-gradient-to-r from-pats-red/12 to-pats-navy/15 border-pats-red/30"
                      : "bg-white/3 border-white/8 hover:border-white/15"
                    }`}>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`text-2xl font-black ${s.great ? "text-pats-red" : "text-white"}`}>{s.record}</span>
                      <span className="text-white/30 text-xs">·</span>
                      <span className="text-white/50 text-xs">{s.coach}</span>
                      <span className="text-white/30 text-xs">·</span>
                      <span className="text-white/50 text-xs">{s.qb}</span>
                    </div>
                    <p className="text-pats-silver/60 text-sm leading-relaxed">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Belichick dual-role callout */}
          <div className="mt-12 bg-white/3 border border-white/8 rounded-2xl p-7">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-pats-red" /> The Belichick Problem
            </h3>
            <p className="text-pats-silver/70 text-sm leading-relaxed mb-3">
              Belichick served as <span className="text-white font-semibold">both head coach and de facto GM</span> for his entire 24-year tenure —
              the Patriots never officially employed a General Manager during his era. His coaching record is legendary:
              <span className="text-pats-red font-semibold"> 6 Super Bowls, 17 AFC East titles, 31 playoff wins</span> (most in NFL history).
            </p>
            <p className="text-pats-silver/70 text-sm leading-relaxed">
              But the personnel failures piled up in his final years: draft busts (N'Keal Harry over DK Metcalf in 2019),
              a brain drain of scouting lieutenants, and the catastrophic 2022 decision to replace Josh McDaniels with
              defensive assistant Matt Patricia as OC.
            </p>
            <div className="mt-5 border-l-2 border-pats-red pl-4">
              <p className="text-white/80 text-sm italic">"Bill Belichick the GM made life very difficult for Bill Belichick the coach, and ultimately cost him his job."</p>
              <p className="text-pats-silver/40 text-xs mt-1">— CBS Sports</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KEY PEOPLE ─── */}
      <section id="people" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-pats-red" />
            <span className="text-pats-red text-xs font-bold uppercase tracking-[0.2em]">The Architects</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white uppercase mb-14">Who Made It Happen</h2>

          {/* Big three */}
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                name: "Mike Vrabel",
                role: "Head Coach",
                hired: "January 12, 2025",
                body: "Played linebacker for the Patriots 2001–2008, winning three Super Bowls. Inducted into the Patriots Hall of Fame in 2023. As Titans HC: 54-45 record, 2021 AP Coach of the Year. In his first Patriots season: 14-3, Super Bowl LX, and the 2025 AP Coach of the Year award.",
                highlight: true,
              },
              {
                name: "Eliot Wolf",
                role: "EVP of Player Personnel",
                hired: "Promoted May 11, 2024",
                body: "Son of Hall of Fame Packers GM Ron Wolf. Joined as a scouting consultant in 2020. Quietly built one of the youngest and most talented rosters in the NFL around Drake Maye. Oversees all personnel decisions and salary cap management.",
                highlight: false,
              },
              {
                name: "Josh McDaniels",
                role: "Offensive Coordinator",
                hired: "January 22, 2025 (3rd stint)",
                body: "Prior stints (2006-08, 2012-21) produced three additional Super Bowl wins with Brady. In 2025, the offense jumped from 31st in yards and 30th in points to 3rd and 2nd. Won the inaugural AP Assistant Coach of the Year.",
                highlight: false,
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-7 transition-all hover:border-opacity-60 flex flex-col
                  ${p.highlight
                    ? "bg-gradient-to-br from-pats-red/12 to-pats-navy/15 border-pats-red/30"
                    : "bg-white/3 border-white/8 hover:border-white/15"
                  }`}
              >
                <div className="mb-4">
                  <p className="text-pats-red text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{p.role}</p>
                  <h3 className="text-white font-black text-2xl">{p.name}</h3>
                  <p className="text-white/30 text-xs mt-1">{p.hired}</p>
                </div>
                <p className="text-pats-silver/60 text-sm leading-relaxed flex-1">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Brady quote */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-7 mb-14">
            <div className="text-pats-red text-5xl font-black leading-none mb-3 opacity-30">"</div>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed italic mb-4 max-w-3xl">
              Drake is running the same system that I was in. I know how good that system is for quarterbacks.
              [McDaniels] just talks about his work ethic, his willingness to get better.
            </p>
            <p className="text-pats-silver/40 text-xs">— Tom Brady</p>
          </div>

          {/* Key Players grid */}
          <h3 className="text-white font-black text-2xl uppercase mb-6">Key Players</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyPlayers.map((p) => (
              <div key={p.name} className="bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-white/15 transition-colors group">
                <p className="text-pats-red text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{p.pos}</p>
                <p className="text-white font-bold text-lg group-hover:text-pats-red transition-colors">{p.name}</p>
                <p className="text-pats-silver/50 text-sm mt-2 leading-relaxed">{p.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUPER BOWL ─── */}
      <section className="py-20 px-6 bg-white/[0.015]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-pats-darker to-pats-navy/20 border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-pats-silver/40 text-xs uppercase tracking-widest mb-2">February 8, 2026 · Levi&apos;s Stadium, Santa Clara</p>
            <h2 className="text-white text-4xl sm:text-5xl font-black uppercase mb-2">Super Bowl LX</h2>
            <div className="flex items-center justify-center gap-6 my-8">
              <div>
                <p className="text-pats-silver/60 text-xs uppercase tracking-widest mb-1">New England</p>
                <p className="text-white text-6xl font-black">13</p>
              </div>
              <p className="text-pats-silver/30 text-2xl font-black">–</p>
              <div>
                <p className="text-pats-silver/60 text-xs uppercase tracking-widest mb-1">Seattle</p>
                <p className="text-pats-red text-6xl font-black">29</p>
              </div>
            </div>
            <p className="text-pats-silver/60 text-sm max-w-xl mx-auto leading-relaxed">
              The Seahawks won decisively — 12-0 into the 4th quarter. Maye: 27-of-43, 295 yards, 2 TDs, 2 INTs, sacked 6 times.
              Kenneth Walker III: 135 rushing yards, Super Bowl MVP. Still — a 23-year-old QB reaching the Super Bowl in his
              second season, studying Brady film in the same offense, gives this story a powerful through-line.
            </p>
            <p className="text-pats-silver/30 text-xs mt-6">First team in NFL history to reach the Super Bowl after losing 13+ games the previous season.</p>
          </div>
        </div>
      </section>

      {/* ─── TRIVIA GAME ─── */}
      <section id="quiz" className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-pats-red" />
            <span className="text-pats-red text-xs font-bold uppercase tracking-[0.2em]">Interactive</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white uppercase mb-3">Patriots Trivia</h2>
          <p className="text-pats-silver/50 text-sm mb-12">10 questions. How well do you know the rebuild?</p>

          <div className="bg-white/3 border border-white/10 rounded-2xl p-8 sm:p-10">
            <QuizGame />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/6 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs uppercase tracking-widest">The Pats Pod</p>
          <p className="text-white/20 text-xs">BHS Senior Research Project · Beckett Baldwin · {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
