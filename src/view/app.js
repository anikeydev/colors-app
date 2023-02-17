import { generateRandomHashColor } from "../core/core"

const createApp = (parentNode, countColors) => {
    parentNode.innerHTML = ''
    for (let i = 0; i < countColors; i += 1) {
        let randomColor = generateRandomHashColor()
        parentNode.insertAdjacentHTML('beforeend',
         `
        <div class="col" style="background: ${randomColor}">
            <p>${randomColor}</p>
            <i class="fa-solid fa-lock-open" data-lock="false"></i>
        </div`)
    }
}

export default createApp