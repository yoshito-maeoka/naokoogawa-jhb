import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  define: { 'process.env': {} },
  build: {
    outDir: './docs'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/tools/breakpoints.scss";`,
      },
    },
  },
});
