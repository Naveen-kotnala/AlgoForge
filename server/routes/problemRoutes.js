import express from "express";
import Problem from "../models/Problem.js";

const router = express.Router();

// Get all problems
router.get("/", async (req, res) => {
  try {
    const { difficulty, tag, search } = req.query;

    let filter = {};

    // Difficulty Filter
    if (difficulty) {
      filter.difficulty = difficulty;
    }

    // Topic Filter
    if (tag) {
      filter.tags = tag;
    }

    // Search Filter
    if (search) {
      filter.title = {
        $regex: search,
        $options: "i",
      };
    }

    const problems = await Problem.find().sort({ problemNumber: 1 });

    res.json(problems);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get single problem
router.get("/:id", async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);

    if (!problem) {
      return res.status(404).json({
        message: "Problem not found",
      });
    }

    res.json(problem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
