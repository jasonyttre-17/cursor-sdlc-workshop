import { formatDateLabel, formatTimeLabel, generateTimeSlots, getUpcomingDates, isSlotTaken } from '../bookingUtils.js'
import { BARBERS } from '../data.js'

export default function DateTimePicker({
  date,
  time,
  barberId,
  bookings,
  onDateChange,
  onTimeChange,
  onBarberChange,
}) {
  const dates = getUpcomingDates()
  const slots = date ? generateTimeSlots(date) : []

  return (
    <section className="panel">
      <h2 className="panel__title">Pick date & time</h2>

      <label className="field">
        <span className="field__label">Barber</span>
        <select className="field__input" value={barberId} onChange={(e) => onBarberChange(e.target.value)}>
          {BARBERS.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name} — {b.specialty}
            </option>
          ))}
        </select>
      </label>

      <div className="date-strip" role="listbox" aria-label="Available dates">
        {dates.map((d) => (
          <button
            key={d}
            type="button"
            role="option"
            aria-selected={date === d}
            className={`date-chip${date === d ? ' date-chip--selected' : ''}`}
            onClick={() => onDateChange(d)}
          >
            {formatDateLabel(d).replace(/,.*$/, '').slice(0, 3)}
            <span>{d.slice(8)}</span>
          </button>
        ))}
      </div>

      {date && (
        <div className="time-grid">
          {slots.length === 0 ? (
            <p className="panel__hint">No slots left today. Pick another date.</p>
          ) : (
            slots.map((slot) => {
              const taken = isSlotTaken(date, slot, barberId, bookings)
              return (
                <button
                  key={slot}
                  type="button"
                  disabled={taken}
                  className={`time-slot${time === slot ? ' time-slot--selected' : ''}${taken ? ' time-slot--taken' : ''}`}
                  onClick={() => onTimeChange(slot)}
                >
                  {formatTimeLabel(slot)}
                  {taken && <span className="time-slot__badge">Booked</span>}
                </button>
              )
            })
          )}
        </div>
      )}
    </section>
  )
}
