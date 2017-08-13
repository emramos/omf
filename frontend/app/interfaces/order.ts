
import { Offer } from './offer'

export class OrderItem {
  constructor (
    public offer: Offer,
    public quantity: number,
    public totalPrice: number,
  ) {}
}

export class DeliverAddress {
  constructor (
    public street: string,
    public city: string,
  ) {}
}


export class Order {
  constructor (
    public orderItems: OrderItem[],
    public totalPrice: number,
    public deliverAdress: DeliverAddress
  ) {}
}
