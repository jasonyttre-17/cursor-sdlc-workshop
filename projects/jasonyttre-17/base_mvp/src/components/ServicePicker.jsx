import { formatPrice } from '../bookingUtils.js'
import { SERVICES } from '../data.js'

export default function ServicePicker({ selectedId, onSelect }) {
  return (
    <section className="panel">
      <h2 className="panel__title">Choose your service</h2>
      <p className="panel__hint">Full payment is required to hold your appointment.</p>
      <ul className="service-list">
        {SERVICES.map((service) => (
          <li key={service.id}>
            <button
              type="button"
              className={`service-card${selectedId === service.id ? ' service-card--selected' : ''}`}
              onClick={() => onSelect(service.id)}
            >
              <div className="service-card__top">
                <span className="service-card__name">{service.name}</span>
                <span className="service-card__price">{formatPrice(service.price)}</span>
              </div>
              <p className="service-card__desc">{service.description}</p>
              <span className="service-card__duration">{service.duration} min</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
