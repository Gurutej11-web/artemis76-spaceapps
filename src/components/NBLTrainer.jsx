import { useState, useEffect, useRef } from "react";

export default function NBLTrainer() {
  const [mass, setMass] = useState(90);
  const [volume, setVolume] = useState(0.09);
  const [status, setStatus] = useState("Adjust sliders to reach neutral buoyancy.");
  const [taskState, setTaskState] = useState("ready");
  const simRef = useRef({ vy: 0, y: 0 });

  const neutralValue = (() => {
    const rho = 1000;
    const diff = rho * volume - mass;
    return Math.max(-1, Math.min(1, diff / 200));
  })();

  useEffect(() => {
    if (Math.abs(neutralValue) < 0.06) {
      setStatus("✅ Neutral Buoyancy Achieved!");
    } else if (neutralValue > 0.06) {
      setStatus("⬆️ Too buoyant — add weight or reduce volume.");
    } else {
      setStatus("⬇️ Too heavy — reduce weight or add floatation.");
    }
  }, [neutralValue]);

  function startTask() {
    setTaskState("inprogress");
    setTimeout(() => {
      if (Math.abs(neutralValue) < 0.06) setTaskState("success");
      else setTaskState("fail");
    }, 3000);
  }

  return (
    <section id="nbl" className="p-8 max-w-6xl mx-auto bg-slate-900/60 rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-3">Neutral Buoyancy Lab — Trainer</h2>
      <p className="text-slate-300 mb-4">
        Use the sliders to mimic adjusting mass and volume to achieve neutral buoyancy — just like astronauts training underwater at NASA’s NBL.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-slate-800 rounded-lg">
          <div className="mb-3">
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

          <div className="mb-3">
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

          <div className="mb-3">
            <div className="text-sm text-slate-200">Neutral Indicator</div>
            <div className="w-full bg-slate-700 rounded h-3 relative mt-2">
              <div
                style={{ left: `${(neutralValue + 1) / 2 * 100}%`, width: 2 }}
                className="absolute top-0 bottom-0 bg-sky-400"
              />
            </div>
            <div className="text-xs text-slate-400 mt-2">{status}</div>
          </div>

          <div className="flex gap-3">
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

        <div className="p-4 bg-slate-800 rounded-lg flex flex-col items-center justify-center">
          <img src="/assets/nbl.jpg" alt="Astronaut training in NBL" className="rounded-md max-h-[320px] object-cover mb-4" />
          <div className="text-slate-300 text-sm">
            The NBL lets astronauts simulate spacewalks underwater — perfecting repairs and movement in a microgravity-like environment.
          </div>
        </div>
      </div>
    </section>
  );
}
