using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementWebAPI.ViewModels
{
    public class UserRegistDetails
    {
        public string UserName { get; set; }
        public string EmailId { get; set; }
        public string Password { get; set; }
        public string LoginType { get; set; }
    }
}
