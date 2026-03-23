export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pats-darker via-pats-dark to-pats-navy/40" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[200%] h-[3px] bg-pats-red/40 top-[15%] -left-1/2" style={{ transform: "rotate(-35deg)" }} />
          <div className="absolute w-[200%] h-[2px] bg-white/10 top-[30%] -left-1/2" style={{ transform: "rotate(-35deg)" }} />
          <div className="absolute w-[200%] h-[4px] bg-pats-red/25 top-[55%] -left-1/2" style={{ transform: "rotate(-35deg)" }} />
          <div className="absolute w-[200%] h-[2px] bg-white/8 top-[75%] -left-1/2" style={{ transform: "rotate(-35deg)" }} />
          <div className="absolute w-[200%] h-[3px] bg-pats-red/30 top-[90%] -left-1/2" style={{ transform: "rotate(-35deg)" }} />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pats-red/8 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="block-title text-glow-red text-pats-red text-7xl sm:text-8xl md:text-9xl mb-2">THE</h1>
          <h1 className="block-title text-glow-red text-pats-red text-8xl sm:text-9xl md:text-[10rem] mb-2">PATS</h1>
          <h1 className="block-title text-glow-red text-pats-red text-8xl sm:text-9xl md:text-[10rem] mb-8">POD</h1>
          <p className="text-pats-silver text-lg uppercase tracking-[0.3em] font-semibold mb-4">Hosted by Beckett Baldwin</p>
          <p className="text-pats-silver/60 max-w-xl mx-auto mb-10">
            How the New England Patriots went from 4-13 to Super Bowl LX in one season &mdash; a 10-game turnaround that tied for the largest in NFL history.
          </p>

          {/* PLACEHOLDER: Pats Pod cover art */}
          <div className="media-placeholder max-w-xs mx-auto mb-10" style={{ aspectRatio: "1/1" }}>
            <div className="text-center p-6">
              <p className="text-pats-silver/60 text-sm">Pats Pod Cover Art</p>
              <p className="text-pats-silver/30 text-xs mt-1">Add image here</p>
            </div>
          </div>

          <a href="#drake" className="inline-block bg-pats-red hover:bg-pats-red/80 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-all">
            Scroll Down
          </a>
        </div>
      </section>

      {/* ===== DRAKE MAYE ===== */}
      <section id="drake" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="w-12 h-1 bg-pats-red rounded-full mb-4" />
        <h2 className="text-4xl font-black uppercase text-white mb-2">Drake Maye</h2>
        <p className="text-pats-silver/60 mb-10">Quarterback &bull; #10 &bull; New England Patriots</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Bio */}
          <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6">
            <h3 className="text-white font-bold uppercase tracking-wide mb-4">Background</h3>
            <div className="space-y-3 text-pats-silver/70 text-sm leading-relaxed">
              <p>Born <strong className="text-white">August 30, 2002</strong> in Huntersville, North Carolina. His father <strong className="text-white">Mark Maye</strong> was a QB at UNC in the 1980s. Brother <strong className="text-white">Luke Maye</strong> hit the iconic buzzer-beater to send UNC to the 2017 Final Four. Brother <strong className="text-white">Cole Maye</strong> won the 2017 College World Series with Florida.</p>
              <p>At <strong className="text-white">Myers Park High School</strong> in Charlotte, Drake threw for 6,713 yards and 86 TDs across two prep seasons and held Division I basketball offers before committing to football.</p>
            </div>
          </div>

          {/* PLACEHOLDER: Drake Maye photo */}
          <div className="media-placeholder" style={{ aspectRatio: "4/5" }}>
            <div className="text-center p-6">
              <p className="text-pats-silver/60 text-sm">Drake Maye Photo</p>
              <p className="text-pats-silver/30 text-xs mt-1">Add image here</p>
            </div>
          </div>
        </div>

        {/* College */}
        <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6 mb-6">
          <h3 className="text-white font-bold uppercase tracking-wide mb-3">UNC (2021&ndash;2023)</h3>
          <p className="text-pats-silver/70 text-sm leading-relaxed">
            Redshirted behind Sam Howell in 2021, then exploded in 2022: <strong className="text-pats-red">4,321 passing yards, 38 TDs, 7 INTs</strong>, plus 698 rushing yards and 7 rushing TDs. Led the NCAA in total offense with 5,019 yards. Swept all four ACC awards (Player, Offensive Player, Rookie, and Offensive Rookie of the Year) &mdash; only the second player to do so after Jameis Winston. In 2023: 3,608 yards, 24 TDs, 9 INTs. Career totals: <strong className="text-white">8,018 passing yards, 63 TDs, 16 INTs</strong>.
          </p>
        </div>

        {/* Rookie Year */}
        <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6 mb-6">
          <h3 className="text-white font-bold uppercase tracking-wide mb-3">Rookie Year (2024)</h3>
          <p className="text-pats-silver/70 text-sm leading-relaxed">
            Drafted <strong className="text-pats-red">3rd overall</strong> behind Caleb Williams (#1, Chicago) and Jayden Daniels (#2, Washington). Signed a 4-year, $36.64M fully guaranteed deal. Chose jersey #10, joking: <em>&quot;As long as it ain&apos;t 12; can&apos;t fill those shoes.&quot;</em> Named starter October 8 after Jacoby Brissett went 1-4 in 5 starts. In 13 starts: <strong className="text-white">2,276 yards, 15 TDs, 10 INTs, 67% completion, 88.1 passer rating</strong>. Named to 2025 Pro Bowl (replacement for Josh Allen). Team went 4-13 under first-year coach Jerod Mayo.
          </p>
        </div>

        {/* Year 2 */}
        <div className="bg-gradient-to-r from-pats-red/10 to-pats-navy/20 border border-pats-red/30 rounded-xl p-6 mb-6">
          <h3 className="text-white font-bold uppercase tracking-wide mb-3">Year 2 Breakout (2025)</h3>
          <p className="text-pats-silver/70 text-sm leading-relaxed mb-3">
            Under new HC Mike Vrabel and returning OC Josh McDaniels: <strong className="text-pats-red">4,394 passing yards, 31 TDs, 8 INTs, 72.0% completion, 113.5 passer rating (led NFL), 77.1 QBR (led NFL)</strong>. MVP runner-up, losing to Matthew Stafford by a single first-place vote (23 to 24).
          </p>
          <p className="text-pats-silver/70 text-sm leading-relaxed">
            Patriots went <strong className="text-white">14-3</strong>, won the AFC East, and reached <strong className="text-white">Super Bowl LX</strong> (lost to Seattle Seahawks 29-13 on February 8, 2026). Notable: Week 7 vs Tennessee &mdash; 21-of-23 (91.3%), franchise completion % record. Week 17 vs Jets &mdash; 19-of-21, 256 yards, 5 TDs, 99.8 QBR (highest single-game in NFL history).
          </p>
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-5">
            <blockquote className="border-l-4 border-pats-red pl-4 text-white italic text-sm mb-2">
              &quot;I wouldn&apos;t say it&apos;s that much of a burden. I think it&apos;s a blessing. It&apos;s an opportunity. To play quarterback for the New England Patriots, what a dream come true.&quot;
            </blockquote>
            <p className="text-pats-silver/50 text-xs pl-4">&mdash; Drake Maye on following Brady&apos;s legacy</p>
          </div>
          <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-5">
            <blockquote className="border-l-4 border-pats-red pl-4 text-white italic text-sm mb-2">
              &quot;When I watch Drake play, it just looks to me like he&apos;s in a flow state. He&apos;s not thinking &mdash; he&apos;s just playing.&quot;
            </blockquote>
            <p className="text-pats-silver/50 text-xs pl-4">&mdash; Brian Hoyer (8 seasons with the Patriots)</p>
          </div>
        </div>

        {/* PLACEHOLDER: highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="media-placeholder" style={{ aspectRatio: "16/9" }}>
            <div className="text-center p-6">
              <p className="text-pats-silver/60 text-sm">Drake Maye Highlights</p>
              <p className="text-pats-silver/30 text-xs mt-1">Add video here</p>
            </div>
          </div>
          <div className="media-placeholder" style={{ aspectRatio: "16/9" }}>
            <div className="text-center p-6">
              <p className="text-pats-silver/60 text-sm">Draft Night / Interviews</p>
              <p className="text-pats-silver/30 text-xs mt-1">Add video here</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REBUILD TIMELINE ===== */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="w-12 h-1 bg-pats-red rounded-full mb-4" />
        <h2 className="text-4xl font-black uppercase text-white mb-2">The Rebuild</h2>
        <p className="text-pats-silver/60 mb-10">Season by season, from Brady&apos;s departure to Super Bowl LX.</p>

        {/* Brady leaving */}
        <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6 mb-6">
          <p className="text-pats-silver/70 text-sm leading-relaxed">
            On <strong className="text-white">March 17, 2020</strong>, Tom Brady announced he would not return after 20 seasons. He signed with Tampa Bay (2-year, $50M fully guaranteed). His Patriots legacy: <strong className="text-white">219-66 record, 74,571 passing yards, 541 TDs, 6 Super Bowls, 3 NFL MVPs</strong>. He won a 7th ring with Tampa Bay, then retired permanently February 1, 2023 with all-time records in wins (251), passing yards (84,520), and passing TDs (624).
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-3 mb-10">
          {[
            { year: "2020", record: "7-9", info: "HC: Bill Belichick | QB: Cam Newton | Missed playoffs — first losing season since 2000.", hl: false },
            { year: "2021", record: "10-7", info: "HC: Bill Belichick | QB: Mac Jones (rookie) | Wild Card loss to Bills, 47-17.", hl: false },
            { year: "2022", record: "8-9", info: "HC: Bill Belichick | QB: Mac Jones / Bailey Zappe | Missed playoffs. OC Josh McDaniels left; replaced by defensive assistant Matt Patricia as playcaller.", hl: false },
            { year: "2023", record: "4-13", info: "HC: Bill Belichick | QB: Mac Jones / Bailey Zappe | Rock bottom. Last in AFC East. Belichick's worst season ever. Earned the 3rd overall pick — highest since Drew Bledsoe in 1993.", hl: true },
            { year: "2024", record: "4-13", info: "HC: Jerod Mayo | QB: Jacoby Brissett → Drake Maye | Back-to-back 4-13. Mayo fired January 5, 2025 — less than 2 hours after the finale. Second one-and-done coach in franchise history.", hl: true },
            { year: "2025", record: "14-3", info: "HC: Mike Vrabel | QB: Drake Maye | Won AFC East. 9-0 on the road (first in NFL history). Beat Chargers, Texans, Broncos in playoffs. Lost Super Bowl LX to Seattle 29-13 on Feb 8, 2026.", hl: true },
          ].map((s) => (
            <div key={s.year} className={`rounded-xl border p-5 flex flex-col sm:flex-row gap-4 ${s.hl ? "bg-gradient-to-r from-pats-red/10 to-pats-navy/20 border-pats-red/30" : "bg-pats-navy/20 border-pats-navy/40"}`}>
              <div className="flex-shrink-0 w-20">
                <span className={`text-2xl font-black ${s.hl ? "text-pats-red" : "text-white"}`}>{s.year}</span>
                <span className="block text-white font-bold text-lg">{s.record}</span>
              </div>
              <p className="text-pats-silver/70 text-sm leading-relaxed">{s.info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== KEY PEOPLE ===== */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="w-12 h-1 bg-pats-red rounded-full mb-4" />
        <h2 className="text-4xl font-black uppercase text-white mb-10">Who Made It Happen</h2>

        {/* Vrabel */}
        <div className="bg-gradient-to-r from-pats-red/10 to-pats-navy/20 border border-pats-red/30 rounded-xl p-6 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-white font-bold text-xl mb-1">Mike Vrabel</h3>
              <p className="text-pats-red text-xs font-bold uppercase tracking-widest mb-3">Head Coach (hired January 12, 2025)</p>
              <p className="text-pats-silver/70 text-sm leading-relaxed">
                Played linebacker for the Patriots from 2001 to 2008, winning <strong className="text-white">three Super Bowls</strong>. Inducted into the Patriots Hall of Fame in 2023. As Titans HC (2018-2023): 54-45 record, 2021 AP Coach of the Year. In his first Patriots season: <strong className="text-white">14-3 record, Super Bowl LX, 2025 AP Coach of the Year</strong>. The 10-game improvement tied for the largest single-season turnaround in NFL history.
              </p>
            </div>
            <div className="media-placeholder" style={{ aspectRatio: "4/3" }}>
              <div className="text-center p-4">
                <p className="text-pats-silver/60 text-sm">Mike Vrabel Photo</p>
                <p className="text-pats-silver/30 text-xs mt-1">Add image here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wolf */}
        <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6 mb-4">
          <h3 className="text-white font-bold text-xl mb-1">Eliot Wolf</h3>
          <p className="text-pats-red text-xs font-bold uppercase tracking-widest mb-3">Executive VP of Player Personnel (promoted May 11, 2024)</p>
          <p className="text-pats-silver/70 text-sm leading-relaxed">
            Son of Hall of Fame Packers GM Ron Wolf. Joined the Patriots as a scouting consultant in 2020. Oversees all personnel decisions, salary cap, and the 53-man roster. Works collaboratively with Vrabel, who holds final say.
          </p>
        </div>

        {/* McDaniels */}
        <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6 mb-4">
          <h3 className="text-white font-bold text-xl mb-1">Josh McDaniels</h3>
          <p className="text-pats-red text-xs font-bold uppercase tracking-widest mb-3">Offensive Coordinator (hired January 22, 2025)</p>
          <p className="text-pats-silver/70 text-sm leading-relaxed">
            Third stint as Patriots OC. Prior stints (2006-2008, 2012-2021) produced three additional Super Bowl wins with Brady. In 2025, the offense jumped from <strong className="text-white">31st in yards and 30th in points to 3rd and 2nd</strong>. Won the inaugural AP Assistant Coach of the Year award. Brady himself said: <em>&quot;Drake is running the same system that I was in. I know how good that system is for quarterbacks.&quot;</em>
          </p>
        </div>

        {/* Key Players */}
        <h3 className="text-white font-bold text-xl uppercase mt-10 mb-4">Key Players</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: "Christian Gonzalez", pos: "CB", info: "17th overall, 2023 (Oregon). Second-Team All-Pro in 2024. 2025 Pro Bowl. Key INT in AFC Championship. 23 years old." },
            { name: "Will Campbell", pos: "OT", info: "4th overall, 2025 (LSU). Consensus All-American. Started at left tackle from Day 1 as a rookie." },
            { name: "Milton Williams", pos: "DT", info: "Free agent from Philadelphia, March 2025. 4-year, $104M. Won Super Bowl LIX with Eagles weeks before signing." },
            { name: "TreVeyon Henderson", pos: "RB", info: "2nd round, 2025. Rookie: 1,132 scrimmage yards, 10 TDs." },
            { name: "Stefon Diggs", pos: "WR", info: "3-year free agent deal. Veteran weapon for Maye." },
            { name: "Kyle Williams", pos: "WR", info: "3rd round (69th overall), 2025 (Washington State). Explosive rookie." },
          ].map((p) => (
            <div key={p.name} className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-4">
              <p className="text-pats-red text-xs font-bold uppercase tracking-widest">{p.pos}</p>
              <p className="text-white font-bold text-lg">{p.name}</p>
              <p className="text-pats-silver/60 text-sm mt-1">{p.info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-pats-navy/30 py-8 px-4 text-center">
        <p className="text-pats-silver/40 text-sm">
          BHS English Senior Research Project &mdash; Beckett Baldwin &mdash; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
