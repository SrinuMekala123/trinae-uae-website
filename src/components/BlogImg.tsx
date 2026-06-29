import React from "react";

/**
 * BlogImg – an image component used on blog pages.
 * If the caller does not supply an `alt`, the component uses the supplied
 * `pageTitle` (normally the blog post title) as a fallback. This satisfies
 * the SEO requirement of having the post title appear as the image alt text.
 */
export const BlogImg = ({
  src,
  alt,
  pageTitle,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & { pageTitle: string }) => {
  const finalAlt = alt ?? pageTitle;
  return <img src={src} alt={finalAlt} {...props} />;
};
