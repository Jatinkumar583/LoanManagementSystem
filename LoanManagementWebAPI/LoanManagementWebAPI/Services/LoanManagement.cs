using LoanManagementWebAPI.Models;
using LoanManagementWebAPI.ViewModels;
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

        public int SaveLoanRecord(LoanDetails loanDetails)
        {
            try
            {
                #region Inserting record to LoanDetail table
                TblLoanDetail tblLoanDetail = new TblLoanDetail()
                {
                    ApplicantFirstName = loanDetails.ApplicantFirstName,
                    ApplicantLastName = loanDetails.ApplicantLastName,
                    ApplicantAddress = loanDetails.ApplicantAddress,
                    CreatedBy = loanDetails.CreatedBy,
                    CreatedDate = DateTime.UtcNow,
                    UpdatedBy=loanDetails.UpdatedBy,
                    UpdatedDate=DateTime.UtcNow                   
                };
                _loanManagementContext.TblLoanDetails.Add(tblLoanDetail);
                _loanManagementContext.SaveChanges();
                int newLoanId = tblLoanDetail.LoanId;
                #endregion

                return newLoanId;
            }
            catch (Exception)
            {

                return 0;
            }
        }
    }
}
