const STUDIO_COOKIE_NAME = 'smokeshowband-studio-auth';
const ONE_WEEK = 60 * 60 * 24 * 7;

export function getStudioCookieName() {
  return STUDIO_COOKIE_NAME;
}

export function getStudioPassword() {
  return process.env.STUDIO_ACCESS_PASSWORD || '';
}

export function isStudioPasswordConfigured() {
  return Boolean(getStudioPassword());
}

export function getStudioCookieValue() {
  return process.env.STUDIO_ACCESS_PASSWORD || 'missing-studio-password';
}

export function getStudioCookieMaxAge() {
  return ONE_WEEK;
}
