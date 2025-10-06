import { useEffect, useRef } from "react";

export default function StarfieldBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let shootingStars = [];

    const numStars = 300;
    const numShooting = 3;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: numStars }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.6 + 0.2,
      }));
      shootingStars = Array.from({ length: numShooting }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        len: Math.random() * 120 + 40,
        angle: Math.PI / 14,
        speed: Math.random() * 6 + 3,
        opacity: Math.random() * 0.6 + 0.4,
      }));
    };

    const animate = () => {
      ctx.fillStyle = "#000010";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        s.y += s.speed;
        if (s.y > canvas.height) s.y = 0;
      });

      shootingStars.forEach((s) => {
        const dx = Math.cos(s.angle) * s.len;
        const dy = Math.sin(s.angle) * s.len;

        const grad = ctx.createLinearGradient(s.x, s.y, s.x - dx, s.y - dy);
        grad.addColorStop(0, `rgba(255,255,255,${s.opacity})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - dx, s.y - dy);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        s.x += s.speed * Math.cos(s.angle);
        s.y += s.speed * Math.sin(s.angle);

        if (s.x > canvas.width || s.y > canvas.height) {
          s.x = Math.random() * canvas.width * 0.5;
          s.y = Math.random() * canvas.height * 0.3;
        }
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
