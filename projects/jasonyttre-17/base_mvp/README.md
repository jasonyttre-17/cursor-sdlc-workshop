# Money Fades — Barber Booking App

A frontend-only React app for **Money Fades** barbershop. Customers pick a service, choose a time, and **must pay in full before the appointment is confirmed**.

## Run locally

```bash
cd base_mvp
npm install
npm run dev
```

Open [http://localhost:5180](http://localhost:5180) in your browser.

## Deploy on Vercel

1. In Vercel → **Add New Project** → import `jasonyttre-17/cursor-sdlc-workshop`.
2. Set **Root Directory** to `projects/jasonyttre-17/base_mvp` (required — the app is not at the repo root).
3. Framework should auto-detect **Vite**. Build: `npm run build`, output: `dist`.
4. Deploy. Vercel gives you a live URL like `your-project.vercel.app`.

Use branch `cursor/money-fades-booking-acc1` (or `main` after the PR merges) as the production branch.

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
