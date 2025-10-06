import React, { useState } from "react";

export default function GravitySimulator() {
  const [altitude, setAltitude] = useState(400);
  const [speed, setSpeed] = useState(7.66);

  const earthRadius = 6371;
  const G = 6.674e-11;
  const M = 5.972e24;
  const orbitRadius = (earthRadius + altitude) * 1000;
  const orbitalSpeed = Math.sqrt((G * M) / orbitRadius) / 1000;

  let stability = "🟢 Stable Orbit";
  if (speed < orbitalSpeed * 0.9) stability = "🔴 Too Slow — Orbit Decays";
  else if (speed > orbitalSpeed * 1.1) stability = "🟠 Too Fast — Escapes Orbit";

  return (
    <div className="p-8 text-center text-slate-200">
      <h2 className="text-3xl font-bold mb-4 text-sky-400">Orbit Lab — Gravity Simulator</h2>
      <p>Adjust altitude and speed to maintain a stable orbit!</p>

      <div className="my-6">
        <label>Altitude: {altitude} km</label>
        <input type="range" min="100" max="1000" value={altitude} onChange={(e) => setAltitude(Number(e.target.value))} className="w-full" />

        <label>Speed: {speed.toFixed(2)} km/s</label>
        <input type="range" min="5" max="10" step="0.01" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="w-full" />
      </div>

      <p className="text-lg">Required Speed: {orbitalSpeed.toFixed(2)} km/s</p>
      <p className="text-xl font-semibold mt-2">{stability}</p>
    </div>
  );
}
