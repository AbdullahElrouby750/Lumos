import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      // use custom ESM PostCSS config
      config: './postcss.config.mjs',
    },
  },
  server: {
    open: true,
  },
});
