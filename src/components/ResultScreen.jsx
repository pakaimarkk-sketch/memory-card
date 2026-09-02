import "../style/resultScreen.css";

export function ResultScreen({
  gameStatus,
  score,
  bestScore,
  onPlayAgain,
  onChangeSetup,
}) {
  return (
    <section className="result-screen">
      <div className="result-panel">
        <h1>{gameStatus === "won" ? "You won!" : "You lost!"}</h1>

        <div className="score-board">
          <div className="score">
            <span>Score</span>
            <strong>{score}</strong>
          </div>

          <div className="score">
            <span>Best</span>
            <strong>{bestScore}</strong>
          </div>
        </div>

        <div className="result-actions">
          <button
            className="result-button result-button-primary"
            onClick={onPlayAgain}
          >
            Play Again
          </button>

          <button
            className="result-button result-button-secondary"
            onClick={onChangeSetup}
          >
            Change Difficulty
          </button>
        </div>
      </div>
    </section>
  );
}
