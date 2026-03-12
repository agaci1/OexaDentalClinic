using Microsoft.EntityFrameworkCore; // Provides EF Core database configuration
using OexaDentalClinic.Api.Data; // AppDbContext reference

// Creates the WebApplication builder (reads args, config, services)
var builder = WebApplication.CreateBuilder(args);

// Registers MVC controllers
builder.Services.AddControllers();

// Enables minimal API endpoint discovery (used by Swagger)
builder.Services.AddEndpointsApiExplorer();

// Registers Swagger/OpenAPI generator
builder.Services.AddSwaggerGen();

// CORS configuration to allow requests from the frontend  
//Cross origin resource sharing
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
        policy.AllowAnyOrigin()   // Allows requests from any origin
              .AllowAnyHeader()   // Allows any request headers
              .AllowAnyMethod()); // Allows any HTTP method (GET, POST, PUT, DELETE)
});

// Reads connection string from appsettings.json
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Registers AppDbContext with MySQL provider
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySQL(connectionString!)
);

var app = builder.Build();

// Enables Swagger UI only in Development environment
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();    // Generates Swagger JSON
    app.UseSwaggerUI();  // Provides Swagger UI
}

// Applies the CORS policy globally
app.UseCors("AllowFrontend");

// Enables authorization middleware
//middleware modifikon , kontrollon request dhe response
app.UseAuthorization();

// Maps controller routes (attribute routing)
app.MapControllers();

// Starts the application
app.Run();


//Program.cs configures services, middleware, and application startup behavior.