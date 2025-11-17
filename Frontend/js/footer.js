// Footer Component
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    
    if (footer) {
        footer.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <h5>Oexa Dental Clinic</h5>
                        <p>Your trusted partner in dental health and wellness. We are committed to providing exceptional dental care.</p>
                    </div>
                    <div class="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 mb-3">
                        <h5>Contact Info</h5>
                        <p>123 Dental Street<br>City, State 12345<br>Phone: (555) 123-4567<br>Email: info@oexadental.com</p>
                    </div>
                </div>
                <hr class="my-4">
                <div class="text-center">
                    <p>&copy; ${new Date().getFullYear()} Oexa Dental Clinic. All rights reserved.</p>
                </div>
            </div>
        `;
    }
});

