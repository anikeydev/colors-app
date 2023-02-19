const createNotification = (parentNode, name, config) => {

    const $notification = document.createElement('div')
    $notification.insertAdjacentHTML('beforeend', `<p>${name} : ${config.hash}</p>`)
    $notification.classList.add('notification')

    parentNode.appendChild($notification)

    setTimeout(() => {
        $notification.remove()
    }, 1500)

}

export default createNotification