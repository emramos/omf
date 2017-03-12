import { Document } from "mongoose";
import { IOffer } from "../interfaces/offer";

export interface IOfferModel extends IOffer, Document {
  //custom methods for your model would be defined here
}
