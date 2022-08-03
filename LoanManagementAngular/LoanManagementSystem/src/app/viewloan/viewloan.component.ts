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
  loanExistingDate:string="";
  constructor(public filterPanelService: FilterPanelService,private _router: Router,
    private _eventService: EventService,private _authService:AuthService,public datepipe: DatePipe) {
    
  }

  ngOnInit(): void {
    this.loanRecord=this.filterPanelService.SelectedLoanDetails; 
    this.loanExistingDate = this.datepipe.transform((this.loanRecord.createdDate), 'dd/MM/yyyy h:mm:ss')!;
  }

  UpdateLoanDetails(){
    if(String(this.loanRecord.loanAmount)[0]!="0"){
      this.loanRecord.loanAmount=Number(this.loanRecord.loanAmount);
      this._eventService.UpdateLoanRecord(this.loanRecord).subscribe(res=>this.OnSuccess(res),res=>this.OnError(res));
    }
    else{
      Swal.fire({  
        position: 'center',  
        icon: 'error',  
        title: 'Oops...',  
        text: 'Invalid loan amount!'
      }) 
    } 
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
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }


}
