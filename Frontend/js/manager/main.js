document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || '';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(link) {
        const href = link.getAttribute('href') || '';
        if (href.split('/').pop() === currentPage) {
            link.classList.add('active');
        }
    });
});

