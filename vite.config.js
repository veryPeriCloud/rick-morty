import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "tailwindcss";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        'src': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      VitePWA({
        injectRegister: 'auto',
        workbox : { 
          clientClaim : true , 
          skipWaiting : true
         },
        devOptions : { 
          Enabled : true
         } 
      })
    ],
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  };
});