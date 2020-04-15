(function( $, checkFormValidity ) {
  $(document).ready(function() {
    var selections = 0;
    var isDesktop = function () {
      return window.matchMedia('(min-width: 1400px)').matches;
    } ;

    var isTablet = function () {
      return  window.matchMedia('(min-width: 768px)').matches
        && window.matchMedia('(max-width: 1023px)').matches;
    };

    var isMobile = function () {
      return  window.matchMedia('(min-width: 320px)').matches
        && window.matchMedia('(max-width: 479px)').matches;
    };


    var isOutOfDesktop = !isDesktop();
    var isOutOfTablet = !isTablet();
    var isOutOfMobile = !isMobile();

    $('.js-example-basic-single').select2({
      placeholder: "Выберите город"
    });

    $('.js-example-basic-single').val(null).trigger('change');

    $('.js-example-basic-single').on('select2:open', function (e) {
      $(".select2-results").mCustomScrollbar({
        setHeight: 150,
        autoHideScrollbar: true,
        theme: 'minimal-dark'
      });

      if (selections < 1) {
        $('.js-example-basic-single').val('610').trigger('change');
        selections++;
      }

      setTimeout(function () {
        $('.select2-search__field').focus();
      }, 400);
    });

    $('.js-example-basic-single').on('select2:select', function (e) {
      checkFormValidity();
    });

    $(window).on('resize', function () {
      if (!isDesktop() && !isOutOfDesktop) {
        isOutOfDesktop = true;

        $('.js-example-basic-single').select2('destroy');

        setTimeout(function () {
          $('.js-example-basic-single').select2({
            placeholder: "Выберите город"
          });
        }, 300);
      }

      if (isDesktop() && isOutOfDesktop) {
        isOutOfDesktop = false;

        $('.js-example-basic-single').select2('destroy');

        setTimeout(function () {
          $('.js-example-basic-single').select2({
            placeholder: "Выберите город"
          });
        }, 300);
      }

      if (!isTablet() && !isOutOfTablet) {
        isOutOfTablet = true;

        $('.js-example-basic-single').select2('destroy');

        setTimeout(function () {
          $('.js-example-basic-single').select2({
            placeholder: "Выберите город"
          });
        }, 300);
      }

      if (isTablet() && isOutOfTablet) {
        isOutOfTablet = false;
        $('.js-example-basic-single').select2('destroy');

        setTimeout(function () {
          $('.js-example-basic-single').select2({
            placeholder: "Выберите город"
          });
        }, 300);
      }

      if (!isMobile() && !isOutOfMobile) {
        isOutOfMobile = true;

        $('.js-example-basic-single').select2('destroy');

        setTimeout(function () {
          $('.js-example-basic-single').select2({
            placeholder: "Выберите город"
          });
        }, 300);
      }

      if (isMobile() && isOutOfMobile) {
        isOutOfMobile = false;

        $('.js-example-basic-single').select2('destroy');

        setTimeout(function () {
          $('.js-example-basic-single').select2({
            placeholder: "Выберите город"
          });
        }, 300);
      }
    })
  });
})( jQuery, window.checkFormValidity );
