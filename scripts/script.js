
var button = document.querySelector(".buttonToggle");
button.addEventListener("click", formZien);
button.addEventListener("click", navZien);
button.addEventListener("click", headerToggle);

function formZien() {
  let formTonen = document.querySelector("form"); 
  formTonen.classList.toggle("showMenu"); 
}

function navZien() {
    let navTonen = document.querySelector(".navToggle"); 
    navTonen.classList.toggle("showNav"); 
}

function headerToggle() {
    let headerDown = document.querySelector("header"); 
    headerDown.classList.toggle("headerDown"); 
}