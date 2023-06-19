const searchInput = document.querySelector('input[type="search"]')
const searchIcon = document.getElementById('fa-xmark')

if (searchInput.value === '') {
    searchIcon.style.display = 'none'
}

searchInput.addEventListener('input', () => {

    if (searchInput.value === '') {
        searchIcon.style.display = 'none'
    } else {
        searchIcon.style.display = 'block'
    }
})

function Delete() {

    if (searchInput.value !== '') {
        searchInput.value = ''
        searchIcon.style.display = 'none'
        searchInput.focus()
    }
}
