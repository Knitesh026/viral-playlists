import React, { useState, useEffect } from 'react';
import { Search, Plus, Sparkles, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar({ searchQuery, setSearchQuery, onOpenSubmitModal, totalCount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled || isMobileSearchOpen
          ? "bg-white/95 backdrop-blur-md border-b border-[#dcd8cc] shadow-sm py-1 sm:py-2"
          : "bg-transparent border-b border-transparent py-3 sm:py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Brand Logo Image: /logo.png */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer flex items-center gap-2 sm:gap-2.5 group shrink-0"
          >
            <img 
              src="/logo.png" 
              alt="Viral Playlist — Nostalgic Logo" 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover shadow-md group-hover:scale-105 transition-transform"
            />
            <div className="flex items-center gap-2">
              <span className="font-display text-xl sm:text-2xl md:text-3xl text-[#17212b] tracking-tight group-hover:text-[#2489d3] transition-colors block leading-none">
                Viral Playlist <span className="text-[#2489d3] text-base sm:text-xl font-sans font-medium">— Nostalgic</span>
              </span>
              <span className="hidden xs:inline-block font-mono2 text-[10px] sm:text-xs text-[#546575] bg-white/90 px-2 py-0.5 rounded-full border border-[#dcd8cc] font-semibold">
                {totalCount} Sites
              </span>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#546575]" />
              <input
                type="text"
                placeholder="Search playlists, creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/80 backdrop-blur-xs border border-[#dcd8cc] text-[#17212b] text-xs sm:text-sm rounded-full pl-10 pr-9 py-2 outline-none focus:bg-white focus:border-[#2489d3] transition-all placeholder:text-[#546575]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#546575] hover:text-[#17212b]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Mobile Search Icon Toggle & Submit Action CTA Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Mobile Search Icon Toggle */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-white/90 border border-[#dcd8cc] flex items-center justify-center text-[#17212b] hover:bg-slate-100 transition-colors shadow-xs cursor-pointer"
              aria-label="Toggle Search"
            >
              {isMobileSearchOpen ? (
                <X className="w-4 h-4 text-[#17212b]" />
              ) : (
                <Search className="w-4 h-4 text-[#17212b]" />
              )}
            </button>

            {/* Submit Button */}
            <button
              onClick={onOpenSubmitModal}
              className="flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#17212b] hover:bg-[#2489d3] text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Submit Viral Site</span>
              <span className="sm:hidden">Submit</span>
              <Sparkles className="w-3 h-3 text-amber-300" />
            </button>
          </div>

        </div>

        {/* Collapsible Mobile Search Input Bar */}
        {(isMobileSearchOpen || searchQuery) && (
          <div className="md:hidden pt-2 pb-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#546575]" />
              <input
                type="text"
                autoFocus
                placeholder="Search playlists, creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#2489d3] text-[#17212b] text-xs rounded-full pl-9 pr-8 py-2 outline-none shadow-sm placeholder:text-[#546575]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#546575] hover:text-[#17212b]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
