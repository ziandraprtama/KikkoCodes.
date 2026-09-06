import { Link } from "react-router-dom"
import { getActiveCodeCount } from "../data/games"

export default function GameCard({ game }) {
  const activeCount = getActiveCodeCount(game)

  return (
    <Link to={`/game/${game.category}/${game.slug}`} className="game-card">
      <div className="game-card__image-wrap">
        <img src={game.image} alt={game.name} className="game-card__image" loading="lazy" />
        {game.category === "roblox" && <span className="badge badge--roblox">ROBLOX</span>}
      </div>
      <div className="game-card__body">
        <h3 className="game-card__name">{game.name}</h3>
        <p className="game-card__meta">
          {game.platform} · {game.genre}
        </p>
        <p className="game-card__codes">
          🎁 {activeCount} Active Code{activeCount !== 1 ? "s" : ""}
        </p>
        <span className="btn btn-primary btn-block game-card__cta">View Codes</span>
      </div>
    </Link>
  )
}
