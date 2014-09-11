import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['gravatar'],
  size: 200,
  email: '',

  gravatarUrl: function() {
    var email = this.get('email'),
        size = this.get('size');

    return 'http://www.gravatar.com/avatar/' + window.md5(email) + '?s=' + size;
  }.property('email', 'size')
});
