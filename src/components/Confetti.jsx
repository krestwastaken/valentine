import React from 'react';

export default function Confetti({ pieces }) {
  return (
    <>
      {pieces.map(piece => (
        <div
          key={piece.id}
          className="absolute top-0 w-2 h-2 rounded-full pointer-events-none"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animation: `confetti-fall ${piece.duration}s ease-in ${piece.delay}s forwards`
          }}
        />
      ))}
    </>
  );
}
