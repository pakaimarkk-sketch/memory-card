import { useState } from "react";
import { createPackFromDeck, shuffleCards } from "../game/deck";

export function useMemoryGame(deck, amount) {
  const [cardOrder, setCardOrder] = useState(() =>
    createPackFromDeck(deck, amount),
  );

  const [clickedIds, setClickedIds] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");

  function handleCardClick(id) {
    if (clickedIds.includes(id)) {
      setGameStatus("lost");
      return;
    }

    const nextClickedIds = [...clickedIds, id];

    setClickedIds(nextClickedIds);

    if (nextClickedIds.length > bestScore) {
      setBestScore(nextClickedIds.length);
    }

    if (nextClickedIds.length === cardOrder.length) {
      setGameStatus("won");
      return;
    }

    setCardOrder((prevOrder) => shuffleCards(prevOrder));
  }

  function handlePlayAgain() {
    setClickedIds([]);
    setCardOrder(createPackFromDeck(deck, amount));
    setGameStatus("playing");
  }

  return {
    cardOrder,
    score: clickedIds.length,
    bestScore,
    gameStatus,
    handleCardClick,
    handlePlayAgain,
  };
}
