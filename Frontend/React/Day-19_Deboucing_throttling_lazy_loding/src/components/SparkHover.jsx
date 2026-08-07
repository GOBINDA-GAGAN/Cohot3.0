import { useState } from "react";

export default function SparkHover({ children }) {
  const [sparks, setSparks] = useState([]);

  const createSpark = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const spark = {
      id: Date.now() + Math.random(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      size: Math.random() * 10 + 6,
    };

    setSparks((prev) => [...prev.slice(-10), spark]);

    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => s.id !== spark.id));
    }, 600);
  };

  return (
    <div
      onMouseMove={createSpark}
      className="relative overflow-hidden"
    >
      {children}

      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="
            pointer-events-none
            absolute
            z-50
            animate-spark
            text-yellow-400
          "
          style={{
            left: spark.x,
            top: spark.y,
            fontSize: spark.size,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}