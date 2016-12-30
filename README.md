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
