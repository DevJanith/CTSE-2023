import mongoose from 'mongoose';
import Marks from "../models/marks.model.js";

export const createMarks = async (req, res, next) => {
    const {
        userDetails,
        marks,
    } = req.body;

    try {
        if (userDetails.userId === null || typeof userDetails.userId == "undefined") return res.status(400).json({ code: "02", message: "User Details Required" })
        if (marks === null || typeof marks == "undefined") return res.status(400).json({ code: "02", message: "Marks Required" })

        const marksDetails = new Marks({
            userDetails: userDetails,
            marks: marks
        })

        const marksResult = await marksDetails.save();

        res.status(200).json({ code: "01", result: marksResult })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const getAllMarks = async (req, res, next) => {
    try {
        const marks = await Marks.find();

        res.status(200).json({ code: "01", result: marks })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const getMarksAccordingToUserId = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const marks = await Marks.find({
            userDetails: {
                userId: userId
            }
        })

        res.status(200).json({ code: "01", result: marks })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const deleteMarks = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Marks with id: ${id}`);
        }

        await Marks.findByIdAndDelete(id);
        res.status(200).json({ code: "01", result: "Marks Deleted" })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}