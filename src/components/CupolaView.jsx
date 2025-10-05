import { useState } from "react";

export default function CupolaView() {
  const [selected, setSelected] = useState("sunrise");

  const images = {
    sunrise: {
      src: "https://images-assets.nasa.gov/image/iss040e090540/iss040e090540~orig.jpg",
      label: "Sunrise from ISS",
      info: `
        This breathtaking view shows the Sun rising over Earth from the International Space Station. 
        Astronauts use these observations to study atmospheric phenomena, monitor weather patterns, and observe Earth's curvature. 
        The colors you see are caused by scattering of sunlight in the atmosphere, which helps scientists understand air composition and pollution. 
        Sunrise images also allow researchers to track cloud formations and storm development globally. 
        Studying these images can improve climate modeling and prediction of natural disasters.`
    },
    night: {
      src: "https://images-assets.nasa.gov/image/iss030e078095/iss030e078095~orig.jpg",
      label: "Night View of Earth from ISS",
      info: `
        Night-time imagery reveals city lights, auroras, and other features of Earth's surface. 
        These views help scientists monitor human activity patterns, energy consumption, and urbanization. 
        Astronaut observations also provide data on the extent and brightness of auroras, which are critical for studying Earth's magnetosphere. 
        Nighttime images help track events like wildfires, fishing lights, and even migrating animal populations. 
        Overall, these images give a unique perspective to understand human impact and natural phenomena on Earth.`
    }
  };

  return (
    <section id="cupola" className="p-8 max-w-6xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-4 text-sky-400">Cupola — Window to the World</h2>
      <p className="text-slate-300 mb-6">
        Experience the views of Earth as astronauts see them from the Cupola module on the International Space Station. 
        Learn about atmospheric phenomena, climate monitoring, human activity patterns, and much more.
      </p>

      <div className="flex flex-wrap gap-4 mb-6">
        {Object.keys(images).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`px-4 py-2 rounded ${selected === key ? "bg-sky-600" : "bg-gray-800"} hover:bg-sky-500`}
          >
            {images[key].label}
          </button>
        ))}
      </div>

      <div className="bg-gray-900/70 rounded-lg p-4 shadow-lg flex flex-col md:flex-row gap-6">
        <img
          src={images[selected].src}
          alt={images[selected].label}
          className="w-full md:w-1/2 rounded-md object-cover max-h-[400px]"
        />
        <div className="text-slate-300 md:w-1/2">
          <h3 className="font-semibold text-xl mb-2">{images[selected].label}</h3>
          <p className="text-sm whitespace-pre-line">{images[selected].info}</p>
        </div>
      </div>
    </section>
  );
}
