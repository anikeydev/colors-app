import { generateRandomHashColor } from './core/core.js'
import { toLowerCase } from './core/untils.js'
import './styles/style.sass'

const $app = document.querySelector('#app')
const $cols = document.querySelectorAll('.col')

document.addEventListener('DOMContentLoaded', generateColors())

document.addEventListener('keypress', (event) => {
    if (toLowerCase(event.code) === 'space') {
        generateColors()
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