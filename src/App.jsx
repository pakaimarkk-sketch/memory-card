import { cards } from "./game/cards";
import { Card } from "./components/Card";
import { ResultScreen } from "./components/ResultScreen";
import { useMemoryGame } from "./hooks/useMemoryGame";

export function App() {
  const {
    cardOrder,
    score,
    bestScore,
    gameStatus,
    handleCardClick,
    handlePlayAgain,
  } = useMemoryGame(cards, 8);

  if (gameStatus !== "playing") {
    return (
      <ResultScreen
        gameStatus={gameStatus}
        score={score}
        bestScore={bestScore}
        onPlayAgain={handlePlayAgain}
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
