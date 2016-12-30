import { upgradeClass } from './-url-search-params';

class BaseURL {
  constructor(url) {
    if (!url) {
      throw new TypeError('Invalid argument');
    }
  }

  _setPart(part, value) {
    this._urlObject[part] = value;
  }

  toString() {
    return this.href;
  }

  get href() {
    return this._urlObject.href;
  }
  set href(value) {
    this._setPart('href', value);
  }

  get protocol() {
    return this._urlObject.protocol;
  }
  set protocol(value) {
    this._setPart('protocol', value);
  }

  get host() {
    return this._urlObject.host;
  }
  set host(value) {
    this._setPart('host', value);
  }

  get hostname() {
    return this._urlObject.hostname;
  }
  set hostname(value) {
    this._setPart('hostname', value);
  }

  get port() {
    return this._urlObject.port;
  }
  set port(value) {
    this._setPart('port', value);
  }

  get pathname() {
    return this._urlObject.pathname;
  }
  set pathname(value) {
    this._setPart('pathname', value);
  }

  get search() {
    return this._urlObject.search;
  }
  set search(value) {
    this._setPart('search', value);
  }

  get hash() {
    return this._urlObject.hash;
  }
  set hash(value) {
    this._setPart('hash', value);
  }
}

upgradeClass(BaseURL);

export default BaseURL;
