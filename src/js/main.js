const fetchCreateJSON = async () => {
    await fetch('../src/data/timedCarousel.json').then((response) => response.json()).then((timedCarouselJson) => createTimedCarousel(timedCarouselJson));
    await fetch('../src/data/userCarousel.json').then((response) => response.json()).then((userCarouselJson) => createUserCarousel(userCarouselJson));
}

fetchCreateJSON();

const btnMenu = document.getElementById('menu__mobile');

btnMenu.addEventListener('click', toggleMenu);

// open the mobile menu
function toggleMenu() {
    const menu = document.getElementById('container__header__menu');
    const span = document.getElementById('menu__mobile__background');
    btnMenu.classList.toggle('active');
    span.classList.toggle('active');
    menu.classList.toggle('active');
}
