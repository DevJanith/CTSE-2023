import express from "express";

import {
  createEvent,
  getEvent,
  deleteEvent,
  getAllEvents,
  getUserEvents,
  updateEvent,
  addMember,
  addParticipant,
} from "../controllers/event.controller.js";

const router = express.Router();

router.get("/", getAllEvents);
router.post("/", createEvent);
router.get("/:id", getEvent);
router.delete("/:id", deleteEvent);
router.put("/:id", updateEvent);
router.get("/user/:id", getUserEvents);
router.put("/member/:id", addMember);
router.put("/organizer:id", addParticipant);

export default router;
