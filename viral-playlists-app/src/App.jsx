import React, { useState, useEffect, useMemo } from 'react';
import { INITIAL_PLAYLISTS } from './data/initialPlaylists';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoryFilter from './components/CategoryFilter';
import PlaylistGrid from './components/PlaylistGrid';
import SeoKeywordsSection from './components/SeoKeywordsSection';
import SubmitModal from './components/SubmitModal';
import Footer from './components/Footer';

const LOCAL_STORAGE_KEY = 'viral_playlists_user_submissions';
const UPVOTES_KEY = 'viral_playlists_upvotes';

export default function App() {
  const [playlists, setPlaylists] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...parsed, ...INITIAL_PLAYLISTS];
      }
    } catch (e) {
      console.error('Failed to load local storage playlists', e);
    }
    return INITIAL_PLAYLISTS;
  });

  const [upvotedIds, setUpvotedIds] = useState(() => {
    try {
      const saved = localStorage.getItem(UPVOTES_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (e) {
      return new Set();
    }
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Active Hero playlist ID for Carousel
  const [heroPlaylist, setHeroPlaylist] = useState(() => {
    return playlists.find(p => p.featured) || playlists[0];
  });

  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Save upvotes to local storage
  useEffect(() => {
    try {
      localStorage.setItem(UPVOTES_KEY, JSON.stringify(Array.from(upvotedIds)));
    } catch (e) {}
  }, [upvotedIds]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = { all: playlists.length };
    playlists.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [playlists]);

  // Filtered playlists
  const filteredPlaylists = useMemo(() => {
    return playlists.filter(p => {
      const matchesCat = activeCategory === 'all' || p.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;

      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        (p.owner && p.owner.toLowerCase().includes(q)) ||
        p.url.toLowerCase().includes(q) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(q)));

      return matchesCat && matchesSearch;
    });
  }, [playlists, activeCategory, searchQuery]);

  const handleSelectHero = (playlist) => {
    setHeroPlaylist(playlist);
    showToast(`Featured "${playlist.title}" in Hero Carousel!`);
  };

  const handleUpvote = (id) => {
    if (upvotedIds.has(id)) return;

    setUpvotedIds(prev => new Set([...prev, id]));
    setPlaylists(prev =>
      prev.map(p => (p.id === id ? { ...p, upvotes: (p.upvotes || 0) + 1 } : p))
    );

    if (heroPlaylist && heroPlaylist.id === id) {
      setHeroPlaylist(prev => ({ ...prev, upvotes: (prev.upvotes || 0) + 1 }));
    }

    showToast('Upvoted playlist site!');
  };

  const handleSubmitSuccess = (newPlaylist) => {
    const updatedPlaylists = [newPlaylist, ...playlists];
    setPlaylists(updatedPlaylists);

    // Save custom user submissions to localStorage
    try {
      const userCustoms = updatedPlaylists.filter(p => p.id.startsWith('custom-'));
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userCustoms));
    } catch (e) {
      console.error('LocalStorage write error:', e);
    }

    // Set new playlist as Active in Hero Carousel automatically
    setHeroPlaylist(newPlaylist);
    showToast(`🎉 "${newPlaylist.title}" submitted & featured in Hero Carousel!`);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  return (
    <div className="min-h-screen bg-[#f0eee6] text-[#17212b] font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-[#17212b] text-white text-xs font-semibold shadow-2xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2489d3] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Banner Header */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        totalCount={playlists.length}
      />

      <main className="mx-auto max-w-[95vw] px-2 sm:px-4 pt-20 sm:pt-24 md:pt-28">

        {/* Main Hero Thumbnail Carousel */}
        <HeroSection
          playlists={playlists}
          activeHeroId={heroPlaylist?.id}
          onSelectHero={handleSelectHero}
          onUpvote={handleUpvote}
          onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        />

        {/* Category Filter Chips */}
        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          playlistCounts={categoryCounts}
          filteredCount={filteredPlaylists.length}
          totalCount={playlists.length}
        />

        {/* Playlist Card Grid */}
        <PlaylistGrid
          playlists={filteredPlaylists}
          onSelectHero={handleSelectHero}
          activeHeroId={heroPlaylist?.id}
          onUpvote={handleUpvote}
        />

        {/* SEO Keywords, Topic Clusters & FAQ Directory Hub */}
        <SeoKeywordsSection
          playlists={playlists}
          setSearchQuery={setSearchQuery}
          setActiveCategory={setActiveCategory}
          onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        />
      </main>

      {/* Submission Modal Dialog */}
      <SubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmitSuccess={handleSubmitSuccess}
      />

      {/* Footer */}
      <Footer
        totalCount={playlists.length}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
      />

    </div>
  );
}
