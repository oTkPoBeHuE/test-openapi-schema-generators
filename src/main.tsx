import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/main/index.css'
import App from './pages/main/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
