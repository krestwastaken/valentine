import React, { useState } from "react";
import FloatingHearts from "./FloatingHearts";
import Confetti from "./Confetti";
import JourneyStep from "./JourneyStep";
import ValentineQuestion from "./ValentineQuestion";
import SuccessMessage from "./SuccessMessage";
import { JOURNEY_STEPS } from "./constants";

export default function ValentineJourney() {
  const [step, setStep] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleYes = () => {
    setShowConfetti(true);
    setStep((prev) => prev + 1);
  };

  const handleNoHover = () => {
    // Move the No button to a random position when user tries to hover
    const maxX = 150;
    const maxY = 150;
    setNoButtonPosition({
      x: (Math.random() - 0.5) * maxX * 2,
      y: (Math.random() - 0.5) * maxY * 2,
    });
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#f4cce2" }}
    >
      <FloatingHearts />
      <Confetti show={showConfetti} />

      {/* Main content - with higher z-index to stay on top */}
      <div
        className="min-h-screen flex items-center justify-center p-6 relative"
        style={{ zIndex: 10 }}
      >
        {/* Journey Steps */}
        {step < JOURNEY_STEPS.length && (
          <JourneyStep
            key={step}
            message={JOURNEY_STEPS[step].message}
            buttonText={JOURNEY_STEPS[step].buttonText}
            onNext={handleNext}
          />
        )}

        {/* The Big Question */}
        {step === JOURNEY_STEPS.length && step < JOURNEY_STEPS.length + 1 && (
          <ValentineQuestion
            onYes={handleYes}
            onNoHover={handleNoHover}
            noButtonPosition={noButtonPosition}
          />
        )}

        {/* Success Message */}
        {step > JOURNEY_STEPS.length && <SuccessMessage />}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        body {
          margin: 0;
          padding: 0;
          background-color: #f4cce2;
        }
        
        * {
          font-family: 'Playfair Display', serif;
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

        .floating-heart {
          position: absolute;
          bottom: -50px;
          animation: float-up infinite ease-in;
          opacity: 0.6;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes float-up {
          0% {
            bottom: -50px;
            opacity: 0;
            transform: translateX(0) rotate(0deg);
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            bottom: 110vh;
            opacity: 0;
            transform: translateX(50px) rotate(360deg);
          }
        }

        .confetti {
          position: absolute;
          top: -10px;
          width: 10px;
          height: 10px;
          animation: confetti-fall forwards ease-in;
          z-index: 100;
          pointer-events: none;
        }

        @keyframes confetti-fall {
          0% {
            top: -10px;
            opacity: 1;
            transform: translateY(0) rotateZ(0deg);
          }
          100% {
            top: 100vh;
            opacity: 0;
            transform: translateY(0) rotateZ(720deg);
          }
        }
      `}</style>
    </div>
  );
}
