# Domain Requirements

Domain requirements are constraints that come from the dental healthcare domain. They define rules, regulations, and professional practices that must be followed to ensure correct operation within a real dental clinic environment.

### Patient Data & Medical Rules
- The system shall ensure that all patient medical data is stored securely and confidentially.
- The system shall restrict access to patient medical records only to authorized dental staff.
- The system shall maintain a complete medical history for each patient, including treatments, diagnoses, and visit history.
- The system shall ensure that sensitive health information is never exposed to unauthorized users.
- The system shall allow patients to view only their own medical and appointment data.
- The system shall ensure data integrity so that patient records cannot be altered without authorization.
- The system shall support audit logs for all actions performed on patient data.

### Appointment Management Rules
- The system shall not allow overlapping appointments for the same dentist.
- The system shall ensure that appointments can only be booked within available time slots.
- The system shall enforce clinic working hours for all appointment bookings.
- The system shall allow appointment cancellation only before the scheduled start time.
- The system shall ensure that each appointment is assigned to exactly one dentist and one patient.
- The system shall prevent booking appointments in the past.
- The system shall ensure that appointment duration is predefined based on treatment type.

### Dentist Operational Rules
- The system shall ensure that each dentist has a defined working schedule.
- The system shall prevent booking appointments outside dentist availability.
- The system shall allow dentists to update the status of appointments (booked, in progress, completed, cancelled).
- The system shall ensure that treatment records are linked to the correct appointment.
- The system shall allow dentists to add treatment notes after each appointment.
- The system shall ensure that only assigned dentists can modify patient treatment information.

### Clinic Workflow Rules
- The system shall maintain a consistent workflow from booking to completion of treatment.
- The system shall ensure that no appointment can be marked as completed without being attended.
- The system shall maintain historical records of all appointments for auditing purposes.
- The system shall support rescheduling instead of deleting appointments.
- The system shall track appointment lifecycle status (reserved, booked, in progress, completed, cancelled).

### Legal and Healthcare Compliance
- The system shall comply with healthcare data protection regulations (e.g., GDPR).
- The system shall ensure patient confidentiality at all times.
- The system shall maintain secure storage and transmission of all medical data.
- The system shall ensure that data is retained only for a legally required period.
- The system shall support user consent for storing medical information.
