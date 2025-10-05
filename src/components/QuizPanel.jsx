// QuizPanel.jsx
import React, { useState } from "react";

const QUESTIONS = [
  { q: "How many sunrises does the ISS see each day?", opts: ["1", "8", "16", "24"], a: 2 },
  { q: "What does neutral buoyancy simulate?", opts: ["Microgravity", "Vacuum", "High gravity", "Magnetism"], a: 0 },
  { q: "Which tool helps take photos from the Cupola?", opts: ["Telescope", "Handheld camera", "Seismometer", "None"], a: 1 }
];

export default function QuizPanel() {
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  function answer(i, opt) {
    setAnswers((a) => ({ ...a, [i]: opt }));
  }
  function submit() {
    setDone(true);
    const score = Object.keys(answers).filter((k) => answers[k] === QUESTIONS[k].a).length;
    if (score >= 2) {
      const badges = JSON.parse(localStorage.getItem("badges") || "[]");
      if (!badges.includes("quiz-master")) {
        badges.push("quiz-master");
        localStorage.setItem("badges", JSON.stringify(badges));
      }
    }
  }

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      {QUESTIONS.map((qq, i) => (
        <div key={i} className="mb-4">
          <div className="font-semibold">Q{i + 1}: {qq.q}</div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {qq.opts.map((o, oi) => (
              <button
                key={oi}
                onClick={() => answer(i, oi)}
                className={`p-2 rounded ${answers[i] === oi ? "bg-sky-600" : "bg-gray-700"}`}
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      ))}
      {!done ? (
        <button onClick={submit} className="mt-2 px-4 py-2 bg-emerald-600 rounded">Submit Quiz</button>
      ) : (
        <div className="mt-2">You scored {Object.keys(answers).filter((k) => answers[k] === QUESTIONS[k].a).length}/{QUESTIONS.length}</div>
      )}
    </div>
  );
}
