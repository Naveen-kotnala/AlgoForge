import mongoose from "mongoose";
import dotenv from "dotenv";

import connectDB from "../config/db.js";
import Problem from "../models/Problem.js";

import arrays from "./arrays.js";
import strings from "./strings.js";
import binarySearch from "./binarySearch.js";
import linkedList from "./linkedList.js";
import stack from "./stack.js";
import queue from "./queue.js";
import tree from "./tree.js";
import graph from "./graph.js";
import dp from "./dp.js";
import greedy from "./greedy.js";
import math from "./math.js";
import heap from "./heap.js";

dotenv.config();

const problems = [
  ...arrays,
  ...strings,
  ...binarySearch,
  ...linkedList,
  ...stack,
  ...queue,
  ...tree,
  ...graph,
  ...dp,
  ...greedy,
  ...math,
  ...heap,
];

console.log("Total Problems:", problems.length);

const importData = async () => {
  try {
    await connectDB();

    // Purane problems delete
    await Problem.deleteMany({});

    console.log("Old problems deleted");

    // Automatically problem numbers generate karo
    const numberedProblems = problems.map((problem, index) => ({
      ...problem,
      problemNumber: index + 1,
    }));

    // Insert all problems
    const insertedProblems = await Problem.insertMany(numberedProblems);

    console.log(
      `Problems Imported Successfully ✅ ${insertedProblems.length} problems`,
    );

    process.exit(0);
  } catch (error) {
    console.error("SEED ERROR:", error);
    process.exit(1);
  }
};

importData();
