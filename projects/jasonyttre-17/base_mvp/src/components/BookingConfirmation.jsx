import { formatDateLabel, formatPrice, formatTimeLabel } from '../bookingUtils.js'
import { BARBERS, SERVICES } from '../data.js'

export default function BookingConfirmation({ booking, onBookAnother }) {
  const service = SERVICES.find((s) => s.id === booking.serviceId)
  const barber = BARBERS.find((b) => b.id === booking.barberId)

  return (
    <section className="panel panel--success">
      <div className="success-icon" aria-hidden="true">
        ✓
      </div>
      <h2 className="panel__title">You&apos;re booked!</h2>
      <p className="panel__hint">Payment received. See you in the chair.</p>

      <dl className="receipt">
        <div className="receipt__row">
          <dt>Confirmation</dt>
          <dd>{booking.id}</dd>
        </div>
        <div className="receipt__row">
          <dt>Service</dt>
          <dd>{service?.name}</dd>
        </div>
        <div className="receipt__row">
          <dt>Barber</dt>
          <dd>{barber?.name}</dd>
        </div>
        <div className="receipt__row">
          <dt>When</dt>
          <dd>
            {formatDateLabel(booking.date)} at {formatTimeLabel(booking.time)}
          </dd>
        </div>
        <div className="receipt__row">
          <dt>Guest</dt>
          <dd>{booking.customer.name}</dd>
        </div>
        <div className="receipt__row receipt__row--total">
          <dt>Paid</dt>
          <dd>{formatPrice(booking.amountPaid)}</dd>
        </div>
        <div className="receipt__row">
          <dt>Transaction</dt>
          <dd className="receipt__mono">{booking.transactionId}</dd>
        </div>
      </dl>

      <button type="button" className="btn btn--ghost" onClick={onBookAnother}>
        Book another appointment
      </button>
    </section>
  )
}
