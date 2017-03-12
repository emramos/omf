import { Component } from '@angular/core';
import { Offer } from './interfaces/offer'

@Component({
  moduleId: module.id,
  selector: 'addoffer',
  templateUrl: 'html/offer-form.component.html',
  styleUrls: [ 'css/offer-form.component.css' ]
})


export class OfferFormComponent {

  constructor() { }


  model = new Offer("Brazilian Barbecue", "18 euros", "Real brazilian barbecue.");

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }




}
