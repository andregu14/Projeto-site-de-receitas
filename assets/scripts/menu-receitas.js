const buttonReceitas = document.getElementById('receitas-button')
const receitasMenu = document.getElementById('receitas-menu')
const wrapperMenu = document.getElementById('receitas-menu-wrapper')

buttonReceitas.addEventListener('mouseover', () => {
    receitasMenu.style.display = 'block'
})

wrapperMenu.addEventListener('mouseleave', () => {
    receitasMenu.style.display = 'none'
})
