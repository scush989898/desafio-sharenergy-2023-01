import { Schema, model } from "mongoose";
import { addressSchema } from "./address.schema";

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 90,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxLength: 70,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxLength: 11,
    },
    cpf: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 11,
    },

    address: addressSchema,
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
      transform: function (doc, ret) {
        delete ret._id;
      },
    },
    toObject: { virtuals: true, getters: true },
    versionKey: false,
  }
);

export const ClientModel = model("Client", clientSchema);
