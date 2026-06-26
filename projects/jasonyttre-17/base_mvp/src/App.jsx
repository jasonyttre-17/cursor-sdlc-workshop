import { useMemo, useState } from 'react'
import { loadBookings, saveBooking, simulatePayment } from './bookingUtils.js'
import { SERVICES } from './data.js'
import BookingConfirmation from './components/BookingConfirmation.jsx'
import BookingSummary from './components/BookingSummary.jsx'
import CustomerForm from './components/CustomerForm.jsx'
import DateTimePicker from './components/DateTimePicker.jsx'
import Header from './components/Header.jsx'
import MyBookings from './components/MyBookings.jsx'
import PaymentForm from './components/PaymentForm.jsx'
import ServicePicker from './components/ServicePicker.jsx'
import './App.css'

const emptyCustomer = { name: '', phone: '', email: '' }

function validateCustomer(customer) {
  const errors = {}
  if (!customer.name.trim()) errors.name = 'Name is required'
  if (!customer.phone.trim()) errors.phone = 'Phone is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) {
    errors.email = 'Valid email is required'
  }
  return errors
}

export default function App() {
  const [step, setStep] = useState(0)
  const [bookings, setBookings] = useState(() => loadBookings())
  const [confirmedBooking, setConfirmedBooking] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [paymentErrors, setPaymentErrors] = useState({})
  const [customerErrors, setCustomerErrors] = useState({})

  const [draft, setDraft] = useState({
    serviceId: null,
    barberId: 'any',
    date: null,
    time: null,
    customer: emptyCustomer,
  })

  const service = useMemo(
    () => SERVICES.find((s) => s.id === draft.serviceId),
    [draft.serviceId],
  )
  const amount = service?.price ?? 0

  function resetFlow() {
    setStep(0)
    setConfirmedBooking(null)
    setPaymentErrors({})
    setCustomerErrors({})
    setDraft({
      serviceId: null,
      barberId: 'any',
      date: null,
      time: null,
      customer: emptyCustomer,
    })
  }

  function goNext() {
    if (step === 2) {
      const errors = validateCustomer(draft.customer)
      if (Object.keys(errors).length > 0) {
        setCustomerErrors(errors)
        return
      }
      setCustomerErrors({})
    }
    setStep((s) => Math.min(s + 1, 3))
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0))
  }

  async function handlePay(card, setLocalErrors) {
    setProcessing(true)
    setPaymentErrors({})
    try {
      const payment = await simulatePayment(card)
      const booking = {
        id: `MF-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
        ...draft,
        amountPaid: amount,
        transactionId: payment.transactionId,
        paidAt: payment.paidAt,
      }
      saveBooking(booking)
      setBookings(loadBookings())
      setConfirmedBooking(booking)
    } catch (err) {
      if (typeof setLocalErrors === 'function') setLocalErrors(err)
      setPaymentErrors(err)
    } finally {
      setProcessing(false)
    }
  }

  const canContinue =
    (step === 0 && draft.serviceId) ||
    (step === 1 && draft.date && draft.time) ||
    step === 2

  return (
    <div className="app">
      <Header />

      <main className="layout">
        <div className="layout__main">
          {confirmedBooking ? (
            <BookingConfirmation booking={confirmedBooking} onBookAnother={resetFlow} />
          ) : (
            <>
              {step === 0 && (
                <ServicePicker
                  selectedId={draft.serviceId}
                  onSelect={(id) => setDraft((d) => ({ ...d, serviceId: id }))}
                />
              )}
              {step === 1 && (
                <DateTimePicker
                  date={draft.date}
                  time={draft.time}
                  barberId={draft.barberId}
                  bookings={bookings}
                  onDateChange={(date) => setDraft((d) => ({ ...d, date, time: null }))}
                  onTimeChange={(time) => setDraft((d) => ({ ...d, time }))}
                  onBarberChange={(barberId) => setDraft((d) => ({ ...d, barberId }))}
                />
              )}
              {step === 2 && (
                <CustomerForm
                  customer={draft.customer}
                  errors={customerErrors}
                  onChange={(customer) => setDraft((d) => ({ ...d, customer }))}
                />
              )}
              {step === 3 && (
                <PaymentForm
                  amount={amount}
                  processing={processing}
                  serverErrors={paymentErrors}
                  onPay={handlePay}
                />
              )}

              {step < 3 && (
                <div className="nav-buttons">
                  {step > 0 && (
                    <button type="button" className="btn btn--ghost" onClick={goBack}>
                      Back
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn--primary"
                    disabled={!canContinue}
                    onClick={goNext}
                  >
                    {step === 2 ? 'Continue to payment' : 'Continue'}
                  </button>
                </div>
              )}
            </>
          )}

          <MyBookings bookings={bookings} />
        </div>

        {!confirmedBooking && <BookingSummary step={step} draft={draft} amount={amount} />}
      </main>
    </div>
  )
}
