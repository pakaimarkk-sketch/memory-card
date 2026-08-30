export function Card({ card, onCardClick }) {
  return <button onClick={() => onCardClick(card.id)}>{card.name}</button>;
}
