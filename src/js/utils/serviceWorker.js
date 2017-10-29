import { IS_PRODUCTION } from './constants';

export default function registerServiceWorker() {
  if (navigator.serviceWorker && IS_PRODUCTION) {
    navigator.serviceWorker.register('/sw.js')
      .catch((err) => {
        console.error('Unable to register service worker.', err); // eslint-disable-line no-console
      });
  }
}
