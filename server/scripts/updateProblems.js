import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Problem from "../models/Problem.js";

dotenv.config();

// ==========================
// C++ / JAVA PARSER
// ==========================

function parseCppJava(code, functionName) {
  const regex = new RegExp(
    `([\\w\\[\\]:<>,&\\s]+)\\s+${functionName}\\s*\\(([^)]*)\\)`,
    "m",
  );

  const match = code.match(regex);

  if (!match) return null;

  const returnType = match[1]
    .replace("public", "")
    .replace("private", "")
    .replace("protected", "")
    .replace("static", "")
    .replace("final", "")
    .replace(":", "")
    .trim();

  const parameters = [];

  const parameterString = match[2].trim();

  if (parameterString.length > 0) {
    parameterString.split(",").forEach((p) => {
      const temp = p.trim();

      const lastSpace = temp.lastIndexOf(" ");

      parameters.push({
        type: temp.substring(0, lastSpace).replace("&", "").trim(),
        name: temp.substring(lastSpace + 1).trim(),
      });
    });
  }

  return {
    returnType,
    parameters,
  };
}

// ==========================
// PYTHON PARSER
// ==========================

function parsePython(code, functionName) {
  const regex = new RegExp(
    `def\\s+${functionName}\\s*\\(([^)]*)\\)\\s*(?:->\\s*([^:]+))?:`,
  );

  const match = code.match(regex);

  if (!match) return null;

  const parameterString = match[1];

  const returnType = match[2]?.trim() || "None";

  const parameters = [];

  if (parameterString.trim()) {
    parameterString.split(",").forEach((p) => {
      p = p.trim();

      if (p === "self") return;

      const parts = p.split(":");

      parameters.push({
        name: parts[0].trim(),
        type: parts[1]?.trim() || "Any",
      });
    });
  }

  return {
    returnType,
    parameters,
  };
}

// ==========================

async function updateProblems() {
  await connectDB();

  const problems = await Problem.find();

  for (const problem of problems) {
    const cppParsed = parseCppJava(
      problem.starterCode.cpp,
      problem.functionName,
    );

    const javaParsed = parseCppJava(
      problem.starterCode.java,
      problem.functionName,
    );

    const pythonParsed = parsePython(
      problem.starterCode.python,
      problem.functionName,
    );

    problem.returnType = {
      cpp: cppParsed?.returnType || "",
      java: javaParsed?.returnType || "",
      python: pythonParsed?.returnType || "",
    };

    problem.parameters = {
      cpp: cppParsed?.parameters || [],
      java: javaParsed?.parameters || [],
      python: pythonParsed?.parameters || [],
    };

    await problem.save();

    console.log("Updated:", problem.title);
  }

  console.log("All Problems Updated ✅");

  process.exit();
}

updateProblems();
