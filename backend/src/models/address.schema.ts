import { Schema } from "mongoose";

export const addressSchema = new Schema(
  {
    district: {
      type: String,
      required: true,
      maxLength: 120,
    },

    zipCode: {
      type: String,
      required: true,
      maxLength: 8,
    },

    city: {
      type: String,
      required: true,
      maxLength: 60,
    },
    state: {
      type: String,
      required: true,
      maxLength: 20,
    },
    number: {
      type: String,
      required: false,
      maxLength: 10,
    },
    street: {
      type: String,
      required: true,
      maxLength: 20,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
    toObject: { virtuals: true, getters: true },
  }
);
