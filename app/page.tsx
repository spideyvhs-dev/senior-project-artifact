import Link from "next/link";
import MediaPlaceholder from "./components/MediaPlaceholder";

const pages = [
  {
    href: "/drake-maye",
    title: "Drake Maye",
    description: "Stats, background, college career, and the man behind the comeback.",
    color: "from-pats-red/20 to-pats-red/5",
    borderColor: "border-pats-red/30",
  },
  {
    href: "/dynasty-and-fall",
    title: "The Dynasty & Fall",
    description: "From six Super Bowls to 4-13. How did it all go wrong?",
    color: "from-pats-navy/40 to-pats-navy/10",
    borderColor: "border-pats-navy/50",
  },
  {
    href: "/the-rebuild",
    title: "The Rebuild",
    description: "Vrabel, Wolf, McDaniels, and the blueprint that brought New England back.",
    color: "from-pats-teal/40 to-pats-teal/10",
    borderColor: "border-pats-teal/50",
  },
  {
    href: "/espn-debate",
    title: "ESPN Debate",
    description: "Our First Take-style breakdown of the Patriots resurrection.",
    color: "from-pats-red/15 to-pats-navy/20",
    borderColor: "border-pats-red/20",
  },
  {
    href: "/fun-facts",
    title: "Fun Facts",
    description: "Wild stats, records, and trivia from across the Patriots universe.",
    color: "from-pats-silver/10 to-pats-navy/20",
    borderColor: "border-pats-silver/20",
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-pats-darker via-pats-dark to-pats-navy/40" />

        {/* Diagonal stripes */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[200%] h-[3px] bg-pats-red/40 top-[15%] -left-1/2"
            style={{ transform: "rotate(-35deg)" }}
          />
          <div
            className="absolute w-[200%] h-[2px] bg-white/10 top-[25%] -left-1/2"
            style={{ transform: "rotate(-35deg)" }}
          />
          <div
            className="absolute w-[200%] h-[4px] bg-pats-red/25 top-[55%] -left-1/2"
            style={{ transform: "rotate(-35deg)" }}
          />
          <div
            className="absolute w-[200%] h-[2px] bg-white/8 top-[70%] -left-1/2"
            style={{ transform: "rotate(-35deg)" }}
          />
          <div
            className="absolute w-[200%] h-[3px] bg-pats-red/30 top-[85%] -left-1/2"
            style={{ transform: "rotate(-35deg)" }}
          />
        </div>

        {/* Red glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pats-red/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pats-navy/30 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Main title - Pats Pod style block letters */}
          <h1 className="block-title text-glow-red text-pats-red text-7xl sm:text-8xl md:text-9xl mb-2">
            THE
          </h1>
          <h1 className="block-title text-glow-red text-pats-red text-8xl sm:text-9xl md:text-[10rem] mb-2">
            PATS
          </h1>
          <h1 className="block-title text-glow-red text-pats-red text-8xl sm:text-9xl md:text-[10rem] mb-8">
            POD
          </h1>

          <p className="text-pats-silver text-lg sm:text-xl uppercase tracking-[0.3em] font-semibold mb-4">
            Hosted by Beckett Baldwin
          </p>

          <p className="text-pats-silver/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            An interactive exploration of how Drake Maye and the New England
            Patriots restored a dynasty after the post-Brady collapse. A BHS
            Senior Research Project.
          </p>

          {/* Hero media placeholder */}
          <div className="max-w-3xl mx-auto mb-12">
            <MediaPlaceholder
              type="image"
              label="The Pats Pod Cover Art / Hero Image"
              aspectRatio="1/1"
              className="max-w-md mx-auto"
            />
          </div>

          <Link
            href="/drake-maye"
            className="inline-block bg-pats-red hover:bg-pats-red/80 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-pats-red/25"
          >
            Explore the Story
          </Link>
        </div>
      </section>

      {/* Page Navigation Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="w-12 h-1 bg-pats-red rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Explore the Project
          </h2>
          <p className="text-pats-silver/60 mt-3 max-w-xl mx-auto">
            Click through each section to dive deep into the Patriots story,
            from the Brady era to the Drake Maye revolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className={`card-hover block rounded-xl border ${page.borderColor} bg-gradient-to-br ${page.color} p-6 group`}
            >
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2 group-hover:text-pats-red transition-colors">
                {page.title}
              </h3>
              <p className="text-pats-silver/60 text-sm leading-relaxed">
                {page.description}
              </p>
              <div className="mt-4 text-pats-red text-sm font-semibold uppercase tracking-wider flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-pats-navy/30 py-8 px-4 text-center">
        <p className="text-pats-silver/40 text-sm">
          BHS English Senior Research Project &mdash; Beckett Baldwin &mdash;{" "}
          {new Date().getFullYear()}
        </p>
        <p className="text-pats-silver/25 text-xs mt-1">
          The Pats Pod: How Drake Maye Restored the Dynasty
        </p>
      </footer>
    </div>
  );
}
