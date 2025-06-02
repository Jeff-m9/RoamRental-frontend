import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/Home.jsx";
import { CarDetailsPage } from "./Pages/Car-Details-Page.jsx";
import { AddCar } from "./Pages/Add-car.jsx";
import { Toaster } from "react-hot-toast";
import { UserRegistration } from "./Pages/User-registration.jsx";
import { BookingsPage } from "./Pages/Booking.jsx";
import { ViewBookings } from "./Pages/View-bookings.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cars/:carId",
    element: <CarDetailsPage />,
  },
  {
    path: "/add-car",
    element: <AddCar />,
  },
  {
    path: "/user-registration",
    element: <UserRegistration/>
  },
  {
    path: "/bookings",
    element: <BookingsPage />
  },
  {
    path: "/view-bookings",
    element: <ViewBookings />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Toaster />
    <RouterProvider router={routes} />
  </StrictMode>
);
