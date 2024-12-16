<script>
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import {
		container,
		content,
		copyrightText,
		footerIcons,
		footerIconsList,
		footerIconsListItem,
		footerLink,
	} from '../Layout/Footer.css';
	import RodneyLabCredit from '$lib/components/Layout/RodneyLabCredit.svelte';
	import website from '$lib/config/website';
	import { COPYRIGHT_ENTITY } from '$lib/constants/entities';
	import theme from '$lib/shared/stores/theme';
	import TiktokIcon from '$lib/components/Icons/Tiktok.svelte';
	import FacebookIcon from '$lib/components/Icons/Facebook.svelte';
	import XIcon from '$lib/components/Icons/X.svelte';
	import LinkedinIcon from '$lib/components/Icons/LinkedIn.svelte';
	import GitHubIcon from '$lib/components/Icons/GitHub.svelte';

	const {
		copyrightYear,
		facebookPage,
		githubPage,
		linkedinProfile,
		tiktokUsername,
		twitterUsername,
	} = website;

	let colour = $derived($theme === 'light' ? '#f1faee' : '#1d3557');
	const width = 36;
</script>

<footer class={container}>
	<div class={content}>
		<div class={copyrightText}>
			Created by <a
				aria-label="Open the Rodney Lab site"
				class={footerLink}
				href="https://rodneylab.com/"
				target="_blank"
				rel="noopener noreferrer">Rodney Lab</a
			>. Copyright {COPYRIGHT_ENTITY}
			{copyrightYear}.
		</div>
		<nav class={footerIcons} aria-label="Navigate to Rodney Lab linked social sites">
			<ul class={footerIconsList}>
				<li class={footerIconsListItem}>
					<ExternalLink
						ariaLabel="Go to the Rodney Lab Tik Tok Page"
						href={`https://www.tiktok.com/${tiktokUsername}`}
						><TiktokIcon {colour} {width} /></ExternalLink
					>
				</li>

				<li class={footerIconsListItem}>
					<ExternalLink ariaLabel="Go to the Rodney Lab Facebook Page" href={facebookPage}
						><FacebookIcon {colour} {width} /></ExternalLink
					>
				</li>
				<li class={footerIconsListItem}>
					<ExternalLink
						ariaLabel="Go to the Rodney Lab Twitter Page"
						href={`https://twitter.com/intent/user?screen_name=${twitterUsername}`}
						><XIcon {colour} {width} /></ExternalLink
					>
				</li>
				<li class={footerIconsListItem}>
					<ExternalLink
						ariaLabel="Go to the Rodney Lab Linked In Page"
						href={`https://uk.linkedin.com/in/${linkedinProfile}`}
						><LinkedinIcon {colour} {width} /></ExternalLink
					>
				</li>
				<li class={footerIconsListItem}>
					<ExternalLink
						ariaLabel="Go to the Rodney Lab Git Hub In Page"
						href={`https://github.com/${githubPage}`}><GitHubIcon {colour} {width} /></ExternalLink
					>
				</li>
			</ul>
		</nav>
		<RodneyLabCredit />
	</div>
</footer>
