import { compile } from 'mdsvex';
import type { Frontmatter } from 'src/app';
export const BLOG_PATH = 'src/content/blog';

export async function getSlugs() {
  try {
    const posts = import.meta.glob('../../content/blog/**/index.md');
    const slugs = Object.keys(posts).map((element) => {
      const lastIndex = element.lastIndexOf('/index.md');
      const firstIndex = element.lastIndexOf('/', lastIndex - 1) + 1;
      return element.slice(firstIndex, lastIndex);
    });
    return slugs;
  } catch (error) {
    console.error(`Error finding post slugs in getSlugs: ${error}`);
  }
}

export async function getPostsContent() {
  try {
    const postFiles = import.meta.glob('../../content/blog/**/index.md');
    const postPromises = Object.keys(postFiles).map(async (element) => {
      await postFiles[element]();
      const lastIndex = element.lastIndexOf('/index.md');
      const firstIndex = element.lastIndexOf('/', lastIndex - 1) + 1;
      const slug = element.slice(firstIndex, lastIndex);
      const content = (await import(`${element}?raw`)).default;

      return { slug, content };
    });

    return Promise.all(postPromises);
  } catch (error) {
    console.error(`Error importing blog posts in getPostsContent: ${error}`);
  }
}

export const getPosts = async (postsContent: { slug: string; content: string }[], body = false) => {
  const postPromises = postsContent.map(async (element) => {
    const { content, slug } = element;

    const transformedContent = (await compile(content)) as
      | {
          code: string;
          data?: Frontmatter | undefined;
          map?: string | undefined;
        }
      | undefined;

    if (!transformedContent?.data) {
      throw new Error('Error transforming post');
    }
    const { datePublished, lastUpdated, postTitle, seoMetaDescription } =
      transformedContent?.data ?? {};

    let resultElement: Pick<
      Frontmatter,
      'datePublished' | 'lastUpdated' | 'postTitle' | 'seoMetaDescription'
    > & { body?: string; slug?: string } = {
      datePublished,
      lastUpdated,
      postTitle,
      seoMetaDescription,
      slug,
    };
    if (body) {
      resultElement = { ...resultElement, body: transformedContent.code };
    }
    return resultElement;
  });
  const result = await Promise.all(postPromises);
  return result.sort((a, b) => Date.parse(b.datePublished) - Date.parse(a.datePublished));
};
