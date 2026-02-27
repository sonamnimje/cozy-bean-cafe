import { contactDetails } from '../data/siteContent'

const hours = [
  { label: 'Mon – Fri', value: '8:00 AM – 10:30 PM' },
  { label: 'Sat – Sun', value: '9:00 AM – 11:00 PM' },
  { label: 'Happy hour', value: 'Weekdays, 3:00 PM – 5:00 PM' },
]

const Contact = () => (
  <div className="space-y-10 pb-12">
    <header className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coffee-600">Visit us</p>
      <h1 className="text-3xl text-coffee-900">Plan your stop</h1>
      <p className="text-sm text-slate-700">
        Questions about seating, beans, or collaborations? Reach out—we reply quickly and with a smile.
      </p>
    </header>

    <section className="fade-section grid gap-6 rounded-3xl bg-white/90 p-8 shadow-card ring-1 ring-black/5 md:grid-cols-[1.1fr_1fr] md:p-10">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-coffee-900">Contact details</h2>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="font-semibold text-coffee-900">{contactDetails.addressLines[0]}</li>
          <li>{contactDetails.addressLines[1]}</li>
          <li>{contactDetails.addressLines[2]}</li>
          <li>{contactDetails.addressLines[3]}</li>
          <li>{contactDetails.addressLines[4]}</li>
          <li>
            <a href="tel:+917974094733" className="text-coffee-800 underline decoration-coffee-200 underline-offset-4">
              +91 79740 94733
            </a>
          </li>
          <li><span className="font-semibold text-coffee-800">Email:</span> {contactDetails.email}</li>
        </ul>
        <div className="grid gap-3 sm:grid-cols-3">
          {hours.map((row) => (
            <div key={row.label} className="rounded-2xl bg-coffee-50 px-4 py-3 text-sm text-slate-800 ring-1 ring-coffee-100">
              <p className="font-semibold text-coffee-900">{row.label}</p>
              <p>{row.value}</p>
            </div>
          ))}
        </div>
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

    <section className="fade-section grid gap-6 rounded-3xl bg-white/90 p-8 shadow-card ring-1 ring-black/5 md:grid-cols-2 md:p-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coffee-600">Events & groups</p>
        <h2 className="text-2xl text-coffee-900">Host a meetup or tasting</h2>
        <p className="text-sm text-slate-700">
          Reserve our community table or book the cafe after hours. We tailor the drinks and pastries to your group.
        </p>
      </div>
      <form className="grid gap-3" aria-label="Enquiry form">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm font-semibold text-coffee-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className="focus-ring rounded-xl border border-coffee-100 bg-white px-3 py-2 text-sm text-coffee-900 outline-none placeholder:text-slate-400"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-semibold text-coffee-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="focus-ring rounded-xl border border-coffee-100 bg-white px-3 py-2 text-sm text-coffee-900 outline-none placeholder:text-slate-400"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="message" className="text-sm font-semibold text-coffee-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Tell us about your visit or event"
            className="focus-ring rounded-xl border border-coffee-100 bg-white px-3 py-2 text-sm text-coffee-900 outline-none placeholder:text-slate-400"
          />
        </div>
        <button type="button" className="btn-primary w-fit">
          Send enquiry
        </button>
      </form>
    </section>
  </div>
)

export default Contact
