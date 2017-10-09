import AnchorURL from './-anchor-url';
import NodeURL, { URLSearchParams as NodeURLSearchParams } from './-node-url';
import PolyfillURLSearchParams, { upgradeClass } from './-url-search-params';

var URL = window && window.URL;
var URLSearchParams =
  (window && window.URLSearchParams) || PolyfillURLSearchParams;

const isFastBoot = typeof FastBoot !== 'undefined';
const hasURL = typeof URL === 'function';
const testURL = hasURL && new URL('http://example.com');

export function needPolyfill() {
  return (
    !isFastBoot &&
    (!hasURL ||
      !testURL.href ||
      !Object.getOwnPropertyDescriptor(URL.prototype, 'search'))
  );
}

if (isFastBoot) {
  URL = NodeURL;
  URLSearchParams = NodeURLSearchParams || PolyfillURLSearchParams;
} else if (needPolyfill()) {
  URL = AnchorURL;
} else if (hasURL && !testURL.searchParams) {
  upgradeClass(URL);
}

export { URLSearchParams };
export default URL;
