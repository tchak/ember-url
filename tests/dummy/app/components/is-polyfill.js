import Ember from 'ember';
import { needPolyfill } from 'url';

export default Ember.Component.extend({
  yes: Ember.computed(function() {
    return needPolyfill();
  })
});
