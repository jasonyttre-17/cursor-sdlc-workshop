import { formatPrice } from '../bookingUtils.js'
import { BARBERS, SERVICES } from '../data.js'

const STEPS = ['Service', 'Schedule', 'Details', 'Payment']

export default function BookingSummary({ step, draft, amount }) {
  const service = SERVICES.find((s) => s.id === draft.serviceId)
  const barber = BARBERS.find((b) => b.id === draft.barberId)

  return (
    <aside className="summary">
      <h2 className="summary__title">Booking summary</h2>
      <ol className="stepper">
        {STEPS.map((label, i) => (
          <li key={label} className={`stepper__item${step === i ? ' stepper__item--active' : ''}${step > i ? ' stepper__item--done' : ''}`}>
            <span className="stepper__dot">{step > i ? '✓' : i + 1}</span>
            {label}
          </li>
        ))}
      </ol>

      <dl className="summary__details">
        <div>
          <dt>Service</dt>
          <dd>{service?.name ?? '—'}</dd>
        </div>
        <div>
          <dt>Barber</dt>
          <dd>{barber?.name ?? '—'}</dd>
        </div>
        <div>
          <dt>Date</dt>
          <dd>{draft.date ?? '—'}</dd>
        </div>
        <div>
          <dt>Time</dt>
          <dd>{draft.time ?? '—'}</dd>
        </div>
      </dl>

      <div className="summary__total">
        <span>Total due</span>
        <strong>{formatPrice(amount)}</strong>
      </div>
    </aside>
  )
}
