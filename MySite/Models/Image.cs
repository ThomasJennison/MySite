using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MySite.Models
{
    public class Image
    {
        public int Id { get; set; }

        public string FileName { get; set; }

        public byte[] Picture { get; set; }

        public List<ApplicationUser> Users { get; set; }
    }
}
