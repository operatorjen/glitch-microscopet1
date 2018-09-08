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

  counter += 0.984834
  
  if (counter < canvas.width / 2) {
    r = Math.floor(Math.random() * 200 + 101)
    g = Math.floor(Math.random() * 80 + 50)
    b = Math.floor(Math.random() * 210 + 74)
    a = Math.random() * 0.3
    ctx.fillStyle = `rgba(${r},${g},${b},${a})`
    multiplier += 0.0025
  } else if (counter >= canvas.width / 1.5 && counter < canvas.width / 1.3) {
    r = Math.floor(Math.random() * 220 + 151)
    g = Math.floor(Math.random() * 60 + 10)
    b = Math.floor(Math.random() * 150 + 94)
    a = Math.random() * 0.89 - 0.4
    ctx.fillStyle = `rgba(${r},${g},${b},${a})`
    multiplier += 0.00035
  } else if (counter >= canvas.width / 1.3 && counter < canvas.width * 2.2)  {
    r = Math.floor(Math.random() * 20 + 11)
    g = Math.floor(Math.random() * 210 + 100)
    b = Math.floor(Math.random() * 220 + 190)
    a = Math.random() * 0.89 - 0.4 
    ctx.fillStyle = `rgba(${r},${g},${b},${a})`
    multiplier += 0.0005
  } else {
    r = Math.floor(Math.random() * 230 + 211)
    g = Math.floor(Math.random() * 10 + 1)
    b = Math.floor(Math.random() * 200 + 150)
    a = Math.random() * 0.79 - 0.4  
    ctx.fillStyle = `rgba(${r},${g},${b},${a})`
    multiplier += 0.00005
  }

  ctx.beginPath()
  ctx.strokeStyle = `rgba(${r},${g},${b},0.58)`
  ctx.lineWidth = 1
  ctx.translate(Math.cos(counter) * counter / 5, Math.sin(counter) * counter / 5)
  ctx.arc(Math.sin(counter * Math.random() * counter), 
          Math.cos(counter * Math.random() * counter),
          (Math.random() * multiplier * 6 + 2), 0, 2 * Math.PI)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  
  // draw
  
  if (counter < canvas.width * 2.5) {
    requestAnimationFrame(render)
  }
}
  
window.onresize = function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

init()
render()