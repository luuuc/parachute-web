import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['menu', 'settings-dropdown'],
  templateName: 'dropdown/settings',
  didInsertElement: function() {
    var _this = this.$();
    // $('.settings-dropdown-btn').click(function() {
    //   _this.toggleClass('visible');
    //   return false;
    // });

    $('body').click(function(e) {
      var target = $(e.target);
      if( target.is('.settings-dropdown-btn') ) {
        _this.toggleClass('visible');
      }
      else {
        _this.removeClass('visible');
      }
    });
  }
});
