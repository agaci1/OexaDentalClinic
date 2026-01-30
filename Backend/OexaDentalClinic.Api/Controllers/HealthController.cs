using Microsoft.AspNetCore.Mvc;

namespace OexaDentalClinic.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HealthController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
            => Ok(new { status = "OK", app = "OexaDentalClinic API" });
    }
}
