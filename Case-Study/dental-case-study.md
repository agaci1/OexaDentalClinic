# Case Study – Dental Clinic Management System

## Scenario 1 – Patient Books an Appointment

Initial assumption:
The patient has an account in the system.

Normal flow:

1. The patient logs into the system.
2. The patient selects a dentist.
3. The patient chooses a date and time.
4. The system checks if the time slot is available.
5. The appointment is saved in the system.
6. The system sends a confirmation email to the patient.

What can go wrong:

* The selected time slot is already booked.
* A system error occurs.

System state on completion:
The appointment is successfully stored and appears in the dentist's schedule.

---

## Scenario 2 – Dentist Completes an Appointment
