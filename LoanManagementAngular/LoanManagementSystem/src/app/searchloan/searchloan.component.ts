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

 // tblShow: boolean = false;
  filteredRecord: Array<LoanDetails> = new Array<LoanDetails>();
  SearchLoanList: Array<LoanDetails> = new Array<LoanDetails>();
  constructor(private _eventService: EventService, private _router: Router
    ,public filterPanelService:FilterPanelService) {

  }

  ngOnInit(): void {
  }

  GetLoanDetails(data: any) {    
    this._eventService.GetLoansList().subscribe(res => this.SearchLoanList = res, err => (console.log(err),this._router.navigate(['/login'])));
    console.log(this.SearchLoanList);
    this.filteredRecord = this.SearchLoanList.filter(function (item) {
      return item.loanId == data.txtLoanNumber;
    });
    console.log(this.filteredRecord);
  }

  ShowLoanDetails(data:any){
    this.filterPanelService.SelectedLoanData = data;
    this._router.navigate(['/loandetails']);   
  }

}
