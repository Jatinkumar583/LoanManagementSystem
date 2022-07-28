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
        public IActionResult GetLoanDetails(int loanId)
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

        [HttpPost("loan/saveloandetails")]
        public IActionResult SaveLoanDetails(LoanDetails loanDetails)
        {
            try
            {
                if (loanDetails != null)
                {
                   
                    int bookStatus = _loanManagement.SaveLoanRecord(loanDetails);
                    if (bookStatus == 1)
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

        //[HttpDelete("booking/cancel/{pnr}")]
        //public IActionResult DeleteLoanDetails(string pnr)
        //{
        //    try
        //    {
        //        int cancelStatus = _loanManagement.CancelBookedTicketByPNR(pnr);
        //        if (cancelStatus == 1)
        //        {
        //            return Ok();
        //        }
        //        else
        //        {
        //            return BadRequest();
        //        }
        //    }
        //    catch
        //    {
        //        return BadRequest();
        //    }
        //}
    }
}
