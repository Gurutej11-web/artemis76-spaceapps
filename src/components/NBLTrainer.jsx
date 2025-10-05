import { useState, useEffect, useRef } from "react";

export default function NBLTrainer() {
  const [mass, setMass] = useState(90);
  const [volume, setVolume] = useState(0.09);
  const [status, setStatus] = useState("Adjust sliders to reach neutral buoyancy.");
  const [taskState, setTaskState] = useState("ready");
  const simRef = useRef({ vy: 0, y: 0 });

  // Calculate neutral value
  const neutralValue = (() => {
    const rho = 1000; // water density
    const diff = rho * volume - mass;
    return Math.max(-1, Math.min(1, diff / 200));
  })();

  // Update status text dynamically
  useEffect(() => {
    if (Math.abs(neutralValue) < 0.06) {
      setStatus("✅ Neutral Buoyancy Achieved!");
    } else if (neutralValue > 0.06) {
      setStatus("⬆️ Too buoyant — add weight or reduce volume.");
    } else {
      setStatus("⬇️ Too heavy — reduce weight or add floatation.");
    }
  }, [neutralValue]);

  // Start a simulated task
  function startTask() {
    setTaskState("inprogress");
    setTimeout(() => {
      if (Math.abs(neutralValue) < 0.06) setTaskState("success");
      else setTaskState("fail");
    }, 3000);
  }

  return (
    <section id="nbl" className="p-8 max-w-6xl mx-auto bg-gray-900/70 rounded-lg mt-12">
      <h2 className="text-3xl font-bold mb-3 text-sky-400">Neutral Buoyancy Lab — Trainer</h2>
      <p className="text-slate-300 mb-4">
        Adjust mass and volume to simulate astronaut training underwater. Reach neutral buoyancy like real astronauts at NASA’s NBL.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Simulation Controls */}
        <div className="p-4 bg-gray-800 rounded-lg">
          <div className="mb-4">
            <label className="text-sm">Mass (kg)</label>
            <input
              type="range"
              min="60"
              max="140"
              value={mass}
              onChange={(e) => setMass(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-xs text-slate-300">{mass} kg</div>
          </div>

          <div className="mb-4">
            <label className="text-sm">Volume (m³)</label>
            <input
              type="range"
              min="0.01"
              max="0.20"
              step="0.001"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-xs text-slate-300">{volume.toFixed(3)} m³</div>
          </div>

          <div className="mb-4">
            <div className="text-sm text-slate-200">Neutral Indicator</div>
            <div className="w-full bg-gray-700 rounded h-3 relative mt-2">
              <div
                style={{ left: `${(neutralValue + 1) / 2 * 100}%`, width: 2 }}
                className="absolute top-0 bottom-0 bg-sky-400"
              />
            </div>
            <div className="text-xs text-slate-400 mt-2">{status}</div>
          </div>

          <div className="flex gap-3 items-center">
            <button
              onClick={startTask}
              className="px-4 py-2 bg-emerald-600 rounded hover:bg-emerald-500"
            >
              Start Precision Task
            </button>
            <div className="p-2 rounded bg-gray-800 text-sm">
              Task status: <strong>{taskState}</strong>
            </div>
          </div>
        </div>

        {/* NBL Educational Info */}
        <div className="p-4 bg-gray-800 rounded-lg text-slate-300">
          <h3 className="font-semibold mb-2">About the NBL</h3>
          <p className="mb-2">
            The Neutral Buoyancy Lab is a huge pool where astronauts train for spacewalks. Adjusting mass and volume underwater helps simulate microgravity conditions.
          </p>
          <p className="mb-2">
            Observing buoyancy and practicing precise movements underwater allows astronauts to perfect repairs, tool handling, and body positioning for space missions.
          </p>
        </div>
      </div>
    </section>
  );
}
