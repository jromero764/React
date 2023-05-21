import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp.jsx'

import './styles.css'
import ContactForm from './components/Formulario.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <GifExpertApp />
  </React.StrictMode>,
)
