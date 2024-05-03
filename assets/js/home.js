"use strict";

let dropdown = document.querySelector(".home");
let categoryDropdown = document.querySelector(".category");
let openedList = document.querySelector(".open-down");
let openedCategories = document.querySelector(".category-dropdown")

function openDropdown() {
    openedList.classList.add("active-dropdown");
}

function closeDropdown() {
    openedList.classList.remove("active-dropdown");
}


dropdown.addEventListener("mouseover", openDropdown);


dropdown.addEventListener("mouseout", closeDropdown);


openedList.addEventListener("mouseover", openDropdown);


document.addEventListener("mouseover", function (event) {

    if (!dropdown.contains(event.target) && !openedList.contains(event.target)) {
        closeDropdown();
    }
});


function openCategoryDropdown() {
    openedCategories.classList.add("active-category");
}

function closeCategoryDropdown() {
    openedCategories.classList.remove("active-category");
}


categoryDropdown.addEventListener("mouseover", openCategoryDropdown);
openedCategories.addEventListener("mouseover", openCategoryDropdown);


categoryDropdown.addEventListener("mouseout", function (event) {

    if (!categoryDropdown.contains(event.relatedTarget) && !openedCategories.contains(event.relatedTarget)) {
        closeCategoryDropdown();
    }
});

openedCategories.addEventListener("mouseout", function (event) {
    if (!categoryDropdown.contains(event.relatedTarget) && !openedCategories.contains(event.relatedTarget)) {
        closeCategoryDropdown();
    }
});

let arrow = document.querySelector(".visible");
let disappearArrow = document.querySelector(".disappear")

arrow.addEventListener("mouseover", function () {
    disappearArrow.classList.remove("disappear");
    disappearArrow.classList.add("visible");
    this.classList.remove("visible");
    this.classList.add("disappear");
    arrow.removeEventListener("mouseover", mouseOverHandler);
})
arrow.addEventListener("mouseout", function () {
    disappearArrow.classList.add("disappear");
    disappearArrow.classList.remove("visible");
    this.classList.add("visible");
    this.classList.remove("disappear");
})

const navbar = document.querySelector(".navbar");
let startPosition = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY > 90 +startPosition) {    
    navbar.classList.add('fixed-top');
  } else {
    navbar.classList.remove('fixed-top');    
  }
}
window.addEventListener('scroll', stickynavbar);