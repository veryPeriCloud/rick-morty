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
        devOptions : { 
          Enabled : true
        },
        manifest: {
          name: "Rick and Morty",
          short_name: "Rick&Morty",
          start_url: "/",
          display: "standalone",
          background_color: "#222222",
          theme_color: "#222222",
          orientation: "portrait-primary",
          icons: [
            {
              src: "/icon-48-48.png",
              type: "image/png",
              sizes: "48x48"
            },
        
            {
              src: "/icon-72-72.png",
              type: "image/png",
              sizes: "72x72"
            },
            {
              src: "/icon-96-96.png",
              type: "image/png",
              sizes: "96x96"
            },
            {
              src: "/icon-128-128.png",
              type: "image/png",
              sizes: "128x128"
            },
            {
              src: "/icon-144-144.png",
              type: "image/png",
              sizes: "144x144"
            },
            {
              src: "/icon-192-192.png",
              type: "image/png",
              sizes: "192x192"
            },
            {
              src: "/icon-256-256.png",
              type: "image/png",
              sizes: "256x256"
            },
            {
              src: "/icon-512-512.png",
              type: "image/png",
              sizes: "512x512"
            },
            {
              src: "/maskable_icon_x192",
              type: "image/png",
              sizes: "192x192",
              purpose: "maskable"
            }
          ]
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