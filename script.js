// sample from https://kr.123rf.com/photo_74959276_%ED%98%84%EB%AF%B8%EA%B2%BD%EB%B3%B4%EA%B8%B0%EC%97%90%EC%84%9C-%EC%8B%9D%EB%AC%BC-%EB%BF%8C%EB%A6%AC%EC%9D%98-%EB%8B%A8%EB%A9%B4.html

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth 
canvas.height = window.innerHeight

function init() {
  ctx.translate(canvas.width / 3, canvas.height / 3)
}

let r = 0, g = 0, b  = 0, a = 0.5



function render() {
  //ctx.beginPath()
  
  // center
  /* radius: 2 - 10px
   * r: 71-200, g: 50-170, b: 64-200, a: 0.4-0.9 
   */
  
  
  // middle
  
  // outer
  
  
  // draw
  console.log(ctx)
  ctx.strokeStyle(`rgba({r},${g},${b},${a})`)
  ctx.arc(100, 75, 50, 0, 2 * Math.PI)
  ctx.stroke()
  //requestAnimationFrame(render)
}
  
window.onresize = function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  init()
}

init()
render()