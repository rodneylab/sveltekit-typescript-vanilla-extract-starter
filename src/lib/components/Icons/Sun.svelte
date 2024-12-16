<script>
	let {
		label = 'Light mode icon',
		colour = 'inherit',
		ariaHidden = false,
		width = 16,
		height = width,
	} = $props();
</script>

<div class="logo">
	<svg
		aria-hidden={ariaHidden}
		color={colour}
		aria-label={label}
		role="img"
		{width}
		{height}
		viewBox="0 0 24 24"
		fill="none"
	>
		<use href="/sprite.svg#sun" />
	</svg>
</div>

<style>
	.logo {
		display: flex;
		align-items: center;
	}
</style>
