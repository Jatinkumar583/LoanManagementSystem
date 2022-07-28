import { Router } from "@angular/router";
import { UserData } from "../models/UserData";
import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";
@Injectable()
export class AuthService {
    private _registerUrl = "http://localhost:63241/api/user/register";
    private _loginUrl = "http://localhost:63241/api/user/authenticate";
    private _userDetailsUrl="http://localhost:63241/api/user/getuserdetails";
    constructor(private http: HttpClient, private _router: Router) {

    }

    loginUser(user: any) {
        return this.http.post<any>(this._loginUrl, user)
    }

    loginUserDetails(user: any) {
        return this.http.post<any>(this._userDetailsUrl, user)
    }

    registerUser(user: UserData) {       
        return this.http.post<any>(this._registerUrl, user)
    }

    logoutUser() {
        localStorage.removeItem('token');
        localStorage.removeItem('usertype');
        localStorage.removeItem('userid');
        localStorage.removeItem('username');
        localStorage.removeItem('emailId');
        this._router.navigate(['/login']);
    }

    getToken() {
        return localStorage.getItem('token')
    }
    loggedIn() {
        return !!localStorage.getItem('token')
    }
}