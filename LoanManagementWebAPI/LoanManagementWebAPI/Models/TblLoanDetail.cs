﻿using System;
using System.Collections.Generic;

#nullable disable

namespace LoanManagementWebAPI.Models
{
    public partial class TblLoanDetail
    {
        public int LoanId { get; set; }
        public string ApplicantFirstName { get; set; }
        public string ApplicantLastName { get; set; }
        public string ApplicantAddress { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
    }
}
