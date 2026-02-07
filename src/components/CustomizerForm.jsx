import React from 'react';
import { Heart } from 'lucide-react';

export default function CustomizerForm({
  fromName,
  toName,
  loveNotes,
  onFromNameChange,
  onToNameChange,
  onNoteChange,
  onSubmit
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div 
        className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full border border-pink-100"
        style={{
          animation: 'fade-in 0.6s ease-out'
        }}
      >
        <div className="text-center mb-8">
          <Heart className="text-rose-400 fill-rose-400 mx-auto mb-4" size={48} />
          <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-2">
            Create Your Valentine
          </h1>
          <p className="text-rose-600 text-lg">Customize your message of love</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-rose-900 font-medium mb-2 text-sm tracking-wide">
              FROM
            </label>
            <input
              type="text"
              value={fromName}
              onChange={(e) => onFromNameChange(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-rose-400 focus:outline-none bg-white/50 text-rose-900 placeholder-rose-300 transition-all"
            />
          </div>

          <div>
            <label className="block text-rose-900 font-medium mb-2 text-sm tracking-wide">
              TO
            </label>
            <input
              type="text"
              value={toName}
              onChange={(e) => onToNameChange(e.target.value)}
              placeholder="Their name"
              className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-rose-400 focus:outline-none bg-white/50 text-rose-900 placeholder-rose-300 transition-all"
            />
          </div>

          <div>
            <label className="block text-rose-900 font-medium mb-2 text-sm tracking-wide">
              REASONS I LOVE YOU (OPTIONAL)
            </label>
            {[0, 1, 2].map(index => (
              <input
                key={index}
                type="text"
                value={loveNotes[index]}
                onChange={(e) => onNoteChange(index, e.target.value)}
                placeholder={`Reason ${index + 1}`}
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-rose-400 focus:outline-none bg-white/50 text-rose-900 placeholder-rose-300 mb-3 transition-all"
              />
            ))}
          </div>

          <button
            onClick={onSubmit}
            disabled={!fromName.trim() || !toName.trim()}
            className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-4 rounded-xl font-medium text-lg hover:from-rose-500 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Create Valentine Message ✨
          </button>
        </div>
      </div>
    </div>
  );
}
