import { useState, useEffect } from "react";

/**
 * Simple Cupola view:
 * - Shows a selectable set of images (includes local and two remote NASA images)
 * - Displays basic metadata/description (static short text here; can be extended to fetch metadata)
 */
export default function CupolaView() {
  const [selected, setSelected] = useState("local");
  const images = {
    local: { src: "/assets/cupola.jpg", label: "Cupola - Local sample" },
    sunrise: {
      src: "https://images-assets.nasa.gov/image/iss040e090540/iss040e090540~orig.jpg",
      label: "Sunrise from ISS (astronaut photo)"
    },
    night: {
      src: "https://images-assets.nasa.gov/image/iss030e078095/iss030e078095~orig.jpg",
      label: "Night view of Earth from ISS"
    }
  };

  useEffect(() => {
    // preload selected remote image to reduce jank
    const img = new Image();
    img.src = images[selected].src;
  }, [selected]);

  return (
    <section id="cupola" className="p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-3">Cupola — Window to the World</h2>
      <p className="text-slate-300 mb-4">
        See Earth the way astronauts do from the Cupola. Click the buttons to change the view.
      </p>

      <div className="flex flex-wrap gap-4 mb-4">
        {Object.keys(images).map((k) => (
          <button
            key={k}
            onClick={() => setSelected(k)}
            className={`px-4 py-2 rounded ${selected === k ? "bg-sky-600" : "bg-gray-800"}`}
          >
            {images[k].label}
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
            Astronaut photography from the Cupola helps scientists with disaster response,
            environmental monitoring, and long-term climate research.
          </p>
        </div>
      </div>
    </section>
  );
}
