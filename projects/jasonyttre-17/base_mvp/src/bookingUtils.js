import { BOOKINGS_KEY, SHOP_HOURS, SLOT_MINUTES } from './data.js'

export function formatPrice(cents) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents)
}

export function formatDateLabel(isoDate) {
  return new Date(isoDate + 'T12:00:00').toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
}

export function formatTimeLabel(time24) {
  const [h, m] = time24.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 || 12
  return `${hour12}:${String(m).padStart(2, '0')} ${period}`
}

export function getUpcomingDates(count = 14) {
  const dates = []
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  for (let i = 0; i < count; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    if (d.getDay() === 0) continue
    dates.push(d.toISOString().slice(0, 10))
  }
  return dates
}

export function generateTimeSlots(dateIso) {
  const slots = []
  const now = new Date()
  const isToday = dateIso === now.toISOString().slice(0, 10)

  for (let hour = SHOP_HOURS.open; hour < SHOP_HOURS.close; hour++) {
    for (let min = 0; min < 60; min += SLOT_MINUTES) {
      const time = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`
      if (isToday) {
        const slotDate = new Date(`${dateIso}T${time}:00`)
        if (slotDate <= now) continue
      }
      slots.push(time)
    }
  }
  return slots
}

export function loadBookings() {
  try {
    const raw = localStorage.getItem(BOOKINGS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveBooking(booking) {
  const bookings = loadBookings()
  bookings.push(booking)
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings))
}

export function isSlotTaken(date, time, barberId, bookings) {
  return bookings.some(
    (b) => b.date === date && b.time === time && (b.barberId === barberId || barberId === 'any' || b.barberId === 'any'),
  )
}

export function validateCard({ number, expiry, cvc, name }) {
  const errors = {}
  const digits = number.replace(/\s/g, '')

  if (!/^\d{16}$/.test(digits)) {
    errors.number = 'Enter a 16-digit card number'
  }
  if (!name.trim()) {
    errors.name = 'Name on card is required'
  }
  if (!/^\d{3,4}$/.test(cvc)) {
    errors.cvc = 'Enter a valid CVC'
  }

  const match = expiry.match(/^(\d{2})\/(\d{2})$/)
  if (!match) {
    errors.expiry = 'Use MM/YY format'
  } else {
    const month = Number(match[1])
    const year = 2000 + Number(match[2])
    const expiryDate = new Date(year, month, 0)
    if (month < 1 || month > 12 || expiryDate < new Date()) {
      errors.expiry = 'Card is expired or invalid'
    }
  }

  return errors
}

export function simulatePayment(card) {
  return new Promise((resolve, reject) => {
    const errors = validateCard(card)
    if (Object.keys(errors).length > 0) {
      reject(errors)
      return
    }

    setTimeout(() => {
      if (card.number.replace(/\s/g, '').endsWith('0000')) {
        reject({ number: 'Card declined — try a different number' })
        return
      }
      resolve({
        transactionId: `MF-${Date.now().toString(36).toUpperCase()}`,
        paidAt: new Date().toISOString(),
      })
    }, 1400)
  })
}
