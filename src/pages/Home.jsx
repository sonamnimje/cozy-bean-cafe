import { Link } from 'react-router-dom'
import { featuredBrews } from '../data/siteContent'

const Home = () => (
  <div className="space-y-16 pb-12">
    {/* Hero */}
    <section className="fade-section relative isolate flex min-h-[85vh] items-center overflow-hidden rounded-3xl bg-white/80 px-6 py-16 shadow-card ring-1 ring-black/5 md:px-10">
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-50 via-white to-white opacity-70" />
      <div className="absolute left-[-6rem] top-[-4rem] h-72 w-72 rounded-full bg-coffee-200/40 blur-3xl" />
      <div className="absolute right-[-4rem] bottom-[-6rem] h-80 w-80 rounded-full bg-coffee-100/60 blur-3xl" />
      <div className="relative grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-coffee-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-coffee-700">
            The Cozy Bean Café · Bhopal
          </p>
          <div className="space-y-3">
            <h1 className="text-4xl leading-tight text-coffee-900 md:text-5xl">Brewing comfort in every cup.</h1>
            <p className="text-lg text-slate-700 md:text-xl">
              A warm, modern café in Arera Colony serving dialed-in espresso, slow brews, and cozy bites since 2019.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/menu" className="btn-primary">
              View Menu
            </Link>
            <Link to="/about" className="btn-secondary">
              Our story
            </Link>
          </div>
        </div>
        <div className="card-surface bg-white/90">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
              alt="Cozy café interior with coffee"
              className="h-full w-full object-cover"
              loading="lazy"
              width="1200"
              height="900"
            />
          </div>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <p className="font-semibold text-coffee-900">Neighborhood spot</p>
            <p>Soft light, comfy nooks, and beans roasted for balanced, cozy cups.</p>
          </div>
        </div>
      </div>
    </section>

    {/* About snippet */}
    <section className="fade-section grid gap-6 rounded-3xl bg-white/90 p-8 shadow-card ring-1 ring-black/5 md:grid-cols-[1.2fr_1fr] md:p-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coffee-600">About</p>
        <h2 className="text-3xl text-coffee-900">Rooted in slow, cozy mornings</h2>
        <p className="text-sm text-slate-700">
          The Cozy Bean began as a tiny cart pouring drip for early walkers. We still greet everyone by name, keep the
          music gentle, and roast in small batches so every cup tastes like care and conversation.
        </p>
      </div>
      <div className="grid gap-3 text-sm text-slate-700">
        <div className="rounded-2xl bg-coffee-50 px-4 py-3">
          <p className="font-semibold text-coffee-900">Human-made</p>
          <p>Baristas dial in each pour over—no robots, just practiced hands.</p>
        </div>
        <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-coffee-100">
          <p className="font-semibold text-coffee-900">Stay a while</p>
          <p>Power outlets, calm playlists, and no rush to turn the table.</p>
        </div>
      </div>
    </section>

    {/* Featured items */}
    <section className="fade-section space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coffee-600">Featured sips</p>
          <h2 className="text-3xl text-coffee-900">Favorites from the bar</h2>
        </div>
        <Link to="/menu" className="btn-secondary w-fit">
          See full menu
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {featuredBrews.slice(0, 4).map((item) => (
          <article
            key={item.name}
            className="group bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-white/40 flex flex-col gap-3"
          >
            <div className="w-full overflow-hidden rounded-xl">
              <img
                src={item.imageUrl}
                alt={
                  item.name === 'Cappuccino'
                    ? 'Hot cappuccino with microfoam'
                    : item.name === 'Latte'
                      ? 'Creamy latte with latte art'
                      : item.name === 'Cold Coffee'
                        ? 'Iced cold coffee in tall glass'
                        : item.name === 'Espresso'
                          ? 'Strong espresso shot in cup'
                          : item.name
                }
                className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                width="900"
                height="675"
              />
            </div>
            <div className="flex items-start justify-between">
              <p className="font-semibold text-coffee-900">{item.name}</p>
              <span className="rounded-full bg-coffee-50 px-3 py-1 text-xs font-semibold text-coffee-800">{item.price}</span>
            </div>
            <p className="text-sm text-slate-700">{item.description}</p>
          </article>
        ))}
      </div>
    </section>

    {/* Opening hours */}
    <section className="grid gap-6 rounded-3xl bg-coffee-900 px-6 py-8 text-coffee-50 shadow-card ring-1 ring-black/5 md:grid-cols-[1fr_1fr] md:px-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coffee-200">Hours</p>
        <h2 className="text-2xl text-white">Open daily in Arera Colony</h2>
        <p className="text-sm text-coffee-100">Walk in, order at the bar, or settle in with friends—no rush.</p>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm text-white md:gap-4">
        <div className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
          <p className="font-semibold">Mon – Fri</p>
          <p className="text-coffee-100">8:00 AM – 10:30 PM</p>
        </div>
        <div className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
          <p className="font-semibold">Sat – Sun</p>
          <p className="text-coffee-100">9:00 AM – 11:00 PM</p>
        </div>
        <div className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
          <p className="font-semibold">Happy hour</p>
          <p className="text-coffee-100">Weekdays, 3:00 PM – 5:00 PM</p>
        </div>
        <div className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
          <p className="font-semibold">Wi-Fi</p>
          <p className="text-coffee-100">Free, no time limits</p>
        </div>
      </div>
    </section>

    {/* Find us */}
    <section className="fade-section grid gap-6 rounded-3xl bg-white/90 p-8 shadow-card ring-1 ring-black/5 md:grid-cols-[1.1fr_1.2fr] md:p-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coffee-600">Find us</p>
        <h2 className="text-3xl text-coffee-900">See you at the café</h2>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="font-semibold text-coffee-900">The Cozy Bean Café</li>
          <li>Shop No. 12, Arera Colony</li>
          <li>Near Aura Mall</li>
          <li>Bhopal, Madhya Pradesh 462016</li>
          <li>India</li>
          <li>
            <a href="tel:+917974094733" className="text-coffee-800 underline decoration-coffee-200 underline-offset-4">
              +91 79740 94733
            </a>
          </li>
        </ul>
      </div>
      <div className="overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-coffee-100">
        <iframe
          title="Map to The Cozy Bean Café"
          className="aspect-video w-full"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.0613132155434!2d77.421!3d23.2205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4339c8a69a4b%3A0x1d90c9e8c70137f2!2sArera%20Colony%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  </div>
)

export default Home
