"use client";

import { useState } from "react";

const questions = [
  {
    q: "What was the Patriots' record at their 'rock bottom' in the 2023 season?",
    options: ["2-15", "4-13", "6-11", "3-14"],
    answer: 1,
    fact: "The 2023 season was their worst since 1992, also 4-13 under Dick MacPherson.",
  },
  {
    q: "With what overall pick was Drake Maye selected in the 2024 NFL Draft?",
    options: ["1st", "2nd", "3rd", "5th"],
    answer: 2,
    fact: "Caleb Williams went #1 (Chicago) and Jayden Daniels #2 (Washington) ahead of Maye.",
  },
  {
    q: "Who coached the Patriots in 2024 before being fired just two hours after the season finale?",
    options: ["Bill Belichick", "Nick Saban", "Jerod Mayo", "Mike Vrabel"],
    answer: 2,
    fact: "Jerod Mayo was the second one-and-done head coach in Patriots franchise history.",
  },
  {
    q: "What was Drake Maye's completion percentage in 2025, which led the entire NFL?",
    options: ["68.4%", "70.1%", "72.0%", "74.5%"],
    answer: 2,
    fact: "Maye also led the NFL in passer rating (113.5) and QBR (77.1) that season.",
  },
  {
    q: "What was the Patriots' regular season record in 2025 under Mike Vrabel?",
    options: ["12-5", "13-4", "14-3", "15-2"],
    answer: 2,
    fact: "They were 9-0 on the road — the first team in NFL history to achieve that mark.",
  },
  {
    q: "Which team defeated the Patriots in Super Bowl LX?",
    options: ["Kansas City Chiefs", "Philadelphia Eagles", "Seattle Seahawks", "San Francisco 49ers"],
    answer: 2,
    fact: "The Seahawks won 29-13 at Levi's Stadium in Santa Clara on February 8, 2026.",
  },
  {
    q: "The 10-game improvement from 4-13 to 14-3 tied for what record in NFL history?",
    options: [
      "Most wins by a first-year coach",
      "Largest single-season turnaround",
      "Longest winning streak in one season",
      "Most road wins in a single season",
    ],
    answer: 1,
    fact: "Vrabel won the 2025 AP Coach of the Year award for engineering the historic turnaround.",
  },
  {
    q: "What was Maye's QBR in Week 17 vs the Jets — the highest single-game QBR in NFL history?",
    options: ["97.2", "98.5", "99.8", "100.0"],
    answer: 2,
    fact: "Maye went 19-of-21, 256 yards, and 5 TDs in that record-breaking performance.",
  },
  {
    q: "Before Drake Maye, the Patriots' highest draft pick since 1993 was Drew Bledsoe at #1. What year was Maye drafted?",
    options: ["2023", "2024", "2025", "2026"],
    answer: 1,
    fact: "The 4-13 record in 2023 earned New England the 3rd overall pick in the 2024 NFL Draft.",
  },
  {
    q: "Drake Maye chose jersey #10. What did he say about jersey #12 (Brady's number)?",
    options: [
      '"I\'ll wear it one day."',
      '"As long as it ain\'t 12; can\'t fill those shoes."',
      '"12 belongs to Brady forever."',
      '"Maybe in Year 3."',
    ],
    answer: 1,
    fact: "Maye later said following Brady's legacy was 'a blessing, not a burden.'",
  },
];

export default function QuizGame() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [showFact, setShowFact] = useState(false);

  const q = questions[current];

  function choose(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.answer) setScore((s) => s + 1);
    setShowFact(true);
  }

  function next() {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowFact(false);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setShowFact(false);
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    let grade = "";
    let color = "";
    if (pct >= 90) { grade = "Patriots Expert"; color = "text-pats-red"; }
    else if (pct >= 70) { grade = "True Fan"; color = "text-green-400"; }
    else if (pct >= 50) { grade = "Casual Watcher"; color = "text-yellow-400"; }
    else { grade = "Bandwagon Fan"; color = "text-pats-silver"; }

    return (
      <div className="text-center py-10">
        <div className="text-7xl font-black text-pats-red mb-2">
          {score}<span className="text-3xl text-pats-silver/60">/{questions.length}</span>
        </div>
        <p className={`text-2xl font-bold uppercase tracking-widest mb-2 ${color}`}>{grade}</p>
        <p className="text-pats-silver/60 text-sm mb-8">{pct}% correct</p>
        <div className="w-full bg-pats-navy/40 rounded-full h-3 max-w-xs mx-auto mb-8 overflow-hidden">
          <div
            className="h-3 rounded-full bg-pats-red transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
        <button
          onClick={restart}
          className="bg-pats-red hover:bg-pats-red/80 text-white font-bold uppercase tracking-wider px-8 py-3 rounded-lg transition-all text-sm"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-pats-silver/50 text-xs uppercase tracking-widest">
          Question {current + 1} of {questions.length}
        </span>
        <span className="text-pats-red text-xs font-bold uppercase tracking-widest">
          Score: {score}
        </span>
      </div>
      <div className="w-full bg-pats-navy/40 rounded-full h-1.5 mb-8 overflow-hidden">
        <div
          className="h-1.5 rounded-full bg-pats-red transition-all duration-500"
          style={{ width: `${((current) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <p className="text-white font-bold text-lg sm:text-xl leading-snug mb-6">{q.q}</p>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {q.options.map((opt, idx) => {
          let style =
            "w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all duration-200 cursor-pointer ";
          if (selected === null) {
            style += "bg-pats-navy/20 border-white/10 text-pats-silver hover:border-pats-red/60 hover:bg-pats-red/5 hover:text-white";
          } else if (idx === q.answer) {
            style += "bg-green-500/15 border-green-500/60 text-green-400";
          } else if (idx === selected) {
            style += "bg-red-500/15 border-red-500/60 text-red-400";
          } else {
            style += "bg-pats-navy/10 border-white/5 text-pats-silver/40";
          }
          return (
            <button key={idx} className={style} onClick={() => choose(idx)}>
              <span className="text-pats-silver/40 mr-3 font-mono text-xs">
                {String.fromCharCode(65 + idx)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Fact reveal */}
      {showFact && (
        <div className="bg-pats-navy/30 border border-pats-navy/60 rounded-xl px-5 py-4 mb-6">
          <p className="text-xs text-pats-red font-bold uppercase tracking-widest mb-1">Quick Fact</p>
          <p className="text-pats-silver/70 text-sm">{q.fact}</p>
        </div>
      )}

      {selected !== null && (
        <button
          onClick={next}
          className="w-full bg-pats-red hover:bg-pats-red/80 text-white font-bold uppercase tracking-wider py-3 rounded-xl transition-all text-sm"
        >
          {current + 1 >= questions.length ? "See Results" : "Next Question →"}
        </button>
      )}
    </div>
  );
}
