import { generateRandomHashColor } from './core/core.js'
import { toLowerCase } from './core/untils.js'
import './styles/style.sass'
import createApp from './view/app.js'
import createModal from './view/modal.js'

const $app = document.querySelector('#app')
const $cols = document.querySelectorAll('.col')
const $modal = createModal('This is color picker app', 'This app allows you to select a number of colors in the palette')
// $app.appendChild($modal) создание модального окна "Старт"
createApp($app, 6)

    // document.addEventListener('DOMContentLoaded', generateColors())

document.addEventListener('keypress', (event) => {
    if (toLowerCase(event.code) === 'space') {
        createApp($app, 6)
    }
})

$app.addEventListener('click', (event) => {
    console.log(event.target.dataset.lock)
    if (event.target.dataset.lock) {
        event.target.dataset.lock = event.target.dataset.lock === 'false' ? 'true' : 'false' 
        event.target.classList.toggle('fa-lock-open')
        event.target.classList.toggle('fa-lock')
        console.log(event.target)
    }
})

function generateColors() {
    $cols.forEach(setRandomColor)
}

function setRandomColor(node) {
    const lock = node.querySelector('i')
    if (lock.dataset.lock === 'false') {
        const randomHashColor = generateRandomHashColor()
        const p = node.querySelector('p')
        p.innerText = randomHashColor
        node.style.backgroundColor = generateRandomHashColor()
    }
}