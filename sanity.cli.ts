import { defineCliConfig } from 'sanity/cli';
import { getSanityConfig } from '@/sanity/env';

const { projectId, dataset } = getSanityConfig();

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
