import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ItemContextProvider from './context/itemcontext.jsx'
import Router from './components/routes.jsx';
import './index.css'




createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ItemContextProvider>
          <Router/>
      </ItemContextProvider>
  </StrictMode>,
)
