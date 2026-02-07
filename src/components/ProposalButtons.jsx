import React, { useState } from "react";

export default function ProposalButtons({ onYes }) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonClicks, setNoButtonClicks] = useState(0);

  const handleNo = () => {
    setNoButtonClicks((prev) => prev + 1);
    // Move the No button to a random position
    setNoButtonPosition({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    });
  };

  const getNoButtonText = () => {
    if (noButtonClicks === 0) return "No";
    if (noButtonClicks === 1) return "Are you sure?";
    if (noButtonClicks === 2) return "Really?";
    if (noButtonClicks === 3) return "Think again...";
    return "Please? 🥺";
  };

  return (
    <div className="flex gap-6 justify-center items-center flex-wrap">
      <button
        onClick={onYes}
        className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-12 py-5 rounded-full text-xl font-medium hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110"
        style={{
          animation:
            "bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both",
        }}
      >
        Yes! 💕
      </button>

      <button
        onClick={handleNo}
        className="bg-gray-200 text-gray-600 px-8 py-5 rounded-full text-lg font-medium hover:bg-gray-300 transition-all duration-300 shadow-lg relative"
        style={{
          animation:
            "bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both",
          transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {getNoButtonText()}
      </button>
    </div>
  );
}
