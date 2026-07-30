import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

export const executeCode = async (language, code, input = "") => {
  const fileName = uuid();

  const tempDir = path.join(process.cwd(), "temp");

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  let sourceFile = "";
  let dockerImage = "";
  let command = "";

  if (language === "cpp") {
    sourceFile = `${fileName}.cpp`;

    dockerImage = "algoforge-cpp";

    command = `
      g++ /app/${sourceFile} -o /tmp/program &&
      /tmp/program < /app/input.txt
    `;
  } else if (language === "java") {
    sourceFile = "Main.java";

    dockerImage = "algoforge-java";

    command = `
      javac /app/Main.java &&
      java -cp /app Main < /app/input.txt
    `;
  } else if (language === "python") {
    sourceFile = `${fileName}.py`;

    dockerImage = "algoforge-python";

    command = `
      python3 /app/${sourceFile} < /app/input.txt
    `;
  } else {
    throw new Error("Unsupported Language");
  }

  fs.writeFileSync(path.join(tempDir, sourceFile), code);

  fs.writeFileSync(path.join(tempDir, "input.txt"), input);

  return await new Promise((resolve, reject) => {
    const docker = spawn("docker", [
      "run",
      "--rm",
      "--mount",
      `type=bind,src=${tempDir},target=/app`,
      dockerImage,
      "sh",
      "-c",
      command,
    ]);

    let stdout = "";
    let stderr = "";

    docker.stdout.on("data", (data) => {
      stdout += data.toString();
    });

    docker.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    docker.on("close", (code) => {
      try {
        fs.unlinkSync(path.join(tempDir, sourceFile));
        fs.unlinkSync(path.join(tempDir, "input.txt"));
      } catch (e) {}

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
      try {
        fs.unlinkSync(path.join(tempDir, sourceFile));
        fs.unlinkSync(path.join(tempDir, "input.txt"));
      } catch (e) {}

      reject(err);
    });
  });
};
