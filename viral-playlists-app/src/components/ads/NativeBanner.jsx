import { useEffect } from 'react';
import { NATIVE } from './adsterra';

// Adsterra native widget. The container id is fixed by the provider, so render at most one per page.
export default function NativeBanner({ className = '' }) {
  useEffect(() => {
    const s = document.createElement('script');
    s.async = true;
    s.setAttribute('data-cfasync', 'false');
    s.src = NATIVE.src;
    document.body.appendChild(s);
    return () => {
      s.remove();
      document.getElementById(NATIVE.containerId)?.replaceChildren();
    };
  }, []);

  return (
    <aside className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`} aria-label="Sponsored">
      <span className="mb-1 block font-mono2 text-[10px] uppercase tracking-widest text-[#546575]/70">
        Sponsored
      </span>
      <div id={NATIVE.containerId} />
    </aside>
  );
}
