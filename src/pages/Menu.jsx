import MenuItem from '../components/MenuItem'
import { menuCategories } from '../data/menu'

const Menu = () => (
  <div className="space-y-10">
    <header className="fade-section space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coffee-600">Menu</p>
      <h1 className="text-3xl text-coffee-900">Cozy sips and bites</h1>
      <p className="text-sm text-slate-700">
        Scan by category, spot dietary tags quickly, and ask the barista for seasonal specials. Prices are right-aligned for easy reading.
      </p>
    </header>

    <div className="space-y-8">
      {menuCategories.map((category) => (
        <section key={category.title} className="fade-section space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-coffee-900">{category.title}</h2>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-coffee-600">Arera Colony · Fresh daily</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {category.items.map((item) => (
              <MenuItem key={item.name} {...item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
)

export default Menu
