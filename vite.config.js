import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: process.env.NODE_ENV === 'development', // ✅ Sourcemaps seulement en dev
    minify: 'esbuild', // ✅ Minification optimisée
    cssCodeSplit: true, // ✅ Sépare le CSS
  },
  server: {
    port: 3000,
    host: true, // ✅ Utile pour accéder depuis le réseau local
  },
  preview: {
    port: 4173,
    host: true,
  }
})
