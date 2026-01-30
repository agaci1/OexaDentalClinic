using System.ComponentModel.DataAnnotations;

namespace OexaDentalClinic.Api.Models
{
    public class Appointment
    {
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string FirstName { get; set; } = null!;

        [Required, MaxLength(100)]
        public string LastName { get; set; } = null!;

        [Required, EmailAddress, MaxLength(150)]
        public string Email { get; set; } = null!;

        [Required, MaxLength(50)]
        public string PhoneNumber { get; set; } = null!;

        // Combined date + time (best practice for DB + sorting)
        [Required]
        public DateTime PreferredDateTime { get; set; }

        [Required, MaxLength(150)]
        public string ServiceNeeded { get; set; } = null!;

        public string? AdditionalNotes { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
