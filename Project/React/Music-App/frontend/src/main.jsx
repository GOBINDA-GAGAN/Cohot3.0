import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { Auth, AuthContext } from './context/AuthContext'





createRoot(document.getElementById('root')).render(
  <StrictMode>


    <AuthContext>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <RouterProvider router={router} />


    </AuthContext>
  </StrictMode>,
)
