# Product Requirements Document (PRD)

## Project Overview

**Project Name:** Money Fades

**One-line Description:** A barber shop booking app where customers pay in full when they book an appointment.

**Type:** Web App (React + Vite)

---

## Base MVP

**What the MVP includes:**
- Service menu with prices (fades, beard trim, combos)
- Date and time slot picker (Mon–Sat, 9am–7pm)
- Barber selection
- Customer contact form
- **Required payment step** — booking only confirms after successful (simulated) card payment
- Confirmation screen with receipt details
- Upcoming appointments list (saved in browser storage)

**What it does NOT include (stretch goals):**
- Real Stripe/Square integration
- SMS or email reminders
- Barber admin dashboard
- Cancellation and refunds
- User accounts / login

---

## Features

### Feature 1: Service Picker
- **Description:** Display cuts with price and duration; user must pick one to continue.
- **Files:** `src/components/ServicePicker.jsx`, `src/data.js`

### Feature 2: Schedule Picker
- **Description:** Horizontal date strip + time grid; booked slots show as unavailable.
- **Files:** `src/components/DateTimePicker.jsx`, `src/bookingUtils.js`

### Feature 3: Payment Gate
- **Description:** Card form validates input and simulates processing; declined cards block booking.
- **Files:** `src/components/PaymentForm.jsx`, `src/bookingUtils.js`

---

## Success Criteria

- [x] MVP runs locally (`npm run dev`)
- [ ] At least one PR merged to the original repo
- [x] Payment is required before any appointment is saved
- [x] Features work without breaking the base app
