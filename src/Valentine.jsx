import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function ValentineProposal() {
  const [showCustomizer, setShowCustomizer] = useState(true);
  const [fromName, setFromName] = useState('');
  const [toName, setToName] = useState('');
  const [loveNotes, setLoveNotes] = useState(['', '', '']);
  const [showProposal, setShowProposal] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonClicks, setNoButtonClicks] = useState(0);
  const [confetti, setConfetti] = useState([]);
  const [hearts, setHearts] = useState([]);

  // Generate floating hearts
  useEffect(() => {
    if (!showProposal) return;
    
    const interval = setInterval(() => {
      setHearts(prev => [...prev, {
        id: Date.now(),
        left: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 1
      }]);
    }, 800);

    return () => clearInterval(interval);
  }, [showProposal]);

  // Clean up old hearts
  useEffect(() => {
    const cleanup = setInterval(() => {
      setHearts(prev => prev.slice(-20));
    }, 5000);
    return () => clearInterval(cleanup);
  }, []);

  const handleNoteChange = (index, value) => {
    const newNotes = [...loveNotes];
    newNotes[index] = value;
    setLoveNotes(newNotes);
  };

  const startProposal = () => {
    if (fromName.trim() && toName.trim()) {
      setShowCustomizer(false);
      setTimeout(() => setShowProposal(true), 300);
    }
  };

  const handleYes = () => {
    setAnswered(true);
    setAnswer(true);
    // Generate confetti
    const newConfetti = [];
    for (let i = 0; i < 100; i++) {
      newConfetti.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 1,
        color: ['#ff6b9d', '#c44569', '#f8b500', '#ff9ff3'][Math.floor(Math.random() * 4)]
      });
    }
    setConfetti(newConfetti);
  };

  const handleNo = () => {
    setNoButtonClicks(prev => prev + 1);
    // Move the No button to a random position
    setNoButtonPosition({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200
    });
  };

  const getNoButtonText = () => {
    if (noButtonClicks === 0) return 'No';
    if (noButtonClicks === 1) return 'Are you sure?';
    if (noButtonClicks === 2) return 'Really?';
    if (noButtonClicks === 3) return 'Think again...';
    return 'Please? 🥺';
  };

  const filteredNotes = loveNotes.filter(note => note.trim() !== '');

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      {/* Floating hearts background */}
      {showProposal && hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute bottom-0 pointer-events-none"
          style={{
            left: `${heart.left}%`,
            animation: `float-up ${heart.duration}s ease-in ${heart.delay}s forwards`,
            opacity: 0
          }}
        >
          <Heart className="text-pink-300 fill-pink-300" size={20} />
        </div>
      ))}

      {/* Confetti */}
      {confetti.map(piece => (
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

      {/* Customizer Form */}
      {showCustomizer && (
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
                  onChange={(e) => setFromName(e.target.value)}
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
                  onChange={(e) => setToName(e.target.value)}
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
                    onChange={(e) => handleNoteChange(index, e.target.value)}
                    placeholder={`Reason ${index + 1}`}
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-rose-400 focus:outline-none bg-white/50 text-rose-900 placeholder-rose-300 mb-3 transition-all"
                  />
                ))}
              </div>

              <button
                onClick={startProposal}
                disabled={!fromName.trim() || !toName.trim()}
                className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-4 rounded-xl font-medium text-lg hover:from-rose-500 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Create Valentine Message ✨
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Valentine Proposal */}
      {showProposal && (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div 
            className="text-center max-w-2xl"
            style={{
              animation: 'scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            {/* Main Question */}
            <div className="mb-12">
              <Sparkles className="text-amber-400 fill-amber-400 mx-auto mb-6 animate-pulse" size={56} />
              <h1 className="text-5xl md:text-7xl font-serif text-rose-900 mb-4 leading-tight">
                Hey {toName}!
              </h1>
              <p className="text-2xl md:text-3xl text-rose-700 font-light leading-relaxed">
                Will you be my Valentine?
              </p>
            </div>

            {/* Love Notes */}
            {!answered && filteredNotes.length > 0 && (
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-pink-100 shadow-lg">
                <h3 className="text-rose-900 font-medium mb-4 text-sm tracking-widest uppercase">
                  Because...
                </h3>
                <div className="space-y-3">
                  {filteredNotes.map((note, index) => (
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
            )}

            {/* Buttons */}
            {!answered && (
              <div className="flex gap-6 justify-center items-center flex-wrap">
                <button
                  onClick={handleYes}
                  className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-12 py-5 rounded-full text-xl font-medium hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110"
                  style={{
                    animation: 'bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both'
                  }}
                >
                  Yes! 💕
                </button>
                
                <button
                  onClick={handleNo}
                  className="bg-gray-200 text-gray-600 px-8 py-5 rounded-full text-lg font-medium hover:bg-gray-300 transition-all duration-300 shadow-lg relative"
                  style={{
                    animation: 'bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both',
                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  {getNoButtonText()}
                </button>
              </div>
            )}

            {/* Response */}
            {answered && answer && (
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
            )}
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
        
        * {
          font-family: 'Cormorant Garamond', serif;
        }

        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) rotate(180deg);
            opacity: 0;
          }
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-in {
          from {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
