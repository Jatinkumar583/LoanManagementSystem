import { Injectable } from '@angular/core';
//import { AirlineInventory } from '../models/airlinedata';
import { LoanDetails } from '../models/loandetails';

@Injectable()
export class FilterPanelService {

  //selectedFlightDetails: AirlineInventory=new AirlineInventory();
  previousLoanDetail: LoanDetails=new LoanDetails();
  constructor() { }

//    get data(): any{
//     return this.selectedFlightDetails;
//   }

//   set data(val: any){
//     this.selectedFlightDetails = val;
//   }

  get SelectedLoanData(): any{
    return this.previousLoanDetail;
  }
  set SelectedLoanData(val: any){
    this.previousLoanDetail = val;
  }

}