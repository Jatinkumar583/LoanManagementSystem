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
            try
            {
                #region Deleting from tblloan table
                var itemToRemove = _loanManagementContext.TblLoanDetails.SingleOrDefault(x => x.LoanId == loanId);
                if (itemToRemove != null)
                {
                    _loanManagementContext.TblLoanDetails.Remove(itemToRemove);
                    _loanManagementContext.SaveChanges();
                }
                #endregion
                return 1;
            }
            catch (Exception ex)
            {
                return 0;
            }

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
                    UpdatedBy = loanDetails.UpdatedBy,
                    UpdatedDate = DateTime.UtcNow
                };
                _loanManagementContext.TblLoanDetails.Add(tblLoanDetail);
                _loanManagementContext.SaveChanges();
                int newLoanId = tblLoanDetail.LoanId;
                #endregion

                return newLoanId;
            }
            catch (Exception ex)
            {

                return 0;
            }
        }

        public int UpdateLoanRecord(TblLoanDetail tblLoanDetail)
        {
            try
            {
                #region Update tblloan table
                var entity = _loanManagementContext.TblLoanDetails.FirstOrDefault(item => item.LoanId == tblLoanDetail.LoanId);
                // Validate entity is not null
                if (entity != null)
                {
                    // Make changes on entity
                    entity.ApplicantFirstName = tblLoanDetail.ApplicantFirstName;
                    entity.ApplicantLastName = tblLoanDetail.ApplicantLastName;
                    entity.ApplicantAddress = tblLoanDetail.ApplicantAddress;
                    entity.UpdatedBy = tblLoanDetail.UpdatedBy;
                    entity.UpdatedDate = DateTime.UtcNow;

                    // Save changes in database
                    _loanManagementContext.SaveChanges();
                    return 1;
                }
                else
                {
                    return 0;
                }

                #endregion
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
