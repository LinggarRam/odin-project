import "../styles/Scoreboard.css";

export default function Scoreboard({ currentScore, bestScore, total }) {
  return (
    <div className="scoreboard">
      <div className="scoreboard-left">
        <h1 className="game-title">
          <span className="game-icon">🧠</span>
          Memory Card
        </h1>
        <p className="game-desc">
          Klik setiap pokemon satu kali - jangan diulang-ulang!
        </p>
      </div>
      <div className="scoreboard-right">
        <div className="score-item">
          <span className="score-label">Skor</span>
          <span className="score-value current">{currentScore}</span>
        </div>
        <div className="score-divider">|</div>
        <div className="score-item">
          <span className="score-label">Skor Terbaik</span>
          <span className="score-value best">{bestScore}</span>
        </div>
        <div className="score-item progress-item">
          <span className="score-label">Progress</span>
          <span className="score-value">
            {currentScore} / {total}
          </span>
        </div>
      </div>
    </div>
  );
}
