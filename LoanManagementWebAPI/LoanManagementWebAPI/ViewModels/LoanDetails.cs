﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementWebAPI.ViewModels
{
    public class LoanDetails
    {
        public string ApplicantFirstName { get; set; }
        public string ApplicantLastName { get; set; }
        public string ApplicantAddress { get; set; }
        public string LoanType { get; set; }
        public int? LoanAmount { get; set; }
        public string LoanTerm { get; set; }
        public string PropertyAddress { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
    }
}
