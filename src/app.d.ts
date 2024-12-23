/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

export declare global {
	interface Document {
		lazyloadInstance: ILazyLoadInstance;
	}
}

export interface Frontmatter {
	datePublished: string;
	lastUpdated: string;
	postTitle: string;
	seoMetaDescription: string;
	featuredImage: string;
	featuredImageAlt: string;
	ogImage: string;
	ogSquareImage: string;
	twitterImage: string;
}

export interface ImageData {
	slug: string;
	alt: string;
	width: number;
	height: number;
	src: string;
	sources: { srcset: string; type: string }[];
	dominantColour: string;
	placeholder: string;
	ogImage: string;
	ogSquareImage: string;
	twitterImage: string;
}

export type BlogRollPost = Omit<
	Frontmatter,
	'featuredImage' | 'featuredImageAlt' | 'ogImage' | 'ogSquareImage' | 'twitterImage'
> & {
	slug: string;
};

export type Post = Frontmatter & {
	body: string;
	slug: string;
};

export interface SEOImage {
	url: string;
	alt: string;
}

// types for vite-imagetools imports
export declare global {
	export module '*.jpg?w=1344;672&jpeg&as=srcset';
	export module '*.jpg?w=1344;672&webp&as=srcset';
	export module '*.jpg?w=672&as=meta:height;src;width';
}
