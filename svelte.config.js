import adapter from '@sveltejs/adapter-static';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svelte.md'],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] })],
  kit: {
    adapter: adapter(),
    prerender: { default: true },
    vite: {
      define: {
        'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
      },
      plugins: [vanillaExtractPlugin(), imagetools({ force: true })],
      ssr:
        process.env.NODE_ENV === 'development'
          ? {}
          : { noExternal: ['@vanilla-extract/css', '@vanilla-extract/css/fileScope'] },
    },
  },
};

export default config;
