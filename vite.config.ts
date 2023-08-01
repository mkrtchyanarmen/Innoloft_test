import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [checker({ typescript: true }), react(), svgr({ exportAsDefault: true })],
  resolve: {
    alias: {
      '@layout': resolve(__dirname, './src/layout'),
      '@assets': resolve(__dirname, './src/assets'),
      '@app': resolve(__dirname, './src/app'),
      '@pages': resolve(__dirname, './src/pages'),
      '@components': resolve(__dirname, './src/components'),
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
