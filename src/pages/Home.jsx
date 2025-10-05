import React from "react";
import CupolaView from "../components/CupolaView";
import NBLTrainer from "../components/NBLTrainer";
import InfoPanel from "../components/InfoPanel";
import Earth3D from "../components/Earth3d";

export default function Home() {
  return (
    <div>
      <header className="p-8 text-center">
        <h1 className="text-5xl font-bold mb-3 text-slate-100">Artemis 76 — Window to the World</h1>
        <p className="text-lg max-w-3xl mx-auto text-sky-200/80">
          Experience the Cupola and Neutral Buoyancy Lab. Learn how ISS observation benefits Earth.
        </p>
      </header>

      <section className="max-w-6xl mx-auto p-4 grid gap-8">
        <CupolaView />
        <Earth3D />
        <NBLTrainer />
        <InfoPanel />
      </section>
    </div>
  );
}
