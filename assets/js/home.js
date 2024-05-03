"use strict";

let dropdown = document.querySelectorAll(".home");
let categoryDropdown = document.querySelector(".category");

dropdown.forEach(element => {
    element.addEventListener("mouseover", function(){
        document.querySelector(".open-down").classList.add("active-dropdown");
    })
    element.addEventListener("mouseout", function(){
        document.querySelector(".open-down").classList.remove("active-dropdown");
    })
});

dropdown.addEventListener("mouseover", function(){
    document.querySelector(".open-down").classList.add("active-dropdown");
})
dropdown.addEventListener("mouseout", function(){
    document.querySelector(".open-down").classList.remove("active-dropdown");
})

categoryDropdown.addEventListener("mouseover", function(){
    document.querySelector(".category-dropdown").classList.add("active-category");
})
categoryDropdown.addEventListener("mouseout", function(){
    document.querySelector(".category-dropdown").classList.remove("active-category");
})
