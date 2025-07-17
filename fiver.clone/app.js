const header = document.querySelector('header');
const hamburgerBtn = document.querySelector('#hamburger-btn');
const closeBtn = document.querySelector('#close-btn');


hamburgerBtn.addEventListener('click', () => {
    header.classList.toggle('show-mobile-menu');
});

closeBtn.addEventListener('click', () => {
    hamburgerBtn.click();
}); 