export class LoanDetails{
    loanId: number=0;
    applicantFirstName: string="";
    applicantLastName:string="";
    applicantAddress:string="";  
    loanType:string="";
    loanAmount:Number=0;
    loanTerm:string="";
    propertyAddress:string="";
    createdBy: Number=0;
    createdDate: Date = new Date();
    updatedBy: Number=0;
    updatedDate: Date=new Date();
}