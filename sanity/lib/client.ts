import { createClient } from 'next-sanity';
import { getSanityConfig } from '@/sanity/env';

export const client = createClient({
  ...getSanityConfig(),
  useCdn: true,
});
