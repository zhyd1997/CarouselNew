let elArrowRight = document.querySelector('.arrow-right');
let elArrowLeft = document.querySelector('.arrow-left');
let elListCarouselItem = document.querySelectorAll('.carousel-item');
let elIndicatorList = document.querySelector('.indicator-list');
let elIndicatorItem = document.querySelectorAll('.indicator-item');

let currentIndex = 0;
const LIST_LENGTH = elListCarouselItem.length;

elArrowRight.onclick = function() {
    let targetIndex = currentIndex + 1;
    handleIndexChange(targetIndex);
}

elArrowLeft.onclick = function() {
    let targetIndex = currentIndex - 1;
    handleIndexChange(targetIndex);
}

elIndicatorList.onclick = function(event) {
    let target = event.target;
    if (!target.classList.contains('indicator-item')) {
        return;
    }

    let targetIndex = parseInt(target.dataset.index, 10);
    handleIndexChange(targetIndex);
}

function changeCurrentClassName() {
    document.querySelector('.carousel-item_current').classList.remove('carousel-item_current');
    elListCarouselItem[currentIndex].classList.add('carousel-item_current');
    document.querySelector('.indicator-item_current').classList.remove('indicator-item_current');
    elIndicatorItem[currentIndex].classList.add('indicator-item_current');
}

function changeCurrentIndex(targetIndex) {
    if (targetIndex >= LIST_LENGTH) {
        currentIndex = 0;
    } else if (targetIndex < 0) {
        currentIndex = LIST_LENGTH - 1;
    } else {
        currentIndex = targetIndex;
    }
}

function handleIndexChange(targetIndex) {
    if (currentIndex === targetIndex) {
        return;
    }

    changeCurrentIndex(targetIndex);
    changeCurrentClassName();
}