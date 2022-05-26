import { compile } from 'mdsvex';
import fs from 'fs';
import { join, resolve } from 'node:path';
export const BLOG_PATH = 'src/content/blog';
import type { BlogRollPost, Frontmatter, Post } from 'src/app';

const __dirname = resolve();
const location = join(__dirname, BLOG_PATH);

/**
 * Returns array of post slugs
 */
export async function getSlugs(): Promise<string[]> {
  try {
    const posts = await import.meta.glob('../../content/blog/**/index.md');
    const slugs = Object.keys(posts).map((element) => {
      const lastIndex = element.lastIndexOf('/index.md');
      const firstIndex = element.lastIndexOf('/', lastIndex - 1) + 1;
      return element.slice(firstIndex, lastIndex);
    });

    return slugs;
  } catch (error) {
    console.error(`Error finding post slugs in getSlugs: ${error}`);
    return [];
  }
}

// /**
//  * Returns array of objects containing the slug and post Markdown content
//  * @returns {Promise<{slug: string; content: string;}[]>}
//  */
// export async function getPostsContent() {
//   try {
//     const postFiles = await import.meta.glob('../../content/blog/**/index.md');
//     const postPromises = Object.keys(postFiles).map(async (element) => {
//       const lastIndex = element.lastIndexOf('/index.md');
//       const firstIndex = element.lastIndexOf('/', lastIndex - 1) + 1;
//       const slug = element.slice(firstIndex, lastIndex);
//       const content = (await import(`${element}?raw`)).default;
//       return { slug, content: content };
//     });

//     return Promise.all(postPromises);
//   } catch (error) {
//     console.error(`Error importing blog posts in getPostsContent: ${error}`);
//   }
// }

/**
 * Returns array of objects containing the slug and post Markdown content
 */
export function getPostsContent(): { slug: string; content: string }[] {
  const directories = fs
    .readdirSync(location)
    .filter((element) => fs.lstatSync(`${location}/${element}`).isDirectory());
  const articles: { slug: string; content: string }[] = [];
  directories.forEach((element) => {
    const contentPath = `${location}/${element}/index.md`;
    if (fs.existsSync(contentPath)) {
      const content = fs.readFileSync(contentPath, { encoding: 'utf-8' });
      articles.push({ slug: element, content });
    }
  });
  return articles;
}

/**
 * Returns an array of post metadata, with optional post body too.  Array is sort in reverse
 * chrononological order
 */
export async function getPosts(
  postsContent: { slug: string; content: string }[],
): Promise<BlogRollPost[]> {
  const postPromises = postsContent.map(async (element) => {
    const { content, slug } = element;
    const transformedContent = (await compile(content)) as {
      code: string;
      data: {
        fm: Frontmatter;
      };
      map?: string;
    };
    const { datePublished, lastUpdated, postTitle, seoMetaDescription } =
      transformedContent?.data.fm ?? {};

    const resultElement: BlogRollPost = {
      datePublished,
      lastUpdated,
      postTitle,
      seoMetaDescription,
      slug,
    };
    return resultElement;
  });
  const result = await Promise.all(postPromises);
  return result.sort((a, b) => Date.parse(b.datePublished) - Date.parse(a.datePublished));
}

/**
 * Returns post meta together with compiled body
 */
export async function getPost(content: string): Promise<Omit<Post, 'slug'>> {
  const transformedContent = (await compile(content)) as {
    code: string;
    data: {
      fm: Frontmatter;
    };
    map?: string;
  };
  const {
    datePublished,
    lastUpdated,
    featuredImage,
    featuredImageAlt,
    ogImage,
    ogSquareImage,
    postTitle,
    seoMetaDescription,
    twitterImage,
  } = transformedContent.data.fm;
  const result: Omit<Post, 'slug'> = {
    datePublished,
    lastUpdated,
    featuredImage,
    featuredImageAlt,
    ogImage,
    ogSquareImage,
    postTitle,
    seoMetaDescription,
    twitterImage,
    body: transformedContent.code,
  };
  return result;
}
