import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
//import Swal from 'sweetalert2';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerUserData: UserData = new UserData();
  constructor(private _auth: AuthService, private _router: Router) { }
  registerUser() {
    this.registerUserData.loginType="user";
    this._auth.registerUser(this.registerUserData).subscribe(res=>this.SuccessGet(res),res=>this.ErrorGet(res));    
    }
    SuccessGet(res:any){
      Swal.fire({  
        position: 'center',  
        icon: 'success',  
        text: 'User Registered Successfully!'
      })
      this._router.navigate(['/login'])
      this.registerUserData=new UserData();  
    }
    ErrorGet(res:any){
      console.log(res);   
      Swal.fire({  
        position: 'center',  
        icon: 'error',  
        title: 'Oops...',  
        text: 'Something went wrong!'
      })  
    }
}
