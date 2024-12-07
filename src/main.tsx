import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MainPapge } from './pages/main-page/main-page'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPapge />
  </StrictMode>,
)
