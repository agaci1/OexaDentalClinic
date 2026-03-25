// ===============================
// Appointment Booking Script
// Oexa Dental Clinic
// This file handles the form submission
// and sends appointment data to the backend API
// ===============================

// Backend API base URL
const API_BASE_URL = "http://localhost:5095";

// Wait until the HTML page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Get the appointment form by ID
    const form = document.getElementById("appointmentForm");

    // Safety check in case the form ID changes
    if (!form) {
        console.error("Appointment form not found!");
        return;
    }

    // Listen for form submission
    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent page refresh

        // ===============================
        // Read values from input fields
        // ===============================
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phone").value.trim();
        const preferredDate = document.getElementById("preferredDate").value; // yyyy-mm-dd
        const preferredTime = document.getElementById("preferredTime").value; // HH:mm
        const serviceNeeded = document.getElementById("service").value;
        const additionalNotes = document.getElementById("message").value.trim();

        // ===============================
        // Simple client-side validation
        // ===============================
        if (
            !firstName ||
            !lastName ||
            !email ||
            !phoneNumber ||
            !preferredDate ||
            !preferredTime ||
            !serviceNeeded
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        // ===============================
        // Create object to send to backend
        // ===============================
        const appointmentData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            preferredDate: preferredDate,
            preferredTime: preferredTime,
            serviceNeeded: serviceNeeded,
            additionalNotes: additionalNotes || null
        };

        try {
            // ===============================
            // Send POST request to backend API
            // ===============================
            const response = await fetch(`${API_BASE_URL}/api/Appointments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(appointmentData)
            });

            // If request fails, show error
            if (!response.ok) {
                const errorText = await response.text();
                alert("Booking failed: " + errorText);
                return;
            }

            // Read response from backend
            const result = await response.json();

            // ===============================
            // Success message
            // ===============================
            alert(
                "Appointment booked successfully!\n" +
                "Name: " + result.firstName + " " + result.lastName + "\n" +
                "Service: " + result.serviceNeeded
            );

            // Reset the form after successful submission
            form.reset();

        } catch (error) {
            // Handle network or server errors
            console.error("Error:", error);
            alert("Unable to connect to server. Please try again later.");
        }
    });
});
