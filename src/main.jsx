import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // 👈 Ajoutez cette ligne
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
