import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

export const executeCode = async (language, code, input = "") => {
  if (language !== "cpp") {
    throw new Error("Only C++ supported currently");
  }

  const fileName = uuid();

  const tempDir = path.join(process.cwd(), "temp");

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  // Create cpp file
  const cppFile = path.join(tempDir, `${fileName}.cpp`);
  fs.writeFileSync(cppFile, code);

  // Create input file
  const inputFile = path.join(tempDir, `${fileName}.txt`);
  fs.writeFileSync(inputFile, input);

  return await new Promise((resolve, reject) => {
    const args = [
      "run",
      "--rm",
      "--mount",
      `type=bind,src=${tempDir},target=/app`,
      "algoforge-cpp",
      "sh",
      "-c",
      `g++ /app/${fileName}.cpp -o /tmp/program && /tmp/program < /app/${fileName}.txt`,
    ];

    console.log("DOCKER ARGS:");
    console.log(args.join(" "));

    const docker = spawn("docker", args);

    let stdout = "";
    let stderr = "";

    docker.stdout.on("data", (data) => {
      stdout += data.toString();
    });

    docker.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    docker.on("close", (code) => {
      console.log("EXIT CODE:", code);
      console.log("STDOUT:", stdout);
      console.log("STDERR:", stderr);

      if (code === 0) {
        resolve({
          success: true,
          output: stdout.trim(),
        });
      } else {
        resolve({
          success: false,
          output: stderr.trim(),
        });
      }
    });

    docker.on("error", (err) => {
      reject(err);
    });
  });
};
