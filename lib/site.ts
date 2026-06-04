const fallbackSiteUrl = "https://werk-nawid-dev.nl";

function normalizeUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv && /^https?:\/\//i.test(fromEnv)) {
    return normalizeUrl(fromEnv);
  }
  return fallbackSiteUrl;
}

export const siteUrl = resolveSiteUrl();

export const siteName = "Nawid Haidari Portfolio";
