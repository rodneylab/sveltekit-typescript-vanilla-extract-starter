<script lang="ts">
	import { browser } from '$app/environment';
	import BlogPost from '$lib/components/BlogPost.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import Header from '$lib/components/Layout/Header.svelte';
	import PWA from '$lib/components/PWA.svelte';
	import theme from '$lib/shared/stores/theme';
	import '$lib/styles/normalise.css';
	import '$lib/styles/styles.css';
	import { darkTheme } from '$lib/styles/themes/dark.css';
	import { lightTheme } from '$lib/styles/themes/light.css';
	// Lato
	// [100,300,400,700,900]
	// [italic,normal]
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/700.css';
	import '@fontsource/roboto-slab/400.css';
	import '@fontsource/roboto-slab/700.css';
	import '@fontsource/roboto-slab/900.css';
	import '@fontsource/slabo-13px/400.css';
	// Slabo 27px
	// [400]
	// [normal]
	import '@fontsource/slabo-27px/400.css';
	import lazyload from 'vanilla-lazyload';
	import { container, main } from './layout.css';
	import type { Snippet } from 'svelte';

	let {
		children,
		sanitisedHtml,
		post,
		imageData,
		slug,
	}: {
		children: Snippet;
		sanitisedHtml: string;
		slug: string;

		post: {
			datePublished: string;
			featuredImageAlt: string;
			lastUpdated: string;
			postTitle: string;
			seoMetaDescription: string;
			body: string;
			slug: string;
		};
		imageData: {
			ogImage: string;
			ogSquareImage: string;
			src: string;
			twitterImage: string;
			alt: string;
			width: number;
			height: number;
			sources: { srcset: string; type: string }[];
			placeholder: string;
		};
	} = $props();
	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}

	let isBlogPost = $derived(post != null);
	let lightThemeActive = $derived($theme === 'light');
	let containerClass = $derived(`${container} ${lightThemeActive ? lightTheme : darkTheme}`);
</script>

<PWA />
<div class={containerClass}>
	<Header {slug} />
	<main class={main}>
		{#if isBlogPost}
			<BlogPost {sanitisedHtml} {post} {imageData} />
			{@render children?.()}
		{:else}
			{@render children?.()}
		{/if}
	</main>
	<Footer />
</div>
