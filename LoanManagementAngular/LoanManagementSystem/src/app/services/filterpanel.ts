import { Injectable } from '@angular/core';
//import { AirlineInventory } from '../models/airlinedata';
import { LoanDetails } from '../models/loandetails';

@Injectable()
export class FilterPanelService {

  selectedLoanRecord: LoanDetails=new LoanDetails();
  previousLoanDetail: LoanDetails=new LoanDetails();
  constructor() { }

   get SelectedLoanDetails(): any{
    return this.selectedLoanRecord;
  }

  set SelectedLoanDetails(val: any){
    this.selectedLoanRecord = val;
  }

  get SelectedLoanData(): any{
    return this.previousLoanDetail;
  }
  set SelectedLoanData(val: any){
    this.previousLoanDetail = val;
  }

}