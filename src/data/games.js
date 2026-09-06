// ============================================================
// GAME DATA
// ------------------------------------------------------------
// Untuk menambahkan game baru, cukup tambahkan object baru
// ke array `games` di bawah ini. Tidak perlu mengubah komponen
// UI mana pun — semua halaman membaca dari sini.
//
// category: "mobile" | "roblox"
// codes[].status: "active" | "expired"
// ============================================================

export const games = [
  {
    id: 1,
    slug: "blox-fruits",
    name: "Blox Fruits",
    category: "roblox",
    platform: "Roblox",
    genre: "Adventure",
    image: "/images/blox-fruits.jpg",
    description:
      "Blox Fruits adalah game petualangan bertema bajak laut di Roblox. Kumpulkan buah iblis, latih kekuatanmu, dan jelajahi lautan untuk menjadi pendekar atau bajak laut terkuat.",
    lastUpdated: "2026-09-06",
    codes: [
      { code: "STARCODEHEO", reward: "2x EXP (20 min)", status: "active" },
      { code: "KILLERV2", reward: "30 min 2x EXP", status: "active" },
      { code: "AXIORE", reward: "20 min 2x EXP", status: "active" },
      { code: "OLDWORLD22", reward: "Free Reward", status: "expired" },
    ],
    redeemGuide: [
      "Open Blox Fruits in Roblox.",
      "Tap the Twitter/X bird icon on the left side of the screen.",
      "Enter the code in the text box.",
      "Press the Enter/Confirm button.",
      "Claim your reward instantly.",
    ],
  },
  {
    id: 2,
    slug: "anime-fighters-simulator",
    name: "Anime Fighters Simulator",
    category: "roblox",
    platform: "Roblox",
    genre: "Simulator",
    image: "/images/anime-fighters-simulator.jpg",
    description:
      "Kumpulkan fighter bergaya anime, latih mereka jadi lebih kuat, dan taklukkan setiap pulau dalam simulator battle terpopuler di Roblox ini.",
    lastUpdated: "2026-09-04",
    codes: [
      { code: "SUB2KEKZS", reward: "Free Boost", status: "active" },
      { code: "LEVELRESET", reward: "Free Yen", status: "active" },
      { code: "SORRY4BUGS", reward: "Free Gems", status: "expired" },
    ],
    redeemGuide: [
      "Open Anime Fighters Simulator.",
      "Tap the code menu icon on the left side.",
      "Enter the code exactly as shown.",
      "Press Redeem to claim your reward.",
    ],
  },
  {
    id: 3,
    slug: "king-legacy",
    name: "King Legacy",
    category: "roblox",
    platform: "Roblox",
    genre: "Adventure",
    image: "/images/king-legacy.jpg",
    description:
      "Game bertema bajak laut ala One Piece. Latih kekuatan devil fruit, bergabung dengan crew, dan bertarung melawan bos-bos legendaris.",
    lastUpdated: "2026-08-30",
    codes: [
      { code: "KINGUPDATE21", reward: "2x EXP Boost", status: "active" },
      { code: "SEACROWN", reward: "Free Beli", status: "active" },
    ],
    redeemGuide: [
      "Open King Legacy.",
      "Find the Settings/Codes menu.",
      "Type in the code carefully.",
      "Press Confirm to receive your reward.",
    ],
  },
  {
    id: 4,
    slug: "pet-simulator-99",
    name: "Pet Simulator 99",
    category: "roblox",
    platform: "Roblox",
    genre: "Simulator",
    image: "/images/pet-simulator-99.jpg",
    description:
      "Kumpulkan pet-pet lucu, buka telur langka, dan naikkan kekuatanmu dalam simulator paling ramai di Roblox ini.",
    lastUpdated: "2026-09-01",
    codes: [
      { code: "PS99LAUNCH", reward: "Free Coins Boost", status: "active" },
      { code: "BIGPETS", reward: "Free Luck Boost", status: "active" },
    ],
    redeemGuide: [
      "Open Pet Simulator 99.",
      "Tap the Twitter icon on the left menu.",
      "Enter the code in the box.",
      "Press the check button to redeem.",
    ],
  },
]


// ------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------

export function getGamesByCategory(category) {
  if (!category || category === "all") return games
  return games.filter((g) => g.category === category)
}

export function getGameBySlugAndCategory(category, slug) {
  return games.find((g) => g.category === category && g.slug === slug)
}

export function getActiveCodeCount(game) {
  return game.codes.filter((c) => c.status === "active").length
}

export function getRecentlyUpdated(limit = 4) {
  return [...games]
    .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
    .slice(0, limit)
}

export function sortGames(list, sortBy) {
  const arr = [...list]
  switch (sortBy) {
    case "az":
      return arr.sort((a, b) => a.name.localeCompare(b.name))
    case "most-codes":
      return arr.sort((a, b) => getActiveCodeCount(b) - getActiveCodeCount(a))
    case "recent":
    default:
      return arr.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
  }
}
