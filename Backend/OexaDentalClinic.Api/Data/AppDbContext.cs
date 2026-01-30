using Microsoft.EntityFrameworkCore;
using OexaDentalClinic.Api.Models;

namespace OexaDentalClinic.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Appointment> Appointments => Set<Appointment>();
    }
}
