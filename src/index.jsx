import React from 'react'
import ReactDOM from 'react-dom/client'
import { FiltersProvider } from './context/filters.jsx'
import App from './App'
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
