import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: [
      '0a88-2403-a080-1c-980f-5480-78a7-c89a-fb2f.ngrok-free.app'
    ]
  }
})
