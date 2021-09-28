

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MySite.Data;
using MySite.Models;
using Newtonsoft.Json.Linq;
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
        private readonly IWebHostEnvironment _hostingEnviroment;
        private readonly ApplicationDbContext _dbContext;

        public PhotosController(ILogger<PhotosController> logger, IWebHostEnvironment hostingEnvironment,
             ApplicationDbContext db)
        {
            _logger = logger;
        }
    }
}

