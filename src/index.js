import { generateRandomHashColor } from './core/core.js'
import { toLowerCase } from './core/utils.js'
import './styles/style.sass'
import createContent from './view/app.js'
import createModal from './view/modal.js'
import createNotification from './view/notification.js'

const $app = document.querySelector('#app')
const $modal = createModal('This is color picker app', 'Press "Space" to refresh colors and press "lock" to don`t refresh color')

document.addEventListener('DOMContentLoaded', $app.appendChild($modal))
 
document.addEventListener('keypress', (event) => {
    if (toLowerCase(event.code) === 'space') {
        if (document.querySelector('.app__content')) {
            generateColors()
        } 
    }

    if(toLowerCase(event.code) === 'enter') {
        if (document.querySelector('.modal')) {
            createHtmlApp()
        }
    }
})

$app.addEventListener('click', handlerClickStartBtn)

$app.addEventListener('click', (event) => {
    if (event.target.dataset.lock) {
        event.target.dataset.lock = event.target.dataset.lock === 'false' ? 'true' : 'false' 
        event.target.classList.toggle('fa-lock-open')
        event.target.classList.toggle('fa-lock')
        console.log(event.target)
    }    

    if (event.target.dataset.type === 'help-btn') {
        $app.innerHTML = ''
        $app.appendChild($modal)
    }

    if (event.target.dataset.type === 'hash') {
        const hash = event.target.innerText
        navigator.clipboard.writeText(hash)
        createNotification($app,'hash copy', { hash, delay: '5s'})
    }
})

function handlerClickStartBtn(event) {
    if (event.target.dataset.type === 'btn') {
        const $input = document.querySelector('.modal__input')
        if ($input.value) {
            createHtmlApp()
        } else {
            createNotification($app, 'Min count', { hash: 1 })
        }
    }
}

function createHtmlApp() {
    const $input = document.querySelector('.modal__input')
    $app.innerHTML = ''
    $app.appendChild(createContent($input.value))
}

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