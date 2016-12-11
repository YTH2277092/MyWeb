using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class BorderController : Controller
    {
        // GET: Border
        PSContext _db = new PSContext();
        int pageCount = 10;

        /// <summary>
        /// 获取所有信息
        /// </summary>
        /// <param name="skip"></param>
        /// <returns></returns>
        public ActionResult Index(string skip)
        {
            //ArrayList list = new ArrayList() {"1","2","3" };
            var list = _db.CompanyStaffInfo.OrderBy(p => p.EnterTime).Skip((Convert.ToInt32(skip) - 1) * pageCount).Take(pageCount).ToList();//.Select(p => p.FName);

            return Json(list, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 获取分页获取分页控件信息
        /// </summary>
        /// <returns></returns>
        public ActionResult GetInfo()
        {
            var totalRecords = _db.CompanyStaffInfo.ToList().Count();
            var total = totalRecords % pageCount == 0 ? totalRecords / pageCount : totalRecords / pageCount + 1;
            var pageNo = totalRecords > 0 ? 1 : 0;

            var info = new { Total = total, TotalRecords = totalRecords, PageNo = pageNo };
            return Json(info, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// Border视图
        /// </summary>
        /// <returns></returns>
        public ActionResult Border()
        {
            return View();
        }

        /// <summary>
        /// StaffInfo视图
        /// </summary>
        /// <returns></returns>
        public ActionResult StaffInfo()
        {
            return View();
        }

    }
}