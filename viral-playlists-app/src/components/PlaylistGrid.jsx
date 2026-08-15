import React from 'react';
import { ExternalLink, Heart, Eye, Sparkles } from 'lucide-react';
import { InstagramIcon, TwitterIcon } from './SocialIcons';

export default function PlaylistGrid({ playlists, onSelectHero, activeHeroId, onUpvote }) {
  if (playlists.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white border border-[#cfe3f2] flex items-center justify-center text-[#2489d3]">
          <Sparkles className="w-6 h-6 animate-pulse text-[#2489d3]" />
        </div>
        <h3 className="font-display text-xl text-[#12212e] mb-1">No Viral Playlists Found</h3>
        <p className="text-xs text-[#334155] max-w-sm mx-auto">
          No playlist sites match your search or filter. Try searching another keyword or submit your site!
        </p>
      </div>
    );
  }

  return (
    <section id="directory" aria-label="Viral Playlist Sites Directory" className="mx-auto max-w-6xl px-4 sm:px-6 2xl:max-w-7xl">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 pb-20 sm:grid-cols-2 sm:gap-y-14 sm:pb-28 lg:grid-cols-3 lg:gap-x-8 2xl:grid-cols-4">
        {playlists.map((playlist, idx) => {
          const isActiveHero = activeHeroId === playlist.id;

          return (
            <div key={playlist.id} className="tv-card relative">
              
              {/* TV Glow backdrop */}
              <div className={`tv-glow ${isActiveHero ? 'opacity-100' : ''}`} />

              {/* Retro TV Frame Container */}
              <div 
                className="cursor-pointer"
                onClick={() => onSelectHero(playlist)}
                title="Click to feature thumbnail in Hero Carousel"
              >
                <div className={`tv ${isActiveHero ? 'ring-2 ring-[#2489d3]' : ''}`}>
                  <div className="tv-screen">
                    <img
                      src={playlist.thumbnailUrl}
                      alt={`Preview screenshot of ${playlist.title}`}
                      loading={idx < 4 ? "eager" : "lazy"}
                      decoding="async"
                      width="450"
                      height="250"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(playlist.url)}?w=450`;
                      }}
                    />
                  </div>
                  <div className="tv-plate">
                    <span className="tv-brand">
                      {playlist.url.replace(/https?:\/\//, '').split('/')[0]}
                    </span>
                    <div className="flex gap-1.5 shrink-0">
                      <span className="tv-knob" />
                      <span className="tv-knob" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content metadata */}
              <div className="px-1.5 pt-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 
                    onClick={() => onSelectHero(playlist)}
                    className="font-display text-xl leading-snug text-[#12212e] cursor-pointer hover:text-[#2489d3] transition-colors"
                  >
                    {playlist.title}
                  </h3>

                  <a
                    href={playlist.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 shrink-0 rounded-full border border-[#cfe3f2] p-1.5 text-[#2489d3] transition-colors hover:border-[#2489d3] hover:bg-[#2489d3] hover:text-white"
                    aria-label={`Visit ${playlist.title} website`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="mt-1 text-sm text-[#334155] line-clamp-2 font-medium">
                  {playlist.desc}
                </p>

                <div className="mt-2.5 flex items-center justify-between gap-2 text-xs">
                  {playlist.owner && (
                    <a
                      href={playlist.socialUrl || `https://x.com/search?q=${encodeURIComponent(playlist.owner)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono2 text-xs text-[#2489d3] hover:underline flex items-center gap-1 font-bold"
                    >
                      {playlist.socialPlatform === 'instagram' ? (
                        <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
                      ) : (
                        <TwitterIcon className="w-3.5 h-3.5 text-sky-500" />
                      )}
                      <span>{playlist.owner}</span>
                    </a>
                  )}

                  <div className="flex items-center gap-2.5 text-[11px] text-[#334155]">
                    <button
                      onClick={() => onUpvote(playlist.id)}
                      aria-label={`Upvote ${playlist.title}`}
                      className="flex items-center gap-1 hover:text-rose-600 transition-colors font-semibold"
                    >
                      <Heart className="w-3 h-3 text-rose-500 fill-rose-500/20" />
                      <span>{playlist.upvotes || 0}</span>
                    </button>

                    <span className="flex items-center gap-0.5 font-mono2 font-semibold">
                      <Eye className="w-3 h-3 text-[#2489d3]" />
                      {playlist.views}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
