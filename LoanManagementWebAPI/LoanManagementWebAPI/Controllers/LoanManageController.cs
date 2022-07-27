using LoanManagementWebAPI.Services;
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

        //[HttpPost("booking/flightdetails")]
        //public IActionResult SaveLoanDetails(BookingDetails bookingDetail)
        //{
        //    try
        //    {
        //        if (bookingDetail != null)
        //        {
        //            int bookStatus = _loanManagement.BookFlight(bookingDetail);
        //            if (bookStatus == 1)
        //            {
        //                return Ok("Flight Booked Successfully.");
        //            }
        //            else
        //            {
        //                return BadRequest("Flight Not Booked.");
        //            }
        //        }
        //        return BadRequest();
        //    }
        //    catch
        //    {
        //        return BadRequest();
        //    }

        //}

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
