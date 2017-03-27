import AnchorURL from './-anchor-url';
import NodeURL from './-node-url';
import { upgradeClass } from './-url-search-params';

var URL = window && window.URL;

const isFastBoot = typeof FastBoot !== 'undefined';
const hasURL = typeof URL === 'function';
const testURL = hasURL && new URL('http://example.com');

export function needPolyfill() {
  return !Object.getOwnPropertyDescriptor(URL.prototype, 'search') ||
    !hasURL ||
    !testURL.href;
}

if (isFastBoot) {
  URL = NodeURL;
} else if (needPolyfill()) {
  URL = AnchorURL;
} else if (hasURL && !testURL.searchParams) {
  upgradeClass(URL);
}

export default URL;
