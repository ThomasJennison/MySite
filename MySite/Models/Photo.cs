using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MySite.Models
{
    public class Photo
    {
        public DateTime DateTaken { get; set; }
        public string PhotoName { get; set; }
        public string PhotoPath { get; set; }
    }
}
