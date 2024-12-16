<script lang="ts">
	import { H_ELLIPSIS_ENTITY } from '$lib/constants/entities';
	import { goto } from '$app/navigation';
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

	let { postTitle, datePublished, seoMetaDescription, slug } = $props();

	const handleMouseEnter = (event: MouseEvent) => {
		(event.target as HTMLElement).style.cursor = 'pointer';
	};

	const handleMouseLeave = (event: MouseEvent) => {
		(event.target as HTMLElement).style.cursor = 'default';
	};

	const handleMouseDown = async () => {
		goto(`/${slug}`);
	};

	const date = Temporal.Instant.from(datePublished);
	const dateString = date.toLocaleString('en-GB', { day: 'numeric', month: 'short' });
	const idString = `blog-post-summary-${slug}`;
</script>

<div
	role="presentation"
	class={container}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	onmousedown={handleMouseDown}
>
	<div class={content} data-sveltekit-preload-data="hover">
		<h3 class={contentHeadingContainer}>
			<a
				aria-label={`Open ${postTitle} blog post`}
				aria-describedby={idString}
				class={contentHeading}
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
