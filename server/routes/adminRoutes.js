import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import Problem from "../models/Problem.js";

const router = express.Router();

// Add Problem
router.post("/problem", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const problem = await Problem.create(req.body);

    res.status(201).json({
      message: "Problem Added Successfully",
      problem,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
