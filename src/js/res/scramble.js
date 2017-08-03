// source: https://codepen.io/soulwire/pen/mErPAK
(function () {
  "use strict";

  // TextScramble
  var TextScramble = function () {
    function TextScramble(el) {
      this.el = el;
      this.chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }

    TextScramble.prototype.setText = function(newText) {
      var that = this;

      var oldText = this.el.innerText;
      var length = Math.max(oldText.length, newText.length);
      var promise = new Promise(function (resolve) {
        that.resolve = resolve;
        return resolve;
      });
      this.queue = [];
      for (var i = 0; i < length; i++) {
        var from = oldText[i] || '';
        var to = newText[i] || '';
        var start = Math.floor(Math.random() * 40);
        var end = start + Math.floor(Math.random() * 40);
        this.queue.push({
          from: from,
          to: to,
          start: start,
          end: end
        });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    };

    TextScramble.prototype.update = function update() {
      var output = '';
      var complete = 0;
      for (var i = 0, n = this.queue.length; i < n; i++) {
        var _queue$i = this.queue[i];
        var from = _queue$i.from;
        var to = _queue$i.to;
        var start = _queue$i.start;
        var end = _queue$i.end;
        var char = _queue$i.char;

        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += '<span class="scrambling-text">' + char + '</span>';
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    };

    TextScramble.prototype.randomChar = function() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    };

    return TextScramble;
  }();

  var phrases = [
    // work & skills
    'coding',
    'elegant design',
    'mobile app development',
    'web technology',
    'delightful UX',
    'front end development',
    // mind set
    'building amazing products',
    'solving problems',
    'design thinking',
    // life and peronality
    'being cool',
    'trending technologies',
    'rock climbing',
    'music',
    'food',
  ];

  var element = document.querySelector('.scramble-text');
  var textScrambleObj = new TextScramble(element);

  var counter = 0;
  var next = function next() {
    textScrambleObj.setText(phrases[counter]).then(function () {
      setTimeout(next, 2000);
    });
    counter = (counter + 1) % phrases.length;
  };

  next();

}());
