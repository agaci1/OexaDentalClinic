document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointmentForm');
    if (!appointmentForm) return;

    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const preferredDate = document.getElementById('preferredDate').value;
        const preferredTime = document.getElementById('preferredTime').value;
        const service = document.getElementById('service').value;

        if (!firstName || !lastName || !email || !phone || !preferredDate || !preferredTime || !service) {
            alert('Please fill in all required fields before submitting.');
            return;
        }

        alert('Appointment added succesfully!');
        appointmentForm.reset();
    });
});
