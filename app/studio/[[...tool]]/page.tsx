import { hasSanityConfig } from '@/sanity/env';
import StudioClient from './StudioClient';

export default function StudioPage() {
  if (!hasSanityConfig()) {
    return (
      <main className="landing-shell">
        <section className="landing-card">
          <p className="landing-eyebrow">Sanity not configured</p>
          <h1 className="landing-title">Add your Sanity env vars</h1>
          <p className="landing-tagline">
            Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET, then reload this route.
          </p>
        </section>
      </main>
    );
  }

  return <StudioClient />;
}
