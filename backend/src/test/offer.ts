import { suite, test } from "mocha-typescript";
import { IOffer } from "../interfaces/offer";
import { IOfferModel } from "../models/offer";
import { offerSchema } from "../schemas/offer";
import mongoose = require("mongoose");

@suite
class OfferTest {

  //store test data
  private data: IOffer;

  //the User model
  public static Offer: mongoose.Model<IOfferModel>;

  public static before() {
    //use q promises
    global.Promise = require("q").Promise;

    //use q library for mongoose promise
    mongoose.Promise = global.Promise;

    //connect to mongoose and create model
    const MONGODB_CONNECTION: string = "mongodb://omf_user:omf_user@localhost:27017/omf?authSource=admin";
    let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);
    OfferTest.Offer = connection.model<IOfferModel>("Offer", offerSchema);

    //require chai and use should() assertions
    let chai = require("chai");
    chai.should();
  }

  constructor() {
    this.data = {
      title: "Cupcake party",
      price: "5 euros",
      description: "Who wanna try some delicious cupcakes?"
    };
  }

  @test("should create a new User")
  public create() {
    //create user and return promise
    return new OfferTest.Offer(this.data).save().then(result => {
      //verify _id property exists
      result._id.should.exist;

      //verify email
      result.title.should.equal(this.data.title);

      //verify firstName
      result.price.should.equal(this.data.price);

      //verify lastName
      result.description.should.equal(this.data.description);
    });
  }
}
