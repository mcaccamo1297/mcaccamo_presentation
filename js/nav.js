// scripts.js

// Aggiunge un listener per l'evento "DOMContentLoaded" che viene eseguito quando il documento HTML è completamente caricato e analizzato
document.addEventListener("DOMContentLoaded", function() {

  // Seleziona l'elemento con l'ID "navbarToggle" e lo assegna alla costante 'navbarToggle'
  const navbarToggle = document.getElementById("navbarToggle");

  // Seleziona l'elemento con l'ID "navbarMenu" e lo assegna alla costante 'navbarMenu'
  const navbarMenu = document.getElementById("navbarMenu");

  // Aggiunge un listener per l'evento "click" sull'elemento 'navbarToggle'
  navbarToggle.addEventListener("click", function() {

      // Alterna la classe "navbar-menu-visible" sull'elemento 'navbarMenu' ogni volta che 'navbarToggle' viene cliccato
      navbarMenu.classList.toggle("navbar-menu-visible");
  });
});
