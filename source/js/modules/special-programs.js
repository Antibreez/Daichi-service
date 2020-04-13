(function () {
  var slider = initPreviewSwiper('.special-programs__slider-container');

  function initPreviewSwiper(name) {
    return new Swiper(name, {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    });
  }
  // var wrapper = document.querySelector('.special-programs__wrapper');

  // if (!wrapper) {
  //   return;
  // }

  // function onTouchStart(e) {
  //   let x = 0;

  //   function onTouchMove(e) {
  //     let touchobj = e.changedTouches[0];

  //     if (x !== 0) {
  //       wrapper.scrollLeft += x - touchobj.clientX;
  //     }

  //     x = touchobj.clientX;
  //   }

  //   function onTouchEnd(e) {
  //     document.removeEventListener(`touchmove`, onTouchMove);
  //     document.removeEventListener(`touchend`, onTouchEnd)
  //   }

  //   document.addEventListener(`touchmove`, onTouchMove);
  //   document.addEventListener(`touchend`, onTouchEnd);
  // }

  // function onMouseDown(e) {
  //   let x = 0;

  //   function onMouseMove(e) {
  //     e.preventDefault();

  //     if (x !== 0) {
  //       wrapper.scrollLeft += x - e.clientX;
  //     }

  //     x = e.clientX;
  //   }

  //   function onMouseUp(e) {

  //     document.removeEventListener(`mousemove`, onMouseMove);
  //     document.removeEventListener(`mouseup`, onMouseUp);
  //   }

  //   document.addEventListener(`mousemove`, onMouseMove);
  //   document.addEventListener(`mouseup`, onMouseUp);
  // }

  //wrapper.addEventListener(`touchstart`, onTouchStart);
  //wrapper.addEventListener(`mousedown`, onMouseDown);
})();
