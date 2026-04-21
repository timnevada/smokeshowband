import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studio Access',
};

export default async function StudioLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const params = await searchParams;
  const nextPath = params.next || '/studio';
  const showError = params.error === '1';

  return (
    <main className="landing-shell">
      <section className="landing-card">
        <p className="landing-eyebrow">Private access</p>
        <h1 className="landing-title">Studio Login</h1>
        <p className="landing-tagline">
          Enter the shared password to access the SmokeShow content studio.
        </p>
        {showError ? <p className="auth-error">That password didn&apos;t match.</p> : null}
        <form className="auth-form" action="/api/studio-auth" method="post">
          <input type="hidden" name="next" value={nextPath} />
          <label className="auth-label" htmlFor="password">
            Password
          </label>
          <input
            className="auth-input"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
          <button className="button button-solid" type="submit">
            Enter Studio
          </button>
        </form>
      </section>
    </main>
  );
}
