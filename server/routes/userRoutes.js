import { registerUser, loginUser } from "../controllers/userController.js";

import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import User from "../models/User.js";
import Submission from "../models/Submission.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

// Admin Test Route
router.get("/admin/test", authMiddleware, adminMiddleware, (req, res) => {
  res.json({
    message: "Welcome Admin 🚀",
  });
});

// Profile Route
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    const submissions = await Submission.find({
      userId: req.user.id,
      status: "Accepted ",
    }).populate("problemId");

    // Unique solved problems

    const uniqueProblems = [
      ...new Map(
        submissions
          .filter((sub) => sub.problemId)
          .map((sub) => [sub.problemId._id.toString(), sub.problemId]),
      ).values(),
    ];

    const solved = uniqueProblems.length;

    const easy = uniqueProblems.filter(
      (problem) => problem.difficulty === "Easy",
    ).length;

    const medium = uniqueProblems.filter(
      (problem) => problem.difficulty === "Medium",
    ).length;

    const hard = uniqueProblems.filter(
      (problem) => problem.difficulty === "Hard",
    ).length;

    // Activity

    const submissionDates = submissions.map(
      (sub) => new Date(sub.createdAt).toISOString().split("T")[0],
    );

    const uniqueDates = [...new Set(submissionDates)].sort().reverse();

    // Current Streak

    let streak = 0;

    let today = new Date();

    for (let i = 0; i < uniqueDates.length; i++) {
      let checkDate = new Date();

      checkDate.setDate(today.getDate() - i);

      let dateString = checkDate.toISOString().split("T")[0];

      if (uniqueDates.includes(dateString)) {
        streak++;
      } else {
        break;
      }
    }

    const activity = uniqueDates;

    // Longest Streak

    const sortedDates = [...uniqueDates].sort();

    let longestStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < sortedDates.length; i++) {
      if (i === 0) {
        currentStreak = 1;
      } else {
        const prev = new Date(sortedDates[i - 1]);
        const curr = new Date(sortedDates[i]);

        const diff = (curr - prev) / (1000 * 60 * 60 * 24);

        if (diff === 1) {
          currentStreak++;
        } else {
          currentStreak = 1;
        }
      }

      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    }

    let xp = 0;

    uniqueProblems.forEach((problem) => {
      if (problem.difficulty === "Easy") {
        xp += 10;
      } else if (problem.difficulty === "Medium") {
        xp += 20;
      } else if (problem.difficulty === "Hard") {
        xp += 40;
      }
    });

    let level = "Beginner";

    if (xp >= 100) {
      level = "Intermediate";
    }

    if (xp >= 300) {
      level = "Advanced";
    }

    if (xp >= 500) {
      level = "Master";
    }

    // Badges

    let badges = [];

    if (solved >= 1) {
      badges.push({
        name: "First Step",
        icon: "🌱",
      });
    }

    if (streak >= 7) {
      badges.push({
        name: "Streak Warrior",
        icon: "🔥",
      });
    }

    if (solved >= 50) {
      badges.push({
        name: "Problem Crusher",
        icon: "⚡",
      });
    }

    if (solved >= 100) {
      badges.push({
        name: "Century Club",
        icon: "💯",
      });
    }

    res.json({
      user,
      solved,
      easy,
      medium,
      hard,
      streak,
      longestStreak,
      activity,
      badges,
      xp,
      level,
    });
  } catch (error) {
    console.log("PROFILE ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// Get Settings
router.get("/settings", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("settings");

    res.json(user.settings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Update Settings
router.put("/settings", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    user.settings = {
      defaultLanguage: req.body.defaultLanguage,
      editorFontSize: req.body.editorFontSize,
      profilePublic: req.body.profilePublic,
      theme: req.body.theme,
    };

    await user.save();

    res.json({
      message: "Settings Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/leaderboard", async (req, res) => {
  const users = await User.find()
    .select("name xp level solved streak")
    .sort({ xp: -1 })
    .limit(100);

  res.json(users);
});

export default router;
