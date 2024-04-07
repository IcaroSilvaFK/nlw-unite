import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import biomePlugin from 'vite-plugin-biome'
/*
 biomePlugin({
    mode: 'lint',
    files: '.',
    applyFixes: true
  })
*/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }

})
