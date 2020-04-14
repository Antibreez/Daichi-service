(function( $ ) {
  $(document).ready(function() {
    $('.js-example-basic-single').select2({
      placeholder: "Выберите город"
    });

    $('.js-example-basic-single').on('select2:open', function (e) {
      $(".select2-results").mCustomScrollbar({
        setHeight: 150,
        autoHideScrollbar: true
      });
    });
  });
})( jQuery );
