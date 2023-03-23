import mongoose from "mongoose";

const creativitySchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  from: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  
  description: {
    type: String,
  },
  image: {
    type: Array,
  },
  tags: {
    type: Array,
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const Creativity = mongoose.model("Creativity", creativitySchema);

export default Creativity;