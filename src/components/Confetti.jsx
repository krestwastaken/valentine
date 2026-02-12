import React from "react";

export default function Confetti({ show }) {
  // Generate confetti pieces
  const confetti = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 3 + Math.random() * 2,
    color: ["#ff69b4", "#ff1493", "#ff69b4", "#ffc0cb", "#ff1493", "#ec407a"][
      Math.floor(Math.random() * 6)
    ],
    rotation: Math.random() * 360,
  }));

  if (!show) return null;

  return (
    <>
      {confetti.map((piece) => (
        <div
          key={`confetti-${piece.id}`}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </>
  );
}
