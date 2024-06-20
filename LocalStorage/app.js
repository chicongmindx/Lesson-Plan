const currentTheme = sessionStorage.getItem('theme')

const darkMode = document.getElementById("darkMode")
const lightMode = document.getElementById("lightMode")

if (currentTheme) {
    document.body.classList.add(currentTheme)
}

darkMode.addEventListener('click', function () {
    document.body.classList.remove('light')
    document.body.classList.add('dark')

    sessionStorage.setItem('theme', 'dark')
})

lightMode.addEventListener('click', function () {
    document.body.classList.remove('dark')
    document.body.classList.add('light')

    sessionStorage.setItem('theme', 'light')
})