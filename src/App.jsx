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
    const numStars = 300;

    // Initialize stars
    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.5 + 0.2,
        });
      }
    };

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Animate stars
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.y -= star.speed;
        if (star.y < 0) star.y = canvas.height;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-200">
      {/* Starfield canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <header className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-3">Artemis 76 — Window to the World</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Experience the Cupola’s view of Earth and practice neutral buoyancy training like astronauts do in the Neutral Buoyancy Lab.
            </p>
          </header>
          <CupolaView />
          <NBLTrainer />
          <InfoPanel />
        </main>
        <Footer />
      </div>
    </div>
  );
}
