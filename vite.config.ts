/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
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
      port: 3000,
      open: '/bsdd_selection/index.html',
      // open: '/bsdd_search/index.html',
    },
    build: {
      target: 'esnext',
      external: ['react', 'react-dom'],
      outDir: './dist',
      // lib: {
      //   entry: 'src/lib/index.ts',
      //   name: 'bSDD',
      //   fileName: (format) => `[name]-${format}.js`,
      //   formats: ['es'],
      // },
      rollupOptions: {
        input: {
          bsdd_selection: 'bsdd_selection/index.html',
          bsdd_search: 'bsdd_search/index.html',
          bsdd_search_settings: 'bsdd_search_settings/index.html',
          main: 'index.html',
        },
        // output: {
        //   entryFileNames: '[name].js',
        //   chunkFileNames: '[name].js',
        //   assetFileNames: '[name].[ext]',
        //   manualChunks: undefined,
        // },
      },
    },
    plugins: [
      react(),
      dts(
        {
        include: ['src/lib/**/*'],
        outDir: 'dist',
        entryRoot: 'src/lib',
      }
    ),
    ],
    preview: {
      open: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      // setupFiles: './src/setupTests.ts',
    },
    define: {
      // Catch for 'Uncaught ReferenceError: process is not defined'
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
      'process.env.APP_MODE': JSON.stringify(mode),
    },
  };
});