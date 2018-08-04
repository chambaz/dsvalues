const states = [
  {
    quote: 'All meanings open up themselves when you are present for them.',
    value: 'empathy'
  },
  {
    quote: 'Be less curious about people and more curious about ideas.',
    value: 'curiosity'
  },
  {
    quote: 'The secret of success is doing something you love, doing it well and being recognized for it.',
    value: 'responsivetochange'
  },
  {
    quote: 'Being present destroys the shackles that limit our vision.',
    value: 'disruptive'
  },
  {
    quote: 'Create it like you want it! Speak it like you mean it!',
    value: 'audacity'
  }
]

const ui = {
  quote: document.querySelector('[data-quote]'),
  value: document.querySelector('[data-value]'),
  mask: document.querySelector('[data-mask]'),
  img: document.querySelector('[data-img]')
}

let counter = 0

setInterval(() => {
  counter = counter >= states.length - 1 ? 0 : counter + 1
  changeQuote(counter)
}, 5000)

changeQuote(counter)

function changeQuote(count) {
  const state = states[count]
  ui.quote.classList.remove('show')
  ui.value.classList.remove('show')
  ui.mask.classList.remove('show')
  setTimeout(() => {
    document.body.setAttribute('class', state.value)
    ui.quote.innerHTML = `"${state.quote}"`
    ui.value.innerHTML = `#${state.value}`
    ui.mask.style.webkitMaskImage = `url('/img/${state.value}.png')`
    ui.img.src = randomImg()
  }, 1000)
  setTimeout(() => {
    ui.quote.classList.add('show')
    ui.value.classList.add('show')
    ui.mask.classList.add('show')
  }, 2000)
}

function randomImg() {
  return `/img/${Math.floor(Math.random() * (15 - 1 + 1)) + 1}.jpg`
}
