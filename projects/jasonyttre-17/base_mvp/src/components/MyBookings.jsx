import { formatDateLabel, formatPrice, formatTimeLabel } from '../bookingUtils.js'
import { BARBERS, SERVICES } from '../data.js'

export default function MyBookings({ bookings }) {
  if (bookings.length === 0) {
    return (
      <section className="panel panel--compact">
        <h2 className="panel__title">Upcoming appointments</h2>
        <p className="panel__hint">No bookings yet. Pick a service to get started.</p>
      </section>
    )
  }

  const sorted = [...bookings].sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))

  return (
    <section className="panel panel--compact">
      <h2 className="panel__title">Upcoming appointments</h2>
      <ul className="booking-list">
        {sorted.map((b) => {
          const service = SERVICES.find((s) => s.id === b.serviceId)
          const barber = BARBERS.find((br) => br.id === b.barberId)
          return (
            <li key={b.id} className="booking-row">
              <div>
                <strong>{service?.name}</strong>
                <p>
                  {formatDateLabel(b.date)} · {formatTimeLabel(b.time)} · {barber?.name}
                </p>
              </div>
              <span className="booking-row__paid">{formatPrice(b.amountPaid)}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
