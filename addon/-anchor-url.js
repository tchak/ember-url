import BaseURL from './-base-url';

export default class AnchorURL extends BaseURL {
  constructor(url, base) {
    super(url);

    let doc = document.implementation.createHTMLDocument('');
    if (base) {
      let baseElement = doc.createElement('base');
      baseElement.href = base || window.lo;
      doc.head.appendChild(baseElement);
    }
    let anchorElement = doc.createElement('a');
    anchorElement.href = url;
    doc.body.appendChild(anchorElement);

    if (anchorElement.href === '') {
      throw new TypeError('Invalid URL');
    }

    Object.defineProperty(this, '_urlObject', { value: anchorElement });
  }
}
