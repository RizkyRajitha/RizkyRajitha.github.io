// @ts-check
import { defineConfig } from 'astro/config';
import { remarkBlurImages } from './src/plugins/remarkBlurImages.mjs'

import icon from 'astro-icon';
import { rehypeBlurImageWrapper } from './src/plugins/rehypeBlurImageWrapper';

// https://astro.build/config
export default defineConfig({
  site: 'https://RizkyRajitha.github.io',
  integrations: [icon()],
  image: {
    layout: 'constrained',
  },
  markdown: {
    remarkPlugins: [remarkBlurImages],
    rehypePlugins: [rehypeBlurImageWrapper],
    shikiConfig: {
      theme: 'catppuccin-macchiato',
    },
  },
});