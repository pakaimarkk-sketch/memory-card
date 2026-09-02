import { Card } from "./Card";
import { ResultScreen } from "./ResultScreen";
import { gameSelections, difficulties } from "../game/gameSelection";
import { useMemoryGame } from "../hooks/useMemoryGame";

export function MemoryGame({ deck, onChangeSetup }) {
  const {
    cardOrder,
    score,
    bestScore,
    gameStatus,
    handleCardClick,
    handlePlayAgain,
  } = useMemoryGame(deck);

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
