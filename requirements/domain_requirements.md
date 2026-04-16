# Domain Requirements

Domain requirements are constraints that come from the dental healthcare domain. They define rules, regulations, and practices that must be followed by the system to ensure correct operation within a real dental clinic environment.

---

## Patient Data & Medical Rules
- The system shall ensure that all patient medical data is stored securely and confidentially.
- The system shall restrict access to patient medical records only to authorized dental staff.
- The system shall maintain a complete medical history for each patient.
- The system shall ensure that sensitive health information is not exposed to unauthorized users.

---

## Appointment Management Rules
- The system shall not allow overlapping appointments for the same dentist.
- The system shall ensure that appointments can only be booked within available time slots.
- The system shall enforce clinic working hours for all appointment bookings.
- The system shall allow appointment cancellation only before the scheduled start time.
- The system shall ensure that each appointment is assigned to exactly one dentist and one patient.

---

## Dentist Operational Rules
- The system shall ensure that each dentist has a defined working schedule.
- The system shall prevent booking appointments outside dentist availability.
- The system shall allow dentists to update the status of appointments (booked, in progress, completed, cancelled).
- The system shall ensure that treatment records are linked to the correct appointment.

---

## Clinic Workflow Rules
- The system shall maintain a consistent workflow from booking to completion of treatment.
- The system shall ensure that no appointment can be marked as completed without being attended.
- The system shall maintain historical records of all appointments for auditing purposes.

---

## Legal and Healthcare Compliance
- The system shall comply with healthcare data protection regulations (e.g., GDPR).
- The system shall ensure patient confidentiality at all times.
- The system shall maintain secure storage and transmission of all medical data.
