// window.onload = function () {
//   setTimeout(function () {
//     window.scrollTo(0, 1);
//   }, 100);
// };

// disable touch scrolling on mobile
// document.addEventListener("touchmove", function (event) {
//   event.preventDefault();
// }, false);

(function() {
  console.log('ready');
  // console.log(navigator.userAgent);
})();

// Scroll Magic
// http://scrollmagic.io/docs/index.html

$(function() {
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    var slides = document.querySelectorAll("section.panel");

    for (var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
            .setPin(slides[i])
            // .addIndicators()
            .addTo(controller);
    }
});
