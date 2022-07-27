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
    [Route("api/user")]
    [ApiController]
    public class UserDataController : ControllerBase
    {
        private readonly IJWTManagerRepository _iJWTManager;
        private readonly IUserDetails _userDetails;
        public UserDataController(IJWTManagerRepository jWTManager,IUserDetails userDetails)
        {
            _iJWTManager = jWTManager;
            _userDetails = userDetails;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("authenticate")]
        public IActionResult Authenticate(User userdata)
        {
            var token = _iJWTManager.Authenticate(userdata);
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(token);
        }

        //[AllowAnonymous]
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

        [AllowAnonymous]
        [HttpPost]
        [Route("register")]
        public IActionResult UserRegistration(UserRegistDetails userdata)
        {
            _userDetails.RegisterUser(userdata);
            return Ok();
        }
    }
}
