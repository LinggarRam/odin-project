import { useState, useEffect, useCallback } from "react";
import usePokemon from "./hooks/usePokemon";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import GameOver from "./components/GameOver";

const suffleArray = (arr) => {
  const suffled = [...arr];
  for (let i = suffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [suffled[i], suffled[j]] = [suffled[j], suffled[i]];
  }
  return suffled;
};

const CARD_COUNT = 12;

export default function App() {
  const { cards, isLoading, error } = usePokemon(CARD_COUNT);

  return (
    <div>
      <Scoreboard />
      <Card />
      <GameOver />
    </div>
  );
}
