import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/Home.jsx";
import { ContactUs } from "./Pages/Contact-Us.jsx";
import { CarDetailsPage } from "./Pages/Car-Details-Page.jsx";
import { AddCar } from "./Pages/Add-car.jsx";
import { Toaster } from "react-hot-toast";

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
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Toaster position="bottom-right" />
    <RouterProvider router={routes} />
  </StrictMode>
);
