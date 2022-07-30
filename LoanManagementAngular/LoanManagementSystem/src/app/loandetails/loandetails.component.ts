import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoanDetails } from '../models/loandetails';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event.service';
import { FilterPanelService } from '../services/filterpanel';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.css']
})
export class LoandetailsComponent implements OnInit {
  @ViewChild('SearchloanComponent', {static : false}) filterPanel: any;
  loanRecord:LoanDetails=new LoanDetails();
  constructor(public filterPanelService: FilterPanelService,private _router: Router,
    private _eventService: EventService,private _authService:AuthService,public datepipe: DatePipe) {
    
  }

  ngOnInit(): void {
    this.loanRecord=this.filterPanelService.SelectedLoanData;
    console.log(this.loanRecord);    
  }

}
