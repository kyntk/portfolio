import preact from '@preact/preset-vite'
import { defineConfig } from 'vite'
import viteSSR from 'vite-ssr/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteSSR(), preact()],
})
