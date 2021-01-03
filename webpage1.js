window.onload = () => {
    const $ = e => document.querySelector(e)

    const menu = $(".menu"),
        ul = $('ul')
    menu.addEventListener('click', (e) => {
        if(ul.style.display == 'block') {
            ul.style.display = "none"
        } else {
            ul.style.display = "block"
        }
    })
}