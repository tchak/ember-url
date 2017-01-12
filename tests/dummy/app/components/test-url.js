import Ember from 'ember';
import URL from 'url';

export default Ember.Component.extend({
  test1: Ember.computed(function() {
    let results = {};
    let url = new URL('https://example.com?a=1&b=2');
    results['should have searchParams'] = !!url.searchParams;
    results['?a=1&b=2'] = url.search === '?a=1&b=2';
    results['a=1'] = url.searchParams.get('a') === '1';
    results['b=2'] = url.searchParams.get('b') === '2';
    url.searchParams.set('c', '3');
    results['c=3'] = url.searchParams.get('c') === '3';
    results['a=1&b=2&c=3'] = url.searchParams.toString() === 'a=1&b=2&c=3';
    results['href:https://example.com/?a=1&b=2&c=3'] = url.href === 'https://example.com/?a=1&b=2&c=3';
    results['toString:https://example.com/?a=1&b=2&c=3'] = url.toString() === 'https://example.com/?a=1&b=2&c=3';
    url.searchParams.delete('a');
    results['href:https://example.com/?b=2&c=3'] = url.href === 'https://example.com/?b=2&c=3';

    return Ember.String.htmlSafe(Object.keys(results).map((key) => {
      return `<b>${key}</b> ${results[key]}`;
    }).join('<br>'));
  }),

  test2: Ember.computed(function() {
    let results = {};
    let url = new URL('https://example.com');
    url.searchParams.set('a', 'b');
    results['https://example.com/?a=b'] = url.href === 'https://example.com/?a=b';

    return Ember.String.htmlSafe(Object.keys(results).map((key) => {
      return `<b>${key}</b> ${results[key]}`;
    }).join('<br>'));
  }),

  test3: Ember.computed(function() {
    let results = {};
    let url = new URL('/?a=1&b=2', 'https://example.com');
    results['should have searchParams'] = !!url.searchParams;
    results['?a=1&b=2'] = url.search === '?a=1&b=2';
    results['1'] = url.searchParams.get('a') === '1';
    results['2'] = url.searchParams.get('b') === '2';
    url.searchParams.set('c', '3');
    results['3'] = url.searchParams.get('c') === '3';
    results['a=1&b=2&c=3'] = url.searchParams.toString() === 'a=1&b=2&c=3';
    results['https://example.com/?a=1&b=2&c=3'] = url.href === 'https://example.com/?a=1&b=2&c=3';
    results['https://example.com/?a=1&b=2&c=3'] = url.toString() === 'https://example.com/?a=1&b=2&c=3';
    url.searchParams.delete('a');
    results['https://example.com/?b=2&c=3'] = url.href === 'https://example.com/?b=2&c=3';

    return Ember.String.htmlSafe(Object.keys(results).map((key) => {
      return `<b>${key}</b> ${results[key]}`;
    }).join('<br>'));
  })
});
