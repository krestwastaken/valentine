import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function BackgroundEffects({ showProposal }) {
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

  return (
    <>
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
    </>
  );
}

