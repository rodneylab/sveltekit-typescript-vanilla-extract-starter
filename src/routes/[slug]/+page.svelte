<script lang="ts">
	import { browser } from '$app/environment';
	import BlogPost from '$lib/components/BlogPost.svelte';
	import lazyload from 'vanilla-lazyload';

	let { data } = $props();

	let { sanitisedHtml, imageData, post } = $derived(data);

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
</script>

<BlogPost {post} {imageData} {sanitisedHtml} />
