let elArrowRight = document.querySelector('.arrow-right');
let elArrowLeft = document.querySelector('.arrow-left');
let elListCarouselItem = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

elArrowRight.onclick = function() {
    let oldIndex = currentIndex;

    if (currentIndex >= 3) {
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1;
    }

    elListCarouselItem[oldIndex].classList.remove('carousel-item_current');
    elListCarouselItem[currentIndex].classList.add('carousel-item_current');
}

elArrowLeft.onclick = function() {
    let oldIndex = currentIndex;

    if (currentIndex <= 0) {
        currentIndex = 3;
    } else {
        currentIndex = currentIndex - 1;
    }

    elListCarouselItem[oldIndex].classList.remove('carousel-item_current');
    elListCarouselItem[currentIndex].classList.add('carousel-item_current');
}