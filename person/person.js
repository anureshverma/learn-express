import mongoose from "mongoose";

const { Schema } = mongoose;

const Person = new Schema(
  {
    name: { type: String, required: true, maxlength: 100 },
    uuid: String,
    address: { type: String },
    contantNumber: { type: Number, minlength: 10, maxlength: 12 },
    age: { type: Number, min: 10, max: 100 },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Person", Person);
