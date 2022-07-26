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
// import { AuthGaurd } from './services/auth.gaurd';
// import { SpecialEventsComponent } from './special-events/special-events.component';
// import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // {
  //   path: 'events',
  //   canActivate:[AuthGaurd],
  //   component: EventsComponent
  // },
  // {
  //   path: 'special',
  //   canActivate:[AuthGaurd],
  //   component: SpecialEventsComponent
  // },
   {
    path: 'searchloan',
   // canActivate:[AuthGaurd],
    component: SearchloanComponent
  },
  {
    path: 'loandetails',
   // canActivate:[AuthGaurd],
    component: LoandetailsComponent
  },
  {
    path: 'addnewloan',
   // canActivate:[AuthGaurd],
    component: AddnewloanComponent
  },
  {
    path: 'manageloan',
   // canActivate:[AuthGaurd],
    component: ManageloanComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  // {
  //   path: 'flightsearch',
  //   canActivate:[AuthGaurd],
  //   component: FlightsearchComponent
  // },
  // {
  //   path: 'bookinghistory',
  //   canActivate:[AuthGaurd],
  //   component: BookinghistoryComponent
  // },
  // {
  //   path: 'manageairlines',
  //   canActivate:[AuthGaurd],
  //   component: ManageairlinesComponent
  // },
  // {
  //   path: 'manageinventory',
  //   canActivate:[AuthGaurd],
  //   component: ManageinventoryComponent
  // },
  // {
  //   path:'bookflight',
  //   component:BookflightComponent
  // },
  // {
  //   path:'ticketdetails',
  //   component:TicketdetailsComponent
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
