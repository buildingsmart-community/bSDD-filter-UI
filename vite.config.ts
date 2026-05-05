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
      proxy: {
        // Route bSDD API calls through proxy to bypass localhost CORS restriction.
        // The production bSDD API (api.bsdd.buildingsmart.org) does not allow
        // localhost in its CORS whitelist. The test environment does.
        '/bsdd-api': {
          target: 'https://api.bsdd.buildingsmart.org',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/bsdd-api/, ''),
        },
      },
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
      setupFiles: ['./src/test/setup.ts'],
    },
    define: {
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
      'process.env.APP_MODE': JSON.stringify(mode),
    },
  };
});