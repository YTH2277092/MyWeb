using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    [Table("MyWebs")]
    public class MyWeb
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Director { get; set; }
        public DateTime Date { get; set; }
    }

    [Table("Login")]
    public class Login
    {
        public Guid ID { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool IsRemembered { get; set; }
    }

    public class MyWebContext : DbContext
    {
        public DbSet<MyWeb> Webs { get; set; }
        public DbSet<Login> Logins { get; set; }
    }

}