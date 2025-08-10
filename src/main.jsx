import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthPovider from './Context/AuthPovider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <AuthPovider>
      <App/>
     </AuthPovider>
    
   
  </StrictMode>,
)
