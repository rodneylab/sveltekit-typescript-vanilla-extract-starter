import type { Frontmatter } from '$lib/types/blog';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async function load({ params, url }) {
  const { slug } = params;
  const { pathname } = url;

  const imageDataPromise = import(`../../lib/generated/posts/${pathname.slice(1)}.ts`);
  const postPromise = import(`../../content/blog/${slug}/index.md`);

  const [imageDataResult, postResult] = await Promise.all([imageDataPromise, postPromise]);

  const { default: page, metadata } = postResult;
  const { default: imageData } = imageDataResult;

  if (!page) {
    throw error(404, 'Not found!');
  }

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
  } = metadata as Frontmatter;

  if (page) {
    return {
      post: {
        datePublished,
        lastUpdated,
        featuredImage,
        featuredImageAlt,
        ogImage,
        ogSquareImage,
        postTitle,
        seoMetaDescription,
        twitterImage,
        slug,
        body: page as string,
      },
      imageData,
      page,
    };
  }

  throw error(404, 'Not found!');
};
