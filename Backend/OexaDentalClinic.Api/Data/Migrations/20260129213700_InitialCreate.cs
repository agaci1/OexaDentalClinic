 using System; // Provides basic .NET types like DateTime
using Microsoft.EntityFrameworkCore.Migrations; // EF Core migration base classes
using MySql.EntityFrameworkCore.Metadata; // MySQL-specific metadata (identity columns)

#nullable disable // Disables nullable reference warnings for this file

namespace OexaDentalClinic.Api.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Sets database-level configuration
            // Defines the default MySQL character set
            migrationBuilder.AlterDatabase()
                .Annotation("MySQL:Charset", "utf8mb4");

            // Creates the Appointments table
            migrationBuilder.CreateTable(
                name: "Appointments",
                columns: table => new
                {
                    // Primary key with auto-increment
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),

                    // Patient first name (required)
                    FirstName = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false),

                    // Patient last name (required)
                    LastName = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false),

                    // Patient email address (required)
                    Email = table.Column<string>(type: "varchar(150)", maxLength: 150, nullable: false),

                    // Contact phone number (required)
                    PhoneNumber = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),

                    // Preferred appointment date and time
                    PreferredDateTime = table.Column<DateTime>(type: "datetime(6)", nullable: false),

                    // Requested dental service (required)
                    ServiceNeeded = table.Column<string>(type: "varchar(150)", maxLength: 150, nullable: false),

                    // Optional additional notes from the patient
                    AdditionalNotes = table.Column<string>(type: "longtext", nullable: true),

                    // Timestamp when the record was created
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    // Defines primary key constraint
                    table.PrimaryKey("PK_Appointments", x => x.Id);
                })
                // Sets table character set
                .Annotation("MySQL:Charset", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Drops the Appointments table when rolling back the migration
            migrationBuilder.DropTable(
                name: "Appointments");
        }
    }
}


// Migration = version control for database schema
// Up() → creates tables and columns
// Down() → rolls back changes
// utf8mb4 → full Unicode support in MySQL
// IdentityColumn → auto-increment primary key