import { Card } from "./Card";
import { ResultScreen } from "./ResultScreen";
import { useMemoryGame } from "../hooks/useMemoryGame";
import "../style/memoryGame.css";

export function MemoryGame({ deck, onChangeSetup }) {
  const {
    cardOrder,
    score,
    bestScore,
    gameStatus,
    handleCardClick,
    handlePlayAgain,
  } = useMemoryGame(deck);

  const amount = deck.length;

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
    <main className="game-board">
      <div className={`game-board game-board-${amount}`}>
        {cardOrder.map((card) => (
          <Card key={card.id} card={card} onCardClick={handleCardClick} />
        ))}
      </div>
    </main>
  );
}
