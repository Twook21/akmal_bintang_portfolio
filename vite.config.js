import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      // Konfigurasi Tailwind langsung di sini karena tidak ada tailwind.config.js
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            // Pastikan dark didefinisikan sebagai warna
            dark: "#333333",
            primary: "#2d3e50",
            secondary: "#2a9df4",
            accent: "#ffffff", 
            light: "#f8fafc",
          },
        },
      },
    }),
  ],
})