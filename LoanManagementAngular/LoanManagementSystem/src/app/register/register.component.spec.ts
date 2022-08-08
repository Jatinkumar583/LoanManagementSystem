import { HttpClient, HttpHandler } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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
        FormsModule
      ],
      providers:[AuthService,HttpClient,HttpHandler,Router]
    })
    .compileComponents();
    // .then(()=>{
    //   fixture = TestBed.createComponent(RegisterComponent);
    //   component = fixture.componentInstance;    
    //   fixture.detectChanges();

    // });   
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(RegisterComponent);
      component = fixture.componentInstance;    
      fixture.detectChanges();
  });

  // it('should set submitted to true', async(() => {
  //   component.onSubmit()
  //   expect(component).toBeTruthy();
  // }));

  it('forms should be invalid', async(() => {
    fixture.whenStable().then(()=>{
      let email=component.registerForm.form.controls['emailId'];
      expect(email.valid).toBeFalsy();
      expect(component.registerForm.valid).toBeFalsy();
      email.setValue('abc');
      expect(email.errors!['email']).toBeTruthy();
    });   
  }));

  // it('forms should be valid', async(() => {
  //   component.onSubmit()
  //   expect(component).toBeTruthy();
  // }));

});
