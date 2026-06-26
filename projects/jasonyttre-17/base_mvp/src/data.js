export const SHOP = {
  name: 'Money Fades',
  tagline: 'Premium cuts. Pay when you book.',
  address: '742 Barber Lane, Atlanta, GA',
  phone: '(404) 555-FADE',
}

export const SERVICES = [
  {
    id: 'classic-fade',
    name: 'Classic Fade',
    price: 35,
    duration: 30,
    description: 'Clean taper fade with scissors on top.',
  },
  {
    id: 'skin-fade',
    name: 'Skin Fade',
    price: 45,
    duration: 45,
    description: 'Zero-guard blend with razor-sharp lineup.',
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    price: 20,
    duration: 20,
    description: 'Shape, line, and hot towel finish.',
  },
  {
    id: 'fade-beard',
    name: 'Fade + Beard',
    price: 55,
    duration: 60,
    description: 'Full fade plus beard sculpt — our signature combo.',
  },
  {
    id: 'kids-cut',
    name: 'Kids Cut',
    price: 25,
    duration: 25,
    description: 'Under 12. Patient service, same sharp standards.',
  },
]

export const BARBERS = [
  { id: 'marcus', name: 'Marcus', specialty: 'Skin fades & designs' },
  { id: 'jay', name: 'Jay', specialty: 'Classic cuts & lineups' },
  { id: 'dre', name: 'Dre', specialty: 'Beards & hot towel' },
  { id: 'any', name: 'Any barber', specialty: 'First available slot' },
]

export const SHOP_HOURS = { open: 9, close: 19 }
export const SLOT_MINUTES = 30

export const BOOKINGS_KEY = 'money_fades_bookings'
