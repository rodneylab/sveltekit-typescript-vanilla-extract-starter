<script lang="ts">
	import website from '$lib/config/website';

	const { themeColor } = website;
</script>

<svelte:head>
	<meta name="theme-color" content={themeColor} />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/manifest.webmanifest" />
</svelte:head>
