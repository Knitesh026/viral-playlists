// Smooth scrolling that respects prefers-reduced-motion. Waits one frame so the scroll
// happens after React has committed any filter change that triggered it.
export function scrollToElement(id, block = 'start') {
  requestAnimationFrame(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block });
  });
}
