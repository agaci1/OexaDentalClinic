| Field                           | Description                                        |
| ------------------------------- | -------------------------------------------------- |
| **UC Name**                     | UC_03 – Book Appointment                           |
| **Summary**                     | Patient books appointment                          |
| **Dependency**                  | Includes: Check Availability                       |
| **Actors**                      | Patient                                            |
| **Preconditions**               | User logged in                                     |
| **Main Sequence**               | Select dentist; choose time; confirm; system saves |
| **Alternative Sequence**        | Slot unavailable → error                           |
| **Non-functional requirements** | Performance; reliability                           |
| **Postconditions**              | Appointment created                                |
