// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

import node from '@astrojs/node';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    icon(),
    react(),
    // Menambahkan konfigurasi agar Keystatic tidak meminta adapter server
    keystatic(),
    markdoc(),
  ],

  // Pastikan output tetap static (default di Astro 5 yang mendukung hybrid)
  output: 'static',

  server: {
    host: true,
    port: 3000
  },

  adapter: node({
    mode: 'standalone',
  }),
});