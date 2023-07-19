import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    ViteImageOptimizer({
      includePublic: true,
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
    }),
  ],
  resolve: {
    alias: {
      data: '/src/data',
      pages: '/src/pages',
      utils: '/src/utils',
      router: '/src/router',
      assets: '/src/assets',
      components: '/src/components',
      styles: path.resolve(__dirname, './src/styles/styles.scss'),
    },
  },
});
