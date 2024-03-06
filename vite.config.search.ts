/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: './bsdd_search',
    base: './',
    server: {
      port: 3000,
    },
    build: {
      outDir: '../dist/bsdd_search',
      // assetsDir: '',
      lib: {
        entry: 'src/main.tsx',
        name: 'BsddSearch',
        fileName: 'react-bsdd-search',
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'bootstrap'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            bootstrap: 'bootstrap',
          },
        },
      },
    },
    plugins: [react()],
    preview: {
      open: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
    define: {
      // Catch for 'Uncaught ReferenceError: process is not defined'
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
      'process.env.APP_MODE': JSON.stringify(mode),
    },
  };
});
