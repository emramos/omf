import { Injectable } from '@angular/core';
import { Offer } from './interfaces/offer';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class OfferService {

  private offerUrl = 'http://localhost:8523/offer';

  constructor(private http: Http) { }

  getOffers(): Promise<Offer[]> {
    return this.http.get(this.offerUrl)
               .toPromise()
               .then(response => response.json() as Offer[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
