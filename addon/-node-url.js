import BaseURL from './-base-url';

const isFastBoot = typeof FastBoot !== 'undefined';
var NodeURL = {};
var NodeURLSearchParams = {};

if (isFastBoot) {
  var _url = FastBoot.require('url');
  NodeURL = _url.URL;
  NodeURLSearchParams = _url.URLSearchParams;

  if (!NodeURL) {
    NodeURL = class extends BaseURL {
      constructor(url, base) {
        super(url);

        if (base) {
          url = _url.resolve(base, url);
        }

        url = _url.parse(url);

        if (url.href === '') {
          throw new TypeError('Invalid URL');
        }

        Object.defineProperty(this, '_urlObject', {
          value: url,
          configurable: true
        });
      }

      _setPart(part, value) {
        this._urlObject[part] = value;
        let url = _url.parse(_url.format(this._urlObject));
        Object.defineProperty(this, '_urlObject', {
          value: url,
          configurable: true
        });
      }
    }
  }
}

export { NodeURLSearchParams as URLSearchParams };
export default NodeURL;
