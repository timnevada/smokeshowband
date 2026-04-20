const required = [
  'NEXT_PUBLIC_SANITY_PROJECT_ID',
  'NEXT_PUBLIC_SANITY_DATASET',
] as const;

export function hasSanityConfig() {
  return required.every((key) => Boolean(process.env[key]));
}

export function getSanityConfig() {
  return {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'missing-project-id',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2026-04-15',
  };
}
