import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    // Leaderboard Fields

    xp: {
      type: Number,
      default: 0,
    },

    level: {
      type: String,
      default: "Bronze",
    },

    solved: {
      type: Number,
      default: 0,
    },

    streak: {
      type: Number,
      default: 0,
    },

    longestStreak: {
      type: Number,
      default: 0,
    },

    settings: {
      defaultLanguage: {
        type: String,
        enum: ["cpp", "java", "python"],
        default: "cpp",
      },

      editorFontSize: {
        type: Number,
        default: 16,
      },

      profilePublic: {
        type: Boolean,
        default: true,
      },

      theme: {
        type: String,
        enum: ["dark", "light"],
        default: "dark",
      },
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
