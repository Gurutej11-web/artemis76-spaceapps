import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";

export default function ISSTracker() {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://api.open-notify.org/iss-now.json")
        .then((res) => res.json())
        .then((data) => {
          const { latitude, longitude } = data.iss_position;
          setPosition([parseFloat(latitude), parseFloat(longitude)]);
        });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const issIcon = L.icon({
    iconUrl: "/assets/iss.png", // add an ISS icon in /assets
    iconSize: [50, 32],
  });

  return (
    <section id="iss-tracker" className="p-8 max-w-6xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-3 text-center">Track the ISS Live</h2>
      <MapContainer center={position} zoom={2} scrollWheelZoom={true} className="w-full h-[400px] rounded-lg">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={issIcon}>
          <Popup>International Space Station</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
