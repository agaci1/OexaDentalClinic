// Navbar Component
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navbar.innerHTML = `
            <div class="container">
                <a class="navbar-brand" href="index.html">Oexa Dental Clinic</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'index.html' ? 'active' : ''}" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'about.html' ? 'active' : ''}" href="about.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'services.html' ? 'active' : ''}" href="services.html">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'contact.html' ? 'active' : ''}" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
});

