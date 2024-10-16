import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import WebPath from './Routes/WebPath'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={WebPath}></RouterProvider>
  </StrictMode>,
)
