export default function CustomerForm({ customer, onChange, errors = {} }) {
  function update(field, value) {
    onChange({ ...customer, [field]: value })
  }

  return (
    <section className="panel">
      <h2 className="panel__title">Your details</h2>
      <div className="field-grid">
        <label className="field">
          <span className="field__label">Full name</span>
          <input
            className="field__input"
            value={customer.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Jordan Smith"
          />
          {errors.name && <span className="field__error">{errors.name}</span>}
        </label>
        <label className="field">
          <span className="field__label">Phone</span>
          <input
            className="field__input"
            type="tel"
            value={customer.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="(404) 555-0123"
          />
          {errors.phone && <span className="field__error">{errors.phone}</span>}
        </label>
        <label className="field field--full">
          <span className="field__label">Email</span>
          <input
            className="field__input"
            type="email"
            value={customer.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@email.com"
          />
          {errors.email && <span className="field__error">{errors.email}</span>}
        </label>
      </div>
    </section>
  )
}
