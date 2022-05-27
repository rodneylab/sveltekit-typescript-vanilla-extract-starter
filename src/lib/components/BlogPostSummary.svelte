<script lang="ts">
  import { H_ELLIPSIS_ENTITY } from '$lib/constants/entities';
  import { goto, prefetch } from '$app/navigation';
  import {
    container,
    content,
    contentBody,
    contentHeading,
    contentHeadingContainer,
    dateText,
    postMeta,
  } from './BlogPostSummary.css';
  import { Temporal } from '@js-temporal/polyfill';

  export let postTitle: string;
  export let datePublished: string;
  export let seoMetaDescription: string;
  export let slug: string;

  const handleMouseEnter = (event: MouseEvent) => {
    (event.target as HTMLElement).style.cursor = 'pointer';
  };

  const handleMouseLeave = (event: MouseEvent) => {
    (event.target as HTMLElement).style.cursor = 'default';
  };

  const handleMouseDown = async () => {
    await prefetch(`/${slug}`);
    goto(`/${slug}`);
  };

  const date = Temporal.Instant.from(datePublished);
  const dateString = date.toLocaleString('en-GB', { day: 'numeric', month: 'short' });
  const idString = `blog-post-summary-${slug}`;
</script>

<div
  class={container}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:mousedown={handleMouseDown}
>
  <div class={content}>
    <h3 class={contentHeadingContainer}>
      <a
        aria-label={`Open ${postTitle} blog post`}
        aria-describedby={idString}
        class={contentHeading}
        sveltekit:prefetch
        href={`/${slug}/`}>{postTitle}</a
      >
    </h3>
    <section class={contentBody}>
      <div class={postMeta}>
        <div class={dateText}>{dateString}</div>
      </div>
      <p>{seoMetaDescription}</p>
      <span id={idString} aria-hidden="true">Read more {H_ELLIPSIS_ENTITY}</span>
    </section>
  </div>
</div>
