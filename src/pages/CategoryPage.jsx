import { useEffect, useMemo, useState } from "react"
import SearchBar from "../components/SearchBar"
import GameCard from "../components/GameCard"
import { getGamesByCategory, sortGames } from "../data/games"
import { searchGames } from "../utils/search"

const sortOptions = [
  { value: "recent", label: "Recently Updated" },
  { value: "az", label: "A-Z" },
  { value: "most-codes", label: "Most Codes" },
]

export default function CategoryPage({ category }) {
  const [query, setQuery] = useState("")
  const [sortBy, setSortBy] = useState("recent")

  const isRoblox = category === "roblox"
  const pageTitle = isRoblox ? "Roblox" : "Mobile Games"

  useEffect(() => {
    document.title = `KikkoCodes - ${pageTitle} Codes`
  }, [pageTitle])

  const filteredGames = useMemo(() => {
    const base = getGamesByCategory(category)
    const searched = query ? searchGames(base, query) : base
    return sortGames(searched, sortBy)
  }, [category, query, sortBy])

  return (
    <main className="page-main">
      <div className="container category-page">
        <header className="category-page__header">
          <p className="eyebrow-label">{isRoblox ? "ROBLOX" : "MOBILE"}</p>
          <h1 className="h-display category-page__title">{pageTitle} Codes</h1>
        </header>

        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder={`Search ${pageTitle.toLowerCase()}...`}
        />

        <div className="category-page__controls">
          <span className="category-page__count">
            {filteredGames.length} game{filteredGames.length !== 1 ? "s" : ""}
          </span>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort games"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {filteredGames.length > 0 ? (
          <div className="game-grid">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <p className="empty-state">No games found.</p>
        )}
      </div>
    </main>
  )
}
