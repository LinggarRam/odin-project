import usePokemon from "./hooks/usePokemon";

function App() {
  const { cards, isLoading, error } = usePokemon(12);

  if (isLoading) return <p>Loading is pokemon...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p>Loaded {cards.length} pokemon</p>
      <ul>
        {cards.map(card => (
          <li key={card.id}>{ card.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
