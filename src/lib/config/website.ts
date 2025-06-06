import {
	PUBLIC_CONTACT_EMAIL,
	PUBLIC_FACEBOOK_AUTHOR_PAGE,
	PUBLIC_FACEBOOK_PAGE,
	PUBLIC_GITHUB_PAGE,
	PUBLIC_LINKEDIN_PROFILE,
	PUBLIC_SITE_URL,
	PUBLIC_TELEGRAM_USERNAME,
	PUBLIC_TIKTOK_USERNAME,
	PUBLIC_TWITTER_USER_ID,
	PUBLIC_TWITTER_USERNAME,
	PUBLIC_WIRE_USERNAME,
} from '$env/static/public';

const facebookPageName = PUBLIC_FACEBOOK_PAGE;
const facebookAuthorPageName = PUBLIC_FACEBOOK_AUTHOR_PAGE;

const website = {
	author: 'Rodney Johnson',
	copyrightYear: '2022 – 2025',
	entity: 'Rodney Lab',
	ogLanguage: 'en_GB',
	siteLanguage: 'en-GB',
	siteTitle: 'SvelteKit TypeScript vanilla-extract Starter',
	siteShortTitle: 'SvelteKit TypeScript Starter',
	description:
		'SvelteKit MDsvex Blog Starter - starter code by Rodney Lab to help you get going on your next blog site',
	siteUrl: PUBLIC_SITE_URL,
	backgroundColor: '#1b4079',
	themeColor: '#fcfdfd',
	contactEmail: PUBLIC_CONTACT_EMAIL,
	facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
	facebookAuthorPageName,
	facebookPage: `https://www.facebook.com/${facebookPageName}`,
	facebookPageName,
	githubPage: PUBLIC_GITHUB_PAGE,
	linkedinProfile: PUBLIC_LINKEDIN_PROFILE,
	telegramUsername: PUBLIC_TELEGRAM_USERNAME,
	tiktokUsername: PUBLIC_TIKTOK_USERNAME,
	twitterUsername: PUBLIC_TWITTER_USERNAME,
	twitterUserId: PUBLIC_TWITTER_USER_ID,
	wireUsername: PUBLIC_WIRE_USERNAME,
	hcaptchaSitekey: import.meta.env ? (import.meta.env.VITE_HCAPTCHA_SITEKEY as string) : '',
	workerUrl: import.meta.env ? (import.meta.env.VITE_WORKER_URL as string) : '',
};

export { website as default };
