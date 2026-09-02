import { useState } from "react";
import { gameSelections } from "../game/gameSelection";

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
    <section>
      <h1>Select {setupStep}</h1>

      {gameSelections[setupStep].map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => handleSelect(setupStep, option)}
        >
          {option}
        </button>
      ))}
    </section>
  );
}
