import { Injectable } from '@angular/core';
import { Offer } from './interfaces/offer';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class OfferService {

  private offerUrl = '/api/offer';
  private orderUrl = '/api/order';

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json',
                                 'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });


  }

  getOffers(): Promise<Offer[]> {
    return this.http.get(this.offerUrl)
               .toPromise()
               .then(response => response.json() as Offer[])
               .catch(this.handleError);
  }


  getOffer(id: String): Promise<Offer> {
    return this.http.get(this.offerUrl+"/"+id)
               .toPromise()
               .then(response => response.json() as Offer)
               .catch(this.handleError);
  }


  save(offer: Offer): Promise<any> {

    console.log(offer);

    return this.http.post(this.offerUrl,
                        JSON.stringify(offer),
                        this.options
                )
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }

  orderOffer(offer: Offer): Promise<any> {

    console.log(offer);

    return this.http.post(this.orderUrl,
                        JSON.stringify(offer),
                        this.options
                )
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



private extractData(res: Response) {
    let body = res.json();
    return body || {};
}


}
