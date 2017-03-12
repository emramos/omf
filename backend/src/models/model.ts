import { Model } from "mongoose";
import { IOfferModel } from "./offer";

export interface IModel {
  offer: Model<IOfferModel>;
}
