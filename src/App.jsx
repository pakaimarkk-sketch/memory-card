import { useState } from "react";
import { createPackFromDeck } from "./game/createPackFromDeck";
import { cards } from "./game/cards";
import { Card } from "./components/card";

export function App() {
  const [cardOrder, setCardOrder] = useState(() =>
    createPackFromDeck(cards, 8),
  );

  const [clickedIds, setClickedIds] = useState([]);

  function handleCardClick(id) {
    console.log(id);
  }

  return (
    <main>
      {cardOrder.map((card) => (
        <Card key={card.id} card={card} onCardClick={handleCardClick} />
      ))}
    </main>
  );
}
