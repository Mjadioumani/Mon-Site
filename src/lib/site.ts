/**
 * Canonical site URL used for metadataBase, sitemap and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL once the site has a deployed domain.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://adioumani-jean.dev';

/**
 * Optional video introduction shown on the About page (YouTube, Vimeo or a
 * direct .mp4 URL). Leave empty to keep that section hidden — VideoIntro
 * renders nothing until this is set. Paste a normal share URL, e.g.
 * "https://www.youtube.com/watch?v=XXXXXXXXXXX" or "https://vimeo.com/XXXXXXX".
 */
export const PRESENTATION_VIDEO_URL = '';
