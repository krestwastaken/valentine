import React, { useState, useEffect } from 'react';

export default function ValentineJourney() {
  const [step, setStep] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);

  // Journey steps with romantic messages
  const journeySteps = [
    {
      message: "Hey Beautiful...",
      buttonText: "Click Me"
    },
    {
      message: "I've been thinking about you...",
      buttonText: "Continue"
    },
    {
      message: "Every moment with you feels like magic ✨",
      buttonText: "Tell me more"
    },
    {
      message: "Your smile lights up my entire world 🌟",
      buttonText: "Keep going"
    },
    {
      message: "I can't imagine my life without you in it 💫",
      buttonText: "Next"
    },
    {
      message: "So I have an important question to ask...",
      buttonText: "I'm listening"
    }
  ];



  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleYes = () => {
    setShowConfetti(true);
    
    // Generate confetti
    const newConfetti = [];
    for (let i = 0; i < 150; i++) {
      newConfetti.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.3,
        duration: 2 + Math.random() * 1.5,
        color: ['#ff6b9d', '#c44569', '#f8b500', '#ff9ff3', '#ff4757', '#ffa502'][Math.floor(Math.random() * 6)],
        size: 8 + Math.random() * 6
      });
    }
    setConfettiPieces(newConfetti);
    setStep(prev => prev + 1);
  };

  const handleNoHover = () => {
    // Move the No button to a random position when user tries to hover
    const maxX = 150;
    const maxY = 150;
    setNoButtonPosition({
      x: (Math.random() - 0.5) * maxX * 2,
      y: (Math.random() - 0.5) * maxY * 2
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-pink-50">
      {/* Fixed container for confetti - positioned absolutely, won't affect layout */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {showConfetti && confettiPieces.map(piece => (
          <div
            key={piece.id}
            className="absolute top-0 rounded-full"
            style={{
              left: `${piece.left}%`,
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
              animation: `confetti-fall ${piece.duration}s ease-out ${piece.delay}s forwards`
            }}
          />
        ))}
      </div>

      {/* Main content - with higher z-index to stay on top */}
      <div className="min-h-screen flex items-center justify-center p-6 relative" style={{ zIndex: 10 }}>
        {/* Journey Steps */}
        {step < journeySteps.length && (
          <div 
            key={step}
            className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-12 md:p-16 max-w-xl w-full border border-pink-200"
            style={{
              animation: 'fade-scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-serif text-rose-600 mb-8 leading-relaxed">
                {journeySteps[step].message}
              </h1>
              
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-10 py-4 rounded-full text-xl font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {journeySteps[step].buttonText}
              </button>
            </div>
          </div>
        )}

        {/* The Big Question */}
        {step === journeySteps.length && !showConfetti && (
          <div 
            className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-12 md:p-16 max-w-2xl w-full border border-pink-200"
            style={{
              animation: 'fade-scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="text-center">
              <div className="text-6xl mb-6">💝</div>
              <h1 className="text-5xl md:text-6xl font-serif text-rose-600 mb-12 leading-tight">
                Will you be my Valentine?
              </h1>
              
              <div className="flex gap-6 justify-center items-center relative h-32">
                <button
                  onClick={handleYes}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-12 py-5 rounded-full text-2xl font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 z-10"
                >
                  Yes! 💕
                </button>
                
                <button
                  onMouseEnter={handleNoHover}
                  onClick={handleNoHover}
                  className="bg-gray-300 text-gray-600 px-10 py-5 rounded-full text-xl font-medium transition-all duration-200 shadow-lg absolute"
                  style={{
                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {showConfetti && (
          <div 
            className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-12 md:p-16 max-w-2xl w-full border border-pink-200 text-center"
            style={{
              animation: 'fade-scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="text-8xl mb-6 animate-bounce">🎉</div>
            <h1 className="text-5xl md:text-6xl font-serif text-rose-600 mb-6">
              Yay! 💖
            </h1>
            <p className="text-2xl md:text-3xl text-rose-500 font-light mb-6 leading-relaxed">
              You've made me the happiest person alive!
            </p>
            <p className="text-xl text-rose-400 italic">
              I can't wait to spend this Valentine's Day with you 💕
            </p>
            <div className="mt-8 text-6xl">
              ✨💝✨
            </div>
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Playfair Display', serif;
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(1080deg);
            opacity: 0.7;
          }
        }

        @keyframes fade-scale-in {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
