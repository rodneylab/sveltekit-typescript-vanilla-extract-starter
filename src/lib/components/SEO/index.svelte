<script lang="ts">
	import defaultFeaturedImage from '$lib/assets/home/home.png';
	import defaultOgImage from '$lib/assets/home/home-open-graph.png';
	import defaultOgSquareImage from '$lib/assets/home/home-open-graph-square.png';
	import defaultTwitterImage from '$lib/assets/home/home-twitter.png';

	import website from '$lib/config/website';
	import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';
	import Twitter from './Twitter.svelte';

	const {
		author,
		entity,
		facebookAuthorPage,
		facebookPage,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		githubPage,
		linkedinProfile,
		telegramUsername,
		tiktokUsername,
		twitterUsername,
	} = website;

	const defaultAlt =
		'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';

	let {
		article = false,
		breadcrumbs = [],
		entityMeta = null,
		lastUpdated,
		datePublished,
		metadescription,
		slug,
		timeToRead = 0,
		title,
		featuredImage = {
			url: defaultFeaturedImage,
			alt: defaultAlt,
			width: 672,
			height: 448,
			caption: 'Home page',
		},
		ogImage = {
			url: defaultOgImage,
			alt: defaultAlt,
		},
		ogSquareImage = {
			url: defaultOgSquareImage,
			alt: defaultAlt,
		},
		twitterImage = {
			url: defaultTwitterImage,
			alt: defaultAlt,
		},
	} = $props();
	const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
	const url = `${siteUrl}/${slug}`;
	const openGraphProps = {
		article,
		datePublished,
		lastUpdated,
		image: { ...ogImage } as { url: string; alt: string },
		squareImage: { ...ogSquareImage } as { url: string; alt: string },
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url,
		...(article ? { datePublished, lastUpdated, facebookPage, facebookAuthorPage } : {}),
	};
	const schemaOrgProps = {
		article,
		author,
		breadcrumbs,
		datePublished,
		entity,
		lastUpdated,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title: pageTitle,
		url,
		facebookPage,
		githubPage,
		linkedinProfile,
		telegramUsername,
		tiktokUsername,
		twitterUsername,
	};
	const twitterProps = {
		article,
		author,
		twitterUsername,
		image: twitterImage,
		timeToRead,
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<link rel="canonical" href={url} />
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
