Dentist Module
User Stories
As a dentist, I want to view my scheduled appointments so that I know which patients I will treat.
As a dentist, I want to accept or confirm appointments so that I can manage my schedule efficiently.
As a dentist, I want to mark an appointment as completed so that I can keep records up to date.
As a dentist, I want to view patient records and history so that I can provide accurate treatment.
As a dentist, I want to update treatments and diagnoses so that patient information is correct and complete.

Extended / Alternative Scenarios
If there are no scheduled appointments, the system displays: “No appointments scheduled.”
If a patient record is not found, the system shows an error message.
If there is an error updating treatment or diagnosis, the system shows an error message and allows retry.

Use Case: Manage Appointments and Treatments
Actor: Dentist

Main Flow:
Dentist logs into the system
Dentist views scheduled appointments
Dentist selects an appointment
Dentist accepts or confirms the appointment
Dentist views patient records and history
Dentist updates treatment and diagnosis
Dentist marks the appointment as completed
System saves all changes successfully

Alternative Flows:
No Appointments Available:
System displays: “No appointments scheduled”
Patient Record Not Found:
System displays error message
Error Saving Treatment/Diagnosis:
System displays error message
Dentist retries or edits information
