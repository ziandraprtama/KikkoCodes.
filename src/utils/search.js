// Realtime search matcher.
// Matches against: game name, genre, platform, each code, each reward.

export function searchGames(games, rawQuery) {
  const query = rawQuery.trim().toLowerCase()
  if (!query) return games

  return games.filter((game) => {
    const haystacks = [
      game.name,
      game.genre,
      game.platform,
      game.category,
      ...game.codes.map((c) => c.code),
      ...game.codes.map((c) => c.reward),
    ]
      .join(" ")
      .toLowerCase()

    return haystacks.includes(query)
  })
}
