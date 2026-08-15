import React, { useState, useEffect } from 'react';
import { X, Sparkles, Link as LinkIcon, Image as ImageIcon, Loader2, CheckCircle2, Radio } from 'lucide-react';
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
      thumbnailUrl: customThumbnail.trim() || thumbnailUrl || `https://image.thum.io/get/width/1000/crop/650/${url.trim()}`,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0b0f19]/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#eef6fc] border border-[#cfe3f2] rounded-2xl shadow-2xl overflow-hidden my-8 text-[#12212e]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-white border-b border-[#cfe3f2] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2489d3]/10 border border-[#2489d3]/30 flex items-center justify-center text-[#2489d3]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-lg text-[#12212e]">Submit Your Viral Playlist Site</h3>
              <p className="text-xs text-[#4d6578]">Share your music website with the community</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#4d6578] hover:text-[#12212e] hover:bg-[#cfe3f2]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          
          {/* Site Link */}
          <div>
            <label className="block font-semibold text-[#12212e] uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Viral Website Link *</span>
              <span className="text-[#2489d3] font-mono2 text-[11px] lowercase">Auto thumbnail fetch</span>
            </label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4d6578]" />
              <input
                type="url"
                required
                placeholder="https://haryanaroadways.wtf"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full bg-white border border-[#cfe3f2] text-[#12212e] rounded-xl pl-9 pr-9 py-2.5 outline-none focus:border-[#2489d3] transition-all placeholder:text-[#4d6578]"
              />
              {isFetchingThumbnail && (
                <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2489d3] animate-spin" />
              )}
              {fetchSuccess && !isFetchingThumbnail && (
                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600" />
              )}
            </div>
          </div>

          {/* Auto-Fetched TV Frame Thumbnail Live Preview Card */}
          {(thumbnailUrl || isFetchingThumbnail) && (
            <div className="p-3 rounded-xl bg-white border border-[#cfe3f2] flex items-center gap-3">
              <div className="w-28 h-18 rounded-lg overflow-hidden bg-[#05070f] relative shrink-0 border border-[#17191d]">
                {isFetchingThumbnail ? (
                  <div className="w-full h-full flex items-center justify-center text-[#4d6578]">
                    <Loader2 className="w-4 h-4 animate-spin text-[#2489d3]" />
                  </div>
                ) : (
                  <img
                    src={customThumbnail || thumbnailUrl}
                    alt="Auto Fetched Thumbnail"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://image.thum.io/get/width/600/crop/400/${url}`;
                    }}
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 text-[#2489d3] font-bold mb-0.5">
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Auto-Fetched Thumbnail</span>
                </div>
                <p className="text-[#12212e] font-semibold truncate">{title || url}</p>
                <p className="text-[#4d6578] text-[11px] truncate">Will render in Hero Carousel & Directory!</p>
              </div>
            </div>
          )}

          {/* Custom Thumbnail Override (Optional) */}
          <div>
            <label className="block font-semibold text-[#12212e] uppercase tracking-wider mb-1">
              Custom Image Link <span className="text-[#4d6578] lowercase">(optional override)</span>
            </label>
            <input
              type="url"
              placeholder="https://images.unsplash.com/... (leave blank for auto-fetch)"
              value={customThumbnail}
              onChange={(e) => setCustomThumbnail(e.target.value)}
              className="w-full bg-white border border-[#cfe3f2] text-[#12212e] rounded-xl px-3 py-2 outline-none focus:border-[#2489d3] transition-all placeholder:text-[#4d6578]"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block font-semibold text-[#12212e] uppercase tracking-wider mb-1">
              Playlist Title *
            </label>
            <input
              type="text"
              required
              placeholder="Cutting Shop / Deluxe Saloon"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white border border-[#cfe3f2] text-[#12212e] rounded-xl px-3 py-2 outline-none focus:border-[#2489d3] transition-all"
            />
          </div>

          {/* Category Select */}
          <div>
            <label className="block font-semibold text-[#12212e] uppercase tracking-wider mb-1">
              Category *
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-white border border-[#cfe3f2] text-[#12212e] rounded-xl px-3 py-2 outline-none focus:border-[#2489d3] transition-all"
            >
              {INITIAL_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Creator & Social Links */}
          <div className="p-3.5 rounded-xl bg-white border border-[#cfe3f2] space-y-2.5">
            <h4 className="font-bold text-[#12212e] uppercase tracking-wider flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-[#2489d3]" />
              <span>Creator & Social Post Link</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[#4d6578] mb-1">Creator Handle</label>
                <input
                  type="text"
                  placeholder="@yourhandle"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  className="w-full bg-[#eef6fc] border border-[#cfe3f2] text-[#12212e] font-mono2 rounded-lg px-2.5 py-1.5 outline-none focus:border-[#2489d3]"
                />
              </div>

              <div>
                <label className="block text-[#4d6578] mb-1">Social Platform</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSocialPlatform('twitter')}
                    className={`flex-1 py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1 border transition-all ${
                      socialPlatform === 'twitter'
                        ? 'bg-sky-100 text-sky-700 border-sky-300'
                        : 'bg-[#eef6fc] text-[#4d6578] border-[#cfe3f2]'
                    }`}
                  >
                    <TwitterIcon className="w-3.5 h-3.5 text-sky-500" />
                    <span>Twitter / X</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSocialPlatform('instagram')}
                    className={`flex-1 py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1 border transition-all ${
                      socialPlatform === 'instagram'
                        ? 'bg-pink-100 text-pink-700 border-pink-300'
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
              <label className="block text-[#4d6578] mb-1">Social Media Post or Account Link</label>
              <input
                type="url"
                placeholder={`https://${socialPlatform === 'twitter' ? 'x.com' : 'instagram.com'}/...`}
                value={socialUrl}
                onChange={(e) => setSocialUrl(e.target.value)}
                className="w-full bg-[#eef6fc] border border-[#cfe3f2] text-[#12212e] rounded-lg px-2.5 py-1.5 outline-none focus:border-[#2489d3]"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-[#12212e] uppercase tracking-wider mb-1">
              Description
            </label>
            <textarea
              rows={2.5}
              placeholder="Describe your viral playlist site vibe..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full bg-white border border-[#cfe3f2] text-[#12212e] rounded-xl p-2.5 outline-none focus:border-[#2489d3] transition-all placeholder:text-[#4d6578] resize-none"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2 border-t border-[#cfe3f2] flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl font-semibold text-[#4d6578] hover:text-[#12212e] hover:bg-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#2489d3] hover:bg-[#1f7fc7] text-white font-semibold shadow-sm transition-all"
            >
              Submit Viral Site 🚀
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
