<script lang="ts">
	import BlogPostSummary from '$lib/components/BlogPostSummary.svelte';
	import { H_ELLIPSIS_ENTITY } from '$lib/constants/entities';
	import { postSummary } from './BlogRoll.css';

	let { initialPosts = 4, posts } = $props();

	const postCount = $derived(posts?.length ?? 0);
	let showPosts = $state(initialPosts);
	let displayPosts = $derived(posts.slice(0, showPosts));

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
		<button type="submit" onclick={handleClick}>See more {H_ELLIPSIS_ENTITY}</button>
	{/if}
</section>
