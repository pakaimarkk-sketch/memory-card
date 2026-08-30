export function createPackFromDeck(deck, amount) {
  const shuffledDeck = [...deck].sort(() => Math.random() - 0.5);

  return shuffledDeck.slice(0, amount);
}
