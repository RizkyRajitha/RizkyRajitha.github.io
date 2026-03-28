// @ts-check
import { defineConfig } from 'astro/config';
import { remarkBlurImages } from './src/plugins/remarkBlurImages.mjs'

import icon from 'astro-icon';
import { rehypeBlurImageWrapper } from './src/plugins/rehypeBlurImageWrapper';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rizkyrajitha.github.io',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
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