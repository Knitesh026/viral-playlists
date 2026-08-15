import React, { useState, useEffect } from 'react';
import { X, Sparkles, Link as LinkIcon, Image as ImageIcon, Loader2, CheckCircle2, Radio, Globe } from 'lucide-react';
import { INITIAL_CATEGORIES } from '../data/initialPlaylists';
import { fetchSiteMetadataAndThumbnail } from '../services/thumbnailService';
import { InstagramIcon, TwitterIcon } from './SocialIcons';

export default function SubmitModal({ isOpen, onClose, onSubmitSuccess }) {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('rozmarra');
  const [owner, setOwner] = useState('');
  const [socialPlatform, setSocialPlatform] = useState('twitter');
  const [socialUrl, setSocialUrl] = useState('');
  const [desc, setDesc] = useState('');
  
  // Thumbnail auto-fetch states
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [isFetchingThumbnail, setIsFetchingThumbnail] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const [customThumbnail, setCustomThumbnail] = useState('');

  // Debounced auto-fetch when URL changes
  useEffect(() => {
    if (!url || url.trim().length < 4) {
      setThumbnailUrl('');
      setFetchSuccess(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsFetchingThumbnail(true);
      setFetchSuccess(false);

      try {
        const meta = await fetchSiteMetadataAndThumbnail(url);
        setThumbnailUrl(meta.thumbnailUrl);
        if (!title) setTitle(meta.title);
        if (!desc) setDesc(meta.description);
        setFetchSuccess(true);
      } catch (err) {
        console.error('Thumbnail fetch error:', err);
      } finally {
        setIsFetchingThumbnail(false);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [url]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url || !title) return;

    let finalOwner = owner.trim();
    if (finalOwner && !finalOwner.startsWith('@')) {
      finalOwner = '@' + finalOwner;
    }

    const newPlaylist = {
      id: 'custom-' + Date.now(),
      title: title.trim(),
      desc: desc.trim() || 'A viral user-submitted playlist site.',
      owner: finalOwner || '@community',
      socialPlatform,
      socialUrl: socialUrl.trim() || (finalOwner ? `https://${socialPlatform === 'instagram' ? 'instagram.com/' : 'x.com/'}${finalOwner.replace('@', '')}` : ''),
      url: url.trim().startsWith('http') ? url.trim() : `https://${url.trim()}`,
      category,
      views: 1,
      upvotes: 1,
      featured: true,
      thumbnailUrl: customThumbnail.trim() || thumbnailUrl || `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url.trim())}?w=450`,
      tags: ['User Submitted', category]
    };

    onSubmitSuccess(newPlaylist);

    // Reset form
    setUrl('');
    setTitle('');
    setOwner('');
    setSocialUrl('');
    setDesc('');
    setThumbnailUrl('');
    setCustomThumbnail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#0b0f19]/75 backdrop-blur-md overflow-y-auto">
      
      {/* Doubled 2x Desktop Width Container: max-w-4xl & Responsive for Mobile */}
      <div className="relative w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-[#eef6fc] border border-[#cfe3f2] rounded-3xl shadow-2xl overflow-hidden my-4 sm:my-8 text-[#12212e]">
        
        {/* Header */}
        <div className="px-5 sm:px-8 py-4 sm:py-5 bg-white border-b border-[#cfe3f2] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-[#2489d3]/10 border border-[#2489d3]/30 flex items-center justify-center text-[#2489d3] shrink-0">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#2489d3]" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-[#12212e] leading-tight">
                Submit Your Viral Playlist Site
              </h3>
              <p className="text-xs sm:text-sm text-[#4d6578] font-medium">
                Share your nostalgic or regional music website with thousands of daily listeners
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-full text-[#4d6578] hover:text-[#12212e] hover:bg-[#cfe3f2]/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* 2-Column Desktop Grid Form Body & Responsive Mobile Layout */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-6 text-xs sm:text-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Left Column: Link & Auto-Fetch Thumbnail */}
            <div className="space-y-4">
              
              {/* Site Link */}
              <div>
                <label className="block font-semibold text-[#12212e] uppercase tracking-wider text-[11px] sm:text-xs mb-1.5 flex items-center justify-between">
                  <span>Viral Website Link *</span>
                  <span className="text-[#2489d3] font-mono2 text-[11px] lowercase font-bold flex items-center gap-1">
                    <Globe className="w-3 h-3" /> Auto Thumbnail Fetch
                  </span>
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4d6578]" />
                  <input
                    type="url"
                    required
                    placeholder="https://haryanaroadways.wtf"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full bg-white border border-[#cfe3f2] text-[#12212e] text-xs sm:text-sm rounded-2xl pl-10 pr-10 py-3 outline-none focus:border-[#2489d3] focus:ring-2 focus:ring-[#2489d3]/20 transition-all placeholder:text-[#4d6578] font-medium"
                  />
                  {isFetchingThumbnail && (
                    <Loader2 className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#2489d3] animate-spin" />
                  )}
                  {fetchSuccess && !isFetchingThumbnail && (
                    <CheckCircle2 className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-emerald-600" />
                  )}
                </div>
              </div>

              {/* Auto-Fetched Live Screenshot Card */}
              {(thumbnailUrl || isFetchingThumbnail) && (
                <div className="p-3.5 rounded-2xl bg-white border border-[#cfe3f2] flex items-center gap-4 shadow-xs">
                  <div className="w-32 sm:w-36 aspect-[16/10] rounded-xl overflow-hidden bg-[#05070f] relative shrink-0 border border-[#cfe3f2]">
                    {isFetchingThumbnail ? (
                      <div className="w-full h-full flex flex-col items-center justify-center text-[#4d6578] gap-1">
                        <Loader2 className="w-5 h-5 animate-spin text-[#2489d3]" />
                        <span className="text-[10px] font-mono2">Fetching...</span>
                      </div>
                    ) : (
                      <img
                        src={customThumbnail || thumbnailUrl}
                        alt="Auto Fetched Website Screenshot Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=450`;
                        }}
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 text-[#2489d3] font-bold text-xs mb-1">
                      <ImageIcon className="w-4 h-4" />
                      <span>Live Site Screenshot Preview</span>
                    </div>
                    <p className="text-[#12212e] font-display text-sm truncate">{title || url}</p>
                    <p className="text-[#4d6578] text-xs truncate mt-0.5">Renders live in Marquee & Cards Directory!</p>
                  </div>
                </div>
              )}

              {/* Playlist Title */}
              <div>
                <label className="block font-semibold text-[#12212e] uppercase tracking-wider text-[11px] sm:text-xs mb-1.5">
                  Playlist Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Cutting Shop / Deluxe Saloon"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-white border border-[#cfe3f2] text-[#12212e] text-xs sm:text-sm rounded-2xl px-4 py-3 outline-none focus:border-[#2489d3] focus:ring-2 focus:ring-[#2489d3]/20 transition-all font-medium"
                />
              </div>

              {/* Category Select */}
              <div>
                <label className="block font-semibold text-[#12212e] uppercase tracking-wider text-[11px] sm:text-xs mb-1.5">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white border border-[#cfe3f2] text-[#12212e] text-xs sm:text-sm rounded-2xl px-4 py-3 outline-none focus:border-[#2489d3] focus:ring-2 focus:ring-[#2489d3]/20 transition-all font-medium"
                >
                  {INITIAL_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Right Column: Creator & Social Links */}
            <div className="space-y-4">
              
              {/* Creator & Social Links Panel */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#cfe3f2] space-y-3.5 shadow-xs">
                <h4 className="font-bold text-[#12212e] uppercase tracking-wider text-xs flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#2489d3]" />
                  <span>Creator Credit & Social Link</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#4d6578] text-xs font-semibold mb-1">Creator Handle</label>
                    <input
                      type="text"
                      placeholder="@yourhandle"
                      value={owner}
                      onChange={(e) => setOwner(e.target.value)}
                      className="w-full bg-[#eef6fc] border border-[#cfe3f2] text-[#12212e] font-mono2 text-xs rounded-xl px-3 py-2 outline-none focus:border-[#2489d3] font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-[#4d6578] text-xs font-semibold mb-1">Social Platform</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setSocialPlatform('twitter')}
                        className={`flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                          socialPlatform === 'twitter'
                            ? 'bg-sky-100 text-sky-700 border-sky-300 shadow-xs'
                            : 'bg-[#eef6fc] text-[#4d6578] border-[#cfe3f2]'
                        }`}
                      >
                        <TwitterIcon className="w-3.5 h-3.5 text-sky-500" />
                        <span>Twitter / X</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSocialPlatform('instagram')}
                        className={`flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                          socialPlatform === 'instagram'
                            ? 'bg-pink-100 text-pink-700 border-pink-300 shadow-xs'
                            : 'bg-[#eef6fc] text-[#4d6578] border-[#cfe3f2]'
                        }`}
                      >
                        <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
                        <span>Instagram</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[#4d6578] text-xs font-semibold mb-1">Social Media Post or Profile Link</label>
                  <input
                    type="url"
                    placeholder={`https://${socialPlatform === 'twitter' ? 'x.com' : 'instagram.com'}/...`}
                    value={socialUrl}
                    onChange={(e) => setSocialUrl(e.target.value)}
                    className="w-full bg-[#eef6fc] border border-[#cfe3f2] text-[#12212e] text-xs rounded-xl px-3 py-2 outline-none focus:border-[#2489d3] font-medium"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block font-semibold text-[#12212e] uppercase tracking-wider text-[11px] sm:text-xs mb-1.5">
                  Description
                </label>
                <textarea
                  rows={2.5}
                  placeholder="Describe your viral playlist site vibe (e.g., Barber shop bangers, 90s nostalgia)..."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full bg-white border border-[#cfe3f2] text-[#12212e] text-xs sm:text-sm rounded-2xl p-3 outline-none focus:border-[#2489d3] focus:ring-2 focus:ring-[#2489d3]/20 transition-all placeholder:text-[#4d6578] resize-none font-medium"
                />
              </div>

              {/* Custom Thumbnail Override (Optional) */}
              <div>
                <label className="block font-semibold text-[#12212e] uppercase tracking-wider text-[11px] sm:text-xs mb-1">
                  Custom Image Link <span className="text-[#4d6578] lowercase">(optional override)</span>
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/... (leave blank for auto screenshot)"
                  value={customThumbnail}
                  onChange={(e) => setCustomThumbnail(e.target.value)}
                  className="w-full bg-white border border-[#cfe3f2] text-[#12212e] text-xs rounded-xl px-3 py-2 outline-none focus:border-[#2489d3] font-medium"
                />
              </div>

            </div>

          </div>

          {/* Submit Action Buttons */}
          <div className="pt-4 border-t border-[#cfe3f2] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-[#4d6578] hover:text-[#12212e] hover:bg-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#2489d3] hover:bg-[#1f7fc7] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Submit Viral Site 🚀</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
