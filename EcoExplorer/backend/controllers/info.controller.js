import mongoose from "mongoose";
import Info from "../models/info.model.js";

//add Info details
export const createInfo = async (req, res) => {
  const sea_animal = req.body;
  const newInfo = new Info(sea_animal);

  try {
    await newInfo.save();

    res.json({
      data: newInfo,
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


//get all Info details

export const getAllInfos = async (req, res) => {
  try {
    const Infos = await Info.find();

    res.status(200);

    res.json({
      data: Infos,
      msg: "success",
      code: "00",
      type: "GETALL",
    });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};


//get one Info details

export const getInfo = async (req, res) => {
  const id = req.params.id;

  try {
    const Info = await Info.findById(id);

    res.status(200);
    res.json(Info);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//delete Info details

export const deleteInfo = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No Info Details with id: ${id}`);
    }

    await Info.findByIdAndDelete(id);
    res.status(200);
    res.json({ message: "Info Details Deleted Successfully" });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//update Info details

export const updateInfo = async (req, res) => {
  const { id } = req.params;
  const { name, introduction, lifespan, mass, length, explanantion } = req.body;

  let updatedAt = new Date().toLocaleString({ timeZone: "Asia/Colombo" });

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No Event with id: ${id}`);
    }
    const updatedInfo = {
      name,
      introduction,
      lifespan,
      mass,
      length,
      explanantion,
      updatedAt,
    };
    const update = await Info.findByIdAndUpdate(id, updatedInfo);
    res.status(200).send({ message: "Info Details Updated" });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};


//get Info Details According to the logged user email

export const getInfoByEmail = async (req, res, next) => {
  const { email } = req.params;
  try {
    const Info = await Info.find({ email: email });

    res.status(200).json({ code: "01", result: Info })
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ code: "00", message: "Something went wrong" })
  }
}