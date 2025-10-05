import React from "react";
import CupolaView from "../components/CupolaView";

export default function CupolaPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-sky-400 mb-4">Cupola — Window to the World</h2>
      <CupolaView expanded />
    </section>
  );
}
