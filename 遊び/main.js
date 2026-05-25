"use strict"
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const W = canvas.clientWidth
const H = canvas.clientHeight
const size_triangle = 35
console.log(ctx)

window.onload = function init() {
    ctx.beginPath()
    ctx.lineWidth = 1
    ctx.strokeStyle = "rgb(60, 255, 0)"
    ctx.moveTo(W/2, H/2-size_triangle)
    ctx.lineTo(W/2-size_triangle, H/2+size_triangle)
    ctx.lineTo(W/2+size_triangle, H/2+size_triangle)
    ctx.lineTo(W/2, H/2-size_triangle)
    ctx.stroke()

    setInterval(() => {
        mainLoop()

    }, 1000)
}

function mainLoop() {
    // ctx.clearRect(0, 0, W, H)


}