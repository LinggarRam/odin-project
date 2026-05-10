import { useState, useEffect } from "react";

const usePokemon = (count = 12) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const randomIds = [];
        while (randomIds.length < count) {
          const id = Math.floor(Math.random() * 151) + 1;
          if (!randomIds.includes(id)) randomIds.push(id);
        }

        const promises = randomIds.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
            if (!res.ok) throw new Error("Failed to fetch pokemon");
            return res.json();
          }),
        );

        const results = await Promise.all(promises);

        const pokemonCards = results.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          image:
            pokemon.sprites.other["official-artwork"].front_default ||
            pokemon.sprites.front_default,
        }));

        setCards(pokemonCards);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching pokemon", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, [count]);

  return { cards, isLoading, error };
};

export default usePokemon;
