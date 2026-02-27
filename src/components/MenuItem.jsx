const tagStyles = {
  V: 'bg-coffee-50 text-coffee-800',
  VE: 'bg-coffee-900 text-white',
  GF: 'bg-white text-coffee-900 ring-1 ring-coffee-200',
}

const MenuItem = ({ name, description, price, tag }) => (
  <div className="flex flex-col gap-2 rounded-2xl bg-white/90 p-4 shadow-card ring-1 ring-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-5">
    <div className="flex items-start justify-between gap-3">
      <div className="space-y-1">
        <p className="font-semibold text-coffee-900">{name}</p>
        <p className="text-sm leading-relaxed text-slate-700 sm:text-[15px]">{description}</p>
      </div>
      <div className="shrink-0 text-right text-sm font-semibold text-coffee-900">{price}</div>
    </div>
    {tag ? (
      <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${tagStyles[tag] ?? 'bg-coffee-100 text-coffee-800'}`}>
        {tag}
      </span>
    ) : null}
  </div>
)

export default MenuItem
