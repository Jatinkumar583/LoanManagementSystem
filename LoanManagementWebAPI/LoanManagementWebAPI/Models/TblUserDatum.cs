using System;
using System.Collections.Generic;

#nullable disable

namespace LoanManagementWebAPI.Models
{
    public partial class TblUserDatum
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string EmailId { get; set; }
        public string Password { get; set; }
        public string LoginType { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public int? UpdatedBy { get; set; }
    }
}
