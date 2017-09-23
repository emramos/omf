import { Component } from '@angular/core';
import { Offer } from './interfaces/offer'
import { OfferService } from './offer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'orderoffer',
  templateUrl: 'html/order-offer-form.component.html',
  styleUrls: [ 'css/order-offer-form.component.css' ],
  providers: [OfferService],

})


export class OrderOfferFormComponent {

  constructor(private offerService: OfferService, private route: ActivatedRoute, private router: Router) { }

  id: String;
  offer: Offer;
  private sub: any;

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.offerService.orderOffer(this.offer).then(_ => this.router.navigate(['dashboard']));
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.offerService.getOffer(this.id).then(offer => this.offer = offer);
      console.log("Test");
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.offer); }



}
