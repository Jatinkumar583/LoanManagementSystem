import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoanDetails } from '../models/loandetails';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event.service';
import { FilterPanelService } from '../services/filterpanel';

@Component({
  selector: 'app-viewloan',
  templateUrl: './viewloan.component.html',
  styleUrls: ['./viewloan.component.css']
})
export class ViewloanComponent implements OnInit {
  @ViewChild('ManageloanComponent', {static : false}) filterPanel: any;
  loanRecord:LoanDetails=new LoanDetails();
  constructor(public filterPanelService: FilterPanelService,private _router: Router,
    private _eventService: EventService,private _authService:AuthService,public datepipe: DatePipe) {
    
  }

  ngOnInit(): void {
    this.loanRecord=this.filterPanelService.SelectedLoanDetails;    
  }

  UpdateLoanDetails(){
  this.loanRecord.loanAmount=Number(this.loanRecord.loanAmount);
  this._eventService.UpdateLoanRecord(this.loanRecord).subscribe(res=>this.OnSuccess(res),res=>this.OnError(res));
  }
  DeleteLoanRecord(){
    this._eventService.DeleteLoanRecord(this.loanRecord.loanId).subscribe(res=>this.OnSuccessDelete(res),res=>this.OnError(res));
  }  
  OnSuccessDelete(res:any){    
    Swal.fire({  
      position: 'center',  
      icon: 'success',  
      text: 'Record Deleted Successfully!'
    })
    this._router.navigate(['/manageloan']);   
  }
  OnSuccess(res:any){    
    Swal.fire({  
      position: 'center',  
      icon: 'success',  
      text: 'Record Updated Successfully!'
    }) 
  }
  OnError(res:any){     
    Swal.fire({  
      position: 'center',  
      icon: 'error',  
      title: 'Oops...',  
      text: 'Something went wrong!'
    })  
  }



}
