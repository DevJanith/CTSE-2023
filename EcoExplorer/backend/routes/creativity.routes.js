import express from "express";

import {
  createCreativity,
  getCreativity,
  deleteCreativity,
  getAllCreativity,
  updateCreativity,
  
} from "../controllers/creativity.controller.js";

const router = express.Router();

router.get("/", getAllCreativity);
router.post("/", createCreativity);
router.get("/:id", getCreativity);
router.delete("/:id", deleteCreativity);
router.put("/:id", updateCreativity);

export default router;