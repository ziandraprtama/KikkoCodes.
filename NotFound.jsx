import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <main className="page-main">
      <div className="container not-found">
        <p className="eyebrow-label">404</p>
        <h1 className="h-display not-found__title">Page not found</h1>
        <p className="not-found__text">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
