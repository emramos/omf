//Angular modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
//TODO: Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';


//Local modules
//import { AppRoutingModule }     from './app-routing.module';
//import { HeroSearchComponent }     from './hero-search.component';
import { AppComponent }   from './app.component';
import { DashboardComponent }     from './dashboard.component';

import './rxjs-extensions';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    //AppRoutingModule
  ],
  declarations: [ AppComponent, DashboardComponent ],
  providers: [
    //HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
