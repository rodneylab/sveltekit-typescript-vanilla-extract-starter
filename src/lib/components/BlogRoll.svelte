<script lang="ts">
  import BlogPostSummary from '$lib/components/BlogPostSummary.svelte';
  import { H_ELLIPSIS_ENTITY } from '$lib/constants/entities';
  import { postSummary } from '$lib/components/BlogRoll.css';

  export let initialPosts: number = 4;
  export let posts: {
    datePublished: string;
    postTitle: string;
    seoMetaDescription: string;
    slug: string;
  }[];

  const postCount = posts?.length ?? 0;
  $: showPosts = initialPosts;
  $: displayPosts = posts.slice(0, showPosts);

  const handleClick = () => {
    showPosts += initialPosts;
  };
</script>

<section role="feed">
  <h2>BLOG POSTS</h2>
  {#each displayPosts as post, index}
    <article class={postSummary} aria-posinset={index + 1} aria-setsize={postCount}>
      <BlogPostSummary
        datePublished={post.datePublished}
        postTitle={post.postTitle}
        seoMetaDescription={post.seoMetaDescription}
        slug={post.slug}
      />
    </article>
  {:else}
    <p>No posts yet!</p>
  {/each}
  {#if showPosts < postCount}
    <button type="submit" on:click={handleClick}>See more {H_ELLIPSIS_ENTITY}</button>
  {/if}
</section>
