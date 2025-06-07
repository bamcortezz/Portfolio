import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("b8MsefOsZOyLijncV");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
