const openMenu = document.querySelector('#open');
const closeMenu = document.querySelector('#close');
const mobileNav = document.querySelector('.navbar');
const mobileNavLinks = document.querySelector('.navbar-links');
const links = document.querySelectorAll('.navbar-link');
const logo = document.querySelector('#logo');

openMenu.addEventListener('click', () => {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    logo.style.display = 'none';
    mobileNavLinks.style.display = 'grid';
    mobileNav.style.background = '#7e4add';
})

closeMenu.addEventListener('click', () => {
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    logo.style.display = 'block';
    mobileNavLinks.style.display = 'none';
    mobileNav.style.background = 'transparent';
})
mobileNavLinks.forEach((link) => {})