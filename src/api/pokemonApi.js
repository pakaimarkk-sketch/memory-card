function getRandomPokemonIds(amount) {
  const ids = new Set();

  while (ids.size < amount) {
    const randomId = Math.floor(Math.random() * 151) + 1;
    ids.add(randomId);
  }

  return [...ids];
}
async function fetchPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch pokemon ${id}: ${response.status}`);
  }

  const data = await response.json();

  return data;
}

function normalizePokemon(pokemon) {
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
  };
}

export async function fetchPokemonDeck(amount) {
  const ids = getRandomPokemonIds(amount);

  const requests = ids.map((id) => fetchPokemon(id));

  const pokemon = await Promise.all(requests);

  return pokemon.map(normalizePokemon);
}
