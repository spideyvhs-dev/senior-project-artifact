import MediaPlaceholder from "../components/MediaPlaceholder";
import SectionHeader from "../components/SectionHeader";
import StatCard from "../components/StatCard";

export default function DrakeMayePage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden mb-16 bg-gradient-to-r from-pats-navy via-pats-dark to-pats-teal border border-pats-navy/50">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[200%] h-[3px] bg-pats-red/30 top-[20%] -left-1/2"
            style={{ transform: "rotate(-25deg)" }}
          />
          <div
            className="absolute w-[200%] h-[2px] bg-white/10 top-[50%] -left-1/2"
            style={{ transform: "rotate(-25deg)" }}
          />
          <div
            className="absolute w-[200%] h-[3px] bg-pats-red/20 top-[80%] -left-1/2"
            style={{ transform: "rotate(-25deg)" }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 sm:p-12">
          <div className="flex flex-col justify-center">
            <p className="text-pats-red text-sm font-bold uppercase tracking-[0.3em] mb-3">
              Quarterback &bull; #10
            </p>
            <h1 className="block-title text-white text-5xl sm:text-6xl lg:text-7xl mb-4">
              DRAKE
              <br />
              MAYE
            </h1>
            <p className="text-pats-silver/70 text-lg leading-relaxed max-w-lg">
              Drafted 3rd overall in 2024 out of North Carolina. In just his
              second NFL season, Maye led the Patriots to a 14-3 record and
              Super Bowl LX &mdash; the largest single-season turnaround in NFL
              history.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <MediaPlaceholder
              type="image"
              label="Drake Maye action shot / portrait"
              aspectRatio="3/4"
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </div>

      {/* Background & Family */}
      <SectionHeader title="Background" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6">
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
            Personal Info
          </h3>
          <div className="space-y-3">
            {[
              { label: "Full Name", value: "Drake Lee Maye" },
              { label: "Born", value: "August 30, 2002" },
              { label: "Hometown", value: "Huntersville, North Carolina" },
              { label: "High School", value: "Myers Park High School, Charlotte" },
              { label: "College", value: "University of North Carolina" },
              { label: "Position", value: "Quarterback" },
              { label: "Jersey Number", value: "#10" },
              { label: "Draft", value: "2024, Round 1, Pick 3 overall" },
              { label: "Contract", value: "4-year, $36.64M fully guaranteed" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center border-b border-pats-navy/30 pb-2"
              >
                <span className="text-pats-silver/60 text-sm font-medium">
                  {item.label}
                </span>
                <span className="text-white text-sm font-semibold text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6">
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Family & Athletic Roots
            </h3>
            <div className="space-y-4 text-pats-silver/70 text-sm leading-relaxed">
              <p>
                Drake comes from one of the most accomplished athletic families
                in North Carolina. His father,{" "}
                <strong className="text-white">Mark Maye</strong>, was a
                quarterback at UNC in the 1980s.
              </p>
              <p>
                His brother{" "}
                <strong className="text-white">Luke Maye</strong> hit the iconic
                buzzer-beater to send UNC basketball to the 2017 Final Four.
                Brother <strong className="text-white">Cole Maye</strong> won
                the 2017 College World Series with Florida.
              </p>
              <p>
                At{" "}
                <strong className="text-white">
                  Myers Park High School in Charlotte
                </strong>
                , Drake threw for 6,713 yards and 86 touchdowns across two prep
                seasons and held Division I basketball offers before committing
                to football.
              </p>
            </div>
          </div>

          <MediaPlaceholder
            type="image"
            label="Drake Maye family / high school photo"
            aspectRatio="16/10"
          />
        </div>
      </div>

      {/* College Career */}
      <SectionHeader title="College Career: UNC (2021-2023)" />

      <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6 mb-6">
        <div className="space-y-4 text-pats-silver/70 text-sm leading-relaxed">
          <p>
            Maye redshirted behind Sam Howell in 2021, then exploded as a
            starter in 2022:{" "}
            <strong className="text-pats-red">
              4,321 passing yards, 38 TDs, 7 INTs
            </strong>
            , plus 698 rushing yards and 7 rushing TDs. He led the NCAA in total
            offense with <strong className="text-white">5,019 yards</strong> and
            swept all four major ACC awards (Player of the Year, Offensive Player
            of the Year, Rookie of the Year, Offensive Rookie of the Year)
            &mdash; only the second player to do so after Jameis Winston.
          </p>
          <p>
            In 2023, he threw for 3,608 yards with 24 TDs and 9 INTs before
            declaring for the draft. His career UNC totals:{" "}
            <strong className="text-white">
              8,018 passing yards, 63 TDs, 16 INTs
            </strong>
            .
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <StatCard label="Pass Yards (2022)" value="4,321" highlight />
        <StatCard label="Pass TDs (2022)" value="38" highlight />
        <StatCard label="Rush Yards (2022)" value="698" />
        <StatCard label="Total Offense" value="5,019" subtitle="Led NCAA" />
        <StatCard label="Career TDs" value="63" />
        <StatCard label="ACC Awards" value="4" subtitle="Swept all four" highlight />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
        <MediaPlaceholder
          type="image"
          label="Drake Maye UNC action photo"
          aspectRatio="16/10"
        />
        <MediaPlaceholder
          type="video"
          label="Drake Maye UNC highlights"
          aspectRatio="16/10"
        />
      </div>

      {/* NFL Career */}
      <SectionHeader title="NFL Career" />

      {/* 2024 Draft */}
      <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6 mb-6">
        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
          2024 NFL Draft &amp; Rookie Season
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 text-pats-silver/70 text-sm leading-relaxed">
            <p>
              Maye was selected{" "}
              <strong className="text-pats-red">3rd overall</strong> in the 2024
              NFL Draft, behind Caleb Williams (#1 to Chicago) and Jayden
              Daniels (#2 to Washington). He chose jersey{" "}
              <strong className="text-white">#10</strong>, joking:{" "}
              <em>&quot;As long as it ain&apos;t 12; can&apos;t fill those shoes.&quot;</em>
            </p>
            <p>
              After Jacoby Brissett started the first 5 games (going 1-4), Maye
              made his NFL debut in mop-up duty in Week 3 and was named the
              starter on October 8, 2024. He started 13 games the rest of the
              season. The team went <strong className="text-pats-red">4-13</strong>{" "}
              under first-year head coach Jerod Mayo.
            </p>
            <p>
              Rookie stats:{" "}
              <strong className="text-white">
                2,276 passing yards, 15 TDs, 10 INTs, ~67% completion rate,
                88.1 passer rating
              </strong>
              . He was named to the 2025 Pro Bowl as a replacement for Josh
              Allen. The supporting cast was among the NFL&apos;s worst, but his
              raw talent was evident.
            </p>
          </div>
          <div className="space-y-4">
            <MediaPlaceholder
              type="video"
              label="Drake Maye rookie highlights / draft night"
              aspectRatio="16/9"
            />
            <div className="grid grid-cols-2 gap-3">
              <StatCard label="Draft Pick" value="#3" highlight />
              <StatCard label="Rookie TDs" value="15" />
              <StatCard label="Pass Yards" value="2,276" />
              <StatCard label="Passer Rating" value="88.1" />
            </div>
          </div>
        </div>
      </div>

      {/* Year 2 Breakout */}
      <div className="bg-gradient-to-br from-pats-red/10 to-pats-navy/20 border border-pats-red/30 rounded-xl p-6 mb-6">
        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
          Year 2: The Breakout (2025)
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 text-pats-silver/70 text-sm leading-relaxed">
            <p>
              Under new head coach Mike Vrabel and returning OC Josh McDaniels,
              Maye authored one of the great sophomore QB seasons in NFL history:
            </p>
            <p>
              <strong className="text-pats-red">
                4,394 passing yards, 31 TDs, 8 INTs, 72.0% completion rate,
                113.5 passer rating (led NFL), 77.1 QBR (led NFL)
              </strong>
              .
            </p>
            <p>
              He finished as{" "}
              <strong className="text-white">MVP runner-up</strong>, losing to
              Matthew Stafford by a single first-place vote (23 to 24). The
              Patriots went{" "}
              <strong className="text-white">14-3</strong>, won the AFC East,
              and marched to{" "}
              <strong className="text-white">Super Bowl LX</strong> on February
              8, 2026, where they lost to the Seattle Seahawks 29-13.
            </p>
            <p>
              Notable moments: Week 7 vs Tennessee he completed{" "}
              <strong className="text-white">21-of-23 (91.3%)</strong>, setting
              the Patriots franchise record for completion percentage. Week 17
              vs the Jets: 19-of-21, 256 yards, 5 TDs, 99.8 QBR &mdash; the
              highest single-game QBR in NFL history.
            </p>
          </div>
          <div className="space-y-4">
            <MediaPlaceholder
              type="video"
              label="Drake Maye 2025 season highlights"
              aspectRatio="16/9"
            />
            <div className="grid grid-cols-2 gap-3">
              <StatCard label="Pass Yards" value="4,394" highlight />
              <StatCard label="TDs" value="31" highlight />
              <StatCard label="Passer Rating" value="113.5" subtitle="Led NFL" highlight />
              <StatCard label="Record" value="14-3" subtitle="Super Bowl LX" />
            </div>
          </div>
        </div>
      </div>

      {/* Brady Film Study & Quotes */}
      <SectionHeader title="The Brady Connection" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6">
          <h3 className="text-pats-red font-bold text-sm uppercase tracking-widest mb-4">
            Studying Brady&apos;s Film
          </h3>
          <p className="text-pats-silver/70 text-sm leading-relaxed mb-4">
            When McDaniels returned as OC, he and Vrabel asked Maye to study
            film of Brady running the same offensive system. Maye embraced it:
          </p>
          <blockquote className="border-l-4 border-pats-red pl-4 text-white italic text-base mb-4">
            &quot;We&apos;ve got the whole library from years ago back when the
            greatest to ever do it did it in the same offense. And what a guy to
            watch film on.&quot;
          </blockquote>
          <p className="text-pats-silver/50 text-xs">
            &mdash; Drake Maye, NBC Sports Boston
          </p>
        </div>

        <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6">
          <h3 className="text-pats-red font-bold text-sm uppercase tracking-widest mb-4">
            What Others Say
          </h3>
          <div className="space-y-5">
            <div>
              <blockquote className="border-l-4 border-pats-red pl-4 text-white italic text-sm mb-2">
                &quot;When I watch Drake play, it just looks to me like he&apos;s
                in a flow state. He&apos;s not thinking &mdash; he&apos;s just
                playing.&quot;
              </blockquote>
              <p className="text-pats-silver/50 text-xs pl-4">
                &mdash; Brian Hoyer (8 seasons with the Patriots)
              </p>
            </div>
            <div>
              <blockquote className="border-l-4 border-pats-red pl-4 text-white italic text-sm mb-2">
                &quot;Drake is running the same system that I was in. I know how
                good that system is for quarterbacks.&quot;
              </blockquote>
              <p className="text-pats-silver/50 text-xs pl-4">
                &mdash; Tom Brady
              </p>
            </div>
            <div>
              <blockquote className="border-l-4 border-pats-red pl-4 text-white italic text-sm mb-2">
                &quot;I wouldn&apos;t say it&apos;s that much of a burden. I
                think it&apos;s a blessing. It&apos;s an opportunity. To play
                quarterback for the New England Patriots, what a dream come
                true.&quot;
              </blockquote>
              <p className="text-pats-silver/50 text-xs pl-4">
                &mdash; Drake Maye on following Brady&apos;s legacy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight Reel */}
      <SectionHeader title="Highlight Reel" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MediaPlaceholder
          type="video"
          label="Drake Maye TD compilation"
          aspectRatio="16/9"
        />
        <MediaPlaceholder
          type="video"
          label="NFL Draft night - Patriots select Drake Maye"
          aspectRatio="16/9"
        />
        <MediaPlaceholder
          type="video"
          label="Drake Maye press conference / interviews"
          aspectRatio="16/9"
        />
      </div>
    </div>
  );
}
