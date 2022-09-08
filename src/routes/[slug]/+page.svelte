<script lang="ts">
  import { browser } from '$app/environment';
  import BlogPost from '$lib/components/BlogPost.svelte';
  import lazyload from 'vanilla-lazyload';
  import type { PageData } from './$types';

  export let data: PageData;
  const { imageData, page, post } = data;

  if (browser && !document.lazyloadInstance) {
    document.lazyloadInstance = new lazyload();
  }
</script>

<BlogPost {post} {imageData} />
<svelte:component this={page} />
