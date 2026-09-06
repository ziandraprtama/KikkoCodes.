import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MobileBottomNav from "./components/MobileBottomNav"
import Home from "./pages/Home"
import CategoryPage from "./pages/CategoryPage"
import GameDetail from "./pages/GameDetail"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile-games" element={<CategoryPage category="mobile" />} />
        <Route path="/roblox" element={<CategoryPage category="roblox" />} />
        <Route path="/game/mobile/:slug" element={<GameDetail category="mobile" />} />
        <Route path="/game/roblox/:slug" element={<GameDetail category="roblox" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <MobileBottomNav />
    </>
  )
}
