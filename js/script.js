const switchArrowsProjects = document.querySelector('.arrows-projects');
const photosProjects = document.querySelectorAll('.slider-item-project');
const pointsSliderProjects = document.querySelectorAll('.slider-foto-projects');
const pointsPhotoProjects = document.querySelectorAll('.point-project');

const switchArrowsPhilosophy = document.querySelector(".arrows-philosophy");
const listItemsPhilosophy = document.querySelectorAll('.slider-item-philosophy');
const pointsSliderPhilosophy = document.querySelectorAll('.slider-controls-text');
const switchArrowsConditions = document.querySelector(".arrows-conditions");
const listItemsConditions = document.querySelectorAll('.slider-item-conditions');
const pointsSliderConditions = document.querySelectorAll('.slider-foto-conditions');

let currentItem;
let currentPoint;

// Просмотр фото в разделе "Наши проекты"
switchArrowsProjects.addEventListener("click", function (evt) {
    evt.preventDefault();
    for (let i = 0; i < photosProjects.length; i++) {
        currentItem = document.querySelector('.current-project');
        if (currentItem == photosProjects[i]) {
            currentItem.classList.remove("current-project");
            if (i != photosProjects.length - 1) {
                i++;
                photosProjects[i].classList.add("current-project");
            } else {
                i = 0;
                photosProjects[i].classList.add("current-project");
            }
        }
    }
});

// Просмотр основных принципов работы с персоналом
switchArrowsPhilosophy.addEventListener("click", function (evt) {
    evt.preventDefault();
    for (let i = 0; i < listItemsPhilosophy.length; i++) {
        currentItem = document.querySelector('.current-philosophy');
        if (currentItem == listItemsPhilosophy[i]) {
            currentItem.classList.remove("current-philosophy");
            if (i != listItemsPhilosophy.length - 1) {
                i++;
                listItemsPhilosophy[i].classList.add("current-philosophy");
            } else {
                i = 0;
                listItemsPhilosophy[i].classList.add("current-philosophy");
            }
        }
    }
});

// Просмотр фото в разделе предложений сотрудникам
switchArrowsConditions.addEventListener("click", function (evt) {
    evt.preventDefault();
    for (let i = 0; i < listItemsConditions.length; i++) {
        currentItem = document.querySelector('.current-condition');
        if (currentItem == listItemsConditions[i]) {
            currentItem.classList.remove("current-condition");
            if (i != listItemsConditions.length - 1) {
                i++;
                listItemsConditions[i].classList.add("current-condition");
            } else {
                i = 0;
                listItemsConditions[i].classList.add("current-condition");
            }
        }
    }
});