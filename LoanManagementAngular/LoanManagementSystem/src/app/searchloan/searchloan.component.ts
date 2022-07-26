import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchloan',
  templateUrl: './searchloan.component.html',
  styleUrls: ['./searchloan.component.css']
})
export class SearchloanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  GetLoanDetails(data: any) {
    // this._eventService.GetAirlineList().subscribe(res => this.SearchAirlineList = res, err => (console.log(err),this._router.navigate(['/login'])));
    // this.filteredRecord = this.SearchAirlineList.filter(function (item) {
    //   return item.fromPlace == data.txtFromPlace || item.toPlace == data.txtToPlace || item.startDateTime==data.txtBoardingDate || item.flightNumber==data.txtFlightNumber;
    // });
    //console.log(this.filteredRecord);
  }

}
