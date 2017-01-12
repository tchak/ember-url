import { module, test } from 'ember-qunit';
import URL from 'url';

module('url-search-params');

test('url', (assert) => {
  let url = new URL('https://example.com?a=1&b=2');
  assert.ok(url.searchParams, 'should have searchParams');
  assert.equal(url.search, '?a=1&b=2');
  assert.equal(url.searchParams.get('a'), '1');
  assert.equal(url.searchParams.get('b'), '2');
  url.searchParams.set('c', '3');
  assert.equal(url.searchParams.get('c'), '3');
  assert.deepEqual(url.searchParams.toString(), 'a=1&b=2&c=3');
  assert.equal(url.href, 'https://example.com/?a=1&b=2&c=3');
  assert.equal(url.toString(), 'https://example.com/?a=1&b=2&c=3');
  url.searchParams.delete('a');
  assert.equal(url.href, 'https://example.com/?b=2&c=3');
});

test('add query params to url', (assert) => {
  let url = new URL('https://example.com');
  url.searchParams.set('a', 'b');
  assert.equal(url.href, 'https://example.com/?a=b');
});

test('url base', (assert) => {
  let url = new URL('/?a=1&b=2', 'https://example.com');
  assert.ok(url.searchParams, 'should have searchParams');
  assert.equal(url.search, '?a=1&b=2');
  assert.equal(url.searchParams.get('a'), '1');
  assert.equal(url.searchParams.get('b'), '2');
  url.searchParams.set('c', '3');
  assert.equal(url.searchParams.get('c'), '3');
  assert.deepEqual(url.searchParams.toString(), 'a=1&b=2&c=3');
  assert.equal(url.href, 'https://example.com/?a=1&b=2&c=3');
  assert.equal(url.toString(), 'https://example.com/?a=1&b=2&c=3');
  url.searchParams.delete('a');
  assert.equal(url.href, 'https://example.com/?b=2&c=3');
});
