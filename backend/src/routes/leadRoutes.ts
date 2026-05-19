import express from "express";

import {
  getLeads,
  createLead,
  deleteLead,
  updateLead,
} from "../controllers/leadController";

const router = express.Router();

router.get("/", getLeads);

router.post("/", createLead);

router.delete("/:id", deleteLead);

router.put("/:id",updateLead);

export default router;