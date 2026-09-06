import { NavLink } from "react-router-dom"

const items = [
  {
    to: "/",
    label: "Home",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 11.5L12 4l8 7.5M6 10v9a1 1 0 001 1h3v-6h4v6h3a1 1 0 001-1v-9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={active ? "currentColor" : "none"}
          fillOpacity={active ? 0.12 : 0}
        />
      </svg>
    ),
  },
  {
    to: "/mobile-games",
    label: "Mobile",
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: "/roblox",
    label: "Roblox",
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="4.5"
          y="7.5"
          width="12"
          height="12"
          rx="1.5"
          transform="rotate(-15 10.5 13.5)"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
]

export default function MobileBottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) =>
            "bottom-nav__item" + (isActive ? " bottom-nav__item--active" : "")
          }
        >
          {({ isActive }) => (
            <>
              {item.icon(isActive)}
              <span>{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
