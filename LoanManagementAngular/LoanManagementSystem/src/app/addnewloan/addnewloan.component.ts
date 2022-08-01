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
    this.newLoanRec.createdDate=new Date();
    this.newLoanRec.createdBy=Number(localStorage.getItem('userid')!);
    this.newLoanRec.updatedBy=Number(localStorage.getItem('userid')!);
    this.newLoanRec.updatedDate=new Date();   
    this._eventService.AddNewLoan(this.newLoanRec).subscribe(res=>this.SuccessGet(res),res=>this.ErrorGet(res));    
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

}
