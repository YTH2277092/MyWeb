using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class CheckTreeController : Controller
    {
        MyWebContext _db = new MyWebContext();

        // GET: CheckTree
        public ActionResult Tree()
        {
            return View();
        }

        public JsonResult GetAll()
        {
            var data = _db.Webs.Select(p => new {
                Title = p.Title,
            });

            return Json(data,JsonRequestBehavior.AllowGet);
        }

    }
}