import { ThemeProvider } from '@mui/material'
import viteSSR from 'vite-ssr/react'
import { App } from './App'
import { theme } from './lib/mui/theme'
import { routes } from './routes'
import './style/index.css'

const WrappedApp = (props: any) => (
  <ThemeProvider theme={theme}>
    <App {...props} />
  </ThemeProvider>
)

export default viteSSR(WrappedApp, { routes }, ({ url, isClient, request }) => {
  // Custom initialization hook
})
