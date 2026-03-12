using Microsoft.EntityFrameworkCore; // Provides DbContext and EF Core features
using OexaDentalClinic.Api.Models; // Access to entity models (Appointment)

namespace OexaDentalClinic.Api.Data
{
    // Application database context
    // Acts as a bridge between the database and the C# application
    public class AppDbContext : DbContext
    {
        // Constructor used by dependency injection
        // Receives database configuration (connection string, provider, etc.)
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // Represents the Appointments table in the database
        // EF Core maps the Appointment entity to this DbSet
        public DbSet<Appointment> Appointments => Set<Appointment>();
    }
}
