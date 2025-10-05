import React from "react";
import ImpactPanel from "../components/ImpactPanel";

export default function ImpactPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-sky-400 mb-4">From Orbit to Earth — Real Impacts</h2>
      <ImpactPanel />
    </section>
  );
}
