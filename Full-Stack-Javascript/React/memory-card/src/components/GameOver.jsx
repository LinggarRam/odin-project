export default function GameOver({
  isWin,
  currentScore,
  onRestart,
  bestScore,
}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-icon">{isWin ? "🏆" : "💀"}</div>
        <h2 className="modal-title">
          {isWin ? "Kamu Menang" : "Permainan Berakhir"}
        </h2>
        <p className="modal-message">
          {isWin
            ? "Luar biasa kamu mengklik semua pokemon tanpa pengulangan"
            : "Kamu mengklik pokemon yang sama dua kali, coba lagi!"}
        </p>
        <div className="modal-scores">
          <div className="modal-score-item">
            <span className="modal-score-label">Skor Kamu</span>
            <span
              className={`modal-score-value ${isWin ? "win-score" : "lose-score"}`}
            >
              {currentScore}
            </span>
          </div>
          <div className="modal-score-item">
            <span className="modal-score-label">Skor Terbaik</span>
            <span className="modal-score-value">{bestScore}</span>
          </div>
        </div>

        {currentScore === bestScore && currentScore > 0 && (
          <div className="new-record">🎉 Record Baru!</div>
        )}

        <button className="btn-restart" onClick={onRestart}>
          Mainkan Lagi
        </button>
      </div>
    </div>
  );
}
