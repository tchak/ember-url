import { computed } from '@ember/object';
import Component from '@ember/component';
import { needPolyfill } from 'url';

export default Component.extend({
  yes: computed(function() {
    return needPolyfill();
  })
});
