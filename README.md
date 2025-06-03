# RoamRental — Car Rental Service App

## Author

Jeff Mbithi

## Description
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

## Setup Instructions

- Fork and clone the repository `https://github.com/Jeff-m9/RoamRental`

### Prerequisites
- Python 3.10+
- Node.js & npm
- SQLite

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

## Tech Stack

### Backend (API)
- **Python**
- **FastAPI**
- **SQLAlchemy (ORM)**
- **SQLite** 
- **Uvicorn** 

### Frontend
- **React**
- **Vite**
- **Tailwind CSS**
- **React Hook Form** + **Zod** 
- **React Hot Toast** 

---

## Usage Instructions

1. Register as a user by selecting the register option and filling in your details.

2. View available cars from the /cars endpoint.

3. Make a booking by selecting a car, clicking on the book now button, filling the form and submitting.

4. Check your bookings by entering your email on the "View Bookings" page.

5. Cancel a booking by clicking the cancel button next to your listed bookings.


## Live Site

Check out the live version: [RoamRental App](https://roam-rental-frontend.vercel.app)

## Demonstration video

Here is the video illustrating how to use the app: [RoamRental App Video](https://www.loom.com/share/1aedff42948646e897b06ae006d87018?sid=f9420d3e-7100-43d3-9fb7-cb26cd1d2664)

## Copyright

&copy; 2025 RoamRental App. All rights reserved.

## License

This project is licensed under the [MIT License](./License).
