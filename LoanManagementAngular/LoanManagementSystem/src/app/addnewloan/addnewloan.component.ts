import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoanDetails } from '../models/loandetails';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-addnewloan',
  templateUrl: './addnewloan.component.html',
  styleUrls: ['./addnewloan.component.css']
})
export class AddnewloanComponent implements OnInit {
  newLoanRec: LoanDetails = new LoanDetails();
//  SearchAirlineList: Array<AirlineInventory> = new Array<AirlineInventory>();
  constructor(private _eventService: EventService, private _router: Router) { }

  ngOnInit(): void {
  }

  SaveNewLoan() {
    if(String(this.newLoanRec.loanAmount)[0]!="0")  {      
    this.newLoanRec.loanAmount=Number(this.newLoanRec.loanAmount);
    this.newLoanRec.createdDate=new Date();
    this.newLoanRec.createdBy=Number(localStorage.getItem('userid')!);
    this.newLoanRec.updatedBy=Number(localStorage.getItem('userid')!);
    this.newLoanRec.updatedDate=new Date();   
    console.log(this.newLoanRec);
    this._eventService.AddNewLoan(this.newLoanRec).subscribe(res=>this.SuccessGet(res),res=>this.ErrorGet(res)); 
    }   
    else {
      Swal.fire({  
        position: 'center',  
        icon: 'error',  
        title: 'Oops...',  
        text: 'Invalid loan amount!'
      }) 
    }
  }

  SuccessGet(res:any){   
    Swal.fire({  
      position: 'center',  
      icon: 'success',  
      text: 'Loan Record Saved Successfully!'
    }) 
    this._router.navigate(['/manageloan']);   
  }
  ErrorGet(res:any){
       Swal.fire({  
      position: 'center',  
      icon: 'error',  
      title: 'Oops...',  
      text: 'Something went wrong!'
    })  
  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
