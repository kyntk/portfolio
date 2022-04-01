import { ThemeProvider } from '@mui/material'
import { render } from 'preact'
import { App } from './app'
import { theme } from './lib/mui/theme'
import './style/index.css'

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app')!
)
