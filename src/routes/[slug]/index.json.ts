import { getPost, getPostsContent } from '$lib/utilities/blog';
import type { RequestHandler } from './__types/index.json';

export const GET: RequestHandler = async function GET({ params }) {
  const { slug } = params;
  const articles = getPostsContent();
  const article = articles.find((element) => element.slug === slug);

  if (!article) {
    return {
      status: 404,
    };
  }
  const post = await getPost(article?.content);
  if (post) {
    return {
      body: JSON.stringify({ post: { ...post, slug } }),
    };
  }
  return {
    status: 404,
  };
};
