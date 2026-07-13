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
  ...math
];

const importData = async () => {
  try {
    await connectDB();

    await Problem.deleteMany();

    await Problem.insertMany(problems);

    console.log("Problems Imported Successfully ✅");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();