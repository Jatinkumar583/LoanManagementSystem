import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { SearchloanComponent } from './searchloan/searchloan.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { AddnewloanComponent } from './addnewloan/addnewloan.component';
import { ManageloanComponent } from './manageloan/manageloan.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { RouterModule } from '@angular/router';
import { AuthGaurd } from './services/auth.gaurd';
import { EventService } from './services/event.service';
import { FilterPanelService } from './services/filterpanel';
import { DatePipe } from '@angular/common';
import { ViewloanComponent } from './viewloan/viewloan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchloanComponent,
    LoandetailsComponent,
    AddnewloanComponent,
    ManageloanComponent,
    RegisterComponent,
    ViewloanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [AuthService,EventService,FilterPanelService,DatePipe,AuthGaurd,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
