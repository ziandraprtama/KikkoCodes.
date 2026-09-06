import { useEffect } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import CodeItem from "../components/CodeItem"
import { getGameBySlugAndCategory } from "../data/games"

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function GameDetail({ category }) {
  const { slug } = useParams()
  const game = getGameBySlugAndCategory(category, slug)

  useEffect(() => {
    if (game) {
      document.title = `KikkoCodes - ${game.name} Codes`
    }
  }, [game])

  if (!game) {
    return <Navigate to="/" replace />
  }

  const activeCodes = game.codes.filter((c) => c.status === "active")
  const expiredCodes = game.codes.filter((c) => c.status === "expired")
  const isRoblox = game.category === "roblox"

  return (
    <main className="page-main">
      <div className="container game-detail">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={isRoblox ? "/roblox" : "/mobile-games"}>
            {isRoblox ? "Roblox" : "Mobile Games"}
          </Link>
          <span>/</span>
          <span className="breadcrumb__current">{game.name}</span>
        </nav>

        <div className="game-detail__hero">
          <div className="game-detail__image-wrap">
            <img src={game.image} alt={game.name} className="game-detail__image" />
            {isRoblox && <span className="badge badge--roblox">ROBLOX</span>}
          </div>

          <div className="game-detail__info">
            <h1 className="h-display game-detail__title">{game.name}</h1>
            <div className="game-detail__tags">
              <span className="tag">{game.platform}</span>
              <span className="tag">{game.genre}</span>
            </div>
            <p className="game-detail__updated">
              Last Updated: <strong>{formatDate(game.lastUpdated)}</strong>
            </p>
            <p className="game-detail__description">{game.description}</p>
          </div>
        </div>

        <section className="code-section">
          <h2 className="h-display code-section__title">
            Active Codes
            <span className="code-section__count">{activeCodes.length}</span>
          </h2>
          {activeCodes.length > 0 ? (
            <div className="code-list">
              {activeCodes.map((c) => (
                <CodeItem key={c.code} code={c.code} reward={c.reward} status={c.status} />
              ))}
            </div>
          ) : (
            <p className="empty-state empty-state--small">No active codes right now.</p>
          )}
        </section>

        {expiredCodes.length > 0 && (
          <section className="code-section">
            <h2 className="h-display code-section__title code-section__title--expired">
              Expired Codes
              <span className="code-section__count">{expiredCodes.length}</span>
            </h2>
            <div className="code-list">
              {expiredCodes.map((c) => (
                <CodeItem key={c.code} code={c.code} reward={c.reward} status={c.status} />
              ))}
            </div>
          </section>
        )}

        <section className="redeem-guide">
          <h2 className="h-display redeem-guide__title">How to Redeem</h2>
          <ol className="redeem-guide__list">
            {game.redeemGuide.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  )
}
