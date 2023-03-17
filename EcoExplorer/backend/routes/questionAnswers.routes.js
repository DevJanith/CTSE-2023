import express from "express"
import { createQuestionAnswers, getAllQuestionAnswers, getQuestionAnswers, getQuestionAnswersAccordingToType } from "../controllers/questionAnswers.controller.js"

const router = express.Router();

router.post(`/`, createQuestionAnswers)
router.get(`/`, getAllQuestionAnswers)
router.get(`/:id`, getQuestionAnswers)
router.get(`/question-type/:type`, getQuestionAnswersAccordingToType)

export default router;