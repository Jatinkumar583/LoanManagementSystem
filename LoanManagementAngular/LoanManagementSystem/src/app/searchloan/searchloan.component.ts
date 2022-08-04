import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanDetails } from '../models/loandetails';
import { EventService } from '../services/event.service';
import { FilterPanelService } from '../services/filterpanel';

@Component({
  selector: 'app-searchloan',
  templateUrl: './searchloan.component.html',
  styleUrls: ['./searchloan.component.css']
})
export class SearchloanComponent implements OnInit {

  showlblgridmsg:boolean=false;
  filteredRecord: Array<LoanDetails> = new Array<LoanDetails>();
  SearchLoanList: Array<LoanDetails> = new Array<LoanDetails>();
  constructor(private _eventService: EventService, private _router: Router
    ,public filterPanelService:FilterPanelService) {

  }

  ngOnInit(): void {
    this._eventService.GetLoansList().subscribe(res => this.SuccessGet(res), err => (console.log(err),this._router.navigate(['/login'])));
  }
  SuccessGet(res:any){     
    this.filteredRecord = res;  
    if(this.filteredRecord.length==0){
      this.showlblgridmsg=true;
    }
    else{
      this.showlblgridmsg=false;
    }  
  }

  GetLoanDetails(data: any) {    
    this._eventService.GetLoansList().subscribe(res => this.SearchLoanList = res, err => (console.log(err),this._router.navigate(['/login'])));
     
    this.filteredRecord = this.SearchLoanList.filter(function (item) {
      //return item.loanId == data.txtLoanNumber;
      return item.applicantFirstName.toUpperCase().trim() == data.txtFirstName.toUpperCase().trim()
       || item.applicantLastName.toUpperCase().trim() == data.txtLastName.toUpperCase().trim()  || item.loanId == data.txtLoanNumber.trim() ;
    });
    if(this.filteredRecord.length==0){
      this.showlblgridmsg=true;
    }
    else{
      this.showlblgridmsg=false;
    } 
  }

  ShowLoanDetails(data:any){
    this.filterPanelService.SelectedLoanData = data;
    this._router.navigate(['/loandetails']);   
  }

}
