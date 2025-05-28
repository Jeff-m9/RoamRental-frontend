import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element:<>Display all products</>
  },
  {
    path: '/add-product',
    element: <>ALL</>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
