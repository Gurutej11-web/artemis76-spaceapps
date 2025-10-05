import React from "react";
import QuizPanel from "../components/QuizPanel";

export default function LearnPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-sky-400 mb-4">Test Your Space Knowledge!</h2>
      <p className="text-slate-300 mb-4">Short, fun quizzes that teach buoyancy, Earth observation, and astronaut life.</p>
      <QuizPanel />
    </section>
  );
}
