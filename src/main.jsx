import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import OrbitalVelocitySim from "./components/OrbitalVelocitySim";
import SpaceTemperatureSim from "./components/SpaceTemperatureSim";
import CommDelaySim from "./components/CommDelaySim";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/orbit" element={<OrbitalVelocitySim />} />
        <Route path="/temperature" element={<SpaceTemperatureSim />} />
        <Route path="/comm" element={<CommDelaySim />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
