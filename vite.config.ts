/// <reference types="vite/client" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = process.env.BASE_PATH || './';

  return {
    root: './',
    base,
    server: {
      open: '/index.html',
    },
    build: {
      target: 'esnext',
      outDir: './dist',
      rollupOptions: {
        input: {
          bsdd_selection: 'bsdd_selection/index.html',
          bsdd_search: 'bsdd_search/index.html',
          bsdd_search_settings: 'bsdd_search_settings/index.html',
          main: 'index.html',
        },
        external: ['react', 'react-dom'],
      },
    },
    plugins: [
      react(),
      dts({
        include: ['src/lib/**/*'],
        outDir: 'dist',
        entryRoot: 'src/lib',
      }),
    ],
    preview: {
      open: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
    define: {
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
      'process.env.APP_MODE': JSON.stringify(mode),
    },
  };
});