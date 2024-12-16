import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
	},
	plugins: [vanillaExtractPlugin(), imagetools(), sveltekit()],
	server: {
		port: 5173,
		strictPort: false,
	},
	preview: {
		port: 4173,
		strictPort: false,
	},
});
