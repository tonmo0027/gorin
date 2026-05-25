"use strict"
const canvases = document.querySelectorAll("#canvas")
const ctxes = []
canvases.forEach(canvas => {
    ctxes.push(canvas.getContext("2d"))
});

console.log(canvases)
console.log(ctxes)
const W = canvases[0].clientWidth
const H = canvases[0].clientHeight
const size_triangle = 60

window.onload = function init() {
    ctxes.forEach(ctx => {
        ctx.beginPath()
        ctx.lineWidth = 1
        ctx.strokeStyle = "rgb(60, 255, 0)"
        ctx.moveTo(W/2, H/2-size_triangle)
        ctx.lineTo(W/2-size_triangle, H/2+size_triangle)
        ctx.lineTo(W/2+size_triangle, H/2+size_triangle)
        ctx.lineTo(W/2, H/2-size_triangle)
        ctx.stroke()

        
    })

    setInterval(() => {
        mainLoop()

    }, 1000)
}

function mainLoop() {
    // ctx.clearRect(0, 0, W, H)
}