import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [checker({ typescript: true }), react(), svgr({ exportAsDefault: true })],
  resolve: {
    alias: {
      '@config': resolve(__dirname, './src/config'),
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
