# RoamRental — Car Rental Service App

RoamRental is a web application that allows users to browse available cars, register, and make car bookings. Users can also view and cancel their bookings using their email address.

---

## Features

- View a list of available cars
- Register new users
- Book a car for a number of days
- Retrieve bookings by email
- Cancel existing bookings
- Built with FastAPI (backend) and React (frontend)

---

## Tech Stack

### Backend (API)
- **Python**
- **FastAPI**
- **SQLAlchemy (ORM)**
- **SQLite** (can be swapped with PostgreSQL or others)
- **Uvicorn** (for local dev server)

### Frontend
- **React**
- **Vite**
- **Tailwind CSS**
- **React Hook Form** + **Zod** (form validation)
- **React Hot Toast** (notifications)

---

## Setup Instructions

### Prerequisites
- Python 3.10+
- Node.js & npm
- SQLite (or any SQL DB of choice)

---

### Backend Setup

1. **Navigate to backend folder:**
   cd backend

2. **Install dependancies:**
   pipenv install fastapi sqlalchemy alembic

3. **Run the server**
   fastapi run dev

### Frontend Setup

1. **Navigate to backend folder:**
   cd backend

2. **Install dependancies:**
   npm install

3. **Run the server**
   npm run dev

---

## Usage Instructions

1. Register as a user by selecting the register option and filling in your details.

2. View available cars from the /cars endpoint.

3. Make a booking by selecting a car, clicking on the book now button, filling the form and submitting.

4. Check your bookings by entering your email on the "View Bookings" page.

5. Cancel a booking by clicking the cancel button next to your listed bookings.


## Live Site

Check out the live version: [RoamRental App](https://roam-rental-frontend.vercel.app)

## Copyright

&copy; 2025 RoamRental App. All rights reserved.
