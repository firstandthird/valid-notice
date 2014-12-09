(function($) {

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