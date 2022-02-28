const hex_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`]

const btnEl = document.getElementById('btn-el')
const colorEl = document.querySelector('.color-el')

btnEl.addEventListener("click", function() {
    let i = 0
    let hex_no = `#`
    for (i; i < 6; i++) {
        hex_no += hex_code[random_number()]
    }
    document.body.style.backgroundColor = hex_no
    colorEl.textContent = hex_no
})

function random_number() {
    return Math.floor(Math.random() * hex_code.length)
}