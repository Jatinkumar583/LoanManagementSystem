import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BookflightComponent } from './bookflight/bookflight.component';
// import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
// import { EventsComponent } from './events/events.component';
import { AddnewloanComponent } from './addnewloan/addnewloan.component';
import { LoginComponent } from './login/login.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { SearchloanComponent } from './searchloan/searchloan.component';
import { ManageloanComponent } from './manageloan/manageloan.component';
import { RegisterComponent } from './register/register.component';
 import { AuthGaurd } from './services/auth.gaurd';
import { ViewloanComponent } from './viewloan/viewloan.component';
// import { SpecialEventsComponent } from './special-events/special-events.component';
// import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: 'searchloan',
    canActivate:[AuthGaurd],
    component: SearchloanComponent
  },
  {
    path: 'loandetails',
    canActivate:[AuthGaurd],
    component: LoandetailsComponent
  },
  {
    path: 'addnewloan',
    canActivate:[AuthGaurd],
    component: AddnewloanComponent
  },
  {
    path: 'manageloan',
    canActivate:[AuthGaurd],
    component: ManageloanComponent
  },
  {
    path: 'viewloan',
    canActivate:[AuthGaurd],
    component: ViewloanComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
