import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const pathSrc = path.resolve(__dirname, 'src');

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  plugins: [vue(), UnoCSS()]
});
