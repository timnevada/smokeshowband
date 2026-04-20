const upcomingShows = [
  {
    date: "May 18",
    city: "Los Angeles, CA",
    venue: "The Echo",
    status: "Tickets Soon",
  },
  {
    date: "June 07",
    city: "San Diego, CA",
    venue: "Soda Bar",
    status: "All Ages",
  },
  {
    date: "June 29",
    city: "San Francisco, CA",
    venue: "Bottom of the Hill",
    status: "On Sale",
  },
];

const bandMembers = [
  { name: "Alex", role: "Vocals / Guitar" },
  { name: "Jordan", role: "Lead Guitar / Synth" },
  { name: "Sam", role: "Bass" },
  { name: "Casey", role: "Drums" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Spotify", href: "https://spotify.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Bandcamp", href: "https://bandcamp.com" },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Independent alt-rock from California</p>
          <h1>SmokeShow</h1>
          <p className="lede">
            Sharp guitars, midnight synths, and hooks built for rooms that get
            louder as the night goes on.
          </p>
          <div className="hero-actions">
            <a className="button button-solid" href="#music">
              Hear the latest
            </a>
            <a className="button button-ghost" href="#shows">
              See upcoming shows
            </a>
          </div>
        </div>

        <div className="hero-card">
          <p className="card-label">Newest release</p>
          <h2>Glass Hearts / Static Lights</h2>
          <p>
            Replace this with SmokeShow's newest single, EP, or album and
            link it to Spotify, Apple Music, or Bandcamp.
          </p>
          <a className="inline-link" href="https://spotify.com">
            Open streaming link
          </a>
        </div>
      </section>

      <section className="section-grid" id="music">
        <div className="section-heading">
          <p className="eyebrow">Music</p>
          <h2>Give new listeners a reason to stay</h2>
        </div>
        <div className="panel wide">
          <div className="release">
            <div>
              <p className="card-label">Featured track</p>
              <h3>Afterlight</h3>
              <p>
                This is a great spot for a short SmokeShow bio, a release blurb,
                or embedded audio later on.
              </p>
            </div>
            <div className="track-meta">
              <span>03:42</span>
              <span>Dreamy / urgent / loud</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-grid" id="shows">
        <div className="section-heading">
          <p className="eyebrow">Shows</p>
          <h2>Keep the next dates impossible to miss</h2>
        </div>
        <div className="show-list">
          {upcomingShows.map((show) => (
            <article className="panel show-card" key={`${show.date}-${show.venue}`}>
              <div>
                <p className="show-date">{show.date}</p>
                <h3>{show.city}</h3>
                <p>{show.venue}</p>
              </div>
              <span className="show-status">{show.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Make the band feel real, fast</h2>
        </div>
        <div className="about-layout">
          <div className="panel">
            <p>
              Write two or three crisp paragraphs here about the sound, the
              story, where you’re based, and what kind of stages or scenes
              shaped the project.
            </p>
          </div>
          <div className="panel member-list">
            {bandMembers.map((member) => (
              <div className="member-row" key={member.name}>
                <span>{member.name}</span>
                <span>{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div>
          <p className="eyebrow">Stay connected</p>
          <h2>Own the homepage. Send people where you want them to go.</h2>
        </div>
        <div className="social-row">
          {socials.map((social) => (
            <a className="social-link" href={social.href} key={social.label}>
              {social.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
