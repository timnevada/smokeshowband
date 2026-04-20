import { groq } from 'next-sanity';

export const homepageQuery = groq`*[_type == "homepage"][0]{
  eyebrow,
  title,
  tagline,
  footerText,
  primaryLink,
  secondaryLink
}`;
