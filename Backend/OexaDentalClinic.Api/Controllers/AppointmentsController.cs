// Required ASP.NET Core MVC features (controllers, routing, responses)
using Microsoft.AspNetCore.Mvc;
// Entity Framework Core for database access
using Microsoft.EntityFrameworkCore;
// Application database context
using OexaDentalClinic.Api.Data;
// Data Transfer Objects (DTOs) 
using OexaDentalClinic.Api.DTOs;
// Database models (entities)
using OexaDentalClinic.Api.Models;
// Used for parsing date/time with specific formats
using System.Globalization;

namespace OexaDentalClinic.Api.Controllers
{
    // Marks this class as an API controller (automatic model validation, etc.)
    [ApiController]

    // Base route: api/appointments
    [Route("api/[controller]")]
    public class AppointmentsController : ControllerBase
    {
        // Database context instance
        private readonly AppDbContext _db;

        // Constructor injection of AppDbContext
        public AppointmentsController(AppDbContext db)
        {
            _db = db;
        }

        // POST: api/appointments
        // Creates a new appointment
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateAppointmentDto dto)
        {
            // Check if incoming DTO validation attributes failed
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // Allowed date formats from frontend
            var dateFormats = new[] { "dd.MM.yyyy", "d.M.yyyy", "yyyy-MM-dd" };

            // Try parsing the date string exactly
            if (!DateTime.TryParseExact(
                    dto.PreferredDate,
                    dateFormats,
                    CultureInfo.InvariantCulture,
                    DateTimeStyles.None,
                    out var datePart))
            {
                // Return error if date format is invalid
                return BadRequest(new
                {
                    error = "Invalid PreferredDate format. Use dd.MM.yyyy or yyyy-MM-dd."
                });
            }

            // Allowed time formats (24-hour clock)
            var timeFormats = new[] { "HH:mm", "H:mm" };

            // Try parsing the time string exactly
            if (!DateTime.TryParseExact(
                    dto.PreferredTime,
                    timeFormats,
                    CultureInfo.InvariantCulture,
                    DateTimeStyles.None,
                    out var timePart))
            {
                // Return error if time format is invalid
                return BadRequest(new
                {
                    error = "Invalid PreferredTime format. Use HH:mm (e.g., 09:30)."
                });
            }

            // Combine parsed date and time into one DateTime object
            var preferredDateTime = new DateTime(
                datePart.Year,
                datePart.Month,
                datePart.Day,
                timePart.Hour,
                timePart.Minute,
                0,
                DateTimeKind.Local
            );

            // Create Appointment entity from DTO
            var appointment = new Appointment
            {
                FirstName = dto.FirstName.Trim(), //It removes whitespace characters from the beginning and the end of a string.
                LastName = dto.LastName.Trim(),
                Email = dto.Email.Trim(),
                PhoneNumber = dto.PhoneNumber.Trim(),
                PreferredDateTime = preferredDateTime,
                ServiceNeeded = dto.ServiceNeeded.Trim(),

                // Store null if notes are empty or whitespace
                AdditionalNotes = string.IsNullOrWhiteSpace(dto.AdditionalNotes)
                    ? null
                    : dto.AdditionalNotes.Trim()
            };

            // Add appointment to database
            _db.Appointments.Add(appointment);

            // Save changes asynchronously
            await _db.SaveChangesAsync();

            // Return HTTP 201 Created with location header
            return CreatedAtAction(
                nameof(GetById),
                new { id = appointment.Id },
                appointment
            );
        }

        // GET: api/appointments
        // Returns all appointments ordered by date/time
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _db.Appointments
                .OrderBy(a => a.PreferredDateTime)
                .ToListAsync();

            return Ok(result);
        }

        // GET: api/appointments/{id}
        // Returns a single appointment by ID
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            // Find appointment by primary key
            var appt = await _db.Appointments.FindAsync(id);

            // Return 404 if not found
            if (appt == null)
                return NotFound();

            return Ok(appt);
        }
    }
}



// What this controller does (summary)
// Accepts appointment requests from frontend
// Validates date & time formats strictly
// Combines date + time into a single DateTime
// Saves appointment to database
// Allows:
// Create appointment
// Get all appointments
// Get appointment by ID
