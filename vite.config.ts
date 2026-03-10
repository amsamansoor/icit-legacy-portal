// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            // Hum '/api' ko target kar rahe hain kyunke Swagger mein yahi prefix hai
            '/api': {
                target: 'https://localhost:5001',
                changeOrigin: true,
                secure: false, // HTTPS localhost ke liye zaroori hai
            }
        }
    }
})