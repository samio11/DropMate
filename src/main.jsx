import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import WebPath from './Routes/WebPath'
import { Toaster } from 'react-hot-toast';
import ContextContainer from './AllContext/ContextContainer'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
      <ContextContainer>
        <RouterProvider router={WebPath}>
        </RouterProvider>
        <Toaster />
      </ContextContainer>
    </QueryClientProvider>

  </StrictMode>,
)
