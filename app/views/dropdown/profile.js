import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['menu', 'profile-dropdown'],
  templateName: 'dropdown/profile',
  didInsertElement: function() {
    var _this = this.$();

    // $('.profile-dropdown-btn').click(function() {
    //   _this.toggleClass('visible');
    //   return false;
    // });

    $('body').click(function(e) {
      var target = $(e.target);
      if( target.is('.profile-dropdown-btn') ) {
        _this.toggleClass('visible');
      }
      else {
        _this.removeClass('visible');
      }
    });
  }
});
