import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import SectionHeader from "../components/SectionHeader"
import GameCard from "../components/GameCard"
import { games, getRecentlyUpdated, getGamesByCategory } from "../data/games"
import { searchGames } from "../utils/search"

export default function Home() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")

  useEffect(() => {
    document.title = "KikkoCodes - Find the Latest Game Codes"
  }, [])

  const results = useMemo(() => (query ? searchGames(games, query) : []), [query])
  const recentlyUpdated = useMemo(() => getRecentlyUpdated(4), [])
  const robloxGames = useMemo(() => getGamesByCategory("roblox").slice(0, 4), [])
  const mobileGames = useMemo(() => getGamesByCategory("mobile").slice(0, 4), [])

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <p className="eyebrow-label">KIKKO GAMING</p>
          <h1 className="hero__title h-display">KikkoCodes</h1>
          <p className="hero__tagline">Find the latest game codes.</p>
          <p className="hero__subtext">
            Discover gift codes and redeem codes for your favorite games.
          </p>

          <div className="hero__search">
            <SearchBar value={query} onChange={setQuery} />
          </div>
        </div>
      </section>

      <main className="page-main">
        <div className="container">
          {query ? (
            <section className="search-results">
              <h2 className="section-header__title h-display" style={{ marginBottom: 16 }}>
                Results for “{query}”
              </h2>
              {results.length > 0 ? (
                <div className="game-grid">
                  {results.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>
              ) : (
                <p className="empty-state">No games found.</p>
              )}
            </section>
          ) : (
            <>
              <section className="home-section">
                <SectionHeader title="Recently Updated" viewAllTo="/mobile-games" />
                <div className="game-grid">
                  {recentlyUpdated.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>
              </section>

              <section className="home-section">
                <SectionHeader title="Roblox Codes" viewAllTo="/roblox" />
                <div className="game-grid">
                  {robloxGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>
              </section>

              <section className="home-section">
                <SectionHeader title="Mobile Game Codes" viewAllTo="/mobile-games" />
                <div className="game-grid">
                  {mobileGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </main>
    </>
  )
}
