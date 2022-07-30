using LoanManagementWebAPI.Models;
using LoanManagementWebAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementWebAPI.Services
{
    public interface ILoanManagement
    {
        TblLoanDetail GetLoanRecordsById(int loanId);
        List<TblLoanDetail> GetAllLoanRecords();
        int SaveLoanRecord(LoanDetails tblLoanDetail);
        int UpdateLoanRecord(TblLoanDetail tblLoanDetail);
        int CancelLoanRecord(int loanId);
    }
}
