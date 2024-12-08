// Seleccionar todos los enlaces del menú
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Obtener la ruta actual del navegador
const currentPath = window.location.pathname;

// Comparar la ruta actual con los href de los enlaces
navLinks.forEach(link => {
    if (link.getAttribute('href').includes(currentPath)) {
        link.classList.add('active'); // Añadir la clase 'active' al enlace correspondiente
    } else {
        link.classList.remove('active'); // Asegurarse de que otros enlaces no tengan la clase 'active'
    }
});



