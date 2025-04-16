import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/anand-project2/', // This is the correct syntax for setting the base URL for GitHub Pages
  server: { port: 5173 }
})
