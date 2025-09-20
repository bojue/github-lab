import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
  ? '/github-lab/'  // 生产环境（如GitHub Pages）
  : '/',   
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 确保这行配置正确
    }
  }
})
