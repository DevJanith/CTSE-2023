import mongoose from "mongoose";
import Interested from "../models/interested.model.js";

//add event
export const addToInterestedEvents = async (req, res) => {
  const event = req.body;
  const newEvent = new Interested(event);

  try {
    await newEvent.save();

    res.json({
      data: newEvent,
      msg: "success",
      code: "00",
      type: "POST",
    });
  } catch (error) {
    res.status(409);
    res.json({ message: error.message });
    console.log(error);
  }
};

//get one event

export const getInterestedEvent = async (req, res) => {
  const id = req.params.id;

  try {
    const event = await Interested.findById(id);

    res.status(200);
    res.json(event);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//delete event
export const deleteInterestedEvent = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No Event with id: ${id}`);
    }

    await Interested.findByIdAndDelete(id);
    res.status(200);
    res.json({ message: `${id} Removed from intersted events` });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//get interested events of user
export const getInterestedEventsOfUser = async (req, res) => {
  const id = req.params.id;
  try {
    const events = await Interested.find({ user: id });

    res.status(200);
    res.json(events);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};
