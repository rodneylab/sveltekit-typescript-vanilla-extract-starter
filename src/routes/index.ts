import { getPosts, getPostsContent } from '$lib/utilities/blog';
import type { RequestHandler } from './__types/index';

export const GET: RequestHandler = async function GET() {
  const postsContent = getPostsContent();
  const posts = await getPosts(postsContent);
  return { body: { ...{ posts } } };
};
