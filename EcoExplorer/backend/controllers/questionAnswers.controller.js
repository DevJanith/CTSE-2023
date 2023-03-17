import mongoose from "mongoose";
import QuestionAnswers from "../models/questionAnswers.model.js";

export const createQuestionAnswers = async (req, res, next) => {
    const {
        qaCollection
    } = req.body;
    try {
        if (qaCollection.length === 0) return res.status(400).json({ code: "02", message: "qaCollection Details Required" })

        const questionAnswers = new QuestionAnswers({
            qaCollection: qaCollection
        })

        const questionAnswersResult = await questionAnswers.save();

        res.status(200).json({ code: "01", result: questionAnswersResult })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const getAllQuestionAnswers = async (req, res, next) => {
    try {
        const questionAnswers = await QuestionAnswers.find();

        res.status(200).json({ code: "01", result: questionAnswers })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const getQuestionAnswers = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ code: "02", message: `No Question & Answers for this id: ${id}` });
        }

        const questionAnswers = await QuestionAnswers.findById(id)

        res.status(200).json({ code: "01", result: questionAnswers })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const getQuestionAnswersAccordingToType = async (req, res, next) => {
    const { type } = req.params;
    try {
        const questionAnswers = await QuestionAnswers.find({ qaCollectionType: type });

        res.status(200).json({ code: "01", result: questionAnswers })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}