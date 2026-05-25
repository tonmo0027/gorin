"use strict"
const box = document.querySelector(".box")
let isDown = false
let x, y

box.addEventListener("mousedown", (e) => {
    console.log(e)
    x = e.offsetX
    y = e.offsetY
    isDown = true
})
window.addEventListener("mousemove", (e) => {
    if (isDown == true) {
        box.style.translate = `${e.clientX-x}px ${e.clientY-y}px`
    }
})
box.addEventListener("mouseup", (e) => {
    isDown = false
})