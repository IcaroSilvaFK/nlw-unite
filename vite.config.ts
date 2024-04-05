import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import biomePlugin from 'vite-plugin-biome'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), biomePlugin({
    mode: 'lint',
    files: '.',
    applyFixes: true
  })],
  server: {
    port: 3000
  }

})
