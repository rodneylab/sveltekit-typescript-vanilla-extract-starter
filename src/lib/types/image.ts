export type ImageData = {
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
};

export type SEOImage = {
  url: string;
  alt: string;
};
