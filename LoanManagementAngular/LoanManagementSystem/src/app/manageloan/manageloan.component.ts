import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private _eventService: EventService,private _router: Router,public filterPanelService:FilterPanelService) { }

  ngOnInit(): void {
    //var userEmailId=localStorage.getItem('emailId')!;
    this._eventService.GetLoansList().subscribe(res => this.SuccessGet(res), err => (console.log(err)));
    //this.girdLoanList=this.loanRecords;   
  }

  SuccessGet(res:any){       
    this.girdLoanList=res;
    for (let index = this.girdLoanList.length; index >=0; index--) {
      this.descLoanList[this.girdLoanList.length- index] = this.girdLoanList[index];      
    }
    console.log(this.descLoanList);
  }

  GetAllLoanRecords(data: any) {    
    // var userEmailId=localStorage.getItem('emailId')!;
    this._eventService.GetLoansList().subscribe(res => this.loanRecords = res, err => (console.log(err),this._router.navigate(['/login'])));
    this.girdLoanList = this.loanRecords.filter(function (item) {
      return item.applicantFirstName.toUpperCase().trim() == data.txtFirstName.toUpperCase().trim()
       || item.applicantLastName.toUpperCase().trim() == data.txtLastName.toUpperCase().trim()  || item.loanId == data.txtLoanNumber.trim() ;
    });
    console.log(this.girdLoanList);
  }

  ViewLoanDetails(loanDetails:LoanDetails){
   // this.filterPanelService.BookedData = ticketDetails;    
    this._router.navigate(['/viewloan']);   
  }

}
