using LoanManagementWebAPI.Models;
using LoanManagementWebAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementWebAPI.Services
{
    public class UserDetails : IUserDetails
    {
        LoanManagementContext _loanManagementContext;
        public UserDetails(LoanManagementContext loanManagementContext)
        {
            _loanManagementContext = loanManagementContext;
        }
        public TblUserDatum GetUserDetails(User user)
        {
            return _loanManagementContext.TblUserData.Where(x => x.EmailId == user.EmailId).FirstOrDefault();
        }
    }
}
