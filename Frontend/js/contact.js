// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (validateForm(formData)) {
                // Here you would typically send the data to a server
                // For now, we'll just show an alert
                alert('Thank you for your message! We will get back to you soon.');
                
                // Reset form
                contactForm.reset();
            } else {
                alert('Please fill in all fields correctly.');
            }
        });
    }
});

// Form validation
function validateForm(data) {
    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.subject || !data.message) {
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(data.phone)) {
        return false;
    }
    
    return true;
}

