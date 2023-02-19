import { generateRandomHashColor } from './core/core.js'
import { toLowerCase } from './core/utils.js'
import './styles/style.sass'
import createContent from './view/app.js'
import createModal from './view/modal.js'
import createNotification from './view/notification.js'

const $app = document.querySelector('#app')
const $modal = createModal('This is color picker app', 'Press "Space" to refresh colors and press "lock" to don`t refresh color')

renderModal()

function renderModal() {
    $app.appendChild($modal)

    document.addEventListener('keypress', handlerPressEnter)
    
    $app.addEventListener('click', handlerClickStartBtn)
}

function handlerClickStartBtn(event) {
    if (event.target.dataset.type === 'btn') {
        const $input = document.querySelector('.modal__input')
        if ($input.value) {
            createApp()
        } else {
            createNotification($app, 'Min count', { hash: 1 })
        }
    }
}

function handlerClickHelpBtn(event) {
    if (event.target.dataset.type === 'help-btn') {
        $app.innerHTML = ''
        renderModal()
    }
}

function handlerClickToLock(event) {
    if (event.target.dataset.lock) {
        event.target.dataset.lock = event.target.dataset.lock === 'false' ? 'true' : 'false' 
        event.target.classList.toggle('fa-lock-open')
        event.target.classList.toggle('fa-lock')
    } 
}

function handlerClickToHash(event) {
    if (event.target.dataset.type === 'hash') {
        const hash = event.target.innerText
        navigator.clipboard.writeText(hash)
        createNotification($app,'hash copy', { hash, delay: '5s'})
    }
}

function handlerPressSpace(event) {
    if (toLowerCase(event.code) === 'space') {
        if (document.querySelector('.app__content')) {
            generateColors()
        } 
    }
}

function handlerPressEnter(event) {
    if(toLowerCase(event.code) === 'enter') {
        if (document.querySelector('.modal')) {
            createApp()
        }
    }
}

function createApp() {
    const $input = document.querySelector('.modal__input')
    $app.innerHTML = ''
    $app.removeEventListener('click', handlerClickStartBtn)
    $app.removeEventListener('keypress', handlerPressEnter)
    $app.appendChild(createContent($input.value))
    document.addEventListener('keypress', handlerPressSpace)
    $app.addEventListener('click', handlerClickHelpBtn)
    $app.addEventListener('click', handlerClickToLock)
    $app.addEventListener('click', handlerClickToHash) 
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