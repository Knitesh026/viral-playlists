import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { INITIAL_PLAYLISTS } from './data/initialPlaylists';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoryFilter from './components/CategoryFilter';
import PlaylistGrid from './components/PlaylistGrid';
import SeoKeywordsSection from './components/SeoKeywordsSection';
import SubmitModal from './components/SubmitModal';
import Footer from './components/Footer';
import ResponsiveLeaderboard from './components/ads/ResponsiveLeaderboard';
import NativeBanner from './components/ads/NativeBanner';
import usePopunder from './components/ads/usePopunder';

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
    } catch (err) {
      console.error('Failed to load local storage playlists', err);
    }
    return INITIAL_PLAYLISTS;
  });

  const [upvotedIds, setUpvotedIds] = useState(() => {
    try {
      const saved = localStorage.getItem(UPVOTES_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Support shareable links such as /?q=saloon (advertised in the JSON-LD SearchAction)
  const [searchQuery, setSearchQuery] = useState(
    () => new URLSearchParams(window.location.search).get('q') || ''
  );
  const [activeCategory, setActiveCategory] = useState('all');

  // Only the id is stored; the playlist itself is derived so vote counts never go stale
  const [heroId, setHeroId] = useState(() => (playlists.find(p => p.featured) || playlists[0])?.id);

  usePopunder();

  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const toastTimer = useRef();
  const closeSubmitModal = useCallback(() => setIsSubmitModalOpen(false), []);

  // Save upvotes to local storage
  useEffect(() => {
    try {
      localStorage.setItem(UPVOTES_KEY, JSON.stringify(Array.from(upvotedIds)));
    } catch {
      // storage unavailable (private mode / quota) - votes just won't persist
    }
  }, [upvotedIds]);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  // Vote counts are derived (base + this browser's vote) so they survive reloads
  const votedPlaylists = useMemo(
    () => playlists.map(p => (upvotedIds.has(p.id) ? { ...p, upvotes: (p.upvotes || 0) + 1 } : p)),
    [playlists, upvotedIds]
  );

  // Filtered playlists
  const filteredPlaylists = useMemo(() => {
    return votedPlaylists.filter(p => {
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
  }, [votedPlaylists, activeCategory, searchQuery]);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMessage(''), 3500);
  }, []);

  const handleSelectHero = (playlist) => {
    setHeroId(playlist.id);
    showToast(`Featured "${playlist.title}" in Hero Carousel!`);
  };

  const handleUpvote = (id) => {
    if (upvotedIds.has(id)) return;
    setUpvotedIds(prev => new Set([...prev, id]));
    showToast('Upvoted playlist site!');
  };

  const handleSubmitSuccess = (newPlaylist) => {
    const updatedPlaylists = [newPlaylist, ...playlists];
    setPlaylists(updatedPlaylists);

    // Save custom user submissions to localStorage
    try {
      const userCustoms = updatedPlaylists.filter(p => p.id.startsWith('custom-'));
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userCustoms));
    } catch (err) {
      console.error('LocalStorage write error:', err);
    }

    // Set new playlist as Active in Hero Carousel automatically
    setHeroId(newPlaylist.id);
    showToast(`🎉 "${newPlaylist.title}" submitted & featured in Hero Carousel!`);
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
        totalCount={votedPlaylists.length}
      />

      <main className="mx-auto max-w-[95vw] px-2 sm:px-4 pt-20 sm:pt-24 md:pt-28">

        {/* Main Hero Thumbnail Carousel */}
        <HeroSection
          playlists={votedPlaylists}
          activeHeroId={heroId}
          onSelectHero={handleSelectHero}
          onUpvote={handleUpvote}
          onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        />

        {/* Ad: responsive leaderboard (728x90 desktop / 320x50 mobile) */}
        <ResponsiveLeaderboard className="mb-6" />

        {/* Category Filter Chips */}
        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          filteredCount={filteredPlaylists.length}
          totalCount={votedPlaylists.length}
        />

        {/* Playlist Card Grid */}
        <PlaylistGrid
          playlists={filteredPlaylists}
          onSelectHero={handleSelectHero}
          activeHeroId={heroId}
          onUpvote={handleUpvote}
          upvotedIds={upvotedIds}
        />

        {/* Ad: native banner (one per page) */}
        <NativeBanner className="mb-10" />

        {/* SEO Keywords, Topic Clusters & FAQ Directory Hub */}
        <SeoKeywordsSection
          setSearchQuery={setSearchQuery}
          setActiveCategory={setActiveCategory}
          onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        />
      </main>

      {/* Submission Modal Dialog */}
      <SubmitModal
        isOpen={isSubmitModalOpen}
        onClose={closeSubmitModal}
        onSubmitSuccess={handleSubmitSuccess}
      />

      {/* Footer */}
      <Footer
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
      />

    </div>
  );
}
