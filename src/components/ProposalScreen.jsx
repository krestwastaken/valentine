import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import LoveNotes from "./LoveNotes";
import ProposalButtons from "./ProposalButtons";
import ResponseMessage from "./ResponseMessage";
import Confetti from "./Confetti";

export default function ProposalScreen({ fromName, toName, loveNotes }) {
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [confetti, setConfetti] = useState([]);

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
        color: ["#ff6b9d", "#c44569", "#f8b500", "#ff9ff3"][
          Math.floor(Math.random() * 4)
        ],
      });
    }
    setConfetti(newConfetti);
  };

  const filteredNotes = loveNotes.filter((note) => note.trim() !== "");

  return (
    <>
      <Confetti pieces={confetti} />

      <div className="min-h-screen flex items-center justify-center p-6">
        <div
          className="text-center max-w-2xl"
          style={{
            animation: "scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {/* Main Question */}
          <div className="mb-12">
            <Sparkles
              className="text-amber-400 fill-amber-400 mx-auto mb-6 animate-pulse"
              size={56}
            />
            <h1 className="text-5xl md:text-7xl font-serif text-rose-900 mb-4 leading-tight">
              Hey {toName}!
            </h1>
            <p className="text-2xl md:text-3xl text-rose-700 font-light leading-relaxed">
              Will you be my Valentine?
            </p>
          </div>

          <LoveNotes notes={filteredNotes} answered={answered} />

          {!answered && <ProposalButtons onYes={handleYes} />}

          {answered && answer && <ResponseMessage fromName={fromName} />}
        </div>
      </div>
    </>
  );
}

