User Scenarios

1. Generate Bill
Actor: Dentist

Dentist creates a bill for the completed treatment
System calculates the total amount
Bill is saved and shown to the patient

2. Process Payment

Dentist selects the unpaid invoice
Patient pays the invoice
System records the payment
Payment status is updated

3. View Payment Status

Dentist opens the payment section
System displays whether the invoice is paid or unpaid

Extended Scenarios

Payment failed → error message displayed
Invalid amount → payment rejected
Invoice not found → system shows error

Use Case: Process Payment
Actor: Dentist
Precondition: A bill/invoice must already exist
Main Flow:
Select invoice
Enter payment details
Confirm payment
System verifies and saves payment
Postcondition: Payment is completed and status is updated