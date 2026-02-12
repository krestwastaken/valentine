import React from 'react';

export default function JourneyStep({ message, buttonText, onNext }) {
  return (
    <div
      className="rounded-3xl shadow-2xl p-16 md:p-20 max-w-xl w-full border border-pink-300"
      style={{
        animation: "fade-scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        backgroundColor: "#fce4ec",
        borderRadius: "2rem",
      }}
    >
      <div className="text-center">
        <h1
          className="text-4xl md:text-5xl font-serif mb-8 leading-relaxed"
          style={{ color: "#d81b60" }}
        >
          {message}
        </h1>

        <button
          onClick={onNext}
          className="text-white px-10 py-4 rounded-full text-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
          {buttonText}
        </button>
      </div>
    </div>
  );
}
