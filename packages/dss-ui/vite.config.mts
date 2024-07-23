/// <reference types="vitest" />

import path from 'node:path';

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';

const extensionForFormat = (format) =>
  ({ es: 'esm', cjs: 'cjs', dts: 'd.ts' })[format];

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: '@ds-starter/ui',
      fileName: (format, alias) => {
        const extFormat = extensionForFormat(format);

        // renaming node_modules used internally
        const altAlias = alias.replace(/node_modules\/.pnpm\//g, 'external/');

        return `${altAlias}.${extFormat}.js`;
      },

      formats: ['es', 'cjs'],
    },

    rollupOptions: {
      external: ['react', 'react-dom'],

      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        compact: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'css/styles[extname]',
      },
    },
  },

  plugins: [
    react(),
    dts({
      tsconfigPath: path.resolve(__dirname, 'tsconfig.build.json'),
    }),
    vanillaExtractPlugin({
      identifiers: ({ hash }) => `dss_${hash}`,
    }),
  ],

  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    include: ['./src/**/*.spec.tsx'],
    globals: true,
  },
});
