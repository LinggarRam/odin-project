import { useState, useMemo, useCallback } from "react";
import usePokemon from "./hooks/usePokemon";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import GameOver from "./components/GameOver";
import "./styles/App.css";

const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const CARD_COUNT = 12;

export default function App() {
  const { cards, isLoading, error } = usePokemon(CARD_COUNT);

  const [clickedIds, setClickedIds] = useState(new Set());
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [shuffleKey, setShuffleKey] = useState(0);

  const displayedCards = useMemo(() => {
    return cards.length > 0 ? shuffleArray(cards) : [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, shuffleKey]);

  const handleCardClick = useCallback(
    (id) => {
      if (isGameOver) return;

      if (clickedIds.has(id)) {
        setIsGameOver(true);
        setIsWin(false);
      } else {
        const newClickedIds = new Set(clickedIds);
        newClickedIds.add(id);
        const newScore = currentScore + 1;

        setClickedIds(newClickedIds);
        setCurrentScore(newScore);
        
        if (newScore > bestScore) {
          setBestScore(newScore);
        }

        if (newClickedIds.size === CARD_COUNT) {
          setIsGameOver(true);
          setIsWin(true);
        } else {
          setShuffleKey(prev => prev + 1);
        }
      }
    },
    [clickedIds, currentScore, bestScore, isGameOver],
  );

  const handleRestart = useCallback(() => {
    setClickedIds(new Set());
    setCurrentScore(0);
    setIsGameOver(false);
    setIsWin(false);
    setShuffleKey(prev => prev + 1);
  }, []);

  if (isLoading) {
    return (
      <div className="app-loading">
        <div className="loading-pokeball">
          <div className="pokeball"></div>
        </div>
        <p>Memuat Pokemon...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-error">
        <p>⚠️ Gagal memuat pokemon. Cek internet kamu dan refesh</p>
        <p className="error-detail">{error}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Scoreboard
        currentScore={currentScore}
        bestScore={bestScore}
        total={CARD_COUNT}
      />

      <main className="cards-container">
        {displayedCards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </main>

      {isGameOver && (
        <GameOver
          isWin={isWin}
          currentScore={currentScore}
          bestScore={bestScore}
          onRestart={handleRestart}
        />
      )}

      <footer className="app-footer">
        <p>
          &copy; Mei 2026 - <span>Linggar Ramadhan</span>
        </p>
      </footer>
    </div>
  );
}
