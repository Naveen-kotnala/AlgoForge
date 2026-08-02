import express from "express";
import Comment from "../models/Comment.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// GET COMMENTS OF DISCUSSION

router.get("/:discussionId", async (req, res) => {
  try {
    const comments = await Comment.find({
      discussionId: req.params.discussionId,
    })
      .populate("userId", "name")
      .sort({
        createdAt: -1,
      });

    res.json(comments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ADD COMMENT

router.post("/", authMiddleware, async (req, res) => {
  try {
    const comment = await Comment.create({
      userId: req.user.id,

      discussionId: req.body.discussionId,

      text: req.body.text,
    });

    res.json(comment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
