

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
    public class PhotoViewerController : ControllerBase
    {

        private readonly ILogger<PhotosController> _logger;
        private string filename;
        private string extension;
        private readonly IWebHostEnvironment _hostingEnviroment;
        private readonly ApplicationDbContext _dbContext;

        public PhotoViewerController(ILogger<PhotosController> logger, IWebHostEnvironment hostingEnvironment,
             ApplicationDbContext db)
        {
            _logger = logger;
            _hostingEnviroment = hostingEnvironment;
            _dbContext = db;
        }

        [HttpGet]
        public IEnumerable<Photo> Get()
        {
            var data = _dbContext.Photos.OrderBy(a => a.Source).ToList<Photo>();

            var photos = new List<Photo>();
            foreach(var photo in data)
            {
                var imageBytes = System.IO.File.ReadAllBytes(photo.Source);
                var imageBase64 = Convert.ToBase64String(imageBytes);
                photo.ImageB64 = $"data: image / png; base64, {imageBase64}";
                photos.Add(photo);
            }

            return photos.ToArray();
        }
    }
}

