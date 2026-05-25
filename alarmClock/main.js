"use strict"
const $clock = document.querySelector(".clock")
// console.log($clock.textContent)
let hour = 0
let min = 0
let sec = 0

setInterval(() => { 
    sec += 1
    if (sec >= 60) {
        // console.log("sec")
        sec = 0
        min += 1
    }
    if (min >= 60) {
        min = 0
        hour += 1
    }

    const h = String(hour).padStart(2, '0');
    const m = String(min).padStart(2, '0');
    const s = String(sec).padStart(2, '0');

    console.log(`${h}:${m}:${s}`)
}, 1000)