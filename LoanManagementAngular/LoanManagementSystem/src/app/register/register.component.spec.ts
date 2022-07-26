import { HttpClient, HttpHandler } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
//import {RouterTestingModule} 
import { Location } from '@angular/common';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;  

  beforeEach(async (() => {
     TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        RouterTestingModule
      ],
      providers:[AuthService,HttpClient,HttpHandler]
    })
    .compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(RegisterComponent);
      component = fixture.componentInstance;    
      fixture.detectChanges();

    });   
  }));

  it('should set submitted to true', async(() => {

    let name=component.registerForm.form.controls['firstname']; 
    let email=component.registerForm.form.controls['emailId'];
    let passwrd=component.registerForm.form.controls['password'];
    let ddluser=component.registerForm.form.controls['ddlUserType'];  
    name.setValue('Mukesh');
    email.setValue('mukesh@gmail.com');
    passwrd.setValue('2356');
    ddluser.setValue('user');
    expect(name.valid).toBeTruthy();
    expect(email.valid).toBeTruthy();
    expect(passwrd.valid).toBeTruthy();
    expect(ddluser.valid).toBeTruthy();
    expect(component.registerForm.valid).toBeTrue();

    let result= component.registerUser()
    expect(result).toBe(1);
  }));

  it('forms should be invalid', async(() => {
    fixture.whenStable().then(()=>{
      let name=component.registerForm.form.controls['firstname']; 
      let email=component.registerForm.form.controls['emailId'];
      let passwrd=component.registerForm.form.controls['password'];
      let ddluser=component.registerForm.form.controls['ddlUserType'];
      expect(name.valid).toBeFalsy();
      expect(email.valid).toBeFalsy();
      expect(passwrd.valid).toBeFalsy();
      expect(ddluser.touched).toBeFalsy();
      expect(component.registerForm.valid).toBeFalsy();
      name.setValue('');
      email.setValue('abc');
      passwrd.setValue('');
      ddluser.setValue('');
      expect(name.untouched).toBeTruthy();
      expect(email.errors!['email']).toBeTruthy();
      expect(passwrd.untouched).toBeTruthy();
      expect(ddluser.untouched).toBeTruthy();
    });   
  }));

  

  it('forms should be valid', async(() => {
    fixture.whenStable().then(()=>{
      let name=component.registerForm.form.controls['firstname']; 
      let email=component.registerForm.form.controls['emailId'];
      let passwrd=component.registerForm.form.controls['password'];
      let ddluser=component.registerForm.form.controls['ddlUserType'];  
      name.setValue('Mukesh');
      email.setValue('mukesh@gmail.com');
      passwrd.setValue('2356');
      ddluser.setValue('user');
      expect(name.valid).toBeTruthy();
      expect(email.valid).toBeTruthy();
      expect(passwrd.valid).toBeTruthy();
      expect(ddluser.valid).toBeTruthy();
      expect(component.registerForm.valid).toBeTrue();
    });   

  }));

});
