import { Router } from "@angular/router";
import { UserData } from "../models/UserData";
import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";
import { LoanDetails } from "../models/loandetails";
@Injectable()
export class EventService {
    private _eventUrl = "http://localhost:64350/api/v1.0/flight/airline/register";

    constructor(private http: HttpClient, private _router: Router) {

    }
    saveNewAirline(data: any) {
        //return this.http.post("http://localhost:64350/api/v1.0/flight/airline/register", data);
    }
    GetLoansList() {
        console.log("service hit")
        return this.http.get<any>("http://localhost:63241/api/loan/list");
    }
   

    CancelLoanRecord(pnr:string){
       // return this.http.delete<any>("http://localhost:55167/api/v1.0/flight/booking/cancel/"+pnr+"");
    }

    UpdateFlightInventory(data:LoanDetails){
       // return this.http.post("http://localhost:64350/api/v1.0/flight/airline/inventory/update", data);
    }

}