import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CupolaView from "./components/CupolaView";
import NBLTrainer from "./components/NBLTrainer";
import InfoPanel from "./components/InfoPanel";

export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let shootingStars = [];
    const numStars = 400;
    const numShooting = 4;

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.7 + 0.2,
        });
      }
    };

    const initShootingStars = () => {
      shootingStars = [];
      for (let i = 0; i < numShooting; i++) {
        shootingStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight / 2,
          len: Math.random() * 150 + 50,
          angle: Math.PI / 12, // 15 degrees downward
          speed: Math.random() * 8 + 4,
          opacity: Math.random() * 0.5 + 0.5,
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initShootingStars();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const animate = () => {
      ctx.fillStyle = "#000010";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw background stars
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        s.y -= s.speed;
        if (s.y < 0) s.y = canvas.height;
      });

      // Draw shooting stars
      shootingStars.forEach((s) => {
        const dx = Math.cos(s.angle) * s.len;
        const dy = Math.sin(s.angle) * s.len;

        const grad = ctx.createLinearGradient(
          s.x - dx,
          s.y - dy,
          s.x,
          s.y
        );
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(1, `rgba(255,255,255,${s.opacity})`);

        ctx.beginPath();
        ctx.moveTo(s.x - dx, s.y - dy);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Move star
        s.x += s.speed * Math.cos(s.angle);
        s.y += s.speed * Math.sin(s.angle);

        // Reset if offscreen
        if (s.x > canvas.width || s.y > canvas.height) {
          s.x = Math.random() * canvas.width * 0.5;
          s.y = Math.random() * canvas.height * 0.3;
          s.len = Math.random() * 150 + 50;
          s.angle = Math.PI / 12;
          s.speed = Math.random() * 8 + 4;
          s.opacity = Math.random() * 0.5 + 0.5;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-200 font-sans">
      {/* Starfield Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <header className="p-8 text-center">
            <h1 className="text-5xl font-bold mb-3 text-slate-100">
              Artemis 76 — Window to the World
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-sky-200/80">
              Experience views from the Cupola and explore astronaut training
              in the Neutral Buoyancy Lab. Learn about Earth observation,
              space research, and ISS science through interactive simulations
              and images.
            </p>
          </header>

          {/* Cupola View */}
          <CupolaView />

          {/* Neutral Buoyancy Lab */}
          <NBLTrainer />

          {/* Info Panel */}
          <InfoPanel />

          {/* Expanded NASA Education Section */}
          <section
            id="nasa-resources"
            className="p-8 max-w-6xl mx-auto mt-12 bg-gray-900/80 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-sky-400">
              NASA Educational Insights
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-slate-200">
              <div>
                <h3 className="font-semibold mb-2">Cupola Window Views</h3>
                <p className="text-sm mb-2">
                  The Cupola on the ISS provides astronauts with unparalleled
                  observation opportunities. They capture imagery of Earth for
                  monitoring climate change, natural disasters, and urban
                  development. These high-resolution images help scientists
                  understand atmospheric and terrestrial processes.
                </p>
                <p className="text-sm">
                  Astronauts can also use the Cupola to document temporary
                  phenomena such as auroras, storms, and wildfires in real
                  time. This visual data supports environmental research and
                  public outreach.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Neutral Buoyancy Lab Training
                </h3>
                <p className="text-sm mb-2">
                  Astronauts train in the Neutral Buoyancy Lab (NBL) to simulate
                  microgravity underwater. This training prepares them for
                  extravehicular activities, repairs, and precise maneuvers in
                  space.
                </p>
                <p className="text-sm">
                  The NBL provides realistic feedback for handling tools,
                  moving heavy objects, and coordinating tasks, ensuring
                  astronauts are fully prepared for real ISS missions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Station Research & Tech</h3>
                <p className="text-sm">
                  The ISS is a hub for international science, hosting experiments
                  in physics, biology, human physiology, and materials science.
                  Data collected aids research on Earth and future deep space
                  missions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Environmental & EVA Science
                </h3>
                <p className="text-sm">
                  Extravehicular activity (EVA) research ensures astronauts
                  safely conduct spacewalks. Training focuses on environmental
                  awareness, tool use, and human physiological monitoring.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
