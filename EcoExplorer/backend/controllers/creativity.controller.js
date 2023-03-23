import mongoose from "mongoose";
import Creativity from "../models/creativity.model.js";


//add creativity
export const createCreativity = async (req, res) => {
  const creativity = req.body;
  const newCreativity = new Creativity(creativity);

  try {
    console.log("POST : create new donation");
    await newCreativity.save();

    res.json({
      data: newCreativity,
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

//get one Creativity

export const getCreativity = async (req, res) => {
  const id = req.params.id;

  try {
    console.log("GET one creativity");
    const creativity = await Creativity.findById(id);

    res.status(200);
    res.json(creativity);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//delete creativity
export const deleteCreativity = async (req, res) => {
  const id = req.params.id;

  try {
    console.log("DELETE creativity ", id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No Creativity with id: ${id}`);
    }

    await Creativity.findByIdAndDelete(id);
    res.status(200);
    res.json({ message: "Creativity Deleted Successfully" });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//get all creativity

export const getAllCreativity = async (req, res) => {
  try {
    console.log("GET all creativity");
    const creativity = await Creativity.find();

    res.status(200);

    res.json({
      data: creativity,
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
export const updateCreativity = async (req, res) => {
  console.log("UPDATE creativity");
  const { id } = req.params;
  const { name,from,email,contactNo,description,image } = req.body;

  let updatedAt = new Date().toLocaleString({ timeZone: "Asia/Colombo" });

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No Creativity with id: ${id}`);
    }
    const updateCreativity = {
      name,
      from,
      email,
      contactNo,
      description,
      image,
      updatedAt,
    };
    const update = await Creativity.findByIdAndUpdate(id, updateCreativity);
    res.status(200).send({ message: "Creativity Details Updated" });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};