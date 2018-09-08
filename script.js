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

function render() {
  // center
  /* radius: 2 - 10px
   * r: 71-200, g: 50-170, b: 64-200, a: 0.4-0.9 
   */
  if (counter < 100) {
    counter += 0.8
    r = Math.floor(Math.random() * 200 + 101)
    g = Math.floor(Math.random() * 80 + 50)
    b = Math.floor(Math.random() * 190 + 64)
    a = Math.random() * 0.4
    ctx.beginPath()
    ctx.fillStyle = `rgba(${r},${g},${b},${a})`
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
    //ctx.transform(canvas.width, canvas.height)
    ctx.translate(Math.cos(counter) * counter, Math.sin(counter) * counter)
    ctx.arc(Math.sin(counter), 
            Math.cos(counter),
            counter, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
    //ctx.transform(-canvas.width, -canvas.height)
  } else {
    counter += 1
    r = Math.floor(Math.random() * 20 + 11)
    g = Math.floor(Math.random() * 210 + 100)
    b = Math.floor(Math.random() * 210 + 104)
    a = Math.random() * 0.99 - 0.4
    ctx.beginPath()
    ctx.fillStyle = `rgba(${r},${g},${b},${a})`
    ctx.strokeStyle = `rgba(255, 255, 255, ${a})`
    ctx.translate(Math.cos(counter) * counter, Math.sin(counter) * counter)
    ctx.arc(Math.sin(counter), 
            Math.cos(counter),
            counter * 1.5, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
    //ctx.transform(-canvas.width, -canvas.height)
  }  

  
  // outer
  
  
  // draw
  
  requestAnimationFrame(render)
}
  
window.onresize = function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  init()
}

init()
render()