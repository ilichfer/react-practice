import React, { StrictMode } from 'react'
import { ReactDOm } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'


const root = ReactDOm.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <App/>
 </React.Fragment>
)
