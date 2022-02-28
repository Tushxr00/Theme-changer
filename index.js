const color = [`Maroon`, `Red`, `Orange`, `yellow`, `Olive`, `Purple`, `Fuchsia`, `White`, `Lime`, `Green`, `Navy`, `Blue`, `Aqua`, `Teal`, `Silver`, `Grey`]

const btnEl = document.getElementById('btn-el')
const colorEl = document.querySelector('.color-el')

btnEl.addEventListener("click", function() {
    let random = random_number()
    document.body.style.backgroundColor = color[random]
    colorEl.textContent = color[random]
})

function random_number() {
    return Math.floor(Math.random() * color.length)
}