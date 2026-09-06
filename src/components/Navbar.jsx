import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from "../assets/logo-kikko.png"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/mobile-games", label: "Mobile Games" },
  { to: "/roblox", label: "Roblox" },
]

export default function Navbar() {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [mobileQuery, setMobileQuery] = useState("")
  const navigate = useNavigate()

  function submitMobileSearch(e) {
    e.preventDefault()
    if (mobileQuery.trim()) {
      navigate(`/?q=${encodeURIComponent(mobileQuery.trim())}`)
      setMobileSearchOpen(false)
    }
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="KikkoCodes home">
          <img src={logo} alt="Kikko Gaming logo" className="navbar__logo" />
          <span className="navbar__brandname">
            Kikko<span className="navbar__brandname-accent">Codes</span>
          </span>
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                "navbar__link" + (isActive ? " navbar__link--active" : "")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <form className="navbar__search-desktop" onSubmit={submitMobileSearch} role="search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            placeholder="Search game or code..."
            value={mobileQuery}
            onChange={(e) => setMobileQuery(e.target.value)}
            aria-label="Search game or code"
          />
        </form>

        <button
          className="navbar__search-toggle"
          onClick={() => setMobileSearchOpen((v) => !v)}
          aria-label="Toggle search"
          aria-expanded={mobileSearchOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {mobileSearchOpen && (
        <form className="navbar__search-mobile" onSubmit={submitMobileSearch} role="search">
          <div className="container">
            <input
              type="search"
              autoFocus
              placeholder="Search game or code..."
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              aria-label="Search game or code"
            />
          </div>
        </form>
      )}
    </header>
  )
}
