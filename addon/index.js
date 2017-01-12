import AnchorURL from './-anchor-url';
import NodeURL from './-node-url';
import { upgradeClass } from './-url-search-params';

var URL = window && window.URL;

const isFastBoot = typeof FastBoot !== 'undefined';
const hasURL = typeof URL === 'function';
const testURL = hasURL && new URL('http://example.com');

if (isFastBoot) {
  URL = NodeURL;
} else if (!hasURL || !testURL.href) {
  URL = AnchorURL;
} else if (hasURL && !testURL.searchParams) {
  upgradeClass(URL);
}

export default URL;
