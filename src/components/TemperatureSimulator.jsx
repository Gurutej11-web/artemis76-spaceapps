import React, { useState } from "react";

export default function TemperatureSimulator() {
  const [exposure, setExposure] = useState(50);
  const temp = -100 + (exposure * 3);
  const color = `hsl(${(100 - exposure) * 1.2}, 80%, 50%)`;

  return (
    <div className="p-8 text-center text-slate-200">
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">Space Temperature Lab</h2>
      <p>Adjust sunlight exposure to see spacecraft temperature change!</p>

      <div className="my-6">
        <label>Sunlight Exposure: {exposure}%</label>
        <input type="range" min="0" max="100" value={exposure} onChange={(e) => setExposure(Number(e.target.value))} className="w-full" />
      </div>

      <div className="w-32 h-32 mx-auto rounded-full shadow-md" style={{ backgroundColor: color }}></div>
      <p className="text-xl mt-4">Temperature: {temp.toFixed(1)} °C</p>
    </div>
  );
}
