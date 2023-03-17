import express from "express"
import { createMarks, deleteMarks, getAllMarks, getMarksAccordingToUserId } from "../controllers/marks.controller.js"

const router = express.Router();

router.post(`/`, createMarks)
router.get(`/`, getAllMarks)
router.get(`/:userId`, getMarksAccordingToUserId)
router.delete(`/:id`, deleteMarks)

export default router;
