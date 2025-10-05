// src/components/ProfilesGrid.jsx
import React from "react";

/* NASA public-domain astronaut profiles */
const ASTRONAUTS = [
  {
    name: "Chris Hadfield",
    img: "/assets/hadfield.jpg",
    blurb:
      "Canadian astronaut who trained in the NBL and became famous for sharing life aboard the ISS.",
    quote: "In the NBL, you learn to trust the team.",
  },
  {
    name: "Peggy Whitson",
    img: "/assets/whitson.jpg",
    blurb:
      "Veteran astronaut with multiple EVAs; trained extensively in neutral buoyancy before her record-breaking missions.",
    quote:
      "Training underwater prepared me for the patience spacewalks require.",
  },
  {
    name: "Jasmin Moghbeli",
    img: "/assets/moghbeli.jpg",
    blurb:
      "NASA astronaut and helicopter pilot who emphasizes teamwork and preparation for long-duration missions.",
    quote:
      "Every moment underwater reflects the challenges and rewards of spaceflight.",
  },
];

export default function ProfilesGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {ASTRONAUTS.map((a) => (
        <div
          key={a.name}
          className="p-4 bg-gray-800/90 rounded-xl shadow-md hover:shadow-sky-600/30 transition"
        >
          <div className="flex gap-4 items-center">
            <img
              src={a.img}
              alt={a.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div>
              <div className="font-semibold text-lg">{a.name}</div>
              <div className="text-sm text-slate-300">{a.blurb}</div>
              <div className="mt-2 italic text-slate-400">
                “{a.quote}”
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
