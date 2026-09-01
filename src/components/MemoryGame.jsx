import { Card } from "./components/Card";
import { ResultScreen } from "./components/ResultScreen";
import { useMemoryGame } from "./hooks/useMemoryGame";
import { cardSets, difficulties } from "../game/gameSelection";

export function MemoryGame({ setup, onChangeSetup }) {
  const deck = cardSets[setup.deck];
  const amount = difficulties[setup.difficulty];

  const {
    cardOrder,
    score,
    bestScore,
    gameStatus,
    handleCardClick,
    handlePlayAgain,
  } = useMemoryGame(deck, amount);

  if (gameStatus !== "playing") {
    return (
      <ResultScreen
        gameStatus={gameStatus}
        score={score}
        bestScore={bestScore}
        onPlayAgain={handlePlayAgain}
        onChangeSetup={onChangeSetup}
      />
    );
  }

  return (
    <main>
      {cardOrder.map((card) => (
        <Card key={card.id} card={card} onCardClick={handleCardClick} />
      ))}
    </main>
  );
}
