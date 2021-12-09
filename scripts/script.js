
var button = document.querySelector(".buttonToggle");
button.addEventListener("click", formZien);


function formZien() {
  let formTonen = document.querySelector("form"); 
  formTonen.classList.toggle("showMenu"); 
}

