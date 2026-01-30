using System.ComponentModel.DataAnnotations;

namespace OexaDentalClinic.Api.DTOs
{
    public class CreateAppointmentDto
    {
        [Required]
        public string FirstName { get; set; } = null!;

        [Required]
        public string LastName { get; set; } = null!;

        [Required, EmailAddress]
        public string Email { get; set; } = null!;

        [Required]
        public string PhoneNumber { get; set; } = null!;

        // Frontend sends date like "dd.mm.yyyy" or "yyyy-mm-dd"
        [Required]
        public string PreferredDate { get; set; } = null!;

        // Frontend sends time like "09:00" or "10:30"
        [Required]
        public string PreferredTime { get; set; } = null!;

        [Required]
        public string ServiceNeeded { get; set; } = null!;

        public string? AdditionalNotes { get; set; }
    }
}
