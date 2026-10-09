import AdBanner from './AdBanner';

// 728x90 on tablets/desktops, 320x50 on phones. Only the matching one mounts,
// so only one ad request is made.
import { useSyncExternalStore } from 'react';

const query = '(min-width: 768px)';
const subscribe = (cb) => {
  const mq = window.matchMedia(query);
  mq.addEventListener('change', cb);
  return () => mq.removeEventListener('change', cb);
};

export default function ResponsiveLeaderboard({ className }) {
  const isDesktop = useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => true);
  return <AdBanner key={isDesktop ? 'd' : 'm'} size={isDesktop ? '728x90' : '320x50'} className={className} />;
}
