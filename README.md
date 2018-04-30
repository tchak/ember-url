# ember-url

[![Build Status](https://travis-ci.org/tchak/ember-url.svg?branch=master)](https://travis-ci.org/tchak/ember-url)
[![Ember Observer Score](http://emberobserver.com/badges/ember-url.svg)](http://emberobserver.com/addons/ember-url)
[![npm version](https://badge.fury.io/js/ember-url.svg)](http://badge.fury.io/js/ember-url)

HTML5 [URL](https://url.spec.whatwg.org) polyfill bundled for ember-cli users

* [spec](https://fetch.spec.whatwg.org)

## Installation

* `ember install ember-url`

## Usage

```js
import URL from 'url';

let url = new URL('https://example.com/?q=Paris');
url.searchParams.get('q') // 'Paris'
```

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
