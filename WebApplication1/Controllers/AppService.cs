using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class AppService
    {
        private MyWebContext _db;

        public AppService()
        {
            _db = new MyWebContext();
        }

        public string GetTitleByID(int id)
        {
            return _db.Webs.Where(p => p.ID == id).Select(p => p.Title).FirstOrDefault();
        }
    }
}