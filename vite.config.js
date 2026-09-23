import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works regardless of the GitHub Pages repo name
// (served from https://<user>.github.io/<repo>/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
