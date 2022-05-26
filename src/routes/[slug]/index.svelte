<script context="module" lang="ts">
  import type { Load, LoadOutput } from '@sveltejs/kit';

  export async function load(...[input]: Parameters<Load>): Promise<LoadOutput> {
    const { fetch, params, url } = input;
    const { pathname } = url;
    const { slug } = params;
    const res = await fetch(`${pathname}.json`);

    if (res.ok) {
      const imageData = await import(`../../lib/generated/posts/${pathname.slice(1)}.ts`);

      return {
        props: {
          ...(await res.json()),
          slug,
          imageData: { ...imageData.default },
          page: (await import(`../../content/blog/${slug}/index.md`)).default,
        },
      };
    }

    return {
      status: 404,
    };
  }
</script>

<script lang="ts">
  import lazyload from 'vanilla-lazyload';
  import { browser } from '$app/env';
  import BlogPost from '$lib/components/BlogPost.svelte';
  import type { ImageData, Post } from 'src/app';

  export let imageData: ImageData;
  export let page: string;
  export let post: Post & { body: string };

  if (browser && !document.lazyloadInstance) {
    document.lazyloadInstance = new lazyload();
  }
</script>

<BlogPost {post} {imageData} />
<svelte:component this={page} />
