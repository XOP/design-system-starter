import { defineConfig } from 'vite';

const extensionForFormat = (format) =>
  ({ es: 'esm', cjs: 'cjs', dts: 'd.ts' })[format];

export default defineConfig({
  build: {
    lib: {
      entry: {
        css: './src/entries/css.ts',
        tokens: './src/entries/tokens.ts',
      },
      name: 'Tokens',
      fileName: (format, alias) => `${alias}.${extensionForFormat(format)}.js`,
      formats: ['es', 'cjs'],
    },

    rollupOptions: {
      output: {
        assetFileNames: 'css/tokens[extname]',
      },
    },
  },
});
