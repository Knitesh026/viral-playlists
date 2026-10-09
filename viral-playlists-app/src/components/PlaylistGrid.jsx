import React, { useState } from 'react';
import { Heart, Eye, Sparkles, Play, ImageOff } from 'lucide-react';
import AdBanner from './ads/AdBanner';
import SponsoredCard from './ads/SponsoredCard';
import { INITIAL_CATEGORIES } from '../data/initialPlaylists';
import { InstagramIcon, TwitterIcon } from './SocialIcons';

const CATEGORY_LABELS = Object.fromEntries(INITIAL_CATEGORIES.map((c) => [c.id, c.label]));

const compact = (n = 0) =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '')}k` : String(n);

const domainOf = (url) => url.replace(/https?:\/\//, '').replace(/^www\./, '').split('/')[0];

/** Screenshot with a shimmer while loading and a readable fallback if it never arrives. */
function Thumb({ src, title, url, priority }) {
  const [state, setState] = useState('loading'); // loading | ok | failed
  return (
    <div className="tv-screen aspect-video">
      {state !== 'ok' && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-center ${
            state === 'loading' ? 'shimmer' : 'bg-gradient-to-br from-[#1b2733] to-[#0b1118]'
          }`}
        >
          {state === 'failed' && (
            <>
              <ImageOff className="h-5 w-5 text-white/40" aria-hidden="true" />
              <span className="px-3 font-display text-lg leading-tight text-white/90">{title}</span>
              <span className="font-mono2 text-[10px] uppercase tracking-widest text-white/40">
                {domainOf(url)}
              </span>
            </>
          )}
        </div>
      )}
      <img
        src={src}
        alt={`Preview screenshot of ${title}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        width="450"
        height="253"
        onLoad={() => setState('ok')}
        onError={() => setState('failed')}
        aria-hidden={state !== 'ok'}
        className={state === 'ok' ? '' : 'invisible'}
      />
    </div>
  );
}

function Card({ playlist, idx, highlighted, voted, onUpvote }) {
  const { id, title, desc, owner, socialUrl, socialPlatform, url, category, tags = [] } = playlist;
  const isNew = id.startsWith('custom-');

  return (
    <article id={`card-${id}`} className="tv-card relative scroll-mt-28">
      <div className={`tv-glow ${highlighted ? 'opacity-100' : ''}`} />

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} (${domainOf(url)}) in a new tab`}
        className={`group/tv relative block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2489d3] ${
          highlighted ? 'ring-4 ring-[#2489d3] ring-offset-4 ring-offset-[#f0eee6]' : ''
        }`}
      >
        <div className="tv">
          <Thumb src={playlist.thumbnailUrl} title={title} url={url} priority={idx < 4} />
          <div className="tv-plate">
            <span className="tv-brand">{domainOf(url)}</span>
            <div className="flex shrink-0 gap-1.5">
              <span className="tv-knob" />
              <span className="tv-knob" />
            </div>
          </div>
        </div>
        {/* Hover/focus call to action on the screen */}
        <span className="pointer-events-none absolute left-1/2 top-[38%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-[#17212b] opacity-0 shadow-xl transition-opacity group-hover/tv:opacity-100 group-focus-visible/tv:opacity-100">
          <Play className="h-4 w-4 fill-current text-[#2489d3]" aria-hidden="true" /> Listen now
        </span>
      </a>

      <div className="px-1.5 pt-4">
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          <span className="rounded-full border border-[#cfe3f2] bg-white px-2.5 py-0.5 text-[11px] font-bold text-[#1f7fc7]">
            {CATEGORY_LABELS[category] || category}
          </span>
          {isNew && (
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
              New
            </span>
          )}
        </div>

        <h3 className="font-display text-xl leading-snug text-[#12212e]">
          <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-[#2489d3] transition-colors">
            {title}
          </a>
        </h3>

        <p className="mt-1 line-clamp-2 text-sm font-medium text-[#334155]">{desc}</p>

        {tags.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Tags">
            {tags.slice(0, 3).map((t) => (
              <li key={t} className="rounded-md bg-[#17212b]/5 px-1.5 py-0.5 font-mono2 text-[10px] font-semibold text-[#546575]">
                #{t.replace(/\s+/g, '')}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-3 flex items-center justify-between gap-2 border-t border-[#dcd8cc] pt-3 text-xs">
          {owner ? (
            <a
              href={socialUrl || `https://x.com/search?q=${encodeURIComponent(owner)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-center gap-1 font-mono2 text-xs font-bold text-[#2489d3] hover:underline"
            >
              {socialPlatform === 'instagram' ? (
                <InstagramIcon className="h-3.5 w-3.5 shrink-0 text-pink-600" />
              ) : (
                <TwitterIcon className="h-3.5 w-3.5 shrink-0 text-sky-500" />
              )}
              <span className="truncate">{owner}</span>
            </a>
          ) : (
            <span />
          )}

          <div className="flex shrink-0 items-center gap-2">
            <span className="flex items-center gap-1 font-mono2 text-[11px] font-semibold text-[#334155]" title="Views">
              <Eye className="h-3.5 w-3.5 text-[#2489d3]" aria-hidden="true" />
              {compact(playlist.views)}
            </span>
            <button
              onClick={() => onUpvote(id)}
              disabled={voted}
              aria-label={voted ? `You upvoted ${title}` : `Upvote ${title}`}
              className={`flex cursor-pointer items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-bold transition-colors disabled:cursor-default ${
                voted
                  ? 'border-rose-200 bg-rose-50 text-rose-600'
                  : 'border-[#dcd8cc] bg-white text-[#334155] hover:border-rose-300 hover:text-rose-600'
              }`}
            >
              <Heart className={`h-3.5 w-3.5 text-rose-500 ${voted ? 'fill-rose-500' : ''}`} aria-hidden="true" />
              {compact(playlist.upvotes)}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PlaylistGrid({ playlists, focusId, onUpvote, upvotedIds, onReset, onOpenSubmitModal }) {
  // #directory stays mounted even when empty so scroll-to-directory always has a target
  if (playlists.length === 0) {
    return (
      <div id="directory" className="py-16 text-center scroll-mt-24">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#cfe3f2] bg-white text-[#2489d3]">
          <Sparkles className="h-6 w-6" />
        </div>
        <h3 className="font-display text-xl text-[#12212e]">No playlists match that</h3>
        <p className="mx-auto mt-1 max-w-sm text-sm text-[#334155]">
          Try a different word, or clear your filters. Know a site that belongs here?
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <button onClick={onReset} className="cursor-pointer rounded-full border border-[#cfe3f2] bg-white px-4 py-2 text-sm font-semibold text-[#17212b] hover:border-[#2489d3]">
            Clear filters
          </button>
          <button onClick={onOpenSubmitModal} className="cursor-pointer rounded-full bg-[#17212b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2489d3]">
            Submit a site
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="directory" aria-label="Viral Playlist Sites Directory" className="mx-auto max-w-6xl px-4 sm:px-6 2xl:max-w-7xl">
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 pb-20 sm:grid-cols-2 sm:gap-y-14 sm:pb-28 lg:grid-cols-3 lg:gap-x-8 2xl:grid-cols-4">
        {playlists.map((playlist, idx) => (
          <React.Fragment key={playlist.id}>
            {idx === 4 && playlists.length > 6 && <SponsoredCard />}
            {idx === 9 && playlists.length > 12 && (
              <AdBanner size="300x250" minViewport={340} className="justify-center" />
            )}
            <Card
              playlist={playlist}
              idx={idx}
              highlighted={focusId === playlist.id}
              voted={upvotedIds.has(playlist.id)}
              onUpvote={onUpvote}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
