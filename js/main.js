const initApp = () => {

    const hamburgerBtn = document.getElementById('hamburgerBtn')
    const mobileMenu = document.getElementById('mobileMenu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')

    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)

}

document.addEventListener('DOMContentLoaded', initApp)