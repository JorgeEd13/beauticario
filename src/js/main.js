const timed__inputs = document.querySelectorAll('.timed__carousel__input');
const timed__images = document.querySelectorAll('.promotion__carousel__img');

timed__inputs.forEach((selection, index) => {
    selection.addEventListener('click', () => {
        changeImage(index);
    });
});

function changeImage(index) {
        // removes 'active' status from previous image
        const selected__image = document.querySelector('.promotion__carousel__img__active');
        selected__image.classList.remove('promotion__carousel__img__active');
        // adds 'active' status to selected image
        timed__images[index].classList.add('promotion__carousel__img__active');
};
