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
