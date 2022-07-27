using LoanManagementWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementWebAPI.Services
{
    public interface ILoanManagement
    {
        TblLoanDetail GetLoanRecordsById(int loanId);
        int SaveLoanRecord(TblLoanDetail tblLoanDetail);
        int CancelLoanRecord(int loanId);
    }
}
