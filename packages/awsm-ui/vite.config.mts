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
      name: '@awsm/ui',
      fileName: (format, alias) => `${alias}.${extensionForFormat(format)}.js`,
      formats: ['es', 'cjs'],
    },

    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
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
    dts(),
    vanillaExtractPlugin({
      identifiers: ({ hash }) => `awsm_${hash}`,
    }),
  ],
});
