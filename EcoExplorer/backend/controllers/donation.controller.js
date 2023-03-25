import mongoose from "mongoose";
import Donation from "../models/donation.model.js";

//add donation
export const createDonation = async (req, res) => {
  const donation = req.body;
  const newDonation = new Donation(donation);

  try {
    console.log("POST : create new donation");
    await newDonation.save();

    res.json({
      data: newDonation,
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

//get one Donation

export const getDonation = async (req, res) => {
  const id = req.params.id;

  try {
    console.log("GET one donation");
    const donation = await Donation.findById(id);

    res.status(200);
    res.json(donation);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//delete donation
export const deleteDonation = async (req, res) => {
  const id = req.params.id;

  try {
    console.log("DELETE donation ", id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No Donation with id: ${id}`);
    }

    await Donation.findByIdAndDelete(id);
    res.status(200);
    res.json({ message: "Donation Deleted Successfully" });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//get all donation

export const getAllDonation = async (req, res) => {
  try {
    console.log("GET all donation");
    const donation = await Donation.find();

    res.status(200);

    res.json({
      data: donation,
      msg: "success",
      code: "00",
      type: "GETALL",
    });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//update
export const updateDonation = async (req, res) => {
  console.log("UPDATE donation");
  const { id } = req.params;
  const { name,from,email,contactNo,amount } = req.body;

  let updatedAt = new Date().toLocaleString({ timeZone: "Asia/Colombo" });

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No Donation with id: ${id}`);
    }
    const updateDonation = {
      name,
      from,
      email,
      contactNo,
      amount,
      updatedAt,
    };
    const update = await Donation.findByIdAndUpdate(id, updateDonation);
    res.status(200).send({ message: "Donation Details Updated" });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};



