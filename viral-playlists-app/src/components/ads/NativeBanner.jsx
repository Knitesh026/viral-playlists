import { useEffect, useRef, useState } from 'react';
import { NATIVE } from './adsterra';

// Adsterra native widget. The container id is fixed by the provider, so render at most one per page.
// The label and spacing only appear once the widget has actually rendered something,
// so a blocked or unfilled ad leaves no orphan "Sponsored" text or gap.
export default function NativeBanner({ className = '' }) {
  const [filled, setFilled] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let script;
    // Defer the append so a StrictMode mount/unmount/mount cycle only ever loads one script.
    const timer = setTimeout(() => {
      if (cancelled) return;
      script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = NATIVE.src;
      document.body.appendChild(script);
    }, 0);

    const container = wrapRef.current.querySelector(`#${NATIVE.containerId}`);
    const observer = new MutationObserver(() => setFilled(container.childElementCount > 0));
    observer.observe(container, { childList: true });

    return () => {
      cancelled = true;
      clearTimeout(timer);
      observer.disconnect();
      script?.remove();
      container.replaceChildren();
      setFilled(false);
    };
  }, []);

  return (
    <aside
      ref={wrapRef}
      aria-label="Sponsored"
      className={`mx-auto max-w-6xl px-4 sm:px-6 ${filled ? className : ''}`}
    >
      {filled && (
        <span className="mb-1 block font-mono2 text-[10px] uppercase tracking-widest text-[#546575]/70">
          Sponsored
        </span>
      )}
      <div id={NATIVE.containerId} />
    </aside>
  );
}
