# Money Fades — Barber Booking App

A frontend-only React app for **Money Fades** barbershop. Customers pick a service, choose a time, and **must pay in full before the appointment is confirmed**.

## Run locally

```bash
cd base_mvp
npm install
npm run dev
```

Open [http://localhost:5180](http://localhost:5180) in your browser.

## How it works

1. **Service** — Pick a cut (prices shown upfront).
2. **Schedule** — Choose barber, date, and an open time slot.
3. **Details** — Enter name, phone, and email.
4. **Payment** — Card form must succeed before booking is saved.

Bookings are stored in your browser (`localStorage`). This is a workshop demo — no real payment processor or server.

### Demo payment tips

- Use any 16-digit card number (e.g. `4242 4242 4242 4242`).
- Expiry must be a future `MM/YY`.
- Numbers ending in `0000` simulate a declined card.

## Project structure

- `src/data.js` — services, barbers, shop hours
- `src/bookingUtils.js` — slots, validation, simulated payment
- `src/components/` — one component per booking step
