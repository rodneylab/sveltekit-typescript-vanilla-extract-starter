<script lang="ts">
  import readingTime from 'reading-time';
  import BannerImage from '$lib/components/BannerImage.svelte';
  import SEO from '$lib/components/SEO/index.svelte';

  export let imageData: {
    ogImage: string;
    ogSquareImage: string;
    src: string;
    twitterImage: string;
    alt: string;
    width: number;
    height: number;
    sources: { srcset: string; type: string }[];
    placeholder: string;
  };
  export let post: {
    datePublished: string;
    featuredImageAlt: string;
    lastUpdated: string;
    postTitle: string;
    seoMetaDescription: string;
    slug: string;
    body: string;
  };

  const {
    datePublished,
    featuredImageAlt,
    lastUpdated,
    postTitle: title,
    seoMetaDescription: metadescription,
    slug,
  } = post;
  const { ogImage, ogSquareImage, src: featuredImage, twitterImage } = imageData;
  const timeToRead = Math.ceil(readingTime(post.body).minutes);

  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
    {
      name: title,
      slug,
    },
  ];
  const featuredImageObject = {
    url: featuredImage,
    alt: featuredImageAlt,
    width: 672,
    height: 448,
    caption: title,
  };
  const ogImageObject = ogImage
    ? {
        url: ogImage,
        alt: featuredImageAlt,
      }
    : undefined;
  const ogSquareImageObject = ogSquareImage
    ? {
        url: ogSquareImage,
        alt: featuredImageAlt,
      }
    : undefined;
  const twitterImageObject = twitterImage
    ? {
        url: twitterImage,
        alt: featuredImageAlt,
      }
    : undefined;
</script>

<SEO
  article
  {breadcrumbs}
  {slug}
  {title}
  {datePublished}
  {lastUpdated}
  {metadescription}
  {timeToRead}
  featuredImage={featuredImageObject}
  ogImage={ogImageObject}
  ogSquareImage={ogSquareImageObject}
  twitterImage={twitterImageObject}
/>

<BannerImage {imageData} />
<h1>{title}</h1>
