
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MySite.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MySite.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class PhotosController : ControllerBase
    {

        private readonly ILogger<PhotosController> _logger;
        private string filename;
        private string extension;

        public PhotosController(ILogger<PhotosController> logger)
        {
            _logger = logger;
        }
	}
}

