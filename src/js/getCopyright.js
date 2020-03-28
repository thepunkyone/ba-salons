const getCopyright = () => {
    const copyrightElement = document.querySelector('.footer-copyright')

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    copyrightElement.innerHTML = `© ${currentYear} BA Salons`
}

export default getCopyright