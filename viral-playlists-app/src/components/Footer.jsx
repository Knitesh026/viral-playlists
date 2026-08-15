import React from 'react';

export default function Footer({ totalCount, onOpenSubmitModal }) {
  return (
    <footer className="border-t border-[#dcd8cc] pb-16 pt-12 mt-12 bg-white/40">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        
        <p className="font-display text-xl sm:text-2xl text-[#17212b]">
          Viral Playlist — Nostalgic • Uncover & Share Viral Music Sites
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={onOpenSubmitModal}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#17212b] hover:bg-[#2489d3] text-white text-xs font-semibold shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <span>+ Submit Your Viral Playlist Site 🚀</span>
          </button>
        </div>

        <p className="font-mono2 mt-8 text-[11px] uppercase tracking-[0.3em] text-[#546575] opacity-70">
          Viral Playlist — Nostalgic • Curated with love
        </p>

      </div>
    </footer>
  );
}
