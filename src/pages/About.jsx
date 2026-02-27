const About = () => (
  <div className="space-y-12 pb-12">
    {/* Brand story */}
    <section className="fade-section space-y-3 rounded-3xl bg-white/90 p-8 shadow-card ring-1 ring-black/5 md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coffee-600">Our story</p>
      <h1 className="text-3xl text-coffee-900">A café built for lingering</h1>
      <p className="text-sm leading-relaxed text-slate-700">
        The Cozy Bean Café began in Arera Colony as a tiny cart brewing for morning walkers. We still greet by name,
        hand-write tasting notes, and slow down enough to steam milk just right—no corporate script, just coffee and
        conversation.
      </p>
    </section>

    {/* Values */}
    <section className="fade-section space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coffee-600">Values</p>
          <h2 className="text-3xl text-coffee-900">What keeps us grounded</h2>
        </div>
        <p className="text-sm text-slate-700">Three promises we brew into every day.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card-surface">
          <p className="font-semibold text-coffee-900">Fresh ingredients</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            We bake and prep in small batches, partner with local makers, and keep flavors bright and simple.
          </p>
        </div>
        <div className="card-surface">
          <p className="font-semibold text-coffee-900">Community focused</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            A space for neighbors to meet, artists to showcase, and friends to chat without a rush.
          </p>
        </div>
        <div className="card-surface">
          <p className="font-semibold text-coffee-900">Slow brewing</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            We dial in every pour over, honor the process, and let patience make the cup sweeter.
          </p>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="fade-section space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coffee-600">Team</p>
          <h2 className="text-3xl text-coffee-900">Meet the humans behind the bar</h2>
        </div>
        <p className="text-sm text-slate-700">Kind people, steady hands, and lots of latte art practice.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          {
            name: 'Mara',
            role: 'Head Roaster',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
          },
          {
            name: 'Jon',
            role: 'Cafe Lead',
            imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
          },
          {
            name: 'Priya',
            role: 'Pastry + Events',
            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
          },
        ].map((person) => (
          <div key={person.name} className="card-surface flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full shadow-sm ring-2 ring-coffee-100">
              <img
                src={person.imageUrl}
                alt={person.name}
                className="h-full w-full object-cover"
                loading="lazy"
                width="160"
                height="160"
              />
            </div>
            <div>
              <p className="font-semibold text-coffee-900">{person.name}</p>
              <p className="text-sm text-slate-700">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
)

export default About
