// sample from https://kr.123rf.com/photo_74959276_%ED%98%84%EB%AF%B8%EA%B2%BD%EB%B3%B4%EA%B8%B0%EC%97%90%EC%84%9C-%EC%8B%9D%EB%AC%BC-%EB%BF%8C%EB%A6%AC%EC%9D%98-%EB%8B%A8%EB%A9%B4.html

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth 
canvas.height = window.innerHeight

function init() {
  ctx.translate(canvas.width / 3, canvas.height / 3)
}

let r = 0, g = 0, b  = 0, a = 0.5
let counter = 0

function render() {
  
  counter++
  
  // center
  /* radius: 2 - 10px
   * r: 71-200, g: 50-170, b: 64-200, a: 0.4-0.9 
   */
  if (counter < 600) {
    r = Math.floor(Math.random() * 200 + 101)
    g = Math.floor(Math.random() * 80 + 50)
    b = Math.floor(Math.random() * 190 + 64)
    //a = Math.floor(Math.random() * 1.4)
    ctx.beginPath()
    ctx.strokeStyle = `rgba(${r},${g},${b},${a})`
    //ctx.transform(canvas.width, canvas.height)
    ctx.translate(Math.sin(30), Math.cos(30))
    ctx.arc(Math.sin(counter) / 2, 
            Math.cos(counter) / 2,
            10, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.closePath()
    //ctx.transform(-canvas.width, -canvas.height)
  }
  
  // middle
  if (counter > 600) {
    r = Math.floor(Math.random() * 200 + 71)
    g = Math.floor(Math.random() * 110 + 50)
    b = Math.floor(Math.random() * 200 + 64)
    //a = Math.floor(Math.random() * 1.4)
    ctx.beginPath()
    ctx.strokeStyle = `rgba(${r},${g},${b},${a})`
    //ctx.transform(canvas.width, canvas.height)
    ctx.translate(Math.sin(Math.log(counter) * canvas.width) * 0.632, Math.cos(Math.log(counter) + canvas.height) * 10.861)
    ctx.arc(Math.sin(Math.log(counter) + (canvas.width / 2)), 
            Math.sin(Math.log(counter) + (canvas.height / 2)), Math.floor(Math.random() * 120 - 2), 0, 2 * Math.PI)
    ctx.stroke()
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