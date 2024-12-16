<script lang="ts">
	import Link from '$lib/components/Link.svelte';

	let {
		children,
		rel = 'nofollow noopener noreferrer',
		target = '_blank',
		href,
		ariaLabel,
	} = $props();
</script>

<Link {ariaLabel} {href} {rel} {target}>{@render children?.()}</Link>
