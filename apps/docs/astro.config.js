import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  scopedStyleStrategy: 'class',
});
