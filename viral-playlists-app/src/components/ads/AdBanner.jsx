import { useEffect, useRef, useSyncExternalStore } from 'react';
import { BANNERS, loadBanner } from './adsterra';

/** True when the viewport is at least `px` wide (always true when px is 0). */
function useMinViewport(px) {
  const query = `(min-width: ${px}px)`;
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query);
      mq.addEventListener('change', cb);
      return () => mq.removeEventListener('change', cb);
    },
    () => window.matchMedia(query).matches,
    () => true
  );
}

/**
 * Adsterra iframe banner. `size` is a key of BANNERS. The slot reserves its exact
 * size up front so late-loading ads cause no layout shift. Pass `minViewport` to skip
 * (not mount, not request) the ad on screens too narrow to show it uncropped.
 */
export default function AdBanner({ size, className = '', minViewport = 0 }) {
  const fits = useMinViewport(minViewport);
  if (!fits) return null;
  return <AdSlot size={size} className={className} />;
}

function AdSlot({ size, className }) {
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
    <div className={`flex flex-col items-center ${className}`}>
      <span className="mb-1 font-mono2 text-[10px] uppercase tracking-widest text-[#546575]/70">
        Advertisement
      </span>
      <div ref={ref} style={{ width, height, maxWidth: '100%' }} className="overflow-hidden" />
    </div>
  );
}
