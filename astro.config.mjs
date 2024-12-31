// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  // vite: {
  //   css: {
  //     postcss: './postcss.config.cjs',
  //   }
  // }
  integrations: [tailwind(), react()],

  adapter: netlify()
});