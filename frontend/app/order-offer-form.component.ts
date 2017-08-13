import { Component } from '@angular/core';
import { Offer } from './interfaces/offer'
import { OrderItem, DeliverAddress, Order } from './interfaces/order'
import { OfferService } from './offer.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'orderoffer',
  templateUrl: 'html/order-offer-form.component.html',
  styleUrls: [ 'css/order-offer-form.component.css' ],
  providers: [OfferService]
})


export class OrderOfferFormComponent {

  constructor(private offerService: OfferService, private route: ActivatedRoute, private router: Router) { }

  private sub: any;

  offerId: String;
  orderItem: OrderItem;

  submitted = false;

  onSubmit() {
    this.submitted = true;
    //this.offerService.save(this.model).then(_ => this.router.navigate(['dashboard']));
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.offerId = params['id'];
      this.offerService.getOffer(this.offerId).then(offer => this.orderItem.offer = offer);
      this.orderItem.quantity = 32;
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.orderItem); }



}
