import mongoose from "mongoose";

const inteterestedSchema = mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  organizer: {
    type: String,
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

const Interested = mongoose.model("InterestedEvent", inteterestedSchema);

export default Interested;
