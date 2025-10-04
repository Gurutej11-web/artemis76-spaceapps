import { useState, useRef, useEffect } from "react";

/**
 * Simple NBL trainer:
 * - User adjusts mass/volume sliders to reach neutral buoyancy
 * - Visual indicator and small "task" meter show success
 * - This is a simplified physics model for educational/demo use
 */

export default function NBLTrainer() {
  const [mass, setMass] = useState(90); // kg
  const [volume, setVolume] = useState(0.09); // m^3
  const [status, setStatus] = useState("Adjust sliders until neutral buoyancy (indicator centered).");
  const [taskState, setTaskState] = useState("ready"); // ready | inprogress | success | fail
  const simRef = useRef({ vy: 0, y: 0 });

  // compute neutral indicator value (-1 .. 1)
  const neutralValue = (() => {
    const rho = 1000; // kg/m^3
    const diff = rho * volume - mass; // positive => buoyant, negative => sink
    return Math.max(-1, Math.min(1, diff / 200));
  })();

  useEffect(() => {
    // update status hint
    if (Math.abs(neutralValue) < 0.06) {
      setStatus("Very close to neutral buoyancy — good for precise tasks.");
    } else if (neutralValue > 0.06) {
      setStatus("Too buoyant: you will float upward. Add weight or reduce volume.");
    } else {
      setStatus("Too heavy: you will sink. Add floatation or reduce weight.");
    }
  }, [neutralValue]);

  // simple physics loop that updates simRef.y for visualization (not used heavily)
  useEffect(() => {
    let mounted = true;
    const rho = 1000;
    const g = 9.81;
    const k = 12;
    function step() {
      if (!mounted) return;
      const m = mass;
      const V = Math.max(0.001, volume);
      const Fb = rho * V * g;
      const W = m * g;
      const vy = simRef.current.vy;
      const Fnet = Fb - W - k * vy;
      const ay = Fnet / m;
      const newVy = vy + ay * 0.016;
      let newY = simRef.current.y + newVy * 0.016;
      // clamp visualization bounds
      if (newY < -1) { newY = -1; simRef.current.vy = 0; }
      else if (newY > 1) { newY = 1; simRef.current.vy = 0; }
      else simRef.current.vy = newVy;
      simRef.current.y = newY;
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    return () => { mounted = false; };
  }, [mass, volume]);

  function startTask() {
    setTaskState("inprogress");
    setTimeout(() => {
      // success if neutralValue is close to 0
      if (Math.abs(neutralValue) < 0.06) setTaskState("success");
      else setTaskState("fail");
    }, 3000);
  }

  return (
    <section id="nbl" className="p-8 max-w-6xl mx-auto bg-slate-900/60 rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-3">Neutral Buoyancy Lab — Trainer</h2>
      <p className="text-slate-300 mb-4">
        Use the sliders to mimic adjusting mass and displaced volume to reach neutral buoyancy — the condition astronauts aim for when training underwater.
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
            <label className="text-sm">Displaced Volume (m³)</label>
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
            <div className="text-sm text-slate-200">Neutral indicator</div>
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
          <img src="/assets/nbl.jpg" alt="NBL training" className="rounded-md max-h-[320px] object-cover mb-4" />
          <div className="text-slate-300 text-sm">
            The NBL is a large pool where astronauts practice EVAs underwater. Neutral buoyancy lets them train complex tasks safely.
          </div>
        </div>
      </div>
    </section>
  );
}
