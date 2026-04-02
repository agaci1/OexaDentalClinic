document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const currentPage = window.location.pathname.split('/').pop() || '';

    function isActive(fileName) {
        return currentPage === fileName ? 'active' : '';
    }

    navbar.innerHTML = `
        <div class="container">
            <a class="navbar-brand" href="../user/index.html">OEXA Dental Clinic</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="../user/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../user/about.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../user/services.html">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../user/staff.html">Our Staff</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../user/book-appointment.html">Book Appointment</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../user/contact.html">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${isActive('admin-appointments.html')}" href="admin-appointments.html">Admin</a>
                    </li>
                </ul>
            </div>
        </div>
    `;
});

