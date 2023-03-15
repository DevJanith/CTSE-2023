import mongoose from "mongoose";
import Event from "../models/event.model.js";

//add event
export const createEvent = async (req, res) => {
  const event = req.body;
  const newEvent = new Event(event);

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

export const getEvent = async (req, res) => {
  const id = req.params.id;

  try {
    const event = await Event.findById(id);

    res.status(200);
    res.json(event);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//delete event
export const deleteEvent = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No Event with id: ${id}`);
    }

    await Event.findByIdAndDelete(id);
    res.status(200);
    res.json({ message: "Event Deleted Successfully" });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//get all events

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();

    res.status(200);

    res.json({
      data: events,
      msg: "success",
      code: "00",
      type: "GETALL",
    });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//get events of user

export const getUserEvents = async (req, res) => {
  const id = req.params.id;
  try {
    const events = await Event.find({ user: id });

    res.status(200);
    res.json(events);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//update
export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { user, name, organizer, date, description, tags } = req.body;

  let updatedAt = new Date().toLocaleString({ timeZone: "Asia/Colombo" });

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No Event with id: ${id}`);
    }
    const updateEvent = {
      user,
      name,
      organizer,
      date,
      description,
      tags,
      updatedAt,
    };
    const update = await Event.findByIdAndUpdate(id, updateEvent);
    res.status(200).send({ message: "Event Details Updated" });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//add memeber
export const addMember = async (req, res) => {
  const { id } = req.params;
  const { member } = req.body;
  console.log(member);

  let updatedAt = new Date().toLocaleString({ timeZone: "Asia/Colombo" });

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No Event with id: ${id}`);
    }
    const event = await Event.findById(id);

    let existingMembers = event.members;

    existingMembers.push(member);

    let members = existingMembers;

    const updateEvent = {
      members,
    };
    const update = await Event.findByIdAndUpdate(id, updateEvent);
    res.status(200).send({ message: "Member added to Event" });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//add partocopant
export const addParticipant = async (req, res) => {
  const { id } = req.params;
  const { participant } = req.body;

  let updatedAt = new Date().toLocaleString({ timeZone: "Asia/Colombo" });

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No Event with id: ${id}`);
    }
    const event = await Event.findById(id);

    let axistingParticipants = event.participants;

    axistingParticipants.push(participant);

    let participants = axistingParticipants;

    const updateEvent = {
      participants,
    };
    const update = await Event.findByIdAndUpdate(id, updateEvent);
    res.status(200).send({ message: "Member added to Event" });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};
