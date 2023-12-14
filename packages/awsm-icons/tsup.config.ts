import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['lib/icons/*'],
  treeshake: true,
  external: ['react', 'react-dom'],
  splitting: false,
  sourcemap: false,
  clean: true,
  format: ['esm', 'cjs'],
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
  dts: './lib/icons/index.ts',
});