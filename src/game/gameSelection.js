import { fetchPokemonDeck } from "../api/pokemonApi";

export const gameSelections = {
  deck: ["pokemon", "cars", "animals"],
  difficulty: ["easy", "medium", "hard", "hell"],
};

export const difficulties = {
  easy: 6,
  medium: 8,
  hard: 12,
  hell: 20,
};

export async function startGame(setup) {
  const amount = difficulties[setup.difficulty];

  return fetchPokemonDeck(amount);
}
