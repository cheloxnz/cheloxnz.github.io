import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Repo "cheloxnz.github.io" => se sirve en la raíz, base '/'.
// Si lo publicás en otro repo (ej. /website-portfolio/), cambiá base a '/website-portfolio/'.
export default defineConfig({
  plugins: [vue()],
  base: '/',
})
