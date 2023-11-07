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

const noticias = document.querySelectorAll('.noticia');
    let currentIndex = 0;

    function mostrarNoticia(index) {
        noticias.forEach(noticia => noticia.style.display = 'none');
        noticias[index].style.display = 'block';
    }

    function avanzarNoticia() {
        currentIndex = (currentIndex + 1) % noticias.length;
        mostrarNoticia(currentIndex);
    }

    function retrocederNoticia() {
        currentIndex = (currentIndex - 1 + noticias.length) % noticias.length;
        mostrarNoticia(currentIndex);
    }

    // Mostrar la primera noticia al cargar la página
    mostrarNoticia(currentIndex);