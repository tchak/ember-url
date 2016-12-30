import BaseURL from './-base-url';

var _url;

export default class NodeURL extends BaseURL {
  constructor(url, base) {
    super(url);

    _url = _url || FastBoot.require('url');

    if (base) {
      url = _url.resolve(base, url);
    }

    url = _url.parse(url);

    if (url.href === '') {
      throw new TypeError('Invalid URL');
    }

    Object.defineProperty(this, '_urlObject', { value: url, configurable: true });
  }

  _setPart(part, value) {
    this._urlObject[part] = value;
    let url = _url.parse(_url.format(this._urlObject));
    Object.defineProperty(this, '_urlObject', { value: url, configurable: true });
  }
}
