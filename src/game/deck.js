export function shuffleCards(cards) {
  return [...cards].sort(() => Math.random() - 0.5);
}

export function createPackFromDeck(deck, amount) {
  const shuffledDeck = shuffleCards(deck);

  return shuffledDeck.slice(0, amount);
}
