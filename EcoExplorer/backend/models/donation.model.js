import mongoose from "mongoose";

const donationSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },  
  email: {
    type: String,
    require: true,
  },
  contactNo: {
    type: String,
    require: true,
  },
  amount: {
    type: String,
    require: true,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
  tags: {
    type: Array,
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const Donation = mongoose.model("Donation", donationSchema);

export default Donation;