import Ember from 'ember';
import URL from 'url';

export default Ember.Component.extend({
  results: Ember.computed(function() {
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
  })
});
