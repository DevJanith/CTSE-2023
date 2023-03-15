import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
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
  members: {
    type: Array,
  },
  participants: {
    type: Array,
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
