import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },

    tags: [
      {
        type: String,
      },
    ],

    functionName: {
      type: String,
      required: true,
    },

    starterCode: {
      cpp: {
        type: String,
        default: "",
      },

      java: {
        type: String,
        default: "",
      },

      python: {
        type: String,
        default: "",
      },
    },

    testCases: [
      {
        input: mongoose.Schema.Types.Mixed,
        output: mongoose.Schema.Types.Mixed,
      },
    ],

    hiddenTestCases: [
      {
        input: mongoose.Schema.Types.Mixed,
        output: mongoose.Schema.Types.Mixed,
      },
    ],

    examples: [
      {
        input: String,
        output: String,
        explanation: String,
      },
    ],

    constraints: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
