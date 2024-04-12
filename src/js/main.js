const timed__inputs = document.querySelectorAll('.timed__carousel__input');
// const timed__arrows = document.querySelectorAll('.timed__arrow');
const timed__images = Array.from(document.querySelectorAll('.promotion__carousel__img'));

// change image when directly selected
timed__inputs.forEach((selection, index) => {
    selection.addEventListener('click', () => {
        let selected__image = document.querySelector('.promotion__carousel__img__active');
        let previousImageIndex = timed__images.indexOf(selected__image);

        // if left arrow is clicked
        if (index == timed__images.length && previousImageIndex > 0) {
            selected__image.classList.remove('promotion__carousel__img__active');
            timed__images[previousImageIndex - 1].classList.add('promotion__carousel__img__active');
            timed__inputs[previousImageIndex - 1].checked = true;
            
            // if right arrow is clicked
        } else if (index == timed__images.length + 1 && previousImageIndex < timed__images.length - 1) {
            selected__image.classList.remove('promotion__carousel__img__active');
            timed__images[previousImageIndex + 1].classList.add('promotion__carousel__img__active');
            timed__inputs[previousImageIndex + 1].checked = true;

        } else if (index >= 0 && index < timed__images.length) {
            // removes 'active' status from previous image
            selected__image.classList.remove('promotion__carousel__img__active');
            // adds 'active' status to selected image
            timed__images[index].classList.add('promotion__carousel__img__active');
        }


    });
});
