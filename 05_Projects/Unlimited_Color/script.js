const start = document.querySelector(".start")
const stop = document.querySelector(".stop")

const colorChanger = function () {
    let color = "#"
    const hex = '0123456789ABCDEF'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let Interval;

start.addEventListener("click", function () {
    Interval = setInterval(function () {
        let clr = colorChanger()
        console.log(clr);
        document.body.style.backgroundColor = clr
        document.querySelector("h1").style.backgroundColor = clr
        document.querySelector("div").style.backgroundColor = clr
    }, 1000)
})

stop.addEventListener("click", function () {
    clearInterval(Interval)
})

// const rgbColorChanger = function () {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r},${g},${b})`;
// };