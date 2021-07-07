let btn = document.querySelector(".drop-menu");
let menu = document.querySelector(".dropdown-wrap");
let grid = document.querySelector("#dropdown-menu");
            
    grid.onclick = function() {
        menu.classList.toggle("active");
    }