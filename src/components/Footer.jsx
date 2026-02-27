import { Link } from 'react-router-dom'
import { contactDetails, navLinks } from '../data/siteContent'

const Footer = () => (
  <footer className="border-t border-coffee-100 bg-white/90">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between">
      <div className="max-w-md space-y-3">
        <p className="font-display text-2xl text-coffee-800">The Cozy Bean Café</p>
        <p className="text-sm text-slate-700">
          Brewing comfort in every cup since 2019. A warm corner in Arera Colony for coffee, conversations, and slow
          afternoons.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-8 sm:flex-row sm:justify-end sm:gap-12">
        <div>
          <p className="text-sm font-semibold text-coffee-800">Visit</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {contactDetails.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li>{contactDetails.hours}</li>
            <li>
              <a href="tel:+917974094733" className="text-coffee-800 underline decoration-coffee-200 underline-offset-4">
                +91 79740 94733
              </a>
            </li>
            <li>{contactDetails.email}</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-coffee-800">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition hover:text-coffee-800">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-coffee-100 bg-coffee-900/95 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-coffee-100">
      Brewed with care — {new Date().getFullYear()}
    </div>
  </footer>
)

export default Footer
