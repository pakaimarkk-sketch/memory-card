import { fetchPokemonDeck } from "../api/pokemonApi";

export const gameSelections = {
  deck: ["pokemon", "cars", "animals"],
  difficulty: ["Easy", "Medium", "Hard", "Hell"],
};

export const difficulties = {
  Easy: 6,
  Medium: 8,
  Hard: 12,
  Hell: 20,
};

export async function startGame(setup) {
  const amount = difficulties[setup.difficulty];

  return fetchPokemonDeck(amount);
}
