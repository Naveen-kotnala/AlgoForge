import submissionRoutes from "./routes/submissionRoutes.js";
console.log("🔥 SERVER.JS STARTED");
import userRoutes from "./routes/userRoutes.js";
import problemRoutes from "./routes/problemRoutes.js";
import discussionRoutes from "./routes/discussionRoutes.js";
import codeRoutes from "./routes/codeRoutes.js";
import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import adminRoutes from "./routes/adminRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/problems", problemRoutes);
app.use("/api/discussions", discussionRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/code", codeRoutes);
app.use("/api/users", userRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("AlgoForge Backend Running ");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
