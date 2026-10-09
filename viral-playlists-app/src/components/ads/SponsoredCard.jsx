import { ExternalLink } from 'lucide-react';
import { SMARTLINK } from './adsterra';

// Smartlink presented as a clearly labelled grid card.
export default function SponsoredCard() {
  return (
    <a
      href={SMARTLINK}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className="group flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[#2489d3]/40 bg-white/60 p-6 text-center transition-colors hover:border-[#2489d3] hover:bg-white"
    >
      <span className="rounded-full bg-[#17212b] px-2.5 py-0.5 font-mono2 text-[10px] uppercase tracking-widest text-white">
        Sponsored
      </span>
      <span className="font-display text-xl text-[#17212b]">Something worth a look</span>
      <span className="text-sm font-medium text-[#334155]">Recommended by our partners</span>
      <span className="inline-flex items-center gap-1 text-sm font-bold text-[#2489d3] group-hover:underline">
        Check it out <ExternalLink className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}
