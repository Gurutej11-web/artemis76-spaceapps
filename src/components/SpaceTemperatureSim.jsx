import { useState } from "react";
import StarfieldBackground from "./StarfieldBackground";

export default function SpaceTemperatureSim() {
  const [distance, setDistance] = useState(1); // AU
  const [temperature, setTemperature] = useState(278); // K (Earth baseline)

  const handleChange = (e) => {
    const d = Number(e.target.value);
    setDistance(d);
    const newTemp = 278 / Math.sqrt(d); // simplified model
    setTemperature(newTemp);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
      <StarfieldBackground />

      <div className="relative z-10 bg-black/70 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(56,189,248,0.4)] p-8 max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-sky-400">
          ☀️ Space Temperature Simulator
        </h1>
        <p className="mb-4 text-sky-200">
          Explore how distance from the Sun affects planetary temperatures.
        </p>

        <label className="block mb-2 text-sm">Distance from Sun (AU):</label>
        <input
          type="range"
          min="0.3"
          max="10"
          step="0.1"
          value={distance}
          onChange={handleChange}
          className="w-full accent-sky-500 mb-4"
        />
        <p className="text-sm mb-4 text-slate-300">
          Distance: <span className="font-semibold">{distance.toFixed(1)} AU</span>
        </p>

        <p className="text-lg font-semibold text-sky-300">
          Estimated Temperature: {temperature.toFixed(1)} K
        </p>

        <div className="mt-4">
          <div
            className="w-40 h-40 mx-auto rounded-full transition-all duration-700"
            style={{
              background: `radial-gradient(circle, rgba(255,200,0,${
                1 / distance
              }), rgba(0,0,0,1))`,
              boxShadow: `0 0 ${60 / distance}px rgba(255,220,100,0.7)`,
            }}
          />
          <p className="text-xs mt-2 text-slate-400">Simulated heat glow from the Sun</p>
        </div>

        <a
          href="/"
          className="inline-block mt-6 text-sky-400 hover:underline"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
