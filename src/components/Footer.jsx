import { Link } from "react-router-dom"
import logo from "../assets/logo-kikko.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Kikko Gaming logo" className="footer__logo" />
          <div>
            <p className="footer__brandname">KikkoCodes</p>
            <p className="footer__tagline">Your place to find game codes and rewards.</p>
          </div>
        </div>

        <nav className="footer__links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/mobile-games">Mobile Games</Link>
          <Link to="/roblox">Roblox</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <p className="footer__copyright">© 2026 KikkoCodes. All rights reserved.</p>
      </div>
    </footer>
  )
}
