import AnchorURL from './-anchor-url';
import NodeURL from './-node-url';
import { upgradeClass } from './-url-search-params';

const isFastBoot = typeof FastBoot !== 'undefined';
const hasURL = typeof URL !== 'undefined';
const testURL = hasURL && new URL('http://example.com');

var URL;

if (isFastBoot) {
  URL = NodeURL;
} else if (!hasURL || !testURL.href) {
  URL = AnchorURL;
} else if (hasURL && !testURL.searchParams) {
  URL = window.URL;
  upgradeClass(URL);
}

export default URL;
