import MediaPlaceholder from "../components/MediaPlaceholder";
import SectionHeader from "../components/SectionHeader";
import StatCard from "../components/StatCard";

const seasons = [
  {
    year: "2020",
    record: "7-9",
    coach: "Bill Belichick",
    qb: "Cam Newton",
    outcome: "Missed playoffs — first losing season since 2000.",
    accent: false,
  },
  {
    year: "2021",
    record: "10-7",
    coach: "Bill Belichick",
    qb: "Mac Jones (rookie)",
    outcome:
      "Made playoffs, but lost in the Wild Card round to the Buffalo Bills 47-17.",
    accent: false,
  },
  {
    year: "2022",
    record: "8-9",
    coach: "Bill Belichick",
    qb: "Mac Jones / Bailey Zappe",
    outcome:
      "Missed playoffs. Josh McDaniels and Joe Judge left, replaced by defensive assistant Matt Patricia as playcaller — widely viewed as organizational malpractice.",
    accent: false,
  },
  {
    year: "2023",
    record: "4-13",
    coach: "Bill Belichick",
    qb: "Mac Jones / Bailey Zappe",
    outcome:
      "Rock bottom. Last in AFC East, Belichick's worst season ever. Earned the 3rd overall pick in the 2024 Draft — the highest since Drew Bledsoe in 1993. Jones traded to Jacksonville for a 6th-round pick.",
    accent: true,
  },
  {
    year: "2024",
    record: "4-13",
    coach: "Jerod Mayo",
    qb: "Jacoby Brissett → Drake Maye",
    outcome:
      "Another 4-13 season. Mayo (hired Jan 17, 2024) had never been a coordinator — fired Jan 5, 2025 less than two hours after the finale. Drake Maye named starter Week 6 and showed flashes. Back-to-back 4-13 was the franchise's first consecutive losing seasons since 1992-1993.",
    accent: true,
  },
  {
    year: "2025",
    record: "14-3",
    coach: "Mike Vrabel",
    qb: "Drake Maye",
    outcome:
      "The turnaround. Won AFC East, went 9-0 on the road (first team in NFL history), won 10 straight games. Beat Chargers 16-3, Texans 28-16, and Broncos 10-7 (in a blizzard) in the playoffs. Lost Super Bowl LX to Seattle Seahawks 29-13 on February 8, 2026. The 10-game improvement from 4-13 to 14-3 tied for the largest single-season turnaround in NFL history.",
    accent: true,
  },
];

export default function TheRebuildPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-16">
        <p className="text-pats-red text-sm font-bold uppercase tracking-[0.3em] mb-3">
          2020 &ndash; 2025
        </p>
        <h1 className="block-title text-white text-5xl sm:text-6xl lg:text-7xl mb-4">
          THE
          <br />
          <span className="text-pats-red">REBUILD</span>
        </h1>
        <p className="text-pats-silver/60 text-lg max-w-2xl mx-auto">
          From Tom Brady&apos;s departure to Super Bowl LX. Every season, every
          coaching change, and the people who made it happen.
        </p>
      </div>

      {/* Brady's Departure */}
      <SectionHeader title="It Starts with Brady Leaving" />

      <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 text-pats-silver/70 text-sm leading-relaxed">
            <p>
              On <strong className="text-white">March 17, 2020</strong>, Tom
              Brady announced on social media that he would not return to the
              Patriots after 20 seasons. Three days later he signed a 2-year,
              $50 million fully guaranteed deal with the Tampa Bay Buccaneers.
              New England reportedly never made a tangible effort to retain him.
            </p>
            <p>
              Brady&apos;s Patriots legacy:{" "}
              <strong className="text-white">
                219-66 record, 74,571 passing yards, 541 TDs, 6 Super Bowl
                championships, 3 NFL MVPs, 4 Super Bowl MVPs
              </strong>
              . He won a 7th Super Bowl with Tampa Bay, then retired permanently
              on February 1, 2023 with 251 career wins, 84,520 passing yards,
              and 624 regular-season TDs &mdash; all NFL records.
            </p>
          </div>
          <MediaPlaceholder
            type="image"
            label="Tom Brady Patriots photo / farewell"
            aspectRatio="16/10"
          />
        </div>
      </div>

      {/* Season-by-Season Timeline */}
      <SectionHeader
        title="Season-by-Season"
        subtitle="The full timeline from dynasty collapse to Super Bowl contender."
      />

      <div className="space-y-4 mb-16">
        {seasons.map((season) => (
          <div
            key={season.year}
            className={`rounded-xl border p-6 ${
              season.accent
                ? "bg-gradient-to-r from-pats-red/10 to-pats-navy/20 border-pats-red/30"
                : "bg-pats-navy/20 border-pats-navy/40"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0">
                <span
                  className={`text-3xl font-black ${
                    season.accent ? "text-pats-red" : "text-white"
                  }`}
                >
                  {season.year}
                </span>
                <span className="block text-white font-bold text-xl mt-1">
                  {season.record}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold mb-1">
                  HC: {season.coach} &bull; QB: {season.qb}
                </p>
                <p className="text-pats-silver/70 text-sm leading-relaxed">
                  {season.outcome}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The Architects */}
      <SectionHeader
        title="The Architects"
        subtitle="The people who turned the franchise around."
      />

      {/* Belichick Exit */}
      <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">
              Bill Belichick&apos;s Exit (January 11, 2024)
            </h3>
            <div className="space-y-3 text-pats-silver/70 text-sm leading-relaxed">
              <p>
                After 24 seasons, Belichick and the Patriots mutually agreed to
                part ways. Robert Kraft held a joint press conference calling the
                split &quot;amicable.&quot; Belichick&apos;s record:{" "}
                <strong className="text-white">
                  266-121 regular season, 30-12 in playoffs, 6 Super Bowl
                  championships, 17 AFC East titles, 31 career playoff wins
                </strong>{" "}
                (the most in NFL history). His 302 career wins rank 3rd
                all-time.
              </p>
              <p>
                The core problem: Belichick served as{" "}
                <strong className="text-white">
                  both head coach and de facto GM
                </strong>
                , holding final say on all personnel decisions. As CBS Sports
                summarized:{" "}
                <em>
                  &quot;Bill Belichick the GM made life very difficult for Bill
                  Belichick the coach, and ultimately cost him his job.&quot;
                </em>{" "}
                High draft picks routinely busted on offensive skill players
                (N&apos;Keal Harry over DK Metcalf, AJ Brown, and Deebo Samuel
                in 2019; Sony Michel over Nick Chubb), and key scouting
                lieutenants left for GM jobs elsewhere.
              </p>
            </div>
          </div>
          <MediaPlaceholder
            type="image"
            label="Belichick farewell press conference"
            aspectRatio="4/3"
          />
        </div>
      </div>

      {/* Mike Vrabel */}
      <div className="bg-gradient-to-r from-pats-red/10 to-pats-navy/20 border border-pats-red/30 rounded-xl p-6 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">
              Mike Vrabel &mdash; Head Coach (Hired January 12, 2025)
            </h3>
            <div className="space-y-3 text-pats-silver/70 text-sm leading-relaxed">
              <p>
                Vrabel{" "}
                <strong className="text-white">
                  played linebacker for the Patriots from 2001 to 2008
                </strong>
                , winning three Super Bowls, earning a 2007 Pro Bowl nod, and
                being inducted into the{" "}
                <strong className="text-white">
                  Patriots Hall of Fame in 2023
                </strong>
                . He knew the championship culture from the inside.
              </p>
              <p>
                As head coach of the Tennessee Titans (2018-2023), he posted a{" "}
                <strong className="text-white">54-45 regular season record</strong>,
                won the 2021 AP Coach of the Year, and reached the AFC
                Championship Game in 2019. He was fired by Tennessee in January
                2024.
              </p>
              <p>
                In his first Patriots season (2025), Vrabel led the team to a{" "}
                <strong className="text-pats-red">
                  14-3 record and Super Bowl LX
                </strong>
                , earning the{" "}
                <strong className="text-white">
                  2025 AP Coach of the Year
                </strong>{" "}
                award. The 10-game improvement tied for the largest
                single-season turnaround in NFL history.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <MediaPlaceholder
              type="image"
              label="Mike Vrabel coaching / press conference"
              aspectRatio="4/3"
            />
            <div className="grid grid-cols-2 gap-3">
              <StatCard
                label="SBs (Player)"
                value="3"
                subtitle="XXXVI, XXXVIII, XXXIX"
              />
              <StatCard
                label="Year 1 Record"
                value="14-3"
                subtitle="Coach of the Year"
                highlight
              />
            </div>
          </div>
        </div>
      </div>

      {/* Eliot Wolf */}
      <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">
              Eliot Wolf &mdash; Executive VP of Player Personnel
            </h3>
            <div className="space-y-3 text-pats-silver/70 text-sm leading-relaxed">
              <p>
                Son of Hall of Fame Packers GM{" "}
                <strong className="text-white">Ron Wolf</strong>. Eliot joined
                the Patriots as a scouting consultant in 2020 and was formally
                promoted to{" "}
                <strong className="text-white">
                  Executive Vice President of Player Personnel on May 11, 2024
                </strong>
                . The Patriots still don&apos;t carry an official &quot;GM&quot;
                title, but Wolf oversees all personnel decisions, salary cap
                management, and the 53-man roster, working collaboratively with
                Vrabel (who holds final say).
              </p>
            </div>
          </div>
          <MediaPlaceholder
            type="image"
            label="Eliot Wolf at draft / press conference"
            aspectRatio="4/3"
          />
        </div>
      </div>

      {/* Josh McDaniels */}
      <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">
              Josh McDaniels &mdash; Offensive Coordinator (Hired January 22,
              2025)
            </h3>
            <div className="space-y-3 text-pats-silver/70 text-sm leading-relaxed">
              <p>
                This was McDaniels&apos;{" "}
                <strong className="text-white">third stint</strong> as Patriots
                OC. His prior stints (2006-2008 and 2012-2021) produced three
                additional Super Bowl wins. Between stints he was head coach of
                the Denver Broncos (fired 2010) and Las Vegas Raiders (fired
                October 2023), posting a{" "}
                <strong className="text-white">
                  career head coaching record of 20-33
                </strong>
                .
              </p>
              <p>
                In 2025, under McDaniels&apos; play-calling, the Patriots
                offense jumped from{" "}
                <strong className="text-pats-red">
                  31st in yards and 30th in points to 3rd and 2nd
                </strong>
                . He won the inaugural{" "}
                <strong className="text-white">
                  AP Assistant Coach of the Year
                </strong>{" "}
                award.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <MediaPlaceholder
              type="image"
              label="Josh McDaniels coaching / with Drake Maye"
              aspectRatio="4/3"
            />
            <div className="bg-pats-teal/10 border border-pats-teal/30 rounded-xl p-4">
              <p className="text-pats-silver/50 text-xs uppercase tracking-widest font-semibold mb-2">
                Brian Hoyer on the McDaniels System
              </p>
              <blockquote className="text-white italic text-sm leading-relaxed">
                &quot;When I watch Drake play, it just looks to me like he&apos;s
                in a flow state. He&apos;s not thinking &mdash; he&apos;s just
                playing. And that&apos;s where you want to get to in that
                system.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Key Players */}
      <SectionHeader
        title="Key Players"
        subtitle="The core roster pieces that made the 2025 turnaround possible."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[
          {
            name: "Christian Gonzalez",
            pos: "CB",
            detail:
              "Drafted 17th overall in 2023 (Oregon). Tore labrum Week 4 as a rookie, then returned in 2024 to earn Second-Team All-Pro honors (16 starts, 11 pass deflections, 2 INTs). Named to the 2025 Pro Bowl. Made a key interception in the AFC Championship Game. Lockdown corner at just 23 years old.",
          },
          {
            name: "Will Campbell",
            pos: "OT",
            detail:
              "Drafted 4th overall in 2025 out of LSU. Consensus All-American. Started at left tackle from Day 1 as a rookie, protecting Drake Maye's blindside. At 6-6, 319 lbs, he allowed only 5 sacks across 2,553 snaps in college.",
          },
          {
            name: "Milton Williams",
            pos: "DT",
            detail:
              "Signed as an unrestricted free agent from Philadelphia on March 13, 2025 on a 4-year, $104 million contract — the highest-paid player on the Patriots. Won Super Bowl LIX with the Eagles in February 2025. Anchored the interior defensive line during the Super Bowl run. Just 26 years old.",
          },
          {
            name: "TreVeyon Henderson",
            pos: "RB",
            detail:
              "2nd round pick in 2025. As a rookie, he posted 1,132 scrimmage yards and 10 TDs — a foundational piece of the ground game.",
          },
          {
            name: "Kyle Williams",
            pos: "WR",
            detail:
              "3rd round pick (69th overall) in 2025 out of Washington State. An explosive rookie playmaker who contributed immediately in the passing game.",
          },
          {
            name: "Stefon Diggs",
            pos: "WR",
            detail:
              "Signed on a 3-year free agent deal. A proven veteran weapon who gave Maye a reliable target on the outside.",
          },
        ].map((player) => (
          <div
            key={player.name}
            className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl overflow-hidden card-hover"
          >
            <MediaPlaceholder
              type="image"
              label={`${player.name} photo`}
              aspectRatio="16/10"
            />
            <div className="p-4">
              <p className="text-pats-red text-xs font-bold uppercase tracking-widest">
                {player.pos}
              </p>
              <h3 className="text-white font-bold text-lg mt-1">
                {player.name}
              </h3>
              <p className="text-pats-silver/60 text-sm mt-2 leading-relaxed">
                {player.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Super Bowl LX */}
      <SectionHeader title="Super Bowl LX" />

      <div className="bg-gradient-to-br from-pats-red/10 to-pats-navy/20 border border-pats-red/30 rounded-xl p-8 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 text-pats-silver/70 text-sm leading-relaxed">
            <p>
              <strong className="text-white">
                February 8, 2026 &mdash; Levi&apos;s Stadium, Santa Clara,
                California
              </strong>
            </p>
            <p>
              The Seattle Seahawks defeated the Patriots{" "}
              <strong className="text-pats-red">29-13</strong>. Seattle
              dominated defensively, leading 12-0 heading into the fourth
              quarter. Maye connected with Mack Hollins for a 35-yard TD, but
              Seattle forced 3 turnovers and sacked Maye 6 times.
            </p>
            <p>
              Maye finished 27-of-43 for 295 yards, 2 TDs, and 2 INTs. Kenneth
              Walker III was named Super Bowl MVP with 135 rushing yards. Bad
              Bunny headlined the halftime show. The game drew{" "}
              <strong className="text-white">124.9 million viewers</strong>.
            </p>
            <p>
              While the ending wasn&apos;t what they wanted, the fact that a
              23-year-old quarterback reached the Super Bowl in his second season
              &mdash; studying Brady film, running the same system that produced
              6 championships &mdash; gives the project a powerful through-line
              connecting past and future.
            </p>
          </div>
          <div className="space-y-4">
            <MediaPlaceholder
              type="image"
              label="Super Bowl LX game photo"
              aspectRatio="16/9"
            />
            <MediaPlaceholder
              type="video"
              label="Super Bowl LX highlights"
              aspectRatio="16/9"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
