import { useState } from "react";
import StarfieldBackground from "./StarfieldBackground";

export default function OrbitalVelocitySim() {
  const [radius, setRadius] = useState(6771); // km from Earth's center
  const G = 6.67430e-11;
  const M = 5.972e24;

  const velocity = Math.sqrt((G * M) / (radius * 1000)) / 1000; // km/s

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
      <StarfieldBackground />

      <div className="relative z-10 bg-black/70 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(56,189,248,0.4)] p-8 max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-sky-400">
          🚀 Orbital Velocity Simulator
        </h1>
        <p className="mb-4 text-sky-200">
          Explore how altitude affects the orbital speed required to stay in orbit around Earth.
        </p>

        <label className="block mb-2 text-sm">Orbit Radius (km):</label>
        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-sky-500"
        />

        <p className="text-lg mb-2">
          Orbital Velocity:{" "}
          <span className="text-sky-400 font-semibold">{velocity.toFixed(2)} km/s</span>
        </p>

        <div className="mt-4">
          <div className="w-48 h-48 mx-auto border-2 border-sky-400 rounded-full flex items-center justify-center animate-spin-slow">
            <div className="w-8 h-8 bg-sky-300 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
          </div>
          <p className="text-xs mt-2 text-slate-400">Satellite orbiting Earth</p>
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
