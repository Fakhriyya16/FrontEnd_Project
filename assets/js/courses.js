"use strict";

let dropdown = document.querySelector(".home");
let openedList = document.querySelector(".open-down");

let categoryDropdown = document.querySelector(".category");
let openedCategories = document.querySelector(".category-dropdown")

let isDropdownOpen = false;
let isCategoryDropdownOpen = false;

function openDropdown() {
    openedList.classList.add("active-dropdown");
    isDropdownOpen = true;
}

function closeDropdown() {
    if (!isDropdownOpen) {
        openedList.classList.remove("active-dropdown");
    }
}

function openCategoryDropdown() {
    openedCategories.classList.add("active-category");
    isCategoryDropdownOpen = true;
}

function closeCategoryDropdown() {
    if (!isCategoryDropdownOpen) {
        openedCategories.classList.remove("active-category");
    }
}

dropdown.addEventListener("mouseover", openDropdown);
dropdown.addEventListener("mouseout", closeDropdown);
openedList.addEventListener("mouseover", function() {
    isDropdownOpen = true;
});
openedList.addEventListener("mouseout", function() {
    isDropdownOpen = false;
});

categoryDropdown.addEventListener("mouseover", openCategoryDropdown);
categoryDropdown.addEventListener("mouseout", closeCategoryDropdown);
openedCategories.addEventListener("mouseover", function() {
    isCategoryDropdownOpen = true;
});
openedCategories.addEventListener("mouseout", function() {
    isCategoryDropdownOpen = false;
});

document.addEventListener("mouseover", function(event) {
    if (!isDropdownOpen && !isCategoryDropdownOpen) {
        closeDropdown();
        closeCategoryDropdown();
    }
});

const navbar = document.querySelector(".navbar");
const navbar2 = document.querySelector(".second-nav");
let startPosition = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY > startPosition) {    
    navbar.classList.add('d-none');
    navbar2.classList.add('fixed-top');
    navbar2.classList.remove('d-none');
  } else {
    navbar.classList.remove('d-none');   
    navbar2.classList.remove('fixed-top');
    navbar2.classList.add('d-none'); 
  }
}
window.addEventListener('scroll', stickynavbar);


let windowIcon = document.querySelector(".grid-icon");
let listIcon = document.querySelector(".list-icon");

let shortCards = document.querySelector(".short");
let longCards = document.querySelector(".long");


windowIcon.addEventListener("click", function(){
    this.classList.remove("grid-icon");
    this.classList.add("list-icon");
    listIcon.classList.add("grid-icon");
    listIcon.classList.remove("list-icon");
    shortCards.classList.remove("d-none");
    longCards.classList.add("d-none");
})

listIcon.addEventListener("click", function(){
    this.classList.remove("grid-icon");
    this.classList.add("list-icon");
    windowIcon.classList.add("grid-icon");
    windowIcon.classList.remove("list-icon");
    shortCards.classList.add("d-none");
    longCards.classList.remove("d-none");
})

let pages = document.querySelectorAll(".pagination .num");

pages.forEach(page => {
    page.addEventListener("click", function(){
        pages.forEach(p => p.classList.remove("active"));
        this.classList.add("active");
    })
});

