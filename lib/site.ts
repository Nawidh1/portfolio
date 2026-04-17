const fallbackSiteUrl = "https://example.com";

function normalizeUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteUrl = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl
);

export const siteName = "Nawid Haidari Portfolio";
