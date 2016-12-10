using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class MailService
    {
        private Db_Context _db;
        public MailService()
        {
            _db = new Db_Context();
        }

        #region 查看信息
        /// <summary>
        /// 根据ID获取Title
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string GetTitleByID(Guid id)
        {
            return _db.Mails.Where(p => p.ID == id).Select(p => p.Title).FirstOrDefault();
        }

        /// <summary>
        /// 根据ID获取Text
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string GetTextByID(Guid id)
        {
            return _db.Mails.Where(p => p.ID == id).Select(p => p.Text).FirstOrDefault();
        }
        #endregion

        /// <summary>
        /// 根绝ID获取Time
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public DateTime GetTimeByID(Guid id)
        {
            return _db.Mails.Where(p => p.ID == id).Select(p => p.Time).FirstOrDefault();
        }

        #region 回复
        #endregion

        #region 转发
        #endregion

        #region 附件
        #endregion

    }

}