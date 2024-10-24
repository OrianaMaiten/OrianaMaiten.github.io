document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", function() {
      // Alterna la visibilidad del menú
      if (navMenu.style.maxHeight === "0px" || navMenu.style.maxHeight === "") {
          navMenu.style.display = "flex"; // Muestra el menú
          navMenu.style.maxHeight = navMenu.scrollHeight + "px"; // Ajusta la altura máxima
      } else {
          navMenu.style.maxHeight = "0"; // Oculta el menú
          setTimeout(() => { navMenu.style.display = "none"; }, 300); // Oculta después de la animación
      }
  });
});
