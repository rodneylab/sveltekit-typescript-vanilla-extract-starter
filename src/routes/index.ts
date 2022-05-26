import { getPosts, getPostsContent } from '$lib/utilities/blog';
import type { RequestHandler } from '@sveltejs/kit';

export async function get(): Promise<ReturnType<RequestHandler>> {
  const postsContent = getPostsContent();
  const posts = await getPosts(postsContent);
  return { body: { ...{ posts } } };
}
