<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import FacebookIcon from '$lib/components/Icons/Facebook.svelte';
	import XIcon from '$lib/components/Icons/X.svelte';
	import TelegramIcon from '$lib/components/Icons/Telegram.svelte';
	import EmailIcon from '$lib/components/Icons/Email.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import website from '$lib/config/website';
	import theme from '$lib/shared/stores/theme';
	import {
		cardContainer,
		cardContent,
		contactAddress,
		contactDetails,
		contactDetailsList,
		contactDetailsListItem,
		summaryText,
	} from './contact.css';
	const { contactEmail, facebookPageName, telegramUsername, twitterUserId, twitterUsername } =
		website;

	let title = 'Contact';
	let metadescription = 'Get in touch with Rodneylab, the developer of Climate SvelteKit Starter.';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
		{
			name: 'Contact Us',
			slug: 'contact',
		},
	];
	const seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: 'contact',
		datePublished: '2021-07-07T14:19:33.000+0100',
		lastUpdated: '2021-07-07T14:19:33.000+0100',
	};
	$: colour = $theme === 'light' ? '#433633' : '#32021f';
	const width = 24;
</script>

<SEO {...seoProps} />
<h1>Contact me</h1>
<p class={summaryText}>I would love to hear from you. Please get in touch!</p>
<Card containerClass={cardContainer} contentClass={cardContent}>
	<div class={contactDetails}>
		<ul class={contactDetailsList}>
			<li class={contactDetailsListItem}>
				<EmailIcon {colour} {width} />
				<span class={contactAddress}>{contactEmail}</span>
			</li>
			<li class={contactDetailsListItem}>
				<FacebookIcon {colour} {width} />
				<ExternalLink
					ariaLabel="D M Rodney Lab on Facebook Messenger"
					href={`https://m.me.${facebookPageName}`}
				>
					<span class={contactAddress}> {facebookPageName}</span>
				</ExternalLink>
			</li>
			<li class={contactDetailsListItem}>
				<XIcon {colour} {width} />
				<ExternalLink
					ariaLabel="D M Rodney Lab on Twitter"
					href={`https://twitter.com/messages/compose?recipient-id=${twitterUserId}`}
				>
					<span class={contactAddress}>@{twitterUsername}</span>
				</ExternalLink>
			</li>
			<li class={contactDetailsListItem}>
				<TelegramIcon {colour} {width} />
				<ExternalLink
					ariaLabel="Message Rodney Lab on Telegram"
					href={`https://t.me/${telegramUsername}`}
				>
					<span class={contactAddress}>{telegramUsername}</span>
				</ExternalLink>
			</li>
		</ul>
	</div></Card
>
