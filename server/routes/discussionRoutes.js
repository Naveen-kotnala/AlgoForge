import express from "express";
import Discussion from "../models/Discussion.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// GET ALL DISCUSSIONS
router.get("/", async (req, res) => {
  try {
    const discussions = await Discussion.find()
      .populate("userId", "name")
      .populate("problemId", "title difficulty")
      .sort({
        createdAt: -1,
      });

    res.json(discussions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id)
      .populate("problemId")
      .populate("userId", "name");

    if (!discussion) {
      return res.status(404).json({
        message: "Discussion not found",
      });
    }

    res.json(discussion);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// CREATE DISCUSSION
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { problemId, title, content } = req.body;

    const discussion = await Discussion.create({
      userId: req.user.id,

      problemId,

      title,

      content,
    });

    res.json(discussion);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET SINGLE DISCUSSION

router.get("/:id", async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id)
      .populate("userId", "name")
      .populate("problemId", "title");

    res.json(discussion);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:id/like", authMiddleware, async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id);

    if (!discussion) {
      return res.status(404).json({
        message: "Discussion not found",
      });
    }

    discussion.likes += 1;

    await discussion.save();

    res.json({
      likes: discussion.likes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
