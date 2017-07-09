//Angular modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';


//Local modules
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }   from './app.component';
import { DashboardComponent }     from './dashboard.component';
import { OfferFormComponent }     from './offer-form.component';
import { OrderOfferFormComponent }     from './order-offer-form.component';

import './rxjs-extensions';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, DashboardComponent, OfferFormComponent, OrderOfferFormComponent ],
  providers: [
    //HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
