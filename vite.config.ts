import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  base: '/proj-vite-v3/', // Base URL for the app
  server: {
    port: 3000 // Development server port
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // Alias for src directory
    }
  },
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      input: resolve(__dirname, 'index.html') // Entry point for the build
    }
  }
});