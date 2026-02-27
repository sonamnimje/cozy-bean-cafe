import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteContent'

const linkClasses = ({ isActive }) =>
  `inline-flex items-center rounded-lg px-3 py-2.5 text-sm font-semibold focus-ring transition ${
    isActive ? 'text-coffee-800' : 'text-slate-700 hover:text-coffee-800'
  }`

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-coffee-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl text-coffee-800 focus-ring">
          <span className="rounded-full bg-coffee-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-coffee-700">
            Cozy
          </span>
          <span>The Cozy Bean Café</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClasses} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/menu" className="btn-primary hidden md:inline-flex">
            View menu
          </Link>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-nav"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-coffee-200 text-coffee-800 transition hover:border-coffee-400 hover:bg-coffee-50 hover:text-coffee-900 focus-ring md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="text-base font-semibold">{open ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-coffee-100 bg-white md:hidden" id="mobile-nav">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4" role="menu">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClasses} onClick={() => setOpen(false)} role="menuitem">
                {link.label}
              </NavLink>
            ))}
            <Link to="/menu" className="btn-primary w-full justify-center" onClick={() => setOpen(false)}>
              View menu
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
