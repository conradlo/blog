window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 1);
  }, 100);
};

// disable touch scrolling on mobile
document.addEventListener("touchmove", function (event) {
  event.preventDefault();
}, false);

(function() {
  // console.log('ready');
  // console.log(navigator.userAgent);
})();
