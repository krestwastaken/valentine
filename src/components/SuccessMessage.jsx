import React from "react";

export default function SuccessMessage() {
  return (
    <div
      className="rounded-3xl shadow-2xl p-16 md:p-20 max-w-2xl w-full border border-pink-300 text-center"
      style={{
        animation: "fade-scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        backgroundColor: "#fce4ec",
        borderRadius: "2rem",
      }}
    >
      <div className="text-8xl mb-6 animate-bounce">🎉</div>
      <h1
        className="text-5xl md:text-6xl font-serif mb-6"
        style={{ color: "#d81b60" }}
      >
        Yay! 💖
      </h1>
      <p
        className="text-2xl md:text-3xl font-light mb-6 leading-relaxed"
        style={{ color: "#d81b60" }}
      >
        You've made me the happiest person alive!
      </p>
      <p className="italic" style={{ color: "#ec407a" }}>
        I can't wait to spend this Valentine's Day with you my moon and stars 💕
      </p>
      <div className="mt-8 text-6xl">✨💝✨</div>
      <p className="text-sm mt-8" style={{ color: "#ec407a" }}>
        Take a screenshot and send it to me
      </p>
    </div>
  );
}
