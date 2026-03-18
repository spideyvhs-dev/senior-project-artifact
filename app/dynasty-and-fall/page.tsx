"use client";

import { useState } from "react";
import MediaPlaceholder from "../components/MediaPlaceholder";
import SectionHeader from "../components/SectionHeader";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "glory" | "decline" | "rock-bottom";
}

const timeline: TimelineEvent[] = [
  {
    year: "2001",
    title: "The Dynasty Begins",
    description:
      "Tom Brady takes over for an injured Drew Bledsoe and leads the Patriots to their first Super Bowl victory against the St. Louis Rams. The greatest dynasty in NFL history is born.",
    type: "glory",
  },
  {
    year: "2003",
    title: "Super Bowl XXXVIII",
    description:
      "Patriots defeat the Carolina Panthers 32-29. Brady wins his second ring and cements himself as an elite quarterback.",
    type: "glory",
  },
  {
    year: "2004",
    title: "Super Bowl XXXIX",
    description:
      "Patriots defeat the Philadelphia Eagles 24-21 for their third championship in four years. A true dynasty.",
    type: "glory",
  },
  {
    year: "2007",
    title: "The Perfect Regular Season",
    description:
      "Patriots go 16-0 in the regular season but fall to the New York Giants in Super Bowl XLII in one of the biggest upsets in NFL history. The 19-0 dream dies.",
    type: "glory",
  },
  {
    year: "2014",
    title: "Super Bowl XLIX",
    description:
      "Malcolm Butler's goal-line interception seals a 28-24 victory over the Seattle Seahawks. Brady wins his 4th ring after a decade-long championship drought.",
    type: "glory",
  },
  {
    year: "2016",
    title: "28-3: Super Bowl LI",
    description:
      "The greatest comeback in Super Bowl history. Down 28-3 to the Atlanta Falcons, Brady leads the Patriots to a 34-28 overtime victory. Ring #5.",
    type: "glory",
  },
  {
    year: "2018",
    title: "Super Bowl LIII",
    description:
      "Patriots defeat the Los Angeles Rams 13-3 in the lowest-scoring Super Bowl ever. Brady earns his 6th championship ring.",
    type: "glory",
  },
  {
    year: "2019",
    title: "The Beginning of the End",
    description:
      "Patriots go 12-4 but suffer a Wild Card loss to the Tennessee Titans. The roster is aging, and the cracks in the dynasty are starting to show. Brady's weapons are depleted.",
    type: "decline",
  },
  {
    year: "2020",
    title: "Brady Leaves",
    description:
      "Tom Brady signs with the Tampa Bay Buccaneers. The most successful QB-coach partnership in NFL history is over. ESPN's NFL Live panel immediately questions whether the dynasty can survive. Cam Newton is brought in as a replacement.",
    type: "decline",
  },
  {
    year: "2020",
    title: "The Cam Newton Experiment",
    description:
      "Cam Newton goes 7-9 as the starter. Flashes of brilliance but too inconsistent. The Patriots miss the playoffs for the first time since 2008.",
    type: "decline",
  },
  {
    year: "2021",
    title: "Mac Jones: Hope",
    description:
      "Rookie Mac Jones leads the Patriots to a 10-7 record and a playoff berth. Fans believe they've found Brady's successor. The future looks bright.",
    type: "glory",
  },
  {
    year: "2022",
    title: "Mac Jones: Collapse",
    description:
      "Everything falls apart. Jones regresses dramatically, clashing with coaches and showing none of the poise from his rookie year. The Patriots go 8-9. The Matt Patricia offensive coordinator experiment is a disaster.",
    type: "decline",
  },
  {
    year: "2023",
    title: "Rock Bottom: 4-13",
    description:
      "The worst season in the Belichick era. Mac Jones is benched for Bailey Zappe, who also struggles. The roster is devoid of talent. Bill Belichick's tenure as GM has gutted the team through years of poor drafting. The dynasty isn't just over — it's in ruins.",
    type: "rock-bottom",
  },
  {
    year: "2024",
    title: "The Reset",
    description:
      "Belichick is gone. The Patriots draft Drake Maye 3rd overall. Mike Vrabel is hired as head coach. Eliot Wolf begins rebuilding the roster. The foundation is being laid.",
    type: "glory",
  },
];

const qbComparison = [
  {
    name: "Cam Newton",
    years: "2020",
    record: "7-9",
    summary: "Brought in as a veteran bridge QB. Had moments but was past his prime. Couldn't sustain the passing game New England needed.",
    verdict: "Too late in career",
  },
  {
    name: "Mac Jones",
    years: "2021-2023",
    record: "18-22",
    summary: "Made the playoffs as a rookie but fell apart in Year 2. Clashed with coaching staff, regressed in mechanics and decision-making. Traded to Jacksonville.",
    verdict: "Couldn't handle the pressure",
  },
  {
    name: "Bailey Zappe",
    years: "2022-2023",
    record: "4-4",
    summary: "Fan-favorite underdog who provided spark moments but never had the arm talent or consistency to be a long-term starter.",
    verdict: "Not franchise caliber",
  },
  {
    name: "Jacoby Brissett",
    years: "2024",
    record: "1-5",
    summary: "Veteran placeholder while Drake Maye developed. Steady but unspectacular. Did his job keeping the seat warm.",
    verdict: "Bridge quarterback",
  },
];

export default function DynastyAndFallPage() {
  const [expandedQB, setExpandedQB] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-16">
        <p className="text-pats-red text-sm font-bold uppercase tracking-[0.3em] mb-3">
          2001 &ndash; 2024
        </p>
        <h1 className="block-title text-white text-5xl sm:text-6xl lg:text-7xl mb-4">
          THE DYNASTY<br />
          <span className="text-pats-red">&amp; THE FALL</span>
        </h1>
        <p className="text-pats-silver/60 text-lg max-w-2xl mx-auto">
          From six Super Bowls to a 4-13 rock bottom. The rise, decline, and
          collapse of the greatest dynasty in NFL history.
        </p>
      </div>

      {/* Hero Media */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <MediaPlaceholder
          type="video"
          label="Brady-era Super Bowl winning celebrations montage"
          aspectRatio="16/9"
        />
        <MediaPlaceholder
          type="video"
          label="2023 losing plays - Zappe and Mac Jones struggles"
          aspectRatio="16/9"
        />
      </div>

      {/* The Numbers */}
      <SectionHeader
        title="By the Numbers"
        subtitle="The Brady dynasty in raw stats."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        {[
          { label: "Super Bowls Won", value: "6" },
          { label: "Super Bowl Appearances", value: "9" },
          { label: "Division Titles", value: "17" },
          { label: "Playoff Wins", value: "30+" },
          { label: "Brady Years", value: "20" },
          { label: "Post-Brady Record", value: "18-35" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`rounded-xl p-5 border ${
              i < 4
                ? "bg-pats-navy/30 border-pats-navy/50"
                : "bg-pats-red/10 border-pats-red/30"
            }`}
          >
            <p className="text-pats-silver text-xs uppercase tracking-widest font-semibold mb-1">
              {stat.label}
            </p>
            <p
              className={`text-3xl font-black ${
                i >= 4 ? "text-pats-red" : "text-white"
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <SectionHeader
        title="Timeline"
        subtitle="Every key moment from the first ring to the last loss."
      />

      <div className="relative mb-16">
        {/* Center line - hidden on mobile, shown on md+ */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-pats-red via-pats-navy to-pats-red/30 transform -translate-x-1/2" />

        {/* Mobile left line */}
        <div className="md:hidden absolute left-5 top-0 bottom-0 w-[3px] bg-gradient-to-b from-pats-red via-pats-navy to-pats-red/30" />

        <div className="space-y-8">
          {timeline.map((event, index) => (
            <div
              key={`${event.year}-${event.title}`}
              className={`relative flex items-start gap-4 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute left-5 md:left-1/2 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 z-10 ${
                  event.type === "glory"
                    ? "bg-pats-navy border-pats-silver"
                    : event.type === "decline"
                    ? "bg-pats-red/60 border-pats-red"
                    : "bg-pats-red border-pats-red animate-pulse"
                }`}
              />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <div
                  className={`rounded-xl p-5 border ${
                    event.type === "glory"
                      ? "bg-pats-navy/20 border-pats-navy/40"
                      : event.type === "decline"
                      ? "bg-pats-red/5 border-pats-red/20"
                      : "bg-pats-red/15 border-pats-red/40"
                  }`}
                >
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${
                      event.type === "rock-bottom"
                        ? "text-pats-red"
                        : "text-pats-silver/50"
                    }`}
                  >
                    {event.year}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-1 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-pats-silver/60 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[45%]" />
            </div>
          ))}
        </div>
      </div>

      {/* Post-Brady QB Comparison */}
      <SectionHeader
        title="The QB Carousel"
        subtitle="Every quarterback the Patriots tried before Drake Maye. Click to expand."
      />

      <div className="space-y-4 mb-16">
        {qbComparison.map((qb) => (
          <div
            key={qb.name}
            className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl overflow-hidden cursor-pointer"
            onClick={() =>
              setExpandedQB(expandedQB === qb.name ? null : qb.name)
            }
          >
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pats-navy/50 flex items-center justify-center text-pats-silver font-bold text-sm">
                  {qb.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="text-white font-bold">{qb.name}</h3>
                  <p className="text-pats-silver/50 text-xs">
                    {qb.years} &bull; Record: {qb.record}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-pats-red text-xs font-bold uppercase tracking-wider hidden sm:block">
                  {qb.verdict}
                </span>
                <svg
                  className={`w-5 h-5 text-pats-silver/50 transition-transform ${
                    expandedQB === qb.name ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>

            {expandedQB === qb.name && (
              <div className="px-5 pb-5 border-t border-pats-navy/30 pt-4">
                <p className="text-pats-silver/70 text-sm leading-relaxed mb-4">
                  {qb.summary}
                </p>
                <MediaPlaceholder
                  type="image"
                  label={`${qb.name} with the Patriots`}
                  aspectRatio="21/9"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Belichick the GM */}
      <SectionHeader
        title="Belichick the GM vs. Belichick the Coach"
        subtitle="Did the greatest coach in NFL history destroy his own legacy with bad personnel decisions?"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl p-6">
          <h3 className="text-white font-bold text-lg mb-4">
            Belichick the Coach
          </h3>
          <ul className="space-y-3 text-pats-silver/70 text-sm">
            <li className="flex gap-2">
              <span className="text-green-400 font-bold mt-0.5">+</span>
              6 Super Bowl championships
            </li>
            <li className="flex gap-2">
              <span className="text-green-400 font-bold mt-0.5">+</span>
              Greatest defensive mind in NFL history
            </li>
            <li className="flex gap-2">
              <span className="text-green-400 font-bold mt-0.5">+</span>
              Master of in-game adjustments
            </li>
            <li className="flex gap-2">
              <span className="text-green-400 font-bold mt-0.5">+</span>
              &quot;Do Your Job&quot; culture built a winning mentality
            </li>
            <li className="flex gap-2">
              <span className="text-green-400 font-bold mt-0.5">+</span>
              333 career wins (regular season)
            </li>
          </ul>
        </div>

        <div className="bg-pats-red/5 border border-pats-red/20 rounded-xl p-6">
          <h3 className="text-white font-bold text-lg mb-4">
            Belichick the GM
          </h3>
          <ul className="space-y-3 text-pats-silver/70 text-sm">
            <li className="flex gap-2">
              <span className="text-pats-red font-bold mt-0.5">&minus;</span>
              Missed on countless draft picks (especially WRs)
            </li>
            <li className="flex gap-2">
              <span className="text-pats-red font-bold mt-0.5">&minus;</span>
              N&apos;Keal Harry, Isaiah Wynn, Sony Michel draft busts
            </li>
            <li className="flex gap-2">
              <span className="text-pats-red font-bold mt-0.5">&minus;</span>
              Failed to build offensive weapons around Brady in final years
            </li>
            <li className="flex gap-2">
              <span className="text-pats-red font-bold mt-0.5">&minus;</span>
              Let key players walk without adequate replacements
            </li>
            <li className="flex gap-2">
              <span className="text-pats-red font-bold mt-0.5">&minus;</span>
              Roster devoid of young talent by 2023
            </li>
          </ul>
        </div>
      </div>

      {/* ESPN Source Call-out */}
      <div className="bg-pats-teal/20 border border-pats-teal/40 rounded-xl p-6 mb-16">
        <p className="text-pats-silver/50 text-xs uppercase tracking-widest font-semibold mb-2">
          Source: ESPN NFL Live, 2020
        </p>
        <blockquote className="text-white text-lg italic leading-relaxed">
          &quot;The problems were way deeper than just losing a quarterback. The
          draft failed. The roster got old. The front office lost its edge.
          Those problems started long before Brady left for Tampa.&quot;
        </blockquote>
      </div>

      {/* Gallery */}
      <SectionHeader title="Gallery" subtitle="Images from the dynasty years through the fall." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MediaPlaceholder type="image" label="Brady Super Bowl celebration" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Malcolm Butler interception" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="28-3 comeback moment" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Mac Jones rookie season" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Belichick final game as Patriots coach" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Empty Gillette Stadium / 4-13 season" aspectRatio="4/3" />
      </div>
    </div>
  );
}
