using LoanManagementWebAPI.Models;
using LoanManagementWebAPI.Services;
using LoanManagementWebAPI.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementWebAPI.Controllers
{
    [Authorize]   
    [Route("api")]
    [ApiController]
    public class LoanManageController : ControllerBase
    {
        ILoanManagement _loanManagement;
        public LoanManageController(ILoanManagement loanManagement)
        {
            _loanManagement = loanManagement;
        }

        [HttpGet("loan/{loanId}")]
        public IActionResult GetLoanDetailsById(int loanId)
        {
            try
            {
                return Ok(_loanManagement.GetLoanRecordsById(loanId));
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("loan/list")]
        public IActionResult GetLoansList()
        {
            try
            {
                return Ok(_loanManagement.GetAllLoanRecords());
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost("loan/saveloandetails")]
        public IActionResult SaveLoanDetails(LoanDetails loanDetails)
        {
            try
            {
                if (loanDetails != null)
                {
                   
                    int status = _loanManagement.SaveLoanRecord(loanDetails);
                    if (status >= 1)
                    {
                        return Ok();
                    }
                    else
                    {
                        return BadRequest();
                    }
                }
                return BadRequest();
            }
            catch
            {
                return BadRequest();
            }

        }

        [HttpPost("loan/loandetails/update")]
        public IActionResult UpdateLoanDetails(TblLoanDetail tblLoanDetail)
        {
            try
            {
                if (tblLoanDetail != null)
                {
                    var addStatus = _loanManagement.UpdateLoanRecord(tblLoanDetail);
                    if (addStatus == 1)
                    {
                        return Ok();
                    }
                    else
                    {
                        return BadRequest();
                    }
                }
                return BadRequest();
            }
            catch
            {
                return BadRequest();
            }

        }

        [HttpDelete("loan/deleteloandetails/{loanId}")]
        public IActionResult DeleteLoanDetails(int loanId)
        {
            try
            {
                int cancelStatus = _loanManagement.CancelLoanRecord(loanId);
                if (cancelStatus == 1)
                {
                    return Ok();
                }
                else
                {
                    return BadRequest();
                }
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
