import { useEffect } from 'react';
import { POPUNDER_SRC } from './adsterra';

// One popunder per page view (Adsterra's recommendation).
export default function usePopunder() {
  useEffect(() => {
    if (document.querySelector(`script[src="${POPUNDER_SRC}"]`)) return;
    const s = document.createElement('script');
    s.src = POPUNDER_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);
}
