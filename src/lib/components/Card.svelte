<script lang="ts">
	import { container, content } from './Card.css';

	let { children, containerClass = undefined, contentClass = undefined } = $props();
</script>

<section class={`${container} ${containerClass ?? ''}`}>
	<div class={`${content} ${contentClass ?? ''}`}>
		{@render children?.()}
	</div>
</section>
