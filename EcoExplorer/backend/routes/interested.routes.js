import express from "express";

import {
  addToInterestedEvents,
  getInterestedEvent,
  deleteInterestedEvent,
  getInterestedEventsOfUser,
} from "../controllers/interested.controller.js";

const router = express.Router();

router.post("/", addToInterestedEvents);
router.get("/:id", getInterestedEvent);
router.delete("/:id", deleteInterestedEvent);
router.get("/user/:id", getInterestedEventsOfUser);

export default router;
