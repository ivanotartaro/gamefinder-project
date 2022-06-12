const ACTION_NEXT_BACKGROUND = 'NEXT';
const ACTION_PREVIOUS_BACKGROUND = 'PREVIOUS';
let currentBackgroundIndex = 0;
let backgrounds;
let paginationDots;
let numberOfBackgrounds;

document.addEventListener("DOMContentLoaded", function(){
    backgrounds = document.querySelectorAll(".background");
    paginationDots = document.querySelectorAll(".pagination-dot");
    numberOfBackgrounds = backgrounds.length;

    backgrounds.forEach((bg, index) => {
        bg.style.transform = `translateX(${index * 100}%)`;
    });

    paginationDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            changeBackgroudWithIndex(index);
        });
    });

    document.getElementById("btn-next").addEventListener("click", () => {
        changeBackgroundWithArrow(ACTION_NEXT_BACKGROUND);
    });

    document.getElementById("btn-previous").addEventListener("click", () => {
        changeBackgroundWithArrow(ACTION_PREVIOUS_BACKGROUND);
    });
});

function changeBackgroundWithArrow(action) {
    currentBackgroundIndex = getChangedBackgroundIndex(action);

    repaintPaginationDots(currentBackgroundIndex);

    backgrounds.forEach((bg, index) => {
        bg.style.transform = `translateX(${(index - currentBackgroundIndex) * 100}%)`;
    });
}

function changeBackgroudWithIndex(indexSelected) {
    currentBackgroundIndex = indexSelected;

    repaintPaginationDots(indexSelected);

    backgrounds.forEach((bg, index) => {
        bg.style.transform = `translateX(${(index - currentBackgroundIndex) * 100}%)`;
    });
}

function repaintPaginationDots(currentIndex) {
    paginationDots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function getChangedBackgroundIndex(action) {
    if (action === ACTION_NEXT_BACKGROUND) {
        return (currentBackgroundIndex + 1) === numberOfBackgrounds ? 0 : currentBackgroundIndex + 1;
    } else if (action === ACTION_PREVIOUS_BACKGROUND) {
        return (currentBackgroundIndex - 1) === -1? numberOfBackgrounds-1 : currentBackgroundIndex - 1
    }

    return currentBackgroundIndex;
}
