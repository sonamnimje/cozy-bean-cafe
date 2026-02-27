import coldCoffeeImage from '../assets/coldcoffee.png'
import latteImage from '../assets/latte.png'

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const cafePerks = [
  {
    title: 'Seasonal beans',
    description: 'Single-origin roasts rotate with tasting notes and brew tips at the counter.',
  },
  {
    title: 'Brewed to order',
    description: 'Dialed-in pour overs, espresso, and slow brews made one cup at a time.',
  },
  {
    title: 'Neighborhood feel',
    description: 'Soft lighting, community table, and playlists crafted for slow mornings.',
  },
]

export const featuredBrews = [
  {
    name: 'Cappuccino',
    price: '₹180',
    description: 'Double shot espresso with silky microfoam, balanced and comforting.',
    tags: ['classic'],
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Latte',
    price: '₹190',
    description: 'Espresso with steamed milk, gentle sweetness, and soft foam art.',
    tags: ['milky'],
    imageUrl: latteImage,
  },
  {
    name: 'Cold Coffee',
    price: '₹220',
    description: 'Shaken with ice and a hint of sweetness for Bhopal afternoons.',
    tags: ['iced'],
    imageUrl: coldCoffeeImage,
  },
  {
    name: 'Espresso',
    price: '₹140',
    description: 'A bright, syrupy double shot pulled to highlight origin notes.',
    tags: ['bold'],
    imageUrl: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=1200&q=80',
  },
]

export const contactDetails = {
  addressLines: [
    'The Cozy Bean Café',
    'Shop No. 12, Arera Colony',
    'Near Aura Mall',
    'Bhopal, Madhya Pradesh 462016',
    'India',
  ],
  hours: 'Mon – Fri: 8:00 AM – 10:30 PM · Sat – Sun: 9:00 AM – 11:00 PM',
  phone: '+91 79740 94733',
  email: 'hello@cozybeancafe.com',
}
