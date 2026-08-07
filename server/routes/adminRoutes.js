import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import Problem from "../models/Problem.js";
import User from "../models/User.js";
import Submission from "../models/Submission.js";

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

// Get All Problems

router.get("/problems", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/problem", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    // Last problem find karo
    const lastProblem = await Problem.findOne().sort({ problemNumber: -1 });

    // Next number
    const nextProblemNumber = lastProblem ? lastProblem.problemNumber + 1 : 1;

    // Problem create
    const problem = await Problem.create({
      ...req.body,
      problemNumber: nextProblemNumber,
    });

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

///user

router.get("/users", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

///Delete any user
router.delete(
  "/user/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      await User.findByIdAndDelete(req.params.id);

      res.json({
        message: "User Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

router.put(
  "/user/:id/role",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      user.role = user.role === "admin" ? "user" : "admin";

      await user.save();

      res.json({
        message: "Role Updated Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

router.get("/stats", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalProblems = await Problem.countDocuments();
    const totalSubmissions = await Submission.countDocuments();

    res.json({
      totalUsers,
      totalProblems,
      totalSubmissions,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/fix-numbering", async (req, res) => {
  const problems = await Problem.find().sort({ createdAt: 1 });

  for (let i = 0; i < problems.length; i++) {
    problems[i].problemNumber = i + 1;
    await problems[i].save();
  }

  res.json({ message: "Numbering Updated" });
});

export default router;
