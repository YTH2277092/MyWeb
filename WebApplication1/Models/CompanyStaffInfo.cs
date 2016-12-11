using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    [Table("CompanyStaffInfo")]
    public class CompanyStaffInfo
    {
        public Guid ID { get; set; }
        public String FName { get; set; }
        public String Post { get; set; }
        public String Wage { get; set; }
        public Guid CompanyID { get; set; }
        public DateTime EnterTime { get; set; }
        public Guid ProvinceID { get; set; }
        public string Province { get; set; }
        public String Graduation { get; set; }
        public Guid? DepartmentID { get; set; }
        public string Code { get; set; }
        [NotMapped]
        public bool IsChecked { get; set; }
        public int? Num { get; set; }
    }
}