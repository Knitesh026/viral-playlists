import React from 'react';
import { INITIAL_CATEGORIES } from '../data/initialPlaylists';

export default function Footer({ onOpenSubmitModal, setActiveCategory }) {
  const goTo = (id) => {
    setActiveCategory(id);
    document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="mt-8 border-t border-[#dcd8cc] bg-white/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-[#17212b]">
            Viral Playlist <span className="text-[#2489d3]">— Nostalgic</span>
          </p>
          <p className="mt-2 max-w-sm text-sm font-medium text-[#334155]">
            A hand-picked directory of the internet's most nostalgic and regional music websites.
          </p>
          <button
            onClick={onOpenSubmitModal}
            className="mt-4 inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#17212b] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#2489d3]"
          >
            + Submit your site
          </button>
        </div>

        <nav aria-label="Browse categories">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#546575]">Browse</h2>
          <ul className="mt-3 grid grid-cols-1 gap-y-1.5 text-sm font-medium sm:grid-cols-2">
            {INITIAL_CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
              <li key={c.id}>
                <button onClick={() => goTo(c.id)} className="cursor-pointer text-[#334155] hover:text-[#2489d3]">
                  {c.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#546575]">About</h2>
          <p className="mt-3 text-sm font-medium text-[#334155]">
            Listings link to sites owned by their creators. Some links on this page are sponsored.
          </p>
        </div>
      </div>
      <p className="border-t border-[#dcd8cc] py-4 text-center font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#546575]">
        Curated with love · © {new Date().getFullYear()} Viral Playlist
      </p>
    </footer>
  );
}
