import React from 'react';
import { AnimatedMarqueeHero } from '@/components/ui/hero-3';

export default function HeroSection({ playlists, activeHeroId, onSelectHero, onUpvote, onOpenSubmitModal }) {
  // Extract thumbnail URLs for the animated marquee
  const marqueeImages = playlists.map(p => p.thumbnailUrl).filter(Boolean);

  const heroValues = {
    tagline: `🔥 Discover ${playlists.length}+ Viral Playlist Sites`,
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
  };

  const handleImageClick = (index) => {
    if (playlists[index]) {
      onSelectHero(playlists[index]);
    }
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
