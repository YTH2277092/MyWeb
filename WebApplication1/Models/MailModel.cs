using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    [Table("Mail_Mails")]
    public class MailModel
    {
        public Guid ID { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public DateTime Time { get; set; }
        [Required]
        public bool HaveAtch { get; set; }
        public bool HaveAtch2 { get; set; }

        [Required]
        public int InternetState { get; set; }
        public string InternetRecvers { get; set; }
        public bool IsInternetMail { get; set; }
        public string InternetSender { get; set; }
    }
}