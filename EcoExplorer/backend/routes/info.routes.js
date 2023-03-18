import express from "express";

import {
    createInfo, deleteInfo, getAllInfos, getInfo, getInfoByEmail,
    updateInfo
} from "../controllers/info.controller.js";

const router = express.Router();

router.post("/", createInfo);
router.get("/", getAllInfos);
router.get("/:id", getInfo);
router.delete("/:id", deleteInfo);
router.put("/:id", updateInfo);
router.get("/type/:email", getInfoByEmail)

export default router;