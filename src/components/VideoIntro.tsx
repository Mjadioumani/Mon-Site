"use client";

import { PlayCircle } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { PRESENTATION_VIDEO_URL } from '@/lib/site';
import { Reveal } from '@/components/motion/Reveal';

/** Turns a normal YouTube/Vimeo share URL into its embeddable form. Falls back to the raw URL (e.g. a direct .mp4) if it matches neither. */
function toEmbedUrl(url: string): { src: string; kind: 'iframe' | 'video' } {
  const youtube = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  if (youtube) return { src: `https://www.youtube.com/embed/${youtube[1]}`, kind: 'iframe' };

  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return { src: `https://player.vimeo.com/video/${vimeo[1]}`, kind: 'iframe' };

  return { src: url, kind: 'video' };
}

/**
 * Optional video introduction. Renders nothing until PRESENTATION_VIDEO_URL
 * (src/lib/site.ts) is set — safe to mount anywhere without visual clutter
 * while there is no video yet.
 */
export function VideoIntro() {
  const { t } = useLanguage();

  if (!PRESENTATION_VIDEO_URL) return null;

  const { src, kind } = toEmbedUrl(PRESENTATION_VIDEO_URL);

  return (
    <Reveal variant="up" className="space-y-6">
      <h3 className="text-xl font-bold text-white flex items-center gap-2">
        <PlayCircle className="w-5 h-5 text-primary" />
        {t.about.videoTitle}
      </h3>
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border/10 max-w-2xl">
        {kind === 'iframe' ? (
          <iframe
            src={src}
            title={t.about.videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <video src={src} controls className="absolute inset-0 w-full h-full object-cover" />
        )}
      </div>
    </Reveal>
  );
}
