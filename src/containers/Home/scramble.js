// source: https://codepen.io/soulwire/pen/mErPAK
import React, { Component } from 'react'

const phrases = [
  // work & skills
  'coding',
  'elegant design',
  'mobile app development',
  'web technology',
  'delightful UX',
  'front end development',
  'software engineering',
  // mind set
  'building amazing products',
  'solving problems',
  'design thinking',
  // life and peronality
  'being cool',
  'trending technologies',
  'music',
  'food',
];

export default class TextScramble extends Component {
  constructor(prop) {
    super(prop)
    // this.el = el;
    this.chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!<>-_\\/[]{}—=+*^?#________金木水火土日月手口人心女一あおえいうたかけくきこまめむみもさしすせそ';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const that = this;

    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => {
      that.resolve = resolve;
      return resolve;
    });
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({
        from,
        to,
        start,
        end,
      });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      const _queue$i = this.queue[i];
      const from = _queue$i.from;
      const to = _queue$i.to;
      const start = _queue$i.start;
      const end = _queue$i.end;
      let char = _queue$i.char;

      if (this.frame >= end) {
        complete += 1;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="scrambling-text">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame += 1;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

  render() {
    return <span className="scramble-text"/>;
  }
};

// const element = document.querySelector('.scramble-text');
// const textScrambleObj = new TextScramble(element);

// let counter = 0;
// const next = function next() {
//   textScrambleObj.setText(phrases[counter]).then(function () {
//     setTimeout(next, 2000);
//   });
//   counter = (counter + 1) % phrases.length;
// };