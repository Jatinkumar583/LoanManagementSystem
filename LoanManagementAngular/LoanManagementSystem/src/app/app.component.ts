import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoanManagement';
  UserSection:boolean=true;
  AdminSection:boolean=false;
  constructor(private _authService:AuthService) {
   
  }
  LogOut(){
    this._authService.logoutUser();
    if( localStorage.getItem('usertype')=="admin"){
      this.UserSection=false;
      this.AdminSection=true;      
    }
    else{     
      this.UserSection=true;
      this.AdminSection=false;
    }
  }
  
  LoggedIn(input:boolean):boolean{
    if( localStorage.getItem('usertype')=="admin"){
      this.UserSection=false;
      this.AdminSection=true;      
    }
    else{     
      this.UserSection=true;
      this.AdminSection=false;
    }
    if(input){     
      return this._authService.loggedIn();      
    }
    else{      
      return !this._authService.loggedIn();
    }
  }
  
}
