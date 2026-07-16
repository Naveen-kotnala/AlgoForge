import { spawn } from "child_process";

import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

function toDockerPath(windowsPath) {
    return windowsPath
        .replace(/\\/g, "/")
        .replace(/^([A-Za-z]):/, (_, drive) => `/${drive.toLowerCase()}`);
}



export const executeCode = async (language, code) => {

    if (language !== "cpp") {
        throw new Error("Only C++ supported currently");
    }

    const fileName = uuid();

    const tempDir = path.join(process.cwd(), "temp");

    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }

    const cppFile = path.join(tempDir, `${fileName}.cpp`);

    fs.writeFileSync(cppFile, code);

   const dockerPath = toDockerPath(tempDir);

return await new Promise((resolve, reject) => {

    const args = [
        "run",
        "--rm",
        "--mount",
        `type=bind,src=${tempDir},target=/app`,
        "algoforge-cpp",
        "sh",
        "-c",
        `g++ /app/${fileName}.cpp -o /app/program && /app/program`
    ];

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

        if (code === 0) {
            resolve({
                success: true,
                output: stdout
            });
        } else {
            resolve({
                success: false,
                output: stderr
            });
        }

    });

    docker.on("error", (err) => {
        reject(err);
    });

});

};