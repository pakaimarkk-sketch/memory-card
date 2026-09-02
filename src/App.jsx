import { useState } from "react";
import { StarterScreen } from "./components/StarterScreen";
import { MemoryGame } from "./components/MemoryGame";
import { startGame } from "./game/gameSelection";

export function App() {
  const [deck, setDeck] = useState([]);
  const [screen, setScreen] = useState("setup");

  async function handleStartGame(setup) {
    const newDeck = await startGame(setup);

    setDeck(newDeck);
    setScreen("game");
  }

  if (screen === "setup") {
    return <StarterScreen onStartGame={handleStartGame} />;
  }

  if (screen === "game") {
    return <MemoryGame deck={deck} />;
  }
}
