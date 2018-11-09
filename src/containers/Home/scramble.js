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
  'food'
]

const chars =
  'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!<>-_\\/[]{}—=+*^?#________金木水火土日月手口人心女一あおえいうたかけくきこまめむみもさしすせそ'

export default class TextScramble extends Component {
  constructor(prop) {
    super(prop)
    this.textFieldRef = React.createRef()
    this.state = {
      counter: 0,
      scramble: ''
    }
  }

  componentDidMount() {
    this.start()
    this.queue = []
    this.frame = 0
    this.frameRequest = null
  }

  start() {
    const { counter } = this.state
    this.setText(phrases[counter])
    setTimeout(this.start.bind(this), 4000)
  }

  setText(newText) {
    const { scramble, counter } = this.state

    const oldText = scramble
    const length = Math.max(oldText.length, newText.length)
    this.queue = []
    this.frame = 0
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({
        from,
        to,
        start,
        end
      })
    }
    cancelAnimationFrame(this.frameRequest)

    let t = { text: newText, continue: true }
    const f = () => {
      t = this.update(this.queue, this.frame)
      if (t.text) {
        this.textFieldRef.current.innerHTML = t.text
      }
      if (t.continue) {
        this.frame += 1
        this.frameRequest = requestAnimationFrame(f)
      }
    }
    this.frameRequest = requestAnimationFrame(f)
    this.setState({
      scramble: t.text,
      counter: (counter + 1) % phrases.length
    })
  }

  update(queue, frame) {
    let output = ''
    let complete = 0
    for (let i = 0, n = queue.length; i < n; i++) {
      const _queue$i = queue[i]
      const from = _queue$i.from
      const to = _queue$i.to
      const start = _queue$i.start
      const end = _queue$i.end
      let char = _queue$i.char

      if (frame >= end) {
        complete += 1
        output += to
      } else if (frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = chars[Math.floor(Math.random() * chars.length)]
          queue[i].char = char
        }
        output += char
      } else {
        output += from
      }
    }
    return {
      text: output,
      continue: !(complete === queue.length)
    }
  }

  render() {
    return (
      <span ref={this.textFieldRef} className="scramble-text">
        {this.state.scramble}
      </span>
    )
  }
}

// const element = document.querySelector('.scramble-text');
// const textScrambleObj = new TextScramble(element);
