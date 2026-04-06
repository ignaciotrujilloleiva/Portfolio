// Inicializar animaciones AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Cambio de color de Navbar al hacer scroll
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.style.padding = "0.5rem 0";
        nav.style.borderBottom = "1px solid rgba(59, 130, 246, 0.3)";
    } else {
        nav.style.padding = "1rem 0";
        nav.style.borderBottom = "none";
    }
});

// Smooth Scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Cerrar menú hamburguesa en móvil al hacer click
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        }
    });
});