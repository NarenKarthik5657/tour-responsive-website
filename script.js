const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
