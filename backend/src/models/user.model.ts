import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      maxLength: 90,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      maxLength: 170,
      select: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
      },
    },
    toObject: { virtuals: true, getters: true },
    versionKey: false,
  }
);
export const UserModel = model("User", userSchema);

