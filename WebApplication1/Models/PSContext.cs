using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class PSContext : DbContext
    {
        public PSContext() : base("name=PSContext") { }


        public DbSet<MailModel> Mails { get; set; }

        public DbSet<Login> Logins { get; set; }

        public DbSet<CompanyStaffInfo> CompanyStaffInfo { get; set; }
           

    }
}