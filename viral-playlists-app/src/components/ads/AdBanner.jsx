import { useEffect, useRef } from 'react';
import { BANNERS, loadBanner } from './adsterra';

/**
 * Adsterra iframe banner. `size` is a key of BANNERS. The slot reserves its exact
 * size up front so late-loading ads cause no layout shift.
 */
export default function AdBanner({ size, className = '' }) {
  const ref = useRef(null);
  const { width, height } = BANNERS[size];

  useEffect(() => {
    const el = ref.current;
    let cancelled = false;
    loadBanner(el, BANNERS[size], () => cancelled);
    return () => {
      cancelled = true;
      el.replaceChildren(); // StrictMode / unmount: avoid duplicate ads
    };
  }, [size]);

  return (
    <div className={`flex flex-col items-center ${className}`} aria-label="Advertisement">
      <span className="mb-1 font-mono2 text-[10px] uppercase tracking-widest text-[#546575]/70">
        Advertisement
      </span>
      <div ref={ref} style={{ width, height, maxWidth: '100%' }} className="overflow-hidden" />
    </div>
  );
}
