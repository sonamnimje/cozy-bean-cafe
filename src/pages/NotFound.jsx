import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coffee-600">404</p>
    <h1 className="text-3xl text-coffee-900">We could not find that page</h1>
    <p className="max-w-md text-sm text-slate-700">
      The link may be outdated. Let us guide you back to the cafe.
    </p>
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Link to="/" className="btn-primary">
        Go home
      </Link>
      <Link to="/menu" className="btn-secondary">
        View menu
      </Link>
    </div>
  </div>
)

export default NotFound
