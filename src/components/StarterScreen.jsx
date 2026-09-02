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
      <p className="game-description">
        Test your memory by clicking each Pokémon only once. The cards shuffle
        after every selection, so keep track of which Pokémon you've already
        chosen. <br />
        <strong> Click the same Pokémon twice and the game is over. </strong>
        Choose a difficulty and try to reach the highest score!
      </p>
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
