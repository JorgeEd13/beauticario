function autoChangeImageTimed(timed__images, timed__inputs) {
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

function manualChangeImageTimed(timed__images, timed__inputs, index) {
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
