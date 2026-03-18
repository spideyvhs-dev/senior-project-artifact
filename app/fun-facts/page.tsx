"use client";

import { useState } from "react";
import MediaPlaceholder from "../components/MediaPlaceholder";
import SectionHeader from "../components/SectionHeader";

interface FunFact {
  category: string;
  title: string;
  fact: string;
  extra?: string;
}

const funFacts: FunFact[] = [
  {
    category: "Tom Brady",
    title: "199th Pick, 6 Rings",
    fact: "Tom Brady was the 199th overall pick in the 2000 NFL Draft. Six quarterbacks were taken before him. He went on to win 6 Super Bowls with the Patriots and 7 total, the most by any player in NFL history.",
    extra: "Brady was so underrated coming out of Michigan that the Patriots' scouting report described him as having 'poor build' and 'lacks great physical stature.'",
  },
  {
    category: "Tom Brady",
    title: "The Brady 6",
    fact: "Brady was drafted behind Chad Pennington, Giovanni Carmazzi, Chris Redman, Tee Martin, Marc Bulger, and Spergon Wynn. Of those six, only Marc Bulger had a notable NFL career.",
  },
  {
    category: "Dynasty",
    title: "20 Consecutive Winning Seasons",
    fact: "Under Belichick and Brady, the Patriots had 20 consecutive seasons with a .500 or better record (2001-2019). That streak is one of the longest in NFL history.",
  },
  {
    category: "Dynasty",
    title: "17 AFC East Titles",
    fact: "The Patriots won the AFC East 17 times during the Brady-Belichick era, completely dominating the division for two decades.",
  },
  {
    category: "Super Bowl",
    title: "28-3: The Greatest Comeback",
    fact: "In Super Bowl LI, the Patriots trailed the Atlanta Falcons 28-3 in the third quarter. Brady led the greatest comeback in Super Bowl history, winning 34-28 in the first-ever Super Bowl overtime.",
    extra: "The Patriots had a 0.3% win probability at one point during the game according to ESPN's win probability model.",
  },
  {
    category: "Super Bowl",
    title: "Malcolm Butler's Interception",
    fact: "In Super Bowl XLIX, the Seahawks were on the 1-yard line with 26 seconds left. Instead of running Marshawn Lynch, they threw — and Malcolm Butler made the game-saving interception. It's considered one of the greatest plays in Super Bowl history.",
  },
  {
    category: "Drake Maye",
    title: "Following in Dad's Footsteps",
    fact: "Drake Maye's father, Mark Maye, was a quarterback at UNC from 1986-1990. Drake followed in his footsteps, starring at UNC before being drafted 3rd overall by the Patriots.",
    extra: "His mother Lis Maye was also a UNC athlete, playing basketball for the Tar Heels.",
  },
  {
    category: "Drake Maye",
    title: "Brother's March Madness Legend",
    fact: "Drake's older brother Luke Maye hit the game-winning shot for UNC against Kentucky in the 2017 Elite Eight. The Maye family is North Carolina sports royalty.",
  },
  {
    category: "Drake Maye",
    title: "4th in Heisman Voting",
    fact: "In his first year as a starter at UNC (2022), Drake Maye threw for 4,321 yards and 38 touchdowns, finishing 4th in Heisman Trophy voting and winning ACC Quarterback of the Year.",
  },
  {
    category: "Drake Maye",
    title: "Blessing, Not a Burden",
    fact: "When asked about following Tom Brady's legacy, Maye told ESPN's Jeff Darlington: 'It's a blessing, not a burden.' He said he actively studies Brady's game film with Josh McDaniels.",
  },
  {
    category: "The Rebuild",
    title: "Fastest Turnaround",
    fact: "Going from 4-13 to a Super Bowl appearance in one season is one of the fastest turnarounds in modern NFL history. The Patriots rebuild under Vrabel and Wolf was historically fast.",
  },
  {
    category: "The Rebuild",
    title: "Vrabel the Player",
    fact: "Mike Vrabel won 3 Super Bowls as a Patriots linebacker (XXXVI, XXXVIII, XXXIX). He even caught 2 touchdown passes in Super Bowls — as a linebacker!",
  },
  {
    category: "Fun",
    title: "Gillette Stadium",
    fact: "Gillette Stadium opened in 2002 and seats 65,878 fans. It replaced the old Foxboro Stadium and has been the home of some of the greatest moments in NFL history.",
  },
  {
    category: "Fun",
    title: "The Patriot Way",
    fact: "'Do Your Job' became the unofficial mantra of the Patriots dynasty. It represented the culture of selfless play, preparation, and accountability that Belichick demanded from every player.",
  },
  {
    category: "Fun",
    title: "Flying Elvis",
    fact: "The Patriots' current logo, known as the 'Flying Elvis,' was introduced in 1993. It replaced the 'Pat Patriot' logo that the team used from 1961-1992. The old Pat Patriot logo made a comeback on throwback uniforms and remains a fan favorite.",
  },
  {
    category: "Post-Brady",
    title: "The QB Carousel",
    fact: "Between Brady leaving (2020) and Maye's breakout (2025), the Patriots started 5 different quarterbacks: Cam Newton, Mac Jones, Bailey Zappe, Jacoby Brissett, and Drake Maye.",
  },
  {
    category: "Post-Brady",
    title: "Mac Jones' Collapse",
    fact: "Mac Jones went 10-7 and made the playoffs as a rookie in 2021, but went 8-13 over his next two seasons. He was ultimately traded to Jacksonville after clashing with the coaching staff.",
  },
  {
    category: "Post-Brady",
    title: "Rock Bottom",
    fact: "The 2023 Patriots went 4-13, the worst record in the Belichick era. It was only the second time in 24 years the Patriots had a losing season under Belichick.",
  },
];

const categories = [...new Set(funFacts.map((f) => f.category))];

export default function FunFactsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedFact, setExpandedFact] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? funFacts
      : funFacts.filter((f) => f.category === activeCategory);

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-12">
        <p className="text-pats-red text-sm font-bold uppercase tracking-[0.3em] mb-3">
          Did You Know?
        </p>
        <h1 className="block-title text-white text-5xl sm:text-6xl lg:text-7xl mb-2">
          FUN
        </h1>
        <h1 className="block-title text-pats-red text-5xl sm:text-6xl lg:text-7xl mb-4">
          FACTS
        </h1>
        <p className="text-pats-silver/60 text-lg max-w-2xl mx-auto">
          Wild stats, incredible records, and amazing trivia from across the
          entire Patriots universe. Click any card to learn more.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all ${
            activeCategory === "all"
              ? "bg-pats-red text-white"
              : "bg-pats-navy/30 text-pats-silver hover:bg-pats-navy/50 hover:text-white"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all ${
              activeCategory === cat
                ? "bg-pats-red text-white"
                : "bg-pats-navy/30 text-pats-silver hover:bg-pats-navy/50 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Facts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filtered.map((fact, index) => {
          const globalIndex = funFacts.indexOf(fact);
          const isExpanded = expandedFact === globalIndex;

          return (
            <div
              key={`${fact.title}-${index}`}
              onClick={() =>
                setExpandedFact(isExpanded ? null : globalIndex)
              }
              className={`rounded-xl border p-5 cursor-pointer transition-all ${
                isExpanded
                  ? "bg-pats-red/10 border-pats-red/40 scale-[1.02]"
                  : "bg-pats-navy/20 border-pats-navy/40 card-hover"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-pats-red text-xs font-bold uppercase tracking-widest">
                  {fact.category}
                </span>
                {fact.extra && (
                  <span className="text-pats-silver/30 text-xs">
                    {isExpanded ? "Click to collapse" : "Click for more"}
                  </span>
                )}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{fact.title}</h3>
              <p className="text-pats-silver/60 text-sm leading-relaxed">
                {fact.fact}
              </p>
              {isExpanded && fact.extra && (
                <div className="mt-4 pt-4 border-t border-pats-navy/30">
                  <p className="text-pats-silver/80 text-sm leading-relaxed italic">
                    {fact.extra}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Patriots by the Numbers */}
      <SectionHeader
        title="Patriots By The Numbers"
        subtitle="The stats that define the franchise."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
        {[
          { label: "Super Bowl Wins", value: "6", sub: "Most by any QB (Brady)" },
          { label: "Founded", value: "1959", sub: "Original AFL team" },
          { label: "Stadium Capacity", value: "65,878", sub: "Gillette Stadium" },
          { label: "All-Time Record", value: "546-428-9", sub: "Through 2025" },
          { label: "Brady's TD Passes", value: "649", sub: "All-time NFL record" },
          { label: "Playoff Appearances", value: "30+", sub: "Franchise history" },
          { label: "Consecutive Div. Titles", value: "11", sub: "2009-2019" },
          { label: "Perfect Regular Season", value: "16-0", sub: "2007 (lost SB)" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-4"
          >
            <p className="text-pats-silver/50 text-xs uppercase tracking-widest font-semibold mb-1">
              {stat.label}
            </p>
            <p className="text-white text-2xl font-black">{stat.value}</p>
            <p className="text-pats-silver/40 text-xs mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Media Gallery */}
      <SectionHeader title="Gallery" subtitle="Iconic moments from Patriots history." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MediaPlaceholder type="image" label="Brady holding Lombardi Trophy" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Malcolm Butler interception" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="28-3 scoreboard" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Gillette Stadium aerial view" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Drake Maye draft night" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Pat Patriot throwback logo" aspectRatio="4/3" />
      </div>
    </div>
  );
}
