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

// Get All Problems

router.get("/problems", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const problems = await Problem.find().sort({ createdAt: -1 });

    res.json(problems);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Delete Problem

router.delete(
  "/problem/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      await Problem.findByIdAndDelete(req.params.id);

      res.json({
        message: "Problem Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

// Update Problem

router.put(
  "/problem/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const updatedProblem = await Problem.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        },
      );

      res.json({
        message: "Problem Updated Successfully",
        problem: updatedProblem,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

export default router;
