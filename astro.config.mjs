import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentCollectionCache: true,
  },
  integrations: [tailwind(), mdx()],
  prefetch: {
    defaultStrategy: 'viewport'
  },
  site: 'https://www.juststeveking.uk/'
});