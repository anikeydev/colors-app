import createContent from "./app"

const createModal = (titleText, subtitleText) => {

    const $modal = document.createElement('div')
    $modal.classList.add('modal')
    $modal.insertAdjacentHTML('beforeend', `
        <div class="modal__header">
            <h1>${titleText}</h1>
            <p>${subtitleText}</p>
        </div>
        <input class="modal__input" type='number' placeholder="Enter a number of colors" min="1" max="10">
        <button class="modal__btn" data-type="btn">Start</button>
    `)

    return $modal
}

export default createModal