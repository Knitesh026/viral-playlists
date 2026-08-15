import React from 'react';
import { INITIAL_CATEGORIES } from '../data/initialPlaylists';
import { Radio } from 'lucide-react';

export default function CategoryFilter({ activeCategory, setActiveCategory, playlistCounts, filteredCount, totalCount }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 2xl:max-w-7xl pb-6">
      
      {/* Category Section Title */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Radio className="w-4 h-4 text-[#2489d3]" />
          <h2 className="font-display text-xl sm:text-2xl text-[#17212b]">
            Viral Playlist Sites
          </h2>
          <span className="font-mono2 text-xs text-[#546575] font-semibold bg-white/80 px-2 py-0.5 rounded-md border border-[#dcd8cc]">
            {filteredCount} / {totalCount}
          </span>
        </div>
      </div>

      {/* Category Chips Scroll Bar */}
      <div className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6">
        <div className="flex gap-2.5">
          {INITIAL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`chip rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all ${isActive ? 'active' : ''}`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
