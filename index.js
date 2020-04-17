let elArrowRight = document.querySelector('.arrow-right');
let elArrowLeft = document.querySelector('.arrow-left');
let elListCarouselItem = document.querySelectorAll('.carousel-item');
let elIndicatorList = document.querySelector('.indicator-list');
let elIndicatorItem = document.querySelectorAll('.indicator-item');

let currentIndex = 0;
const LIST_LENGTH = elListCarouselItem.length;
console.log(LIST_LENGTH);

elArrowRight.onclick = function() {
    let oldIndex = currentIndex;

    if (currentIndex >= LIST_LENGTH - 1) {
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1;
    }

    elListCarouselItem[oldIndex].classList.remove('carousel-item_current');
    elListCarouselItem[currentIndex].classList.add('carousel-item_current');
    elIndicatorItem[oldIndex].classList.remove('indicator-item_current');
    elIndicatorItem[currentIndex].classList.add('indicator-item_current');
}

elArrowLeft.onclick = function() {
    let oldIndex = currentIndex;

    if (currentIndex <= 0) {
        currentIndex = LIST_LENGTH - 1;
    } else {
        currentIndex = currentIndex - 1;
    }

    elListCarouselItem[oldIndex].classList.remove('carousel-item_current');
    elListCarouselItem[currentIndex].classList.add('carousel-item_current');
    elIndicatorItem[oldIndex].classList.remove('indicator-item_current');
    elIndicatorItem[currentIndex].classList.add('indicator-item_current');
}

elIndicatorList.onclick = function(event) {
    let target = event.target;

    if (!target.classList.contains('indicator-item')) {
        return;
    }

    let targetIndex = parseInt(target.dataset.index, 10);
    let oldIndex = currentIndex;

    elListCarouselItem[oldIndex].classList.remove('carousel-item_current');
    elListCarouselItem[targetIndex].classList.add('carousel-item_current');
    elIndicatorItem[oldIndex].classList.remove('indicator-item_current');
    elIndicatorItem[targetIndex].classList.add('indicator-item_current');

    currentIndex = targetIndex;
}