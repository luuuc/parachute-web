import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['sidebar', 'column', 'left', 'border'],
  templateName: 'sidebar/exceptions',
  didInsertElement: function() {
    var _this = this.$();
    $('.exception-sidebar-btn').click(function() {
      _this.toggleClass('visible');
      return false;
    });
  }
});
