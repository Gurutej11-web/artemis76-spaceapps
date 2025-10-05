import React from "react";
import ISSTracker from "../components/ISSTracker";

export default function ISSPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-sky-400 mb-4">Live ISS Tracker</h2>
      <ISSTracker />
    </section>
  );
}
