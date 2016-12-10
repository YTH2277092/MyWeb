using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    [Table("MovieDBs")]
    public class MovieDB
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Director { get; set; }
        public DateTime Date { get; set; }
    }

    public class MovieDBContext : DbContext
    {
        public DbSet<MovieDB> Movies { get; set; }
    }

}