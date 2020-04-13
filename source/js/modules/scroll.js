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
