import { separateFrontmatter } from '$lib/utilities/blog';
import type { PageLoad } from './$types';

export const load: PageLoad = async function load() {
	// const mdModules = import.meta.glob('../content/blog/**/index.md');
	// const posts = await Promise.all(
	//   Object.keys(mdModules).map(async (path) => {
	//     const slug = path.split('/').at(-2);
	//     const { metadata } = (await mdModules[path]()) as {
	//       metadata?: Frontmatter;
	//     };
	//     if (!slug || !metadata) {
	//       throw error(404, 'Not found!');
	//     }
	//     const { datePublished, lastUpdated, postTitle, seoMetaDescription } = metadata;
	//     return {
	//       datePublished,
	//       lastUpdated,
	//       postTitle,
	//       seoMetaDescription,
	//       slug,
	//     };
	//   }),
	// );
	// return { posts };
	const mdModules = import.meta.glob('../content/blog/**/index.md');
	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const slug = path.split('/').at(-2);
			const markdown = (await import(`../content/blog/${slug}/index.md?raw`)).default;
			const { frontmatter } = separateFrontmatter(markdown);
			const { datePublished, lastUpdated, postTitle, seoMetaDescription } = frontmatter;
			return {
				datePublished,
				lastUpdated,
				postTitle,
				seoMetaDescription,
				slug,
			};
		}),
	);
	return { posts };
};
