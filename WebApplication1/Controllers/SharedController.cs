using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class SharedController : Controller
    {
        public ActionResult MyPage()
        {
            return View();
        }

        public ActionResult Border()
        {
            return View();
        }

    }
}