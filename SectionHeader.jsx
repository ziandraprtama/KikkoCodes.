import { Link } from "react-router-dom"

export default function SectionHeader({ title, viewAllTo }) {
  return (
    <div className="section-header">
      <h2 className="section-header__title h-display">{title}</h2>
      {viewAllTo && (
        <Link to={viewAllTo} className="section-header__viewall">
          View All →
        </Link>
      )}
    </div>
  )
}
