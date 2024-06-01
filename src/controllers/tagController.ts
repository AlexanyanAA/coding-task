import express from "express";
import { findContent } from "../services/tagService";

const router = express.Router();

router.get("/taggedContent", (req, res) => {
  const tag = req.query.tag as string;
  if (!tag) {
    return res.status(400).json({ error: "Tag is required" });
  }
  const content = findContent(tag);
  res.json(content);
});

export default router;
