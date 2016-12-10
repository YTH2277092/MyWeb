using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        MyWebContext _db = new MyWebContext();

        public ActionResult PurchaseStorageBidd()
        {
            return View();
        }

        public ActionResult Index(string url)
        {
            ArrayList list = new ArrayList() {"1","2","3" };
            return Json(list,JsonRequestBehavior.AllowGet); 
        }

        //这是控制器，添加要显示的界面
        public ActionResult Login()
        {
            return View();
        }

        public ActionResult Main()
        {
            string user = Request["user"];
            string pass = Request["pass"];

            //判断用户名和密码是否对应
            bool isExit = _db.Logins.Any(p => p.UserName == user && p.Password == pass);

            if (isExit)
            {
                return View();
            }

            return RedirectToAction("Login", "Home");

        }

    }
}