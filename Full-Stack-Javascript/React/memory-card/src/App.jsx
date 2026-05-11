import { useState, useEffect, useCallback } from "react";
import usePokemon from "./hooks/usePokemon";
import Scoreboard from "./components/Scoreboard";

const suffleArray = (arr) => {
  const suffled = [...arr];
  for (let i = suffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [suffled[i], suffled[j]] = [suffled[j], suffled[i]];
  }
  return suffled;
};

const CARD_COUNT = 12;

function App() {
  const { cards, isLoading, error } = usePokemon(12);

  if (isLoading) return <p>Memuat kartu pokemon...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p>Memuat {cards.length} pokemon</p>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>{card.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
