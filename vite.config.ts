import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: '/src/pages',
      router: '/src/router',
      components: '/src/components',
      styles: path.resolve(__dirname, './src/styles/styles.scss'),
    },
  },
});
