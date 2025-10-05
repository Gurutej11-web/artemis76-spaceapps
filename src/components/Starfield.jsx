// src/components/Starfield.jsx
import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const stars = [];
    const shootingStars = [];
    const numStars = 400;
    const numShootingStars = 4;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    // Create shooting stars
    for (let i = 0; i < numShootingStars; i++) {
      shootingStars.push({
        x: Math.random() * w,
        y: Math.random() * h * 0.5,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 8 + 8,
        angle: Math.random() * 0.3 + 0.3, // angle in radians
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    function animate() {
      ctx.fillStyle = "#000010";
      ctx.fillRect(0, 0, w, h);

      // Draw stars
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;
      });

      // Draw shooting stars
      shootingStars.forEach((s) => {
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.length * Math.cos(s.angle), s.y + s.length * Math.sin(s.angle));
        ctx.strokeStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        s.x += s.speed * Math.cos(s.angle);
        s.y -= s.speed * Math.sin(s.angle);

        if (s.x > w || s.y < 0) {
          s.x = Math.random() * w * 0.5;
          s.y = h * Math.random() * 0.5 + h * 0.5;
          s.angle = Math.random() * 0.3 + 0.3;
          s.speed = Math.random() * 8 + 8;
          s.length = Math.random() * 80 + 50;
          s.opacity = Math.random() * 0.5 + 0.5;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />;
}
