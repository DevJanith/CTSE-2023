import express from "express";

import {
  createDonation,
  getDonation,
  deleteDonation,
  getAllDonation,
  updateDonation,
  
} from "../controllers/Donation.controller.js";

const router = express.Router();

router.get("/", getAllDonation);
router.post("/", createDonation);
router.get("/:id", getDonation);
router.delete("/:id", deleteDonation);
router.put("/:id", updateDonation);

export default router;