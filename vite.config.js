import { defineConfig } from 'vite'

// ⚠️ Usa SIEMPRE el mismo nombre que tu repositorio en GitHub
export default defineConfig({
  base: '/portfolio-eduardo/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
