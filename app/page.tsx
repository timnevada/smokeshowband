export const revalidate = 60;

import { client } from '@/sanity/lib/client';
import { homepageQuery } from '@/sanity/lib/queries';
import { hasSanityConfig } from '@/sanity/env';

type LinkField = {
  label?: string;
  href?: string;
};

type ShowField = {
  venue?: string;
  city?: string;
  streetAddress?: string;
  date?: string;
  time?: string;
  details?: string;
  ticketLink?: string;
};

type HomepageData = {
  eyebrow?: string;
  title?: string;
  tagline?: string;
  footerText?: string;
  primaryLink?: LinkField;
  secondaryLink?: LinkField;
  showsHeading?: string;
  shows?: ShowField[];
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
  showsHeading: 'Upcoming shows',
  shows: [],
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
      shows: data?.shows || fallbackContent.shows,
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

function formatShowDate(value?: string) {
  if (!value) {
    return 'Date TBD';
  }

  const date = new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export default async function HomePage() {
  const page = await getHomepageData();

  return (
    <main className="landing-shell">
      <section className="hero-stack">
        <p className="landing-eyebrow">{page.eyebrow}</p>
        <h1 className="landing-title">{page.title}</h1>
        <p className="landing-tagline">{page.tagline}</p>
        <div className="landing-actions">
          <ActionLink link={page.primaryLink} variant="solid" />
          <ActionLink link={page.secondaryLink} variant="ghost" />
        </div>
      </section>

      {page.shows && page.shows.length > 0 ? (
        <section className="shows-panel">
          <div className="shows-heading-wrap">
            <p className="landing-eyebrow">Upcoming Shows:</p>
            <h2 className="shows-heading">{page.showsHeading}</h2>
          </div>
          <div className="shows-grid">
            {page.shows.map((show, index) => (
              <article className="show-card" key={`${show.date || 'show'}-${show.venue || 'venue'}-${index}`}>
                <p className="show-date">{formatShowDate(show.date)}</p>
                <h3 className="show-venue">{show.venue || 'Venue TBD'}</h3>
                <p className="show-city">{show.city || 'City TBD'}</p>
                {show.streetAddress ? <p className="show-address">{show.streetAddress}</p> : null}
                {show.time ? <p className="show-time">{show.time}</p> : null}
                {show.details ? <p className="show-details">{show.details}</p> : null}
                {show.ticketLink ? (
                  <a className="show-link" href={show.ticketLink}>
                    Tickets
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <p className="landing-footer">{page.footerText}</p>
    </main>
  );
}
