import React from "react";
import NBLTrainer from "../components/NBLTrainer";

export default function NBLPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-sky-400 mb-4">Neutral Buoyancy Lab — Trainer</h2>
      <NBLTrainer expanded />
    </section>
  );
}
