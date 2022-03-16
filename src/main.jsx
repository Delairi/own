import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import Theme from '../src/Theme/Theme'
import Global from '../src/Theme/Global'
import App from './App'
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <Global></Global>
    <App />
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
)
