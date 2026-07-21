import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './routes/AppRoute'
import { AuthContextProvider } from './context/AuthContext'
import { Toaster } from 'react-hot-toast'





createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthContextProvider>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <AppRoute />
    </AuthContextProvider>

  </StrictMode>,
)
