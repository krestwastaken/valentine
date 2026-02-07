import React from 'react';

export default function LoveNotes({ notes, answered }) {
  if (answered || notes.length === 0) {
    return null;
  }

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-pink-100 shadow-lg">
      <h3 className="text-rose-900 font-medium mb-4 text-sm tracking-widest uppercase">
        Because...
      </h3>
      <div className="space-y-3">
        {notes.map((note, index) => (
          <p 
            key={index} 
            className="text-rose-700 text-lg font-light italic"
            style={{
              animation: `fade-in 0.6s ease-out ${0.2 + index * 0.15}s both`
            }}
          >
            ✨ {note}
          </p>
        ))}
      </div>
    </div>
  );
}
