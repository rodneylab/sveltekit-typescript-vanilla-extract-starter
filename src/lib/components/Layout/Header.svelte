<script lang="ts">
	import SunIcon from '$lib/components/Icons/Sun.svelte';
	import MoonIcon from '$lib/components/Icons/Moon.svelte';
	import theme from '$lib/shared/stores/theme';
	import {
		container,
		content,
		nav,
		navLink,
		navLinkActive,
		navList,
		navListItem,
		themeButton,
		themeButtonContainer,
	} from './Header.css';
	import { screenReaderText } from '../../styles/styles.css';
	import { browser } from '$app/environment';

	let { slug }: { slug: string } = $props();

	let lightThemeActive = $derived($theme === 'light');
	let themeButtonText = $derived(`Switch to ${lightThemeActive ? 'dark' : 'light'} theme`);
	let themeButtonElement: HTMLButtonElement;

	const handleClick = () => {
		if (lightThemeActive) {
			theme.set('dark');
		} else {
			theme.set('light');
		}
		if (browser) {
			themeButtonElement.blur();
		}
	};
</script>

<header class={container}>
	<div class={themeButtonContainer}>
		<button bind:this={themeButtonElement} class={themeButton} onclick={handleClick}
			><span class={screenReaderText}>{themeButtonText}</span>
			{#if lightThemeActive}
				<MoonIcon label="Switch to dark mode" width={36} />
			{:else}
				<SunIcon label="Switch to light mode" width={36} />
			{/if}</button
		>
	</div>
	<div class={content}>
		<nav class={nav} aria-label="Site navigation">
			<ul class={navList}>
				<li class={navListItem}>
					<a class={`${navLink}${slug === '/' ? ` ${navLinkActive}` : ''}`} href="/.">Home</a>
				</li>
				<li class={navListItem}>
					<a class={`${navLink}${slug === '/contact' ? ` ${navLinkActive}` : ''}`} href="/contact"
						>Contact</a
					>
				</li>
			</ul>
		</nav>
	</div>
</header>
