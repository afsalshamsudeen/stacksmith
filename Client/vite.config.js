import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],

  server: {
    allowedHosts: [
      'a53c302a4f9a.ngrok-free.app'
    ]
  }
})
