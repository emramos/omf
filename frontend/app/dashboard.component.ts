import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { OfferService } from './offer.service';
import { Offer } from './interfaces/offer';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'html/dashboard.component.html',
  styleUrls: [ 'css/dashboard.component.css' ],
  providers: [OfferService]
})
export class DashboardComponent implements OnInit {

  offers: Offer[];

  constructor(private offerService: OfferService) { }

  getOffers(): void {
    this.offerService.getOffers().then(offers => this.offers = offers);
  }

  ngOnInit(): void {
    this.getOffers();
  }


}
