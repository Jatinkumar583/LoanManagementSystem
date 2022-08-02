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
    AddNewLoan(data: any) {
        return this.http.post("http://localhost:63241/api/loan/saveloandetails", data);
    }
    GetLoansList() {       
        return this.http.get<any>("http://localhost:63241/api/loan/list");
    }
   

    DeleteLoanRecord(loanId:number){
        return this.http.delete<any>("http://localhost:63241/api/loan/deleteloandetails/"+loanId+"");
    }

    UpdateLoanRecord(data:LoanDetails){
       return this.http.post("http://localhost:63241/api/loan/loandetails/update", data);
    }

}