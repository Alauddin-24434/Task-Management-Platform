import React from 'react'
import ReactDOM from 'react-dom/client'

import { Toaster } from 'react-hot-toast'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes'
import AuthProvider from './Provider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />

       
      </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>,
)
