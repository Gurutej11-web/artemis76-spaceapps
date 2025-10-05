import { useState } from "react";

export default function CupolaView() {
  const [selected, setSelected] = useState("local");

  const images = {
    local: { src: "/assets/cupola.jpg", label: "Cupola - Local Sample" },
    sunrise: {
      src: "https://images-assets.nasa.gov/image/iss040e090540/iss040e090540~orig.jpg",
      label: "Sunrise from ISS"
    },
    night: {
      src: "https://images-assets.nasa.gov/image/iss030e078095/iss030e078095~orig.jpg",
      label: "Night View of Earth from ISS"
    }
  };

  return (
    <section id="cupola" className="p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-3">Cupola — Window to the World</h2>
      <p className="text-slate-300 mb-4">
        See Earth like astronauts do from the Cupola. Click the buttons to switch between real NASA views.
      </p>

      <div className="flex flex-wrap gap-4 mb-4">
        {Object.keys(images).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`px-4 py-2 rounded ${selected === key ? "bg-sky-600" : "bg-gray-800"}`}
          >
            {images[key].label}
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-lg p-4 shadow-lg">
        <img
          src={images[selected].src}
          alt={images[selected].label}
          className="w-full rounded-md max-h-[520px] object-cover"
        />
        <div className="mt-3 text-slate-300">
          <strong>{images[selected].label}</strong>
          <p className="mt-2 text-sm">
            Astronaut photography from the Cupola helps scientists track wildfires, monitor climate change, and support disaster response teams on Earth.
          </p>
        </div>
      </div>
    </section>
  );
}
