import mongoose from "mongoose";

const InfoSchema = mongoose.Schema({
  
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    require: true,
  },
  introduction: {
    type: String,
    require: true,
  },
  lifespan: {
    type: String,
    require: true,
  },
  mass: {
    type: String,
  },
  length: {
    type: String,
  },
  explanantion: {
    type: String,
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const Info = mongoose.model("Info", InfoSchema);

export default Info;
