import { useState } from "react";

export default function RadiationShieldTest() {
  const [material, setMaterial] = useState("Aluminum");

  const radiationLevels = {
    Aluminum: 60,
    Polyethylene: 40,
    Water: 30,
    Lead: 10,
  };

  const level = radiationLevels[material];

  return (
    <div className="text-center p-10 bg-gray-900/80 rounded-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-rose-400 mb-4">
        Radiation Shield Test
      </h2>
      <p className="text-slate-300 mb-4">
        Choose a shielding material to see how much radiation gets blocked in space.
      </p>
      <select
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
        className="bg-gray-800 text-white p-2 rounded-md mb-4"
      >
        {Object.keys(radiationLevels).map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      <div className="h-6 w-full bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-rose-500 transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
      <p className="mt-3 text-lg text-slate-200">
        Radiation passing through: {level}% 
      </p>
      <p className="text-sm text-slate-400 mt-2">
        Lower percentage = better shielding effectiveness.
      </p>
    </div>
  );
}
