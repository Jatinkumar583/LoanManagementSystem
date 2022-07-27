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
    [Route("api/user")]
    [ApiController]
    public class UserDataController : ControllerBase
    {
        private readonly IUserDetails _userDetails;
        public UserDataController(IUserDetails userDetails)
        {
            _userDetails = userDetails;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("getuserdetails")]
        public IActionResult GetUserDetails(User user)
        {
            try
            {
                if (user != null)
                {
                    return Ok(_userDetails.GetUserDetails(user));
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }        
        }
    }
}
