const toggleButton = document.getElementById('toggle-button')
const navbarLinks = document.getElementById('navbar-links')
const intro = document.getElementById('introducao')
const comoChegaram = document.getElementById('como-eles-chegaram')
const marcasDeixadas = document.getElementById('como-as-marcas-foram-deixadas')
const lugarMemoria = document.getElementById('lugar-de-memoria')

toggleButton.addEventListener('click', () => navbarLinks.classList.toggle('active'))

intro.addEventListener('click', () => navbarLinks.classList.remove('active'))
comoChegaram.addEventListener('click', () => navbarLinks.classList.remove('active'))
marcasDeixadas.addEventListener('click', () => navbarLinks.classList.remove('active'))
lugarMemoria.addEventListener('click', () => navbarLinks.classList.remove('active'))
