import { ThemeProvider } from '@mui/material'
import { render } from 'preact'
import { App } from './app'
import './index.css'
import { theme } from './lib/mui/theme'

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app')!
)
