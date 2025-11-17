// Appointment Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointmentForm');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                preferredDate: document.getElementById('preferredDate').value,
                preferredTime: document.getElementById('preferredTime').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (validateAppointmentForm(formData)) {
                // Here you would typically send the data to a server
                // For now, we'll just show an alert
                alert('Thank you for booking an appointment! We will contact you within 24 hours to confirm your appointment.');
                
                // Reset form
                appointmentForm.reset();
            } else {
                alert('Please fill in all required fields correctly.');
            }
        });
    }
});

// Form validation
function validateAppointmentForm(data) {
    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.preferredDate || !data.preferredTime || !data.service) {
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
    
    // Date validation - check if date is not in the past
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        alert('Please select a future date.');
        return false;
    }
    
    return true;
}

