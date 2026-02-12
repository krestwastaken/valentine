import React from 'react';

export default function ValentineQuestion({ onYes, onNoHover, noButtonPosition }) {
  return (
    <div
      className="rounded-3xl shadow-2xl p-16 md:p-20 max-w-2xl w-full border border-pink-300"
      style={{
        animation: "fade-scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        backgroundColor: "#fce4ec",
        borderRadius: "2rem",
      }}
    >
      <div className="text-center">
        <div className="text-6xl mb-6">💝</div>
        <h1
          className="text-5xl md:text-6xl font-serif mb-12 leading-tight"
          style={{ color: "#d81b60" }}
        >
          Will you be my Valentine?
        </h1>

        <div className="flex gap-6 justify-center items-center h-32">
          <button
            onClick={onYes}
            className="text-white px-12 py-5 rounded-full text-2xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 z-10"
            style={{
              background: "linear-gradient(to right, #d81b60, #c2185b)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(to right, #c2185b, #ad1457)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(to right, #d81b60, #c2185b)")
            }
          >
            Yes! 💕
          </button>

          <div className="relative">
            <button
              onMouseEnter={onNoHover}
              onClick={onNoHover}
              className="bg-gray-300 text-gray-600 px-10 py-5 rounded-full text-xl font-medium transition-all duration-200 shadow-lg"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
