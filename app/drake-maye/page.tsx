import MediaPlaceholder from "../components/MediaPlaceholder";
import SectionHeader from "../components/SectionHeader";
import StatCard from "../components/StatCard";

export default function DrakeMayePage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden mb-16 bg-gradient-to-r from-pats-navy via-pats-dark to-pats-teal border border-pats-navy/50">
        {/* Diagonal accent lines */}
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
              DRAKE<br />MAYE
            </h1>
            <p className="text-pats-silver/70 text-lg leading-relaxed max-w-lg">
              The man who stepped into the shadow of Tom Brady and made it his
              own. Drake Maye didn&apos;t just fill the void at quarterback &mdash; he gave
              the entire organization a reason to believe again.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <MediaPlaceholder
              type="image"
              label="Drake Maye Hero Photo (action shot / portrait)"
              aspectRatio="3/4"
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </div>

      {/* Quick Bio */}
      <SectionHeader
        title="The Basics"
        subtitle="Everything you need to know about Drake Maye at a glance."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-6">
          <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6">
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Personal Info
            </h3>
            <div className="space-y-3">
              {[
                { label: "Full Name", value: "Drake Maye" },
                { label: "Born", value: "August 30, 2002" },
                { label: "Hometown", value: "Huntersville, North Carolina" },
                { label: "Height", value: "6'4\" (193 cm)" },
                { label: "Weight", value: "223 lbs (101 kg)" },
                { label: "Position", value: "Quarterback" },
                { label: "Jersey Number", value: "#10" },
                { label: "Draft", value: "2024 NFL Draft, Round 1, Pick 3" },
                { label: "Team", value: "New England Patriots" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center border-b border-pats-navy/30 pb-2"
                >
                  <span className="text-pats-silver/60 text-sm font-medium">
                    {item.label}
                  </span>
                  <span className="text-white text-sm font-semibold">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6">
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Family & Background
            </h3>
            <div className="space-y-4 text-pats-silver/70 text-sm leading-relaxed">
              <p>
                Drake Maye comes from one of the most athletic families in North
                Carolina. His father, <strong className="text-white">Mark Maye</strong>,
                was a quarterback at UNC from 1986 to 1990. His mother,{" "}
                <strong className="text-white">Lis Maye</strong>, was a basketball player
                at UNC as well.
              </p>
              <p>
                His older brother,{" "}
                <strong className="text-white">Luke Maye</strong>, became a March Madness
                legend at UNC when he hit the game-winning shot against Kentucky
                in the 2017 Elite Eight. Drake&apos;s family is deeply rooted in
                Tar Heel athletics.
              </p>
              <p>
                Growing up in Huntersville, NC, Drake attended{" "}
                <strong className="text-white">Myers Park High School</strong> where he
                was a top-rated dual-threat quarterback and one of the most
                sought-after recruits in the class of 2021.
              </p>
            </div>
          </div>

          <MediaPlaceholder
            type="image"
            label="Drake Maye family photo or high school photo"
            aspectRatio="16/10"
          />
        </div>
      </div>

      {/* College Career */}
      <SectionHeader
        title="College Career"
        subtitle="A Tar Heel through and through. Drake Maye rewrote the record books at the University of North Carolina."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6 h-full">
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
              UNC Chapel Hill (2021&ndash;2023)
            </h3>
            <div className="space-y-4 text-pats-silver/70 text-sm leading-relaxed">
              <p>
                Drake Maye committed to the{" "}
                <strong className="text-white">University of North Carolina</strong>{" "}
                following in the family tradition. After redshirting his true
                freshman season behind Sam Howell, Maye took over as the
                starter in 2022 and immediately turned heads.
              </p>
              <p>
                In his first season as starter, Maye threw for{" "}
                <strong className="text-pats-red">4,321 yards</strong> and{" "}
                <strong className="text-pats-red">38 touchdowns</strong> with
                only 7 interceptions. He also rushed for 698 yards and 7 TDs,
                showcasing the dual-threat ability that made him a top NFL
                prospect. He was named{" "}
                <strong className="text-white">ACC Quarterback of the Year</strong> and
                finished 4th in Heisman Trophy voting.
              </p>
              <p>
                In 2023, despite playing behind a weaker offensive line and
                dealing with injuries across the roster, Maye still threw for
                3,608 yards and 24 touchdowns. NFL scouts saw a quarterback who
                could elevate players around him &mdash; exactly what the Patriots
                needed.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <MediaPlaceholder
            type="image"
            label="Drake Maye UNC action photo"
            aspectRatio="4/5"
          />
          <MediaPlaceholder
            type="image"
            label="Drake Maye UNC celebration / team photo"
            aspectRatio="16/10"
          />
        </div>
      </div>

      {/* College Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        <StatCard label="Pass Yards (2022)" value="4,321" highlight />
        <StatCard label="Pass TDs (2022)" value="38" highlight />
        <StatCard label="Rush Yards (2022)" value="698" />
        <StatCard label="Rush TDs (2022)" value="7" />
        <StatCard label="Heisman Finish" value="4th" />
        <StatCard label="ACC QB of Year" value="2022" highlight />
      </div>

      {/* NFL Career */}
      <SectionHeader
        title="NFL Career"
        subtitle="Drafted 3rd overall in 2024, Maye stepped into the toughest rebuild in Patriots history and turned it around."
      />

      {/* Rookie Season */}
      <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6 mb-8">
        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
          Year 1: The Foundation (2024)
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 text-pats-silver/70 text-sm leading-relaxed">
            <p>
              Maye&apos;s rookie season was about survival. The Patriots went{" "}
              <strong className="text-pats-red">4-13</strong>, but the flashes
              were undeniable. Maye showed poise, arm talent, and a willingness
              to stand in the pocket and take hits that the franchise hadn&apos;t
              seen since Brady.
            </p>
            <p>
              While the record was ugly, Maye&apos;s play gave the front office
              confidence that they had their guy. His football IQ, processing
              speed, and leadership were evident from day one.
            </p>
            <p>
              The 4-13 season also earned the Patriots premium draft capital,
              setting the stage for GM{" "}
              <strong className="text-white">Eliot Wolf</strong> to build a
              roster around Maye in the offseason.
            </p>
          </div>
          <MediaPlaceholder
            type="video"
            label="Drake Maye rookie season highlights"
            aspectRatio="16/9"
          />
        </div>
      </div>

      {/* Year 2 Breakout */}
      <div className="bg-gradient-to-br from-pats-red/10 to-pats-navy/20 border border-pats-red/30 rounded-xl p-6 mb-8">
        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
          Year 2: The Breakout (2025)
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 text-pats-silver/70 text-sm leading-relaxed">
            <p>
              Everything changed in Year 2. Under new head coach{" "}
              <strong className="text-white">Mike Vrabel</strong> and offensive
              coordinator <strong className="text-white">Josh McDaniels</strong>,
              Maye took a massive leap. According to Brian Hoyer, Maye thrives
              in McDaniels&apos; system because of his football IQ and how fast
              he processes everything.
            </p>
            <p>
              In a December 2025 interview with NFL on NBC, Maye talked about
              what made Year 2 different:{" "}
              <em className="text-white">
                &quot;Real accountability, real identity, nothing left to chance.&quot;
              </em>
            </p>
            <p>
              When ESPN asked him about following Brady&apos;s legacy, Maye called
              it{" "}
              <em className="text-pats-red">
                &quot;a blessing, not a burden.&quot;
              </em>{" "}
              He said he studies Brady&apos;s film with McDaniels &mdash; a completely
              different mindset from the post-Brady QBs who crumbled under that
              pressure.
            </p>
            <p>
              The Patriots made it all the way to the{" "}
              <strong className="text-white">Super Bowl</strong> in the 2025
              season &mdash; one of the fastest rebuilds in modern NFL history.
            </p>
          </div>
          <div className="space-y-4">
            <MediaPlaceholder
              type="video"
              label="Drake Maye Year 2 highlights / NBC interview clip"
              aspectRatio="16/9"
            />
            <MediaPlaceholder
              type="image"
              label="Drake Maye celebrating / leadership moment"
              aspectRatio="16/10"
            />
          </div>
        </div>
      </div>

      {/* NFL Stats Grid */}
      <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
        Key NFL Stats
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
        <StatCard label="Draft Pick" value="#3" subtitle="1st Round, 2024" highlight />
        <StatCard label="Year 1 Record" value="4-13" subtitle="2024 Season" />
        <StatCard label="Year 2 Result" value="SB" subtitle="Super Bowl Appearance" highlight />
        <StatCard label="Jersey" value="#10" subtitle="New England Patriots" />
        <StatCard label="Coaching Staff" value="Vrabel" subtitle="Head Coach" />
        <StatCard label="OC" value="McDaniels" subtitle="Off. Coordinator" />
        <StatCard label="GM" value="Wolf" subtitle="Eliot Wolf" />
        <StatCard label="Legacy Quote" value="Blessing" subtitle="Not a burden" highlight />
      </div>

      {/* Leadership Section */}
      <SectionHeader
        title="Leadership & Mentality"
        subtitle="What separates Drake Maye from every post-Brady quarterback."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6">
          <h3 className="text-pats-red font-bold text-sm uppercase tracking-widest mb-4">
            Embracing the Brady Standard
          </h3>
          <blockquote className="border-l-4 border-pats-red pl-4 text-white italic text-lg mb-4">
            &quot;Following Tom Brady&apos;s legacy is a blessing, not a burden.&quot;
          </blockquote>
          <p className="text-pats-silver/70 text-sm leading-relaxed">
            Where Cam Newton, Mac Jones, and Bailey Zappe struggled under the
            weight of Brady&apos;s shadow, Drake Maye leaned into it. He actively
            studies Brady&apos;s film with Josh McDaniels and has adopted the same
            accountability-first culture that defined the dynasty years.
          </p>
        </div>

        <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6">
          <h3 className="text-pats-red font-bold text-sm uppercase tracking-widest mb-4">
            Year 2 Transformation
          </h3>
          <blockquote className="border-l-4 border-pats-red pl-4 text-white italic text-lg mb-4">
            &quot;Real accountability, real identity, nothing left to chance.&quot;
          </blockquote>
          <p className="text-pats-silver/70 text-sm leading-relaxed">
            Mike Vrabel had Maye running full offensive conditioning drills
            during the offseason, putting him at the center of everything from
            day one. According to ESPN&apos;s Mike Reiss, Maye took on a bigger
            leadership role in Year 2 that completely transformed the team
            culture.
          </p>
        </div>
      </div>

      {/* Video Gallery Placeholders */}
      <SectionHeader
        title="Highlight Reel"
        subtitle="Touchdown passes, clutch drives, and the plays that defined Drake Maye's rise."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <MediaPlaceholder
          type="video"
          label="Drake Maye TD compilation"
          aspectRatio="16/9"
        />
        <MediaPlaceholder
          type="video"
          label="Drake Maye clutch 4th quarter drives"
          aspectRatio="16/9"
        />
        <MediaPlaceholder
          type="video"
          label="Drake Maye press conference / leadership moments"
          aspectRatio="16/9"
        />
        <MediaPlaceholder
          type="video"
          label="Drake Maye UNC college highlights"
          aspectRatio="16/9"
        />
        <MediaPlaceholder
          type="video"
          label="NFL Draft night - Patriots select Drake Maye"
          aspectRatio="16/9"
        />
        <MediaPlaceholder
          type="video"
          label="Drake Maye mic'd up / sideline moments"
          aspectRatio="16/9"
        />
      </div>
    </div>
  );
}
