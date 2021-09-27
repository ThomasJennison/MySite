using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MySite.Data;
using MySite.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MySite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploaderController : ControllerBase
    {
        private readonly IWebHostEnvironment _hostingEnvironment;
        private readonly ILogger<UploaderController> _logger;
        private readonly ApplicationDbContext _db;
        public UploaderController(IWebHostEnvironment hostingEnvironment, ILogger<UploaderController> logger, ApplicationDbContext db)
        {
            _hostingEnvironment = hostingEnvironment;
            _logger = logger;
            _db = db;
        }

        [HttpPost]
        public dynamic UploadFile(IFormCollection form)
        {
            try
            {
                string projectRootPath = _hostingEnvironment.ContentRootPath;
                string path = Path.Combine(projectRootPath,"uploads");
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                    _logger.LogInformation($"Creating directory {path}");
                }

                foreach (var file in form.Files)
                {
                    string destinationPath = Path.Combine(path, file.FileName);
                    using (var fs = new FileStream(destinationPath, FileMode.CreateNew))
                    {
                        file.CopyToAsync(fs);
                    }

                    Photo photoRecord = new Photo()
                    {
                        
                    };
                    _db.Photos.Add(photoCast);
                }

                return new { Success = true };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return new { Success = false, ex.Message };
                
            }
        }
    }
}