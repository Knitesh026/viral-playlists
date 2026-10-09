// Adsterra ad units for viral-playlist.vercel.app.
// Banner keys are public identifiers, not secrets.
const BANNER_HOST = 'https://www.highrevenueformat.com';

export const BANNERS = {
  '728x90': { key: '03b842200f4208a56012d54887f2f00b', width: 728, height: 90 },
  '468x60': { key: '134a9713dbb3143b8e7fb2381c8ba200', width: 468, height: 60 },
  '320x50': { key: '4f7aff429b490f5c736a0f9151c72a07', width: 320, height: 50 },
  '300x250': { key: 'bac295afd33201db90cb12f400a1350b', width: 300, height: 250 },
  '160x300': { key: '8eb98774580a9bd5abf0143a28617272', width: 160, height: 300 },
  '160x600': { key: '7baa8836089a4cc897adf5186196d0a6', width: 160, height: 600 },
};

export const bannerScriptUrl = (key) => `${BANNER_HOST}/${key}/invoke.js`;

export const POPUNDER_SRC =
  'https://pl31736949.profitableratecpmnetwork.com/d3/ae/d9/d3aed928ed1568224cb891ecf2f105ff.js';

export const NATIVE = {
  containerId: 'container-0bfd3351966c3c3da844b593d2207c1d',
  src: 'https://pl31736950.profitableratecpmnetwork.com/0bfd3351966c3c3da844b593d2207c1d/invoke.js',
};

export const SMARTLINK =
  'https://www.profitableratecpmnetwork.com/zhpef5hsqc?key=8d12e86c4bfff0880bef59a6c3a446c1';

// Banner invoke.js reads the global `atOptions` when it runs, so only one banner
// may load at a time. Queue loads to keep several banners on a page from clobbering it.
let queue = Promise.resolve();

export function loadBanner(container, { key, width, height }, isCancelled) {
  queue = queue.then(
    () =>
      new Promise((resolve) => {
        if (isCancelled()) return resolve();
        window.atOptions = { key, format: 'iframe', height, width, params: {} };
        const s = document.createElement('script');
        s.src = bannerScriptUrl(key);
        s.async = true;
        s.onload = s.onerror = () => resolve();
        container.appendChild(s);
        setTimeout(resolve, 5000); // never block the queue on a slow ad
      })
  );
}
