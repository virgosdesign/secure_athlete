import { ANALYTICS, SITE } from './src/utils/config.ts';
import { defineConfig, squooshImageService } from 'astro/config';
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter.mjs';

import alpine from '@astrojs/alpinejs';
import compress from 'astro-compress';
import { fileURLToPath } from 'url'
import htmx from 'astro-htmx';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import path from 'path';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import tasks from './src/utils/tasks';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) =>
  ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  output: 'server',
  prefetch: true,

  integrations: [
    alpine(),
    htmx(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database'
        ],
        'carbon': ['*'],
        'game-icons': ['*'],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    tasks(),
  ],

  image: {
    service: squooshImageService(),
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin],
  },

  vite: {
    optimizeDeps: {
			exclude: ["oslo"]
		},
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});