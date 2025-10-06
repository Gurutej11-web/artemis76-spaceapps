import { useState } from "react";
import StarfieldBackground from "./StarfieldBackground";

export default function CommDelaySim() {
  const [distance, setDistance] = useState(384400); // km (Earth–Moon distance)
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [timeTaken, setTimeTaken] = useState(null);
  const speedOfLight = 299792; // km/s

  const handleSend = () => {
    const delay = (distance / speedOfLight) * 2; // round trip
    setResponse("");
    setTimeTaken(null);
    setTimeout(() => {
      setResponse("Message received!");
      setTimeTaken(delay.toFixed(2));
    }, delay * 1000);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
      <StarfieldBackground />

      <div className="relative z-10 bg-black/70 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(56,189,248,0.4)] p-8 max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-sky-400">
          🛰️ Communication Delay Simulator
        </h1>
        <p className="mb-4 text-sky-200">
          Simulate how long it takes a message to travel between Earth and other planets.
        </p>

        <label className="block mb-2 text-sm">Distance (km):</label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-sky-500"
        />

        <textarea
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-sky-500"
        />

        <button
          onClick={handleSend}
          className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded mb-4"
        >
          Send Message
        </button>

        <div className="min-h-[40px]">
          {response ? (
            <p className="text-green-400 font-semibold">{response}</p>
          ) : (
            <p className="text-slate-400">Waiting for response...</p>
          )}
        </div>

        {timeTaken && (
          <p className="text-sm text-sky-300 mt-2">
            Round-trip delay: {timeTaken} seconds
          </p>
        )}

        <a
          href="/"
          className="inline-block mt-6 text-sky-400 hover:underline"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
