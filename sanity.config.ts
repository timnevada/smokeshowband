import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { getSanityConfig } from '@/sanity/env';
import { schemaTypes } from '@/sanity/schemaTypes';

const { projectId, dataset } = getSanityConfig();

export default defineConfig({
  name: 'default',
  title: 'SmokeShow Studio',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
