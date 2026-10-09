import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
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
  const [filled, setFilled] = useState(false);
  const { width, height } = BANNERS[size];

  useEffect(() => {
    const el = ref.current;
    let cancelled = false;
    // The slot stays collapsed (0 height, no label) until the ad network actually inserts its iframe,
    // so blocked or unfilled ads leave no empty gap.
    const observer = new MutationObserver(() => setFilled(!!el.querySelector('iframe')));
    observer.observe(el, { childList: true, subtree: true });
    loadBanner(el, BANNERS[size], () => cancelled);
    return () => {
      cancelled = true;
      observer.disconnect();
      setFilled(false);
      el.replaceChildren(); // StrictMode / unmount: avoid duplicate ads
    };
  }, [size]);

  return (
    <div className={`flex flex-col items-center ${filled ? className : ''}`}>
      <span hidden={!filled} className="mb-1 font-mono2 text-[10px] uppercase tracking-widest text-[#546575]/70">
        Advertisement
      </span>
      <div ref={ref} style={{ width, height: filled ? height : 0, maxWidth: '100%' }} className="overflow-hidden" />
    </div>
  );
}
