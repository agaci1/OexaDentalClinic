using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OexaDentalClinic.Api.Data;
using OexaDentalClinic.Api.DTOs;
using OexaDentalClinic.Api.Models;
using System.Globalization;

namespace OexaDentalClinic.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppointmentsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public AppointmentsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateAppointmentDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var dateFormats = new[] { "dd.MM.yyyy", "d.M.yyyy", "yyyy-MM-dd" };
            if (!DateTime.TryParseExact(dto.PreferredDate, dateFormats,
                    CultureInfo.InvariantCulture, DateTimeStyles.None, out var datePart))
            {
                return BadRequest(new { error = "Invalid PreferredDate format. Use dd.MM.yyyy or yyyy-MM-dd." });
            }

            var timeFormats = new[] { "HH:mm", "H:mm" };
            if (!DateTime.TryParseExact(dto.PreferredTime, timeFormats,
                    CultureInfo.InvariantCulture, DateTimeStyles.None, out var timePart))
            {
                return BadRequest(new { error = "Invalid PreferredTime format. Use HH:mm (e.g., 09:30)." });
            }

            var preferredDateTime = new DateTime(
                datePart.Year, datePart.Month, datePart.Day,
                timePart.Hour, timePart.Minute, 0,
                DateTimeKind.Local
            );

            var appointment = new Appointment
            {
                FirstName = dto.FirstName.Trim(),
                LastName = dto.LastName.Trim(),
                Email = dto.Email.Trim(),
                PhoneNumber = dto.PhoneNumber.Trim(),
                PreferredDateTime = preferredDateTime,
                ServiceNeeded = dto.ServiceNeeded.Trim(),
                AdditionalNotes = string.IsNullOrWhiteSpace(dto.AdditionalNotes) ? null : dto.AdditionalNotes.Trim()
            };

            _db.Appointments.Add(appointment);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = appointment.Id }, appointment);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _db.Appointments
                .OrderBy(a => a.PreferredDateTime)
                .ToListAsync();

            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var appt = await _db.Appointments.FindAsync(id);
            if (appt == null) return NotFound();
            return Ok(appt);
        }
    }
}
