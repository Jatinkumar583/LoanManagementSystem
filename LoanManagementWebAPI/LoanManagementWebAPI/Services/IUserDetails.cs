﻿using LoanManagementWebAPI.Models;
using LoanManagementWebAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementWebAPI.Services
{
    public interface IUserDetails
    {
        void RegisterUser(UserRegistDetails users);
        TblUserDatum GetUserDetails(User user);
    }
}
