import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { AppComponent }      from './app.component';
import { OfferFormComponent }  from './offer-form.component';
import { OrderOfferFormComponent }  from './order-offer-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'addoffer',   component: OfferFormComponent },
  { path: 'orderoffer/:id', component: OrderOfferFormComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
