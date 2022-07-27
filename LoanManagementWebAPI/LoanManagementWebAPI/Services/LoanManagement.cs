using LoanManagementWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementWebAPI.Services
{
    public class LoanManagement : ILoanManagement
    {
        LoanManagementContext _loanManagementContext;
        public LoanManagement(LoanManagementContext loanManagementContext)
        {
            _loanManagementContext = loanManagementContext;
        }
        public int CancelLoanRecord(int loanId)
        {
            throw new NotImplementedException();
        }

        public TblLoanDetail GetLoanRecordsById(int loanId)
        {
            return _loanManagementContext.TblLoanDetails.Where(x => x.LoanId == loanId).FirstOrDefault();
        }

        public int SaveLoanRecord(TblLoanDetail tblLoanDetail)
        {
            throw new NotImplementedException();
        }
    }
}
