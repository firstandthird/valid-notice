/*!
 * valid-notice - Automatically call $.notice on form error
 * v0.0.0
 * https://github.com/firstandthird/valid-notice
 * copyright First + Third 2014
 * MIT License
*/(function($) {

  $.declare('validNotice', {
    events: {
      'formInvalid': 'showNotice'
    },
    showNotice: function(event, el, errors) {
      if(errors.length) {
        if(errors[0].element) {
          var message = $(errors[0].element).data('notice-error') || 'Invalid form';
          $.notice(message);
        }
      }
    }
  });

}(jQuery));