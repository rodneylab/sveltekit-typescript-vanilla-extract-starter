<script lang="ts">
  import featuredImageSrc from '$lib/assets/home/home.png';
  import ogImageSrc from '$lib/assets/home/home-open-graph.png';
  import ogSquareImageSrc from '$lib/assets/home/home-open-graph-square.png';
  import twitterImageSrc from '$lib/assets/home/home-twitter.png';
  import BlogRoll from '$lib/components/BlogRoll.svelte';
  import Card from '$lib/components/Card.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  import website from '$lib/config/website';
  import { cardContainer, cardContent, header, summaryHeading, summaryText } from './index.css';
  import type { Post } from 'src/app';

  export let posts: Post[];

  const { author, siteUrl } = website;

  let title = 'Home';
  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
  ];
  let metadescription =
    'Narcissus is a proof of concept backend as a service app which lets you create a blog site quicker.';
  const featuredImageAlt = 'Narcissus banner with Rodney Lab logo and Narcissus text';
  const featuredImage = {
    url: featuredImageSrc,
    alt: featuredImageAlt,
    width: 1280,
    height: 640,
    caption: 'Narcissus',
  };
  const ogImage = {
    url: ogImageSrc,
    alt: featuredImageAlt,
  };
  const ogSquareImage = {
    url: ogSquareImageSrc,
    alt: featuredImageAlt,
  };

  const twitterImage = {
    url: twitterImageSrc,
    alt: featuredImageAlt,
  };
  const entityMeta = {
    url: `${siteUrl}/`,
    faviconWidth: 512,
    faviconHeight: 512,
    caption: author,
  };
  const seoProps = {
    title,
    slug: '',
    entityMeta,
    datePublished: '2021-07-07T14:19:33.000+0100',
    lastUpdated: '2021-07-07T14:19:33.000+0100',
    breadcrumbs,
    metadescription,
    featuredImage,
    ogImage,
    ogSquareImage,
    twitterImage,
  };
</script>

<SEO {...seoProps} />
<!-- svelte-ignore component-name-lowercase -->
<header class={header}>
  <h1>SvelteKit TypeScript Starter</h1>
</header>
<Card containerClass={cardContainer} contentClass={cardContent}>
  <h2 class={summaryHeading}><span>About Starter</span></h2>
  <p class={summaryText}>
    This is a SvelteKit blog starter, using <strong>TypeScript</strong>. Blog posts are written in
    Markdown and imported using mdsvex. Styling is with <strong>vanilla-extract</strong>. We also
    use <strong>vite-imagetools</strong> with vanilla-lazyload for responsive images.
  </p>
</Card>
<BlogRoll {posts} />
