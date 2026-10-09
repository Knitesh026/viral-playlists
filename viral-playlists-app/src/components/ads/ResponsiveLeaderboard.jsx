import { useSyncExternalStore } from 'react';
import AdBanner from './AdBanner';

// Pick the largest banner that fits the content column (viewport minus page padding):
// 728x90 from 1024px, 468x60 from 640px, otherwise 320x50. Only one mounts, so only one ad request is made.
const subscribe = (cb) => {
  const mqs = [window.matchMedia('(min-width: 1024px)'), window.matchMedia('(min-width: 640px)')];
  mqs.forEach((mq) => mq.addEventListener('change', cb));
  return () => mqs.forEach((mq) => mq.removeEventListener('change', cb));
};

const getSize = () =>
  window.matchMedia('(min-width: 1024px)').matches
    ? '728x90'
    : window.matchMedia('(min-width: 640px)').matches
      ? '468x60'
      : '320x50';

export default function ResponsiveLeaderboard({ className }) {
  const size = useSyncExternalStore(subscribe, getSize, () => '728x90');
  return <AdBanner key={size} size={size} className={className} />;
}
