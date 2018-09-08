// sample from https://kr.123rf.com/photo_74959276_%ED%98%84%EB%AF%B8%EA%B2%BD%EB%B3%B4%EA%B8%B0%EC%97%90%EC%84%9C-%EC%8B%9D%EB%AC%BC-%EB%BF%8C%EB%A6%AC%EC%9D%98-%EB%8B%A8%EB%A9%B4.html

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth 
canvas.height = window.innerHeight

function init() {
  ctx.translate(canvas.width / 2, canvas.height / 2)
}

let r = 0, g = 0, b  = 0, a = 0.5
let counter = 0
let multiplier = 0.01

function render() {
  // center
  /* radius: 2 - 10px
   * r: 71-200, g: 50-170, b: 64-200, a: 0.4-0.9 
   */

  counter += 0.934834
  
  if (counter < canvas.width / 1.5) {
    r = Math.floor(Math.random() * 200 + 101)
    g = Math.floor(Math.random() * 80 + 50)
    b = Math.floor(Math.random() * 190 + 64)
    a = Math.random() * 0.8
    multiplier += 0.85
  } else if (counter >= canvas.width / 1.5 && counter < canvas.width) {
    r = Math.floor(Math.random() * 220 + 151)
    g = Math.floor(Math.random() * 40 + 10)
    b = Math.floor(Math.random() * 150 + 64)
    a = Math.random() * 0.89 - 0.6
    multiplier += 0.55
  } else {
    r = Math.floor(Math.random() * 120 + 11)
    g = Math.floor(Math.random() * 210 + 100)
    b = Math.floor(Math.random() * 210 + 104)
    a = Math.random() * 0.79 - 0.4  
    multiplier += 0.15
  }

  ctx.beginPath()
  ctx.fillStyle = `rgba(${r},${g},${b},${a})`
  ctx.strokeStyle = `rgba(${r},${g},${b},0.98)`
  ctx.lineWidth = 1
  ctx.lineStyle = 'dotted'
  ctx.translate(Math.cos(counter) * counter / 5, Math.sin(counter) * counter / 5)
  ctx.arc(Math.sin(counter * 0.5 * counter), 
          Math.cos(counter * 0.1 * counter),
          Math.random() * 10 / multiplier + 2, 0, 2 * Math.PI)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  
  // draw
  
  requestAnimationFrame(render)
}
  
window.onresize = function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

init()
render()