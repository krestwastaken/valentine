import React, { useState } from "react";
import CustomizerForm from "./CustomizerForm";
import ProposalScreen from "./ProposalScreen";
import BackgroundEffects from "./BackgroundEffects";
import "../animations.css";

export default function ValentineProposal() {
  const [showCustomizer, setShowCustomizer] = useState(true);
  const [fromName, setFromName] = useState("");
  const [toName, setToName] = useState("");
  const [loveNotes, setLoveNotes] = useState(["", "", ""]);
  const [showProposal, setShowProposal] = useState(false);

  const startProposal = () => {
    if (fromName.trim() && toName.trim()) {
      setShowCustomizer(false);
      setTimeout(() => setShowProposal(true), 300);
    }
  };

  const handleNoteChange = (index, value) => {
    const newNotes = [...loveNotes];
    newNotes[index] = value;
    setLoveNotes(newNotes);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <BackgroundEffects showProposal={showProposal} />

      {showCustomizer && (
        <CustomizerForm
          fromName={fromName}
          toName={toName}
          loveNotes={loveNotes}
          onFromNameChange={setFromName}
          onToNameChange={setToName}
          onNoteChange={handleNoteChange}
          onSubmit={startProposal}
        />
      )}

      {showProposal && (
        <ProposalScreen
          fromName={fromName}
          toName={toName}
          loveNotes={loveNotes}
        />
      )}
    </div>
  );
}
