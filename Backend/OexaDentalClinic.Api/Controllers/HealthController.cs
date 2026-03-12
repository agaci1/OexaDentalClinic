// Provides base classes and attributes for building API controllers
using Microsoft.AspNetCore.Mvc;

namespace OexaDentalClinic.Api.Controllers
{
    // Marks this class as an API controller
    // Enables features like automatic 400 responses and model binding
    [ApiController]

    // Sets the route to: api/health
    // [controller] is replaced by the controller name (Health)
    [Route("api/[controller]")]
    public class HealthController : ControllerBase
    {
        // Handles HTTP GET requests
        // Endpoint: GET api/health
        [HttpGet]
        public IActionResult Get()
            // Returns HTTP 200 OK with a small JSON response
            // Used to verify that the API is running and reachable
            => Ok(new
            {
                status = "OK",               // Health status
                app = "OexaDentalClinic API" // Application identifier
            });
    }
}

// Acts as a health check endpoint
// Confirms that:
// The API is running
// Routing works
// The server responds correctly
// Commonly used by:
// Frontend apps
// Load balancers
// Deployment platforms (Railway, Docker, Azure, etc.)