"use strict"
const $div_color = document.querySelector(".color")
const $p = document.querySelector(".text")
console.log("aa")

window.addEventListener("scroll", () => {
    const y = window.scrollY
    $p.textContent = `Scroll Y: ${y} px`
    if (y < 300) {
        $div_color.style.backgroundColor = `rgb(0, 0, 0)`
    } else if (y >= 1500) {
        $div_color.style.backgroundColor = `rgb(0, 255, 0)`
    } else if (y >= 800) {
        $div_color.style.backgroundColor = `rgb(255, 0, 0)`
    } else if (y >= 300) {
        $div_color.style.backgroundColor = `rgb(0, 0, 255)`
    }
})