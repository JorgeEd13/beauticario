import timedCarouselJson from '../data/timedCarousel.json' with {type: "json"};
import userCarouselJson from '../data/userCarousel.json' with {type: "json"};

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

createSliders(timedCarouselJson, userCarouselJson);

// gets timed carousel elements
const timed__inputs = Array.from(document.querySelectorAll('.timed__carousel__input'));
const timed__images = Array.from(document.querySelectorAll('.timed__carousel__img'));

// TIMED CAROUSEL FUNCTIONS:
let time__interval = 5000; // time in milliseconds to the timed carousel image change automatically
// automatically changes the image in timed carousel every 'timeInterval' milliseconds
setInterval(() => autoChangeImageTimed(timed__images, timed__inputs), time__interval);

// manually changes the image in timed carousel when directly selected
timed__inputs.forEach((selection, inputIndex) => {
    selection.addEventListener('click', () => {
        manualChangeImageTimed(timed__images, timed__inputs, inputIndex);
    });
});
