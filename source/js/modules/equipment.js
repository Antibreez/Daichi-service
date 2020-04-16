(function () {
  var container = document.querySelector('.equipment__container');

  var slider = initPreviewSwiper('.equipment__slider-container');

  if (!slider) {
    return;
  }

  function initPreviewSwiper(name) {
    return new Swiper(name, {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    });
  }

  function onTouchStart(e) {
    let x = 0;

    function onTouchMove(e) {
      let touchobj = e.changedTouches[0];

      if (x !== 0) {
        container.scrollLeft += x - touchobj.clientX;
      }

      x = touchobj.clientX;
    }

    function onTouchEnd(e) {
      document.removeEventListener(`touchmove`, onTouchMove);
      document.removeEventListener(`touchend`, onTouchEnd)
    }

    document.addEventListener(`touchmove`, onTouchMove);
    document.addEventListener(`touchend`, onTouchEnd);
  }

  function onMouseDown(e) {
    let x = 0;

    function onMouseMove(e) {
      e.preventDefault();

      if (x !== 0) {
        container.scrollLeft += x - e.clientX;
      }

      x = e.clientX;
    }

    function onMouseUp(e) {
      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    }

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  }

  container.addEventListener('touchstart', onTouchStart);
  container.addEventListener('mousedown', onMouseDown);
})();
