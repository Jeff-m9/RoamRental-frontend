import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './Pages/Home.jsx'
import { ContactUs } from './Pages/Contact-Us.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element:<HomePage />
  },
  {
    path: '/Contact-Us',
    element: <ContactUs />
  }
])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes} />
  </StrictMode>
);
