Dentist Module
User Stories
As a dentist, I want to view my schedule so that I can see all upcoming appointments.
As a dentist, I want to accept or confirm appointments so that I can manage my availability.
As a dentist, I want to add treatment details so that patient records are updated properly.

Extended / Alternative Scenarios
If there are no appointments, the system should display a message like “No appointments scheduled.”
If there is an error saving treatment, the system should show an error message and allow retry.

Use Case: Manage Appointments
Actor: Dentist

Main Flow:
Dentist logs into the system
Dentist views schedule
Dentist selects an appointment
Dentist accepts/confirms the appointment
Dentist adds treatment details
System saves the treatment successfully

Alternative Flows:
No Appointments:
→ System shows “No appointments available”
Error Saving Treatment:
→ System shows error message
→ Dentist retries saving or edits data
