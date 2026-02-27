import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const PageShell = () => (
  <div className="relative min-h-screen bg-grain">
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-coffee-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-coffee-200/70 blur-3xl" />
    </div>
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-12 pt-10 md:pt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
)

export default PageShell
