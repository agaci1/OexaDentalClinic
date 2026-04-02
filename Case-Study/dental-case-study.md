## Case Study – Dental Clinic Management System

# Overview
The Dental Clinic Management System is a software solution designed to manage the daily operations of a dental clinic. It allows patients, dentists, and administrative staff to interact efficiently by handling appointments, treatments, and clinic data.

# Actors
Patient – books appointments and views history
Dentist – manages appointments and treatments
Manager (Admin) – manages system data and reports
Marketer – manages promotions and communication

# Scenario 1 – Patient Books an Appointment
Initial Assumption
The patient has a registered account.

Normal Flow
The patient logs into the system.
The patient selects a dentist.
The patient chooses a date and time.
The system checks availability.
The appointment is saved in the database.
A confirmation email is sent to the patient.

What Can Go Wrong
The selected time slot is already booked.
A system or database error occurs.
The email fails to send.

System State on Completion
The appointment is stored and appears in:
the patient’s dashboard
the dentist’s schedule

# Scenario 2 – Dentist Completes an Appointment
Initial Assumption
The appointment exists and the patient arrives.

Normal Flow
The dentist opens the appointment list.
Selects the active appointment.
Performs the dental treatment.
Records:
diagnosis
treatment performed
recommendations
Marks the appointment as “Completed”.

What Can Go Wrong
The patient does not show up (no-show).
Data fails to save.
Technical issues occur.

System State on Completion
Appointment status is “Completed”
Patient medical history is updated

# Scenario 3 – Patient Views Appointment History
Initial Assumption
The patient has previous appointments.

Normal Flow
The patient logs into the system.
Navigates to “My Appointments”.
The system displays appointment history.
The patient can view details.

What Can Go Wrong
No appointments exist.
Data loading error occurs.

System State on Completion
The patient successfully views their appointment history.

# Scenario 4 – Manager Manages Dentists
Initial Assumption
The manager has admin access.

Normal Flow
The manager logs in.
Navigates to “Manage Dentists”.
Can:
add a new dentist
update dentist information
delete a dentist
The system saves changes.

What Can Go Wrong
Invalid input data
Database conflicts

System State on Completion
Dentist records are updated in the system.

# Scenario 5 – Manager Views Reports
Initial Assumption
The system contains operational data.

Normal Flow
The manager opens the dashboard.
Selects a report type:
number of appointments
revenue
most active dentists
The system generates and displays the report.

What Can Go Wrong
Insufficient data
Query or system error

System State on Completion
Reports are displayed correctly in the interface.

# Scenario 6 – Marketer Creates Promotion
Initial Assumption
The marketer has system access.

Normal Flow
The marketer logs in.
Creates a promotion (e.g., “Teeth Whitening -20%”).
Defines:
start and end date
target audience
The system saves and publishes the promotion.

What Can Go Wrong
Invalid dates
Promotion fails to activate

System State on Completion
The promotion is visible to users on the platform.

# Scenario 7 – Patient Cancels an Appointment
Initial Assumption
An appointment exists.

Normal Flow
The patient logs in.
Selects the appointment.
Clicks “Cancel”.
The system updates the status to “Cancelled”.
The dentist is notified.

What Can Go Wrong
Cancellation not allowed (too close to appointment time)
System error

System State on Completion
The appointment is no longer active.

# Scenario 8 – User Authentication (Login)
Initial Assumption
The user is registered.

Normal Flow
The user enters email and password.
The system validates credentials.
A token (e.g., JWT) is generated.
The user is redirected to their dashboard based on role.

What Can Go Wrong
Incorrect credentials
Token generation failure

System State on Completion
The user is authenticated and authorized.

## Conclusion
This system:
Improves clinic organization
Reduces manual errors
Enhances patient experience
Supports better decision-making through reports