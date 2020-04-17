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
