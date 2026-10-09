import React from 'react';
import { AnimatedMarqueeHero } from '@/components/ui/hero-3';

export default function HeroSection({ playlists, onSelectHero, onOpenSubmitModal }) {
  // Extract thumbnail URLs for the animated marquee
  const withThumbs = playlists.filter(p => p.thumbnailUrl);
  const marqueeImages = withThumbs.map(p => p.thumbnailUrl);

  const heroValues = {
    tagline: `🔥 ${playlists.length} viral playlist sites and counting`,
    title: (
      <>
        Uncover The Internet's Most{' '}
        <span className="font-display text-[#2489d3] drop-shadow-xs">
          Viral Playlists
        </span>
      </>
    ),
    description:
      'Every viral nostalgic music website, barber shop bangers, roadways bus hits, and local beat hubs—all in one place.',
    ctaText: '+ Submit Viral Playlist Site 🚀',
    images: marqueeImages,
    names: withThumbs.map(p => p.title),
  };

  const handleImageClick = (index) => {
    if (withThumbs[index]) onSelectHero(withThumbs[index]);
  };

  return (
    <div id="hero-section" className="w-full">
      <AnimatedMarqueeHero
        {...heroValues}
        onCtaClick={onOpenSubmitModal}
        onImageClick={handleImageClick}
      />
    </div>
  );
}
