import { useState, useRef } from "react";

export default function ElectricSpark({ children }) {
  const [sparks, setSparks] = useState([]);
  const lastTime = useRef(0);

  const createSpark = (e) => {
    const now = Date.now();

    // Prevent creating too many sparks
    if (now - lastTime.current < 70) return;
    lastTime.current = now;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const length = 100 + Math.random() * 100;
    const points = [];

    // Create jagged lightning line
    for (let i = 0; i <= 10; i++) {
      const px = (length / 10) * i;

      const py =
        i === 0 || i === 10
          ? 20
          : 20 + (Math.random() - 0.5) * 35;

      points.push(`${px},${py}`);
    }

    const spark = {
      id: now + Math.random(),
      x,
      y,
      points: points.join(" "),
      rotation: Math.random() * 360,
    };

    setSparks((prev) => [...prev.slice(-5), spark]);

    setTimeout(() => {
      setSparks((prev) =>
        prev.filter((item) => item.id !== spark.id)
      );
    }, 400);
  };

  return (
    <div
      onMouseMove={createSpark}
      className="relative overflow-hidden"
    >
      {children}

      {sparks.map((spark) => (
        <svg
          key={spark.id}
          width="220"
          height="50"
          viewBox="0 0 220 50"
          className="pointer-events-none absolute z-50"
          style={{
            left: spark.x,
            top: spark.y,
            transform: `translate(-10px, -25px) rotate(${spark.rotation}deg)`,
          }}
        >
          {/* Glow */}
          <polyline
            points={spark.points}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.3"
            className="electric-glow"
          />

          {/* Main electricity */}
          <polyline
            points={spark.points}
            fill="none"
            stroke="#60a5fa"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="electric-line"
          />

          {/* White hot center */}
          <polyline
            points={spark.points}
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="electric-line"
          />
        </svg>
      ))}
    </div>
  );
}