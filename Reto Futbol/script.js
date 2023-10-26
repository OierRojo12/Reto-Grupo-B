var dropbtn = document.querySelector(".dropbtn");
var dropdownContent = document.querySelector(".desplegable");

// Agrega un manejador de evento para mostrar u ocultar el contenido del desplegable
dropbtn.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});

// Cierra el desplegable si el usuario hace clic fuera de él
window.addEventListener("click", function(event) {
  if (event.target != dropbtn && event.target != dropdownContent) {
    dropdownContent.classList.remove("show");
  }
});