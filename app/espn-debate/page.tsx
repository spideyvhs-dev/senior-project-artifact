"use client";

import { useState } from "react";
import MediaPlaceholder from "../components/MediaPlaceholder";
import SectionHeader from "../components/SectionHeader";

type SegmentKey = "intro" | "segment1" | "segment2" | "segment3" | "outro";

interface Segment {
  id: SegmentKey;
  label: string;
  title: string;
  videoDirection: string;
  script: string;
  questions: string[];
}

const segments: Segment[] = [
  {
    id: "intro",
    label: "Intro",
    title: "Welcome to The Pats Pod",
    videoDirection:
      "Roll a short, fast-changing compilation of football plays featuring Tom Brady, Cam Newton, Mac Jones, Bailey Zappe, Jacoby Brissett, Drake Maye.",
    script:
      "Welcome to The Pats Pod, the show breaking down one of the fastest rebuilds in modern NFL history. I'm Beckett Baldwin, and today I'm here with Logan, Andrew, Rohit, Jaiden, Caden, and Tedesco — asking the biggest question in New England football: How did Drake Maye and the Patriots restore a dynasty after the failures of the post-Brady era?",
    questions: [],
  },
  {
    id: "segment1",
    label: "Segment 1",
    title: "The Dynasty & The Fall",
    videoDirection:
      "Roll a clip of Brady-era Super Bowl winning celebrations then cut to losing plays in 2023 with Bailey Zappe and Mac Jones.",
    script:
      "Before we talk about the comeback this year, we need to talk about where it all went wrong in the first place. In 2024, we hit rock bottom at 4-13. And this didn't just happen overnight. Back in 2020, ESPN's NFL Live panel was already asking whether the dynasty was over the moment Brady left. Their answer? The problems were way deeper than just losing a quarterback. The draft failed. The roster got old. The front office lost its edge. Those problems started long before Brady left for Tampa.",
    questions: [
      "Did Bill Belichick the GM eventually ruin Bill Belichick the coach?",
      "What actually went wrong with Mac Jones? He made the playoffs his rookie year then he completely fell apart.",
      "How much of the Brady dynasty was Brady himself versus the system around him?",
      "If Brady never leaves, does this collapse ever happen? Or was it always coming?",
    ],
  },
  {
    id: "segment2",
    label: "Segment 2",
    title: "The Rebuild",
    videoDirection:
      "Roll interviews and press conferences of Vrabel and Wolf, roll clips of key players being drafted such as Gonzalez, Campbell, Williams, Maye, etc.",
    script:
      "The moment Drake Maye stepped onto the field, the Patriots had a direction again. He came in and immediately gave the front office and coaching staff something to build around, and they did exactly that. Eliot Wolf, the GM of the Patriots, built one of the youngest and most talented rosters in the NFL around Drake Maye. Mike Vrabel had Maye running full offensive conditioning drills during the offseason to put him at the center of everything from day one. And Brian Hoyer said it plainly — Maye thrives in McDaniels' system because of his football IQ and how fast he processes everything. The quarterback was the foundation, and everything else was built around him.",
    questions: [
      "Is Eliot Wolf the most underrated part of this rebuild?",
      "What part of the rebuild had the greatest impact?",
      "If the Patriots had Vrabel in 2021, does the collapse ever happen?",
      "Did the organization fix itself around Maye, or did Maye give the organization a reason to fix itself?",
    ],
  },
  {
    id: "segment3",
    label: "Segment 3",
    title: "Drake Maye & The Present",
    videoDirection:
      "Roll highlights of the 2025-26 season featuring key plays from Drake Maye and leadership moments.",
    script:
      "In December 2025, Maye sat down with NFL on NBC and talked about what made Year 2 different. He mentioned real accountability, real identity, nothing left to chance. And when ESPN asked him about following Brady's legacy, he called it 'a blessing, not a burden.' Said he studies Brady's film with McDaniels. That's a completely different mindset that we saw during the post-Brady collapse. Drake Maye walked onto the field with shades of leadership and discipline that we have never seen since Brady, proving that he is worthy of being the center of this new Patriots team.",
    questions: [
      "Is Maye a great leader, or is he a good quarterback in a great system?",
      "Does his success come from embracing the Brady standard? And did previous QBs fail because they couldn't?",
      "The Patriots made it to the Super Bowl and lost — does that change how we look at this rebuild?",
      "Ten years from now, is Drake Maye a Patriots legend? Or does he regress like many others have?",
      "Has the dynasty actually been restored? Or was this all a fluke?",
    ],
  },
  {
    id: "outro",
    label: "Outro",
    title: "Closing Thoughts",
    videoDirection:
      "Roll clips of season compilation while slowly fading to black.",
    script:
      "Although Drake Maye's awakening inspired the rebuild, it was never just one thing. The organization, the coaching staff, the quarterback… every piece had to fall into place at the same time. And for the first time since 2019, they did. I'm Beckett Baldwin. This has been The Pats Pod.",
    questions: [],
  },
];

const participants = [
  "Beckett Baldwin",
  "Logan McGee",
  "Andrew Maniscalco",
  "Rohit Vijayakumar",
  "Jaiden Mohan",
  "Caden Schultz",
  "Andrew Tedesco",
];

const sources = [
  {
    num: 1,
    citation:
      'Dolloff, Matt. "Patriots Fall to Jets in 2023 Season Finale, Finish with 4-13 Record." 98.5 The Sports Hub, 7 Jan. 2024.',
  },
  {
    num: 2,
    citation:
      '"Drake Maye Unpacks Year 2 Leap for Patriots under Mike Vrabel | FNIA | NFL on NBC." YouTube, NFL on NBC, 20 Dec. 2025.',
  },
  {
    num: 3,
    citation:
      '"Is the Patriots\' Dynasty over without Tom Brady? | NFL Live." YouTube, ESPN, 2 Nov. 2020.',
  },
  {
    num: 4,
    citation:
      'Leger, Justin. "Hoyer: Why Drake Maye Is Thriving in Josh McDaniels\' Offense." NBC Sports Boston, 23 Dec. 2025.',
  },
  {
    num: 5,
    citation:
      'Maye, Drake. "How Tom Brady\'s Patriots Legacy Inspires Drake Maye." Interview by Jeff Darlington. MassLive, 10 Nov. 2025.',
  },
  {
    num: 6,
    citation:
      'McLaughlin, Ryan. "Patriots Quietly Building a Monster Young Core Thanks to Eliot Wolf." Musketfire, 5 Aug. 2025.',
  },
  {
    num: 7,
    citation:
      'Reiss, Mike. "Patriots QB Drake Maye Taking Bigger Leadership Role in Year 2." ESPN, 8 June 2025.',
  },
];

export default function ESPNDebatePage() {
  const [activeSegment, setActiveSegment] = useState<SegmentKey>("intro");

  const current = segments.find((s) => s.id === activeSegment)!;

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-12">
        <p className="text-pats-red text-sm font-bold uppercase tracking-[0.3em] mb-3">
          BHS Senior Research Project
        </p>
        <h1 className="block-title text-white text-5xl sm:text-6xl lg:text-7xl mb-2">
          ESPN
        </h1>
        <h1 className="block-title text-pats-red text-5xl sm:text-6xl lg:text-7xl mb-4">
          DEBATE
        </h1>
        <p className="text-pats-silver/60 text-lg max-w-2xl mx-auto">
          A First Take-style debate segment about how Drake Maye and the
          Patriots restored a dynasty. Filmed at the BCAT Production Room.
        </p>
      </div>

      {/* Full Debate Video Placeholder */}
      <div className="max-w-4xl mx-auto mb-16">
        <MediaPlaceholder
          type="video"
          label="Full ESPN Debate Video — The Pats Pod"
          aspectRatio="16/9"
        />
        <p className="text-center text-pats-silver/40 text-sm mt-3">
          Watch the full debate above, or explore each segment below.
        </p>
      </div>

      {/* Participants */}
      <SectionHeader
        title="The Panel"
        subtitle="Seven Patriots analysts debating the biggest question in New England football."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-16">
        {participants.map((name, i) => (
          <div
            key={name}
            className={`rounded-xl border p-4 text-center card-hover ${
              i === 0
                ? "bg-pats-red/10 border-pats-red/30"
                : "bg-pats-navy/20 border-pats-navy/40"
            }`}
          >
            <div
              className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold text-sm mb-2 ${
                i === 0
                  ? "bg-pats-red/30 text-white"
                  : "bg-pats-navy/50 text-pats-silver"
              }`}
            >
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <p className="text-white text-sm font-semibold">{name}</p>
            {i === 0 && (
              <p className="text-pats-red text-xs font-bold uppercase tracking-wider mt-1">
                Host
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Segment Tabs */}
      <SectionHeader
        title="Debate Segments"
        subtitle="Click each segment to explore the script, discussion questions, and media."
      />

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8">
        {segments.map((seg) => (
          <button
            key={seg.id}
            onClick={() => setActiveSegment(seg.id)}
            className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all ${
              activeSegment === seg.id
                ? "bg-pats-red text-white"
                : "bg-pats-navy/30 text-pats-silver hover:bg-pats-navy/50 hover:text-white"
            }`}
          >
            {seg.label}
          </button>
        ))}
      </div>

      {/* Active Segment Content */}
      <div className="bg-pats-navy/20 border border-pats-navy/40 rounded-xl overflow-hidden mb-16">
        {/* Header */}
        <div className="bg-pats-navy/30 px-6 py-4 border-b border-pats-navy/40">
          <p className="text-pats-red text-xs font-bold uppercase tracking-widest mb-1">
            {current.label}
          </p>
          <h3 className="text-white font-bold text-2xl">{current.title}</h3>
        </div>

        <div className="p-6 space-y-6">
          {/* Video Direction */}
          <div className="bg-pats-teal/10 border border-pats-teal/30 rounded-lg p-4">
            <p className="text-pats-silver/50 text-xs uppercase tracking-widest font-semibold mb-2">
              Video Direction
            </p>
            <p className="text-white/80 text-sm italic">{current.videoDirection}</p>
          </div>

          {/* Media */}
          <MediaPlaceholder
            type="video"
            label={`${current.title} — video clip`}
            aspectRatio="16/9"
          />

          {/* Script */}
          <div>
            <p className="text-pats-red text-xs font-bold uppercase tracking-widest mb-3">
              Script
            </p>
            <div className="bg-pats-darker/50 rounded-lg p-5 border border-pats-navy/30">
              <p className="text-pats-silver/80 text-sm leading-relaxed whitespace-pre-line">
                {current.script}
              </p>
            </div>
          </div>

          {/* Discussion Questions */}
          {current.questions.length > 0 && (
            <div>
              <p className="text-pats-red text-xs font-bold uppercase tracking-widest mb-3">
                Discussion Questions
              </p>
              <div className="space-y-3">
                {current.questions.map((q, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-pats-navy/20 rounded-lg p-4 border border-pats-navy/30"
                  >
                    <span className="text-pats-red font-black text-lg leading-none mt-0.5">
                      Q{i + 1}
                    </span>
                    <p className="text-white text-sm leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sources */}
      <SectionHeader
        title="Sources"
        subtitle="All 7 sources used in the ESPN debate segment, properly cited in MLA format."
      />

      <div className="space-y-3 mb-16">
        {sources.map((src) => (
          <div
            key={src.num}
            className="flex gap-4 bg-pats-navy/15 border border-pats-navy/30 rounded-lg p-4"
          >
            <span className="text-pats-red font-black text-sm min-w-[28px]">
              [{src.num}]
            </span>
            <p className="text-pats-silver/70 text-sm leading-relaxed">
              {src.citation}
            </p>
          </div>
        ))}
      </div>

      {/* Behind the Scenes */}
      <SectionHeader
        title="Behind the Scenes"
        subtitle="Photos and clips from the filming day at the BCAT Production Room."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MediaPlaceholder type="image" label="Panel setup / wide shot" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Beckett hosting" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Panelists debating" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="BCAT production room setup" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Behind the camera" aspectRatio="4/3" />
        <MediaPlaceholder type="image" label="Group photo / wrap" aspectRatio="4/3" />
      </div>
    </div>
  );
}
