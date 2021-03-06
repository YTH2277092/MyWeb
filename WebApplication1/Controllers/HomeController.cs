﻿using System;
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
        PSContext _db = new PSContext();
        int pageCount = 10;

        public ActionResult Index(string skip)
        {
            //ArrayList list = new ArrayList() {"1","2","3" };
            var list = _db.CompanyStaffInfo.OrderBy(p => p.EnterTime).Skip((Convert.ToInt32(skip) - 1) * pageCount).Take(pageCount).ToList();//.Select(p => p.FName);

            return Json(list,JsonRequestBehavior.AllowGet); 
        }

        public ActionResult GetInfo()
        {
            var totalRecords = _db.CompanyStaffInfo.ToList().Count();
            var total = totalRecords % pageCount == 0 ? totalRecords / pageCount : totalRecords / pageCount + 1;
            var pageNo = totalRecords > 0 ? 1 : 0;

            var info = new {Total = total,TotalRecords = totalRecords,PageNo = pageNo };
            return Json(info,JsonRequestBehavior.AllowGet);
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