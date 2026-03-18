import MediaPlaceholder from "../components/MediaPlaceholder";
import SectionHeader from "../components/SectionHeader";
import StatCard from "../components/StatCard";

const keyPlayers = [
  {
    name: "Drake Maye",
    position: "QB",
    detail: "The franchise cornerstone. 3rd overall pick in 2024. Everything is built around him.",
  },
  {
    name: "Xavier Gonzalez",
    position: "WR/TE",
    detail: "One of Wolf's key draft picks to give Maye weapons on offense.",
  },
  {
    name: "Caleb Williams",
    position: "Edge",
    detail: "Part of the young defensive core Wolf assembled through the draft.",
  },
  {
    name: "Jalen Campbell",
    position: "CB",
    detail: "Premium draft capital spent on defense to build a complete roster.",
  },
];

export default function TheRebuildPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-16">
        <p className="text-pats-red text-sm font-bold uppercase tracking-[0.3em] mb-3">
          2024 &ndash; Present
        </p>
        <h1 className="block-title text-white text-5xl sm:text-6xl lg:text-7xl mb-4">
          THE<br />
          <span className="text-pats-red">REBUILD</span>
        </h1>
        <p className="text-pats-silver/60 text-lg max-w-2xl mx-auto">
          How the Patriots went from 4-13 to the Super Bowl in one of the
          fastest rebuilds in modern NFL history. The right quarterback, the
          right coach, and the right front office &mdash; all at the same time.
        </p>
      </div>

      {/* Blueprint Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
        {/* The Three Pillars */}
        <div className="bg-gradient-to-b from-pats-red/15 to-pats-red/5 border border-pats-red/30 rounded-xl p-6 card-hover">
          <div className="w-12 h-12 rounded-lg bg-pats-red/20 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-pats-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
            </svg>
          </div>
          <h3 className="text-white font-bold text-xl uppercase tracking-tight mb-2">
            The Quarterback
          </h3>
          <p className="text-pats-silver/60 text-sm leading-relaxed">
            Drake Maye gave the organization something to build around.
            His football IQ, processing speed, and leadership were the
            foundation everything else was built on.
          </p>
        </div>

        <div className="bg-gradient-to-b from-pats-navy/40 to-pats-navy/10 border border-pats-navy/50 rounded-xl p-6 card-hover">
          <div className="w-12 h-12 rounded-lg bg-pats-navy/40 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-pats-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <h3 className="text-white font-bold text-xl uppercase tracking-tight mb-2">
            The Front Office
          </h3>
          <p className="text-pats-silver/60 text-sm leading-relaxed">
            GM Eliot Wolf built one of the youngest and most talented
            rosters in the NFL. Smart drafting, strategic free agency
            moves, and a clear vision for the future.
          </p>
        </div>

        <div className="bg-gradient-to-b from-pats-teal/30 to-pats-teal/5 border border-pats-teal/40 rounded-xl p-6 card-hover">
          <div className="w-12 h-12 rounded-lg bg-pats-teal/30 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-pats-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
            </svg>
          </div>
          <h3 className="text-white font-bold text-xl uppercase tracking-tight mb-2">
            The Coaching Staff
          </h3>
          <p className="text-pats-silver/60 text-sm leading-relaxed">
            Mike Vrabel brought accountability and toughness. Josh McDaniels
            returned with the offense that Brady thrived in. Brian Hoyer
            mentored from the sideline.
          </p>
        </div>
      </div>

      {/* Mike Vrabel Section */}
      <SectionHeader
        title="Mike Vrabel"
        subtitle="The head coach who restored the culture of accountability and toughness that defined the Patriots dynasty."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="space-y-6">
          <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6">
            <h3 className="text-pats-red font-bold text-sm uppercase tracking-widest mb-4">
              The Vrabel Effect
            </h3>
            <div className="space-y-4 text-pats-silver/70 text-sm leading-relaxed">
              <p>
                Mike Vrabel was a three-time Super Bowl champion as a Patriots
                player and understood the culture that made New England great
                better than almost anyone. When he was hired as head coach, he
                immediately set about restoring it.
              </p>
              <p>
                According to ESPN&apos;s Mike Reiss, Vrabel had Drake Maye
                running full offensive conditioning drills during the offseason
                to put him at the center of everything from day one. This
                wasn&apos;t just about football &mdash; it was about establishing
                Maye as the leader of the team.
              </p>
              <p>
                Vrabel&apos;s coaching philosophy centered on accountability
                and discipline, the same values that Belichick instilled during
                the dynasty years. But unlike Belichick&apos;s final seasons,
                Vrabel paired that toughness with a genuine player-development
                focus.
              </p>
            </div>
          </div>
          <MediaPlaceholder
            type="image"
            label="Mike Vrabel press conference / coaching on sideline"
            aspectRatio="16/10"
          />
        </div>

        <div className="space-y-6">
          <MediaPlaceholder
            type="video"
            label="Mike Vrabel introductory press conference"
            aspectRatio="16/9"
          />

          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Super Bowls (Player)" value="3" subtitle="XXXVI, XXXVIII, XXXIX" />
            <StatCard label="Prior HC Record" value="54-45" subtitle="Tennessee Titans" />
            <StatCard label="Year 1 Pats" value="SB" subtitle="Super Bowl appearance" highlight />
            <StatCard label="Philosophy" value="Culture" subtitle="Accountability first" />
          </div>
        </div>
      </div>

      {/* Eliot Wolf Section */}
      <SectionHeader
        title="Eliot Wolf"
        subtitle="The most underrated architect of the Patriots rebuild."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6">
          <h3 className="text-pats-red font-bold text-sm uppercase tracking-widest mb-4">
            Building a Monster Young Core
          </h3>
          <div className="space-y-4 text-pats-silver/70 text-sm leading-relaxed">
            <p>
              Eliot Wolf, the son of legendary Packers GM Ron Wolf, took over
              as the Patriots&apos; general manager with one mission: rebuild
              this roster from scratch around Drake Maye.
            </p>
            <p>
              Wolf assembled one of the youngest and most talented rosters in
              the NFL through shrewd drafting and smart free agency moves. He
              understood that the Belichick-era roster was devoid of young
              talent and needed a complete overhaul.
            </p>
            <p>
              The 4-13 season in 2024 gave Wolf premium draft capital, and he
              used every pick to maximum effect. By the 2025 season, the
              Patriots had a roster built for sustained success, not just a
              one-year flash.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <MediaPlaceholder
            type="image"
            label="Eliot Wolf at draft / press conference"
            aspectRatio="16/10"
          />
          <MediaPlaceholder
            type="image"
            label="Patriots draft room / war room"
            aspectRatio="16/10"
          />
        </div>
      </div>

      {/* Key Players */}
      <SectionHeader
        title="Key Players"
        subtitle="The core pieces Wolf and Vrabel assembled around Drake Maye."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {keyPlayers.map((player) => (
          <div
            key={player.name}
            className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl overflow-hidden card-hover"
          >
            <MediaPlaceholder
              type="image"
              label={`${player.name} action photo`}
              aspectRatio="3/4"
            />
            <div className="p-4">
              <p className="text-pats-red text-xs font-bold uppercase tracking-widest">
                {player.position}
              </p>
              <h3 className="text-white font-bold text-lg mt-1">{player.name}</h3>
              <p className="text-pats-silver/60 text-sm mt-2 leading-relaxed">
                {player.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Josh McDaniels Section */}
      <SectionHeader
        title="Josh McDaniels"
        subtitle="The offensive coordinator who brought the Brady-era playbook back to New England."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6">
          <div className="space-y-4 text-pats-silver/70 text-sm leading-relaxed">
            <p>
              Josh McDaniels&apos; return to New England was pivotal. He was the
              offensive coordinator during the Brady dynasty and brought that
              same system back to Foxborough.
            </p>
            <p>
              According to Brian Hoyer, Drake Maye thrives in McDaniels&apos;
              system specifically because of his football IQ and how fast he
              processes everything. Maye actively studies Brady&apos;s film with
              McDaniels, learning the same reads and progressions that made
              Brady the GOAT.
            </p>
            <p>
              The connection between McDaniels and Maye mirrors the early
              McDaniels-Brady partnership &mdash; a young, talented quarterback
              with elite processing ability paired with an offensive coordinator
              who knows exactly how to maximize that talent.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <MediaPlaceholder
            type="image"
            label="Josh McDaniels coaching / with Drake Maye"
            aspectRatio="16/10"
          />
          <div className="bg-pats-teal/10 border border-pats-teal/30 rounded-xl p-5">
            <p className="text-pats-silver/50 text-xs uppercase tracking-widest font-semibold mb-2">
              Brian Hoyer on Drake Maye
            </p>
            <blockquote className="text-white italic text-base leading-relaxed">
              &quot;Maye thrives in McDaniels&apos; system because of his
              football IQ and how fast he processes everything.&quot;
            </blockquote>
            <p className="text-pats-silver/40 text-xs mt-2">
              &mdash; NBC Sports Boston, December 2025
            </p>
          </div>
        </div>
      </div>

      {/* The Turning Point */}
      <SectionHeader
        title="The Turning Point"
        subtitle="Was there one single moment that made the Patriots into who they are now?"
      />

      <div className="bg-gradient-to-br from-pats-red/10 to-pats-navy/20 border border-pats-red/30 rounded-xl p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-pats-silver/70 text-lg leading-relaxed mb-6">
            The truth is, it was never just one thing. Drake Maye&apos;s
            arrival gave the organization direction. Eliot Wolf&apos;s
            roster-building gave them talent. Vrabel&apos;s coaching gave them
            culture. McDaniels&apos; playbook gave them an identity.
          </p>
          <p className="text-white text-xl font-bold leading-relaxed">
            Every piece had to fall into place at the same time. And for the
            first time since 2019, they did.
          </p>
        </div>
      </div>

      {/* Media Gallery */}
      <SectionHeader title="Rebuild Gallery" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MediaPlaceholder type="video" label="Vrabel and Wolf introductory presser" aspectRatio="16/9" />
        <MediaPlaceholder type="video" label="Key draft picks highlight reel" aspectRatio="16/9" />
        <MediaPlaceholder type="video" label="2025 season hype video / montage" aspectRatio="16/9" />
        <MediaPlaceholder type="image" label="Vrabel coaching on the sideline" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Wolf at the NFL Draft" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Team celebration / locker room" aspectRatio="4/3" />
      </div>
    </div>
  );
}
