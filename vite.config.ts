/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: './',
    base: '../',
    server: {
      port: 3000,
    },
    build: {
      target: 'esnext',
      external: ['react', 'react-dom'],
      outDir: './dist',
      // lib: {
      //   entry: {
      //     'bsdd_selection/module_bsdd_selection': 'src/lib/bsdd_selection/main.tsx',
      //     'bsdd_search/module_bsdd_search': 'src/lib/bsdd_search/main.tsx',
      //   },
      //   name: 'bSDD',
      //   fileName: (format) => `[name]-${format}.js`,
      // },
      rollupOptions: {
        input: {
          bsdd_selection: 'bsdd_selection/index.html',
          bsdd_search: 'bsdd_search/index.html',
          main: 'index.html',
          // bsdd_selection_app: 'src/mainBsddSelection.tsx',
          // bsdd_search_app: 'src/mainBsddSearch.tsx',
          // main_app: 'src/main.tsx',
        },
        // output: {
        //   entryFileNames: '[name].js',
        //   chunkFileNames: '[name].js',
        //   assetFileNames: '[name].[ext]',
        // },
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
