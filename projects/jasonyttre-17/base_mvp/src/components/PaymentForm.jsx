import { useState } from 'react'
import { formatPrice } from '../bookingUtils.js'

function formatCardNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 16)
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
}

function formatExpiry(value) {
  const digits = value.replace(/\D/g, '').slice(0, 4)
  if (digits.length <= 2) return digits
  return `${digits.slice(0, 2)}/${digits.slice(2)}`
}

export default function PaymentForm({ amount, onPay, processing, serverErrors = {} }) {
  const [card, setCard] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  })
  const [localErrors, setLocalErrors] = useState({})

  const errors = { ...localErrors, ...serverErrors }

  function update(field, value) {
    setCard((prev) => ({ ...prev, [field]: value }))
    setLocalErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onPay(card, setLocalErrors)
  }

  return (
    <section className="panel panel--payment">
      <h2 className="panel__title">Pay to confirm</h2>
      <p className="panel__hint">
        Your appointment is not booked until payment goes through. No pay, no chair.
      </p>

      <div className="payment-due">
        <span>Amount due today</span>
        <strong>{formatPrice(amount)}</strong>
      </div>

      <form className="payment-form" onSubmit={handleSubmit}>
        <label className="field">
          <span className="field__label">Name on card</span>
          <input
            className="field__input"
            value={card.name}
            onChange={(e) => update('name', e.target.value)}
            autoComplete="cc-name"
            disabled={processing}
          />
          {errors.name && <span className="field__error">{errors.name}</span>}
        </label>

        <label className="field">
          <span className="field__label">Card number</span>
          <input
            className="field__input field__input--mono"
            inputMode="numeric"
            value={card.number}
            onChange={(e) => update('number', formatCardNumber(e.target.value))}
            placeholder="4242 4242 4242 4242"
            autoComplete="cc-number"
            disabled={processing}
          />
          {errors.number && <span className="field__error">{errors.number}</span>}
        </label>

        <div className="field-grid">
          <label className="field">
            <span className="field__label">Expiry</span>
            <input
              className="field__input field__input--mono"
              inputMode="numeric"
              value={card.expiry}
              onChange={(e) => update('expiry', formatExpiry(e.target.value))}
              placeholder="MM/YY"
              autoComplete="cc-exp"
              disabled={processing}
            />
            {errors.expiry && <span className="field__error">{errors.expiry}</span>}
          </label>
          <label className="field">
            <span className="field__label">CVC</span>
            <input
              className="field__input field__input--mono"
              inputMode="numeric"
              value={card.cvc}
              onChange={(e) => update('cvc', e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="123"
              autoComplete="cc-csc"
              disabled={processing}
            />
            {errors.cvc && <span className="field__error">{errors.cvc}</span>}
          </label>
        </div>

        <button type="submit" className="btn btn--primary btn--full" disabled={processing}>
          {processing ? 'Processing payment…' : `Pay ${formatPrice(amount)} & book`}
        </button>

        <p className="payment-note">
          Demo mode: use any valid-looking card. Numbers ending in 0000 are declined.
        </p>
      </form>
    </section>
  )
}
