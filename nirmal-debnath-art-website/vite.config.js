import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For username.github.io/repo deployments set base to '/repo/'; for username.github.io use '/'
export default defineConfig({
  plugins: [react()],
  base: '/', // change to '/your-repo/' if deploying to a project pages site
})