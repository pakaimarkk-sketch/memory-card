import { useState } from "react";
import { gameSelections } from "../game/gameSelection";
import "../style/starterScreen.css";

export function StarterScreen({ onStartGame }) {
  const [setupStep, setSetupStep] = useState("difficulty");

  const [setup, setSetup] = useState({
    deck: null,
    difficulty: null,
  });

  function handleSelect(type, value) {
    const nextSetup = {
      ...setup,
      [type]: value,
    };

    setSetup(nextSetup);

    if (type === "difficulty") {
      onStartGame(nextSetup);
    }
  }

  return (
    <section className="starter-screen">
      <h1 className="difficulty-header">Select {setupStep}</h1>
      <div className="difficulty-options">
        {gameSelections[setupStep].map((option) => (
          <button
            className="difficulty-button"
            key={option}
            type="button"
            onClick={() => handleSelect(setupStep, option)}
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
}
