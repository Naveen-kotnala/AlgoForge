import Problem from "../models/Problem.js";
console.log("🔥 CODE ROUTES LOADED");
// import { generateCppWrapper } from "../services/wrapperService.js";
import {
  generateCppWrapper,
  generateJavaWrapper,
  generatePythonWrapper,
} from "../services/wrapperService.js";
import { executeCode } from "../services/executionService.js";
import authMiddleware from "../middleware/authMiddleware.js";
import Submission from "../models/Submission.js";
import express from "express";

function normalizeOutput(value) {
  return String(value)
    .trim()
    .replace(/^"(.*)"$/, "$1")
    .replace(/\s/g, "")
    .toLowerCase();
}

const router = express.Router();

// RUN CODE
router.post("/run", async (req, res) => {
  try {
    const { code, language, problemId } = req.body;

    console.log("LANGUAGE:", language);
    console.log("FIRST LINE:", code.split("\n")[0]);

    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.status(404).json({
        message: "Problem not found",
      });
    }

    // First visible testcase
    const testCase = problem.testCases[0];

    // Wrapper generate
    // const wrapperCode = generateCppWrapper(
    //   code,
    //   problem.functionName,
    //   testCase,
    // );

    let wrapperCode;

    if (language === "cpp") {
      wrapperCode = generateCppWrapper(
        code,
        problem.functionName,
        testCase,
        problem,
      );
    } else if (language === "java") {
      wrapperCode = generateJavaWrapper(
        code,
        problem.functionName,
        testCase,
        problem,
      );
    } else if (language === "python") {
      wrapperCode = generatePythonWrapper(
        code,
        problem.functionName,
        testCase,
        problem,
      );
      console.log("========== PYTHON WRAPPER ==========");
      console.log(wrapperCode);
    } else {
      return res.status(400).json({
        message: "Unsupported language",
      });
    }

    // Execute
    const result = await executeCode(language, wrapperCode);

    if (!result.success) {
      return res.json({
        passed: false,
        verdict: "Compilation Error ",
        output: result.output,
        expected: JSON.stringify(testCase.output),
        input: testCase.input,
      });
    }

    const actual = normalizeOutput(result.output);

    const expected = normalizeOutput(JSON.stringify(testCase.output));

    res.json({
      passed: actual === expected,

      verdict: actual === expected ? "Passed " : "Wrong Answer ",

      input: testCase.input,

      expected,

      output: actual,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// SUBMIT CODE
router.post("/submit", authMiddleware, async (req, res) => {
  try {
    const { code, language, problemId } = req.body;

    // Find Problem

    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.status(404).json({
        message: "Problem not found",
      });
    }

    let finalStatus = "Accepted ";

    for (const testCase of problem.hiddenTestCases) {
      // Generate Wrapper
      // const wrapperCode = generateCppWrapper(
      //   code,
      //   problem.functionName,
      //   testCase,
      // );
      let wrapperCode;

      if (language === "cpp") {
        wrapperCode = generateCppWrapper(
          code,
          problem.functionName,
          testCase,
          problem,
        );
      } else if (language === "java") {
        wrapperCode = generateJavaWrapper(
          code,
          problem.functionName,
          testCase,
          problem,
        );
      } else if (language === "python") {
        wrapperCode = generatePythonWrapper(
          code,
          problem.functionName,
          testCase,
          problem,
        );
      } else {
        return res.status(400).json({
          message: "Unsupported language",
        });
      }

      console.log("========== WRAPPER ==========");
      console.log(wrapperCode);

      // Execute
      const result = await executeCode(language, wrapperCode);

      console.log("EXECUTION RESULT:", result);

      // Compilation / Runtime Error
      if (!result.success) {
        finalStatus = "Compilation Error ";
        break;
      }

      // Wrong Answer
      if (
        normalizeOutput(result.output) !==
        normalizeOutput(JSON.stringify(testCase.output))
      ) {
        finalStatus = "Wrong Answer ";
        break;
      }
    }

    console.log("Creating submission:");

    console.log("USER ID:", req.user.id);

    console.log("PROBLEM ID:", problemId);

    // Save Submission

    const submission = await Submission.create({
      userId: req.user.id,

      problemId,

      code,

      language,

      status: finalStatus,
    });

    console.log("SAVED:", submission);

    res.json({
      status: finalStatus,

      message: "Solution submitted successfully",

      submission,
    });
  } catch (error) {
    console.log("========== SUBMISSION ERROR ==========");

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// USER SUBMISSIONS

router.get("/my-submissions", authMiddleware, async (req, res) => {
  try {
    const submissions = await Submission.find({
      userId: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.json(submissions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ALL SUBMISSIONS

router.get("/submissions", async (req, res) => {
  try {
    const submissions = await Submission.find()

      .populate("problemId")

      .sort({
        createdAt: -1,
      });

    res.json(submissions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
