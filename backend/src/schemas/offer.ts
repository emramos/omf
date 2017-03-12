import { Schema } from "mongoose";

export var offerSchema: Schema = new Schema({
  createdAt: Date,
  title: String,
  price: String,
  description: String
});
offerSchema.pre("save", function(next) {
  if (!this.createdAt) {
    this.createdAt = new Date();
  }
  next();
});
