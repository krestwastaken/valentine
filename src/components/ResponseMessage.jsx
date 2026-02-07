import React from 'react';

export default function ResponseMessage({ fromName }) {
  return (
    <div 
      className="space-y-6"
      style={{
        animation: 'scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
    >
      <div className="text-8xl mb-4">💖</div>
      <h2 className="text-5xl md:text-6xl font-serif text-rose-900 mb-4">
        Yay!
      </h2>
      <p className="text-2xl md:text-3xl text-rose-700 font-light mb-8">
        I'm so happy! Can't wait to spend Valentine's Day with you!
      </p>
      <p className="text-xl text-rose-600 italic">
        Love, {fromName} 💕
      </p>
    </div>
  );
}
