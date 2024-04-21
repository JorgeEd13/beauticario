import timedCarouselJson from './data/timedCarousel.json' with {type: "json"};


// generates timed carousel promotions based on timedCarousel.json
const create__timed__carousel = document.getElementById('container__timed__carousel');
const timed__carousel__radio = document.getElementById('timed__carousel__selection');

timedCarouselJson.forEach((createImage, imageIndex) => {
    create__timed__carousel.innerHTML +=
        `<a href="${createImage.promotion}">
            <img class="${createImage.class}" src="${createImage.src}" alt="${createImage.alt}">
        </a>`;

    timed__carousel__radio.innerHTML +=
        `<input class="timed__carousel__input" type="radio" name="timed__carousel__image" id="timed__image__${imageIndex}">
        <label for="timed__image__${imageIndex}"></label>`

    document.getElementById('timed__image__0').checked = true;
});


// TIMED CAROUSEL FUNCTIONS:
let time__interval = 5000; // time in milliseconds to the timed carousel image change automatically

// gets timed carousel elements
const timed__inputs = document.querySelectorAll('.timed__carousel__input');
const timed__images = Array.from(document.querySelectorAll('.timed__carousel__img'));

// automatically changes the image in timed carousel every 'timeInterval' milliseconds
setInterval(autoChangeImageTimed, time__interval);

// manually changes the image in timed carousel when directly selected
timed__inputs.forEach((selection, inputIndex) => {
    selection.addEventListener('click', () => {
        manualChangeImageTimed(inputIndex);
    });
});

function autoChangeImageTimed() {
    let selected__image = document.querySelector('.timed__carousel__img__active');
    let previousImageIndex = timed__images.indexOf(selected__image);

    if (previousImageIndex == timed__images.length - 1) {
        previousImageIndex = -1;
    }
    previousImageIndex++;
    selected__image.classList.remove('timed__carousel__img__active');
    timed__images[previousImageIndex].classList.add('timed__carousel__img__active');
    timed__inputs[previousImageIndex].checked = true;
}

function manualChangeImageTimed(index) {
    let selected__image = document.querySelector('.timed__carousel__img__active');
    let previousImageIndex = timed__images.indexOf(selected__image);

    // if left arrow is clicked
    if (index == timed__images.length) {
        if (previousImageIndex == 0) {
            previousImageIndex = timed__images.length;
        }
        selected__image.classList.remove('timed__carousel__img__active'); // removes 'active' status from previous image
        timed__images[previousImageIndex - 1].classList.add('timed__carousel__img__active'); // adds 'active' status to new image
        timed__inputs[previousImageIndex - 1].checked = true; // highlights correspondent input

        // if right arrow is clicked
    } else if (index == timed__images.length + 1) {
        if (previousImageIndex == timed__images.length - 1) {
            previousImageIndex = -1;
        }
        selected__image.classList.remove('timed__carousel__img__active');
        timed__images[previousImageIndex + 1].classList.add('timed__carousel__img__active');
        timed__inputs[previousImageIndex + 1].checked = true;

    } else if (index >= 0 && index < timed__images.length) {
        selected__image.classList.remove('timed__carousel__img__active');
        timed__images[index].classList.add('timed__carousel__img__active'); // adds 'active' status to selected image
    }
}
// TIMED CAROUSEL FUNCTIONS: END
