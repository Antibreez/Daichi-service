(function () {
  var slider = new Swiper('.brands-tape__container', {
    slidesPerView: '7',
    loop: true,
    speed: 2000,
    freeMode: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },
  });
})();

(function () {
  function initFreeSwiper() {
    return new Swiper('.equipment__slider-container', {
      freeMode: true,
      slidesPerView: 2.3
    });
  }

  function initSingleSwiper() {
    return new Swiper('.equipment__slider-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    });
  }

  var isTablet = function () {
    return window.matchMedia("(min-width: 768px)").matches;
  };

  var isOutOfTablet = !isTablet();

  var slider = isTablet()
    ? initFreeSwiper()
    : initSingleSwiper();

  if (!slider) {
    return;
  }

  var onResize = function () {
    if (isOutOfTablet && isTablet()) {
      slider.destroy(true, true);
      slider = initFreeSwiper();
      isOutOfTablet = false;
    }

    if (!isOutOfTablet && !isTablet()) {
      slider.destroy(true, true);
      slider = initSingleSwiper();
      isOutOfTablet = true;
    }
  }

  window.addEventListener('resize', onResize);
})();

(function () {
  var form = document.querySelector('.service-form form');
  var nameInput = document.querySelector('.service-form__input--name');
  var nameLabel = document.querySelector('.service-form__label--name');
  var surnameInput = document.querySelector('.service-form__input--surname');
  var surnameLabel = document.querySelector('.service-form__label--surname');
  var phoneInput = document.querySelector('.service-form__input--phone');
  var phoneLabel = document.querySelector('.service-form__label--phone');
  var emailInput = document.querySelector('.service-form__input--email');
  var emailLabel = document.querySelector('.service-form__label--email');
  var cityInput = document.querySelector('.service-form__input--city');
  var cityLabel = document.querySelector('.service-form__label--city');
  var textInput = document.querySelector('.service-form__text');
  var textLabel = document.querySelector('.service-form__label--text');
  var checkboxInput = document.querySelector("input[type='checkbox']");
  var checkboxLabel = document.querySelector("label[for='agreement']");
  var agreement = document.querySelector('.service-form__text-wrapper');
  var submitButton = document.querySelector('.service-form__submit');

  if (!form) {
    return;
  }

  var imPhone = new Inputmask('+7(999)999-99-99');
  imPhone.mask(phoneInput);

  var isNameValid = false;
  var isSurnameValid = false;
  var isPhoneValid = false;
  var isEmailValid = false;
  var isTextValid = false;
  var isAgree = false;

  var disableButton = function () {
    if (!submitButton.hasAttribute('disabled')) {
      submitButton.setAttribute('disabled', '');
    }
  };

  var enableButton = function () {
    if (submitButton.hasAttribute('disabled')) {
      submitButton.removeAttribute('disabled');
    }
  };

  var renderError = function (target) {
    if (!target.classList.contains('js--error')) {
      target.classList.add('js--error');
    }
  };

  var removeError = function (target) {
    if (target.classList.contains('js--error')) {
      target.classList.remove('js--error');
    }
  };

  var checkFormValidity = function () {
    if (
      isNameValid
      && isSurnameValid
      && isPhoneValid
      && isEmailValid
      && isTextValid
      && isAgree
      && cityInput.value !== ''
    ) {
      enableButton();
    } else {
      disableButton();
    }
  };

  var onNameInput = function () {
    isNameValid = nameInput.value === '' ? false : true;

    isNameValid ? removeError(nameInput) : renderError(nameInput);
    isNameValid ? removeError(nameLabel) : renderError(nameLabel);

    checkFormValidity();
  };

  var onSurnameInput = function () {
    isSurnameValid = surnameInput.value === '' ? false : true;

    isSurnameValid ? removeError(surnameInput) : renderError(surnameInput);
    isSurnameValid ? removeError(surnameLabel) : renderError(surnameLabel);

    checkFormValidity();
  };

  var onPhoneInput = function () {
    isPhoneValid = (/_/).test(phoneInput.value) ? false : true;

    isPhoneValid ? removeError(phoneInput) : renderError(phoneInput);
    isPhoneValid ? removeError(phoneLabel) : renderError(phoneLabel);


    checkFormValidity();
  };

  var onEmailInput = function () {
    isEmailValid = emailInput.validity.valid ? true : false;

    isEmailValid ? removeError(emailInput) : renderError(emailInput);
    isEmailValid ? removeError(emailLabel) : renderError(emailLabel);


    checkFormValidity();
  };

  var onTextInput = function () {
    isTextValid = textInput.value === '' ? false : true;

    isTextValid ? removeError(textInput) : renderError(textInput);
    isTextValid ? removeError(textLabel) : renderError(textLabel);

    checkFormValidity();
  };

  var onAgreeChange = function () {
    isAgree = checkboxInput.checked ? true : false;



    isAgree ? removeError(checkboxLabel) : renderError(checkboxLabel);
    isAgree ? removeError(agreement) : renderError(agreement);


    checkFormValidity();
  };

  window.checkFormValidity = checkFormValidity;

  nameInput.addEventListener('input', onNameInput);
  surnameInput.addEventListener('input', onSurnameInput);
  phoneInput.addEventListener('input', onPhoneInput);
  emailInput.addEventListener('input', onEmailInput);
  textInput.addEventListener('input', onTextInput);
  checkboxInput.addEventListener('change', onAgreeChange);
})();

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
