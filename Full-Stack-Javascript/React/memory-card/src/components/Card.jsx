export default function Card({ card, onClick }) {
  const displayName = card.name.charAt(0).toUpperCase() + card.name.slice(1);

  return (
    <div
      className="card"
      onClick={() => onClick(card.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(card.id)}
      aria-label={`Klik ${displayName}`}
    >
      <div className="card-inner">
        <div className="card-image-wrapper">
          <img
            className="card-image"
            loading="lazy"
            src={card.image}
            alt={displayName}
          />
        </div>
        <div className="card-name">
          <span className="pokemon-number">
            #{String(card.id).padStart(3, "0")}
          </span>
          <span className="pokemon-name">{displayName}</span>
        </div>
      </div>
    </div>
  );
}
