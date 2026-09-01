export function ResultScreen({
  gameStatus,
  score,
  bestScore,
  onPlayAgain,
  onChangeSetup,
}) {
  return (
    <section>
      <h1>{gameStatus === "won" ? "You won!" : "You lost!"}</h1>

      <p>Score: {score}</p>
      <p>Best score: {bestScore}</p>

      <button onClick={onPlayAgain}>Play again</button>
      <button onClick={onChangeSetup}>Change setup</button>
    </section>
  );
}
