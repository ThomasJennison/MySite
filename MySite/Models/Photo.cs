using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MySite.Models
{
    public class Photo
    {
        [Key]
        public int PKPhotoID { get; set; }
        public string Source { get; set; }
        public long Size { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public Photo(string source, long size, int width, int height)
        {
            Source = source;
            Size = size;
            Width = width;
            Height = height;
        }
    }
}
