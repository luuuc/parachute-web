import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['sidebar', 'column', 'right', 'border'],
  templateName: 'sidebar/notifications',
  didInsertElement: function() {
    var _this = this.$();
    $('.notification-sidebar-btn').click(function() {
      _this.toggleClass('visible');
      return false;
    });
  }
});
