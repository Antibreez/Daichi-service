(function () {
  var temperature = document.querySelector('.basic-functions__item--temperature');
  var temperatureImage = document.querySelector('.basiс-functions__temperature-image-box');
  var modes = document.querySelectorAll('.basic-functions__item--modes');
  var modesImage = document.querySelector('.basiс-functions__modes-image-box');
  var flow = document.querySelector('.basic-functions__item--flow');
  var flowImage = document.querySelector('.basiс-functions__flow-image-box');
  var timer = document.querySelector('.basic-functions__item--timer');
  var timerImage = document.querySelector('.basiс-functions__timer-image-box');

  if (!temperature) {
    return;
  }

  var onTemperatureHover = function () {
    temperatureImage.classList.add('js--big');
  }

  var onTemperatureLeave = function () {
    temperatureImage.classList.remove('js--big');
  }

  var onModesHover = function () {
    modesImage.classList.add('js--big');
  }

  var onModesLeave = function () {
    modesImage.classList.remove('js--big');
  }

  var onFlowHover = function () {
    flowImage.classList.add('js--big');
  }

  var onFlowLeave = function () {
    flowImage.classList.remove('js--big');
  }

  var onTimerHover = function () {
    timerImage.classList.add('js--big');
  }

  var onTimerLeave = function () {
    timerImage.classList.remove('js--big');
  }

  temperature.addEventListener('mouseover', onTemperatureHover);
  temperature.addEventListener('mouseleave', onTemperatureLeave);
  modes[1].addEventListener('mouseover', onModesHover);
  modes[1].addEventListener('mouseleave', onModesLeave);
  flow.addEventListener('mouseover', onFlowHover);
  flow.addEventListener('mouseleave', onFlowLeave);
  timer.addEventListener('mouseover', onTimerHover);
  timer.addEventListener('mouseleave', onTimerLeave);
})();

(function () {
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
})();

(function () {
  var box = document.querySelector('.questions ul');
  var inputs = document.querySelectorAll('.questions input');
  var labels = document.querySelectorAll('.questions label');
  var title = document.querySelector('.questions__title');

  if (!box) {
    return;
  }

  var idx = -1;
  var isMobile = window.matchMedia('(max-width: 767px)').matches;

  var onResize = function () {
    isMobile = window.matchMedia('(max-width: 767px)').matches;
  };

  var scroll = function (target) {
    return function () {
      target.scrollIntoView({block: `start`, behavior: `smooth`});
    }
  };

  var clearInputs = function () {
    inputs.forEach(function (input) {
      if (input.checked) {
        input.checked = false;
      }
    })
  };

  var onBoxClick = function (evt) {
    var target = evt.target;

    if (target.tagName.toLowerCase() === 'label') {

      var num = +target.getAttribute('for').split('-')[1] - 1;

      if (num !== idx) {
        clearInputs();
        idx = num;
      }
    }

    if (target.tagName.toLowerCase() === 'input') {

      var num = +target.getAttribute('id').split('-')[1] - 1;

      if (isMobile) {
        setTimeout(scroll(labels[num]), 200);
      }
    }
  };

  box.addEventListener('click', onBoxClick);
  window.addEventListener('resize', onResize);
})();

(function () {
  let scrollDownLink = document.querySelector(`.js-scroll-down`);

  let handleAnchorClick = function () {
    event.preventDefault();
    let linkTarget = event.currentTarget.getAttribute(`href`);
    let id = linkTarget.substring(1, linkTarget.length);
    let aim = document.getElementById(id);
    aim.scrollIntoView({block: `start`, behavior: `smooth`});
  };

  if (scrollDownLink) {
    scrollDownLink.addEventListener(`click`, handleAnchorClick);
  }
})();

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
