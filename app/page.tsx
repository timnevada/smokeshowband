import { client } from '@/sanity/lib/client';
import { homepageQuery } from '@/sanity/lib/queries';
import { hasSanityConfig } from '@/sanity/env';

type LinkField = {
  label?: string;
  href?: string;
};

type HomepageData = {
  eyebrow?: string;
  title?: string;
  tagline?: string;
  footerText?: string;
  primaryLink?: LinkField;
  secondaryLink?: LinkField;
};

const fallbackContent: HomepageData = {
  eyebrow: 'SmokeShow',
  title: 'SmokeShow',
  tagline: 'An ultra-minimal landing page, ready to be driven by Sanity instead of placeholder junk.',
  footerText: 'Set your Sanity env vars, then edit this page in /studio.',
  primaryLink: {
    label: 'Open Studio',
    href: '/studio',
  },
};

async function getHomepageData() {
  if (!hasSanityConfig()) {
    return fallbackContent;
  }

  try {
    const data = await client.fetch<HomepageData | null>(homepageQuery);
    return {
      ...fallbackContent,
      ...data,
    };
  } catch {
    return fallbackContent;
  }
}

function ActionLink({ link, variant }: { link?: LinkField; variant: 'solid' | 'ghost' }) {
  if (!link?.label || !link.href) {
    return null;
  }

  return (
    <a className={`button button-${variant}`} href={link.href}>
      {link.label}
    </a>
  );
}

export default async function HomePage() {
  const page = await getHomepageData();

  return (
    <main className="landing-shell">
      <section className="landing-card">
        <p className="landing-eyebrow">{page.eyebrow}</p>
        <h1 className="landing-title">{page.title}</h1>
        <p className="landing-tagline">{page.tagline}</p>
        <div className="landing-actions">
          <ActionLink link={page.primaryLink} variant="solid" />
          <ActionLink link={page.secondaryLink} variant="ghost" />
        </div>
      </section>
      <p className="landing-footer">{page.footerText}</p>
    </main>
  );
}
