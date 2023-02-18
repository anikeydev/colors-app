import { generateRandomHashColor } from "../core/core"

const createContent = (countColors) => {

    const $content = document.createElement('div')
    $content.classList.add('app__content')

    const $helpBtn = document.createElement('span')
    $helpBtn.innerText = 'Help'
    $helpBtn.classList.add('help-btn')
    $content.appendChild($helpBtn)

    for (let i = 0; i < countColors; i += 1) {
        let randomColor = generateRandomHashColor()
        $content.insertAdjacentHTML('beforeend',
         `
        <div class="col" style="background: ${randomColor}">
            <p>${randomColor}</p>
            <i class="fa-solid fa-lock-open" data-lock="false"></i>
        </div`)
    }

    return $content
}

export default createContent