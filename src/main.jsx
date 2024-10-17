import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import WebPath from './Routes/WebPath'
import { Toaster } from 'react-hot-toast';
import ContextContainer from './AllContext/ContextContainer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextContainer>
      <RouterProvider router={WebPath}>
      </RouterProvider>
      <Toaster />
    </ContextContainer>

  </StrictMode>,
)
