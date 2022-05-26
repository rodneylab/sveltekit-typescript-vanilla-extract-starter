import { getPost, getPostsContent } from '$lib/utilities/blog';
import type { RequestHandler } from '@sveltejs/kit';

export async function get(
  ...[input]: Parameters<RequestHandler>
): Promise<ReturnType<RequestHandler>> {
  const { params } = input;
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
}
