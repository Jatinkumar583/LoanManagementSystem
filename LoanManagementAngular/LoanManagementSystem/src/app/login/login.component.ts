import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserData } from '../models/loginuserdata';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //loginUserData: UserData = new UserData();
  loginUserData: LoginUserData = new LoginUserData();
  constructor(private _auth: AuthService, private _router: Router) {   }

  loginUser() {  
    this.GetLoginUserDetails();
    this._auth.loginUser(this.loginUserData).subscribe(res=>this.SuccessGet(res),res=> console.log(res));
      
    }
    GetLoginUserDetails(){
      this._auth.loginUserDetails(this.loginUserData).subscribe(res => {      
        localStorage.setItem('usertype', res.loginType);
        localStorage.setItem('userid', res.id);
        localStorage.setItem('username', res.userName);
        localStorage.setItem('emailId', res.emailId);      
      },
        err => console.log(err)); 
    }  

    SuccessGet(res:any){ 
   	 localStorage.setItem('token', res.token)  
     
		  if(localStorage.getItem('usertype')==='admin'){
        console.log("hit 1")
        this._router.navigate(['/manageinventory'])
      }
      else if(localStorage.getItem('usertype')==='user'){
        console.log("hit 2")
        this._router.navigate(['/flightsearch'])
      }     
    }
}
