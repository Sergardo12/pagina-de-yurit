import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './Routes.jsx'
import './index.css'
import { AuthProvider } from '../src/utils/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  </StrictMode>,
)
