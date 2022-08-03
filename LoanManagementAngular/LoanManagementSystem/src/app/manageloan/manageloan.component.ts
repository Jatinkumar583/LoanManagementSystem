import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoanDetails } from '../models/loandetails';
import { EventService } from '../services/event.service';
import { FilterPanelService } from '../services/filterpanel';

@Component({
  selector: 'app-manageloan',
  templateUrl: './manageloan.component.html',
  styleUrls: ['./manageloan.component.css']
})
export class ManageloanComponent implements OnInit {

  loanRecords:Array<LoanDetails>=new Array<LoanDetails>(); 
  girdLoanList: Array<LoanDetails> = new Array<LoanDetails>();
  descLoanList: Array<LoanDetails> = new Array<LoanDetails>();
  showlblgridmsg:boolean=false;
  constructor(private _eventService: EventService,private _router: Router,public filterPanelService:FilterPanelService) { }

  ngOnInit(): void {
    this._eventService.GetLoansList().subscribe(res => this.SuccessGet(res), err => (console.log(err),this._router.navigate(['/login'])));
  }

  SuccessGet(res:any){     
    this.girdLoanList=res;  
    if(this.girdLoanList.length==0){
      this.showlblgridmsg=true;
    }
    else{
      this.showlblgridmsg=false;
    }  
  }

  GetAllLoanRecords(data: any) {    
    // var userEmailId=localStorage.getItem('emailId')!;
    this._eventService.GetLoansList().subscribe(res => this.loanRecords = res, err => (console.log(err),this._router.navigate(['/login'])));
   
    this.girdLoanList = this.loanRecords.filter(function (item) {
      return item.applicantFirstName.toUpperCase().trim() == data.txtFirstName.toUpperCase().trim()
       || item.applicantLastName.toUpperCase().trim() == data.txtLastName.toUpperCase().trim()  || item.loanId == data.txtLoanNumber.trim() ;
    });

    if(this.girdLoanList.length==0){
      this.showlblgridmsg=true;
    }
    else{
      this.showlblgridmsg=false;
    }
  }

  ViewLoanDetails(loanDetails:LoanDetails){
    this.filterPanelService.SelectedLoanDetails = loanDetails;    
    this._router.navigate(['/viewloan']);   
  }

 
  DeleteLoanDetails(loanDetails:LoanDetails){
    this._eventService.DeleteLoanRecord(loanDetails.loanId).subscribe(res=>this.OnSuccessDelete(res),res=>this.OnError(res));  
  }
  
  OnSuccessDelete(res:any){    
    Swal.fire({  
      position: 'center',  
      icon: 'success',  
      text: 'Record Deleted Successfully!'
    })    
    this.ngOnInit();
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
