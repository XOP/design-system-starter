import { resolve } from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

const extensionForFormat = (format) =>
  ({ es: 'esm', cjs: 'cjs', dts: 'd.ts' })[format];

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, './entries/index.ts'),
        css: resolve(__dirname, './entries/css.ts'),
      },
      name: '@ds-starter/fonts',
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
        assetFileNames: 'css/fonts.css',
      },
    },
  },

  plugins: [react()],
});
