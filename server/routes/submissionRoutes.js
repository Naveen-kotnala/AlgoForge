import express from "express";
import Submission from "../models/Submission.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Get solved problem ids

router.get("/solved", authMiddleware, async (req, res) => {
  try {
    const submissions = await Submission.find({
      userId: req.user.id,
      status: "Accepted ",
    });

    const solvedProblems = [
      ...new Set(submissions.map((sub) => sub.problemId.toString())),
    ];

    res.json(solvedProblems);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get My Submissions History

router.get("/my-submissions", authMiddleware, async (req, res) => {
  try {
    const submissions = await Submission.find({
      userId: req.user.id,
    })
      .populate("problemId")
      .sort({
        createdAt: -1,
      });

    console.log("MY SUBMISSIONS DATA:", submissions);

    res.json(submissions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
