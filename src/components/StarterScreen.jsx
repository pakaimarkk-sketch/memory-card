import { useState } from "react";
import { cardSets, difficulties } from "../game/gameSelection";

export function StarterScreen({ onStartGame }) {
  const [setupStep, setSetupStep] = useState("deck");

  const [setup, setSetup] = useState({
    deck: null,
    difficulty: null,
  });

  function handleSelect(type, value) {
    setSetup((prevSetup) => ({
      ...prevSetup,
      [type]: value,
    }));

    if (type === "deck") {
      setSetupStep("difficulty");
    }

    if (type === "difficulty") {
      onStartGame(nextSetup);
    }
  }

  const options =
    setupStep === "deck" ? Object.keys(cardSets) : Object.keys(difficulties);

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
