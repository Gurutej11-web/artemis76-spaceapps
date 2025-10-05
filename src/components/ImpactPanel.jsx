// ImpactPanel.jsx
import React from "react";

const IMPACTS = [
  { title: "Disaster Response", desc: "Astronaut photos help map wildfires and floods." },
  { title: "Medical Research", desc: "Microgravity experiments inform human health research." },
  { title: "Water Filtration", desc: "Tech developed for space helps purify water on Earth." },
  { title: "Agriculture", desc: "Earth observation informs crop monitoring." }
];

export default function ImpactPanel() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {IMPACTS.map((i) => (
        <div key={i.title} className="p-4 bg-gray-800 rounded-lg">
          <div className="font-semibold">{i.title}</div>
          <div className="text-sm text-slate-300 mt-2">{i.desc}</div>
        </div>
      ))}
    </div>
  );
}
