function createTimedCarousel(timedCarouselJson) {
    const create__timed__carousel = document.getElementById('container__timed__carousel');
    const timed__carousel__radio = document.getElementById('timed__carousel__selection');

    // generates timed carousel promotions based on timedCarousel.json
    timedCarouselJson.forEach((createPromotion, imageIndex) => {
        create__timed__carousel.innerHTML +=
            `<a href="${createPromotion.promotion}">
                <img class="${createPromotion.class}" src="${createPromotion.src}" alt="${createPromotion.alt}">
            </a>`;

        timed__carousel__radio.innerHTML +=
            `<input class="timed__carousel__input" type="radio" name="timed__carousel__image" id="timed__image__${imageIndex}">
            <label for="timed__image__${imageIndex}"></label>`;

        document.getElementById('timed__image__0').checked = true;
    });

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
}

function createUserCarousel(userCarouselJson) {
    const create__user__carousel = document.getElementById('container__user__carousel__area');

    // generates user carousel based on userCarousel.json
    userCarouselJson.forEach((createLine, indexLine) => {
        create__user__carousel.innerHTML +=
            `<div class="container__user__carousel">
                <h2 class="product__line">Categoria - ${createLine.type}</h2>
                <section class="container__user__products ${createLine.class}">

                </section>
            </div>`;
        const product__container = document.querySelector(`.container__user__products.${createLine.class}`);

        userCarouselJson[indexLine].products.forEach((createCard, indexInfo) => {
            product__container.innerHTML +=
                `   <!-- PRODUCT CARD - ${createCard.title} -->
                <div class="containter__product__card">
                    <div class="product__favorite">
                        <img class="product__favorite__img" src="./src/assets/icons/favorites.svg" alt="Adicionar produtos aos favoritos">
                    </div>
                    <a class="product__image" href="${createCard.link}">
                        <img class="user__carousel__img" src="${createCard.src}" alt="${createCard.alt}">
                    </a>
                    <a class="product__info" href="${createCard.link}">
                        <div class="product__title">
                            <h3 class="product__line__card">${createCard.name}</h3>
                            <h4 class="product__name__card">${createCard.line}</h4>
                            <p class="product__description">${createCard.description}</p>
                        </div>
                    </a>
                </div>`;
        });
    });
}
