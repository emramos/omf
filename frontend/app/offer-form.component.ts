import { Component } from '@angular/core';
import { Offer } from './interfaces/offer'
import { OfferService } from './offer.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'addoffer',
  templateUrl: 'html/offer-form.component.html',

  styleUrls: [ 'css/offer-form.component.css' ],
  providers: [OfferService],

})


export class OfferFormComponent {

  constructor(private offerService: OfferService, private router: Router) { }


  model = new Offer("Brazilian Barbecue", "18 euros", "Real brazilian barbecue.");

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.offerService.save(this.model).then(_ => this.router.navigate(['dashboard']));
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


}
