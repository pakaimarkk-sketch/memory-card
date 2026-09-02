export function Card({ card, onCardClick }) {
  return (
    <button type="button" className="card" onClick={() => onCardClick(card.id)}>
      <img src={card.image} alt={card.name} className="card-image" />

      <span className="card-name">{card.name}</span>
    </button>
  );
}
