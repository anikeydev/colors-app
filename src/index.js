import { generateRandomHashColor } from './core/core.js'
import { toLowerCase } from './core/untils.js'
import './styles/style.sass'
import createContent from './view/app.js'
import createModal from './view/modal.js'

const $app = document.querySelector('#app')
const countColors = 6
const $modal = createModal('This is color picker app', 'This app allows you to select a number of colors in the palette')
// $app.appendChild($modal) создание модального окна "Старт"

document.addEventListener('DOMContentLoaded', $app.appendChild($modal))
 
document.addEventListener('keypress', (event) => {
    if (toLowerCase(event.code) === 'space') {
        if (document.querySelector('.app__content')) {
            generateColors()
        } 
    }
})

$app.addEventListener('click', (event) => {
    if (event.target.dataset.lock) {
        event.target.dataset.lock = event.target.dataset.lock === 'false' ? 'true' : 'false' 
        event.target.classList.toggle('fa-lock-open')
        event.target.classList.toggle('fa-lock')
        console.log(event.target)
    }

    if (event.target.dataset.type === 'btn') {
        $app.innerHTML = ''
        $app.appendChild(createContent(6))
    }
})

function generateColors() {
    const $cols = document.querySelectorAll('.col')
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