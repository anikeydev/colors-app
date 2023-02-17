const createModal = (titleText, subtitleText) => {

    const $modal = document.createElement('div')
    $modal.classList.add('modal')
    $modal.insertAdjacentHTML('beforeend', `
        <div class="modal__header">
            <h1>${titleText}</h1>
            <p>${subtitleText}</p>
        </div>
        <button class="modal__btn">Start</button>
    `)
    

    return $modal
}

export default createModal