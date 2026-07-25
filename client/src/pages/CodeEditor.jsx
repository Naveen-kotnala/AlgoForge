import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Editor from "@monaco-editor/react";

function CodeEditor() {
  const { id } = useParams();

  const [problem, setProblem] = useState(null);

  const [code, setCode] = useState("");

  const [language, setLanguage] = useState("cpp");

  const [output, setOutput] = useState("");

  const [status, setStatus] = useState("");

  const [expectedOutput, setExpectedOutput] = useState("");
  const [testInput, setTestInput] = useState("");
  const [runStatus, setRunStatus] = useState("");

  const [activeTab, setActiveTab] = useState("testcase");

  // Fetch Problem

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/problems/${id}`);

        setProblem(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProblem();
  }, [id]);

  // Load Template according to language

  useEffect(() => {
    if (problem) {
      const template = problem.starterCode?.[language] || "";

      setCode(template);
    }
  }, [language, problem]);

  const runCode = async () => {
    console.log("Run button clicked");

    try {
      const res = await axios.post("http://localhost:5000/api/code/run", {
        code,
        language,
        problemId: id,
      });
      console.log(res.data);

      setOutput(res.data.output);

      setExpectedOutput(res.data.expected);

      setTestInput(JSON.stringify(res.data.input, null, 2));

      setRunStatus(res.data.verdict);
    } catch (error) {
      console.log(error);

      setOutput("Error running code");
    }
    setActiveTab("result");
  };

  const submitCode = async () => {
    console.log("CODE BEFORE SUBMIT:", code);

    if (!code || code.trim() === "") {
      setStatus("Code is empty ");

      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/code/submit",

        {
          code,
          language,
          problemId: id,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setStatus(res.data.status);
    } catch (error) {
      console.log(error);

      setStatus(error.response?.data?.message || "Submission Failed ");
    }
    setActiveTab("result");
  };

  const fileName =
    language === "cpp"
      ? "Solution.cpp"
      : language === "java"
        ? "Solution.java"
        : "solution.py";

  if (!problem) {
    return (
      <div
        className="
      bg-slate-950
      min-h-screen
      text-white
      flex
      justify-center
      items-center
      "
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      className="
   bg-slate-950
     h-screen
   text-white
    overflow-hidden
    "
    >
      <Navbar />

      <div
        className="
  h-[calc(100vh-64px)]
  mt-16
  px-6
  py-4
  "
      >
        <div
          className="
      grid
      lg:grid-cols-2
      gap-6
      h-full
      "
        >
          {/* Problem */}
          <div
            className="
         bg-slate-900
           border
        border-slate-800
          rounded-2xl
           p-6
          overflow-y-auto
          h-full
          "
          >
            <h1 className="text-3xl font-bold">{problem.title}</h1>

            <span
              className="
        inline-block
        mt-4
        px-4
        py-1
        rounded-full
        bg-green-500/20
        text-green-400
        "
            >
              {problem.difficulty}
            </span>

            <h2
              className="
        text-xl
        font-semibold
        mt-8
        "
            >
              Problem Description
            </h2>

            <p
              className="
        text-gray-400
        mt-3
        "
            >
              {problem.description}
            </p>

            <h2 className="text-xl font-semibold mt-8">Example</h2>

            {problem.examples?.map((example, index) => (
              <div
                key={index}
                className="
              bg-slate-950
                p-4
                rounded-xl
                mt-3
               space-y-4
               "
              >
                <p>
                  <strong>Input:</strong>
                  <br />
                  {example.input}
                </p>

                <p>
                  <strong>Output:</strong>
                  <br />
                  {example.output}
                </p>

                {example.explanation && (
                  <p>
                    <strong>Explanation:</strong>
                    <br />
                    {example.explanation}
                  </p>
                )}
              </div>
            ))}

            <h2 className="text-xl font-semibold mt-8">Constraints</h2>

            <div
              className="
            bg-slate-950
              rounded-xl
              p-4
              mt-3
           text-gray-300
             whitespace-pre-line
            "
            >
              {problem.constraints}
            </div>
          </div>
          {/* Editor */}
          <div
            className="
        bg-slate-900
          border
        border-slate-800
           rounded-2xl
           overflow-hidden
           flex
           flex-col
           h-full
           "
          >
            <div
              className="
      flex
      justify-between
      items-center
      px-5
      py-3
      border-b
      border-slate-800
      "
            >
              <p>{fileName}</p>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="
              bg-slate-800
                px-3
                py-2
                rounded-lg
               "
              >
                <option value="cpp">C++</option>

                <option value="java">Java</option>

                <option value="python">Python</option>
              </select>
            </div>

            <div className="flex flex-col flex-1">
              <div className="flex-[7] overflow-hidden">
                <Editor
                  height="100%"
                  language={
                    language === "cpp"
                      ? "cpp"
                      : language === "java"
                        ? "java"
                        : "python"
                  }
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 15,
                    fontFamily: "JetBrains Mono",
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    wordWrap: "on",
                    lineNumbers: "on",
                    roundedSelection: false,
                    scrollbar: {
                      verticalScrollbarSize: 8,
                      horizontalScrollbarSize: 8,
                    },
                  }}
                />
              </div>

              <div className="border-t border-slate-800">
                <div className="flex items-center justify-end gap-3 px-5 py-3 border-b border-slate-800 bg-slate-900">
                  <button
                    onClick={runCode}
                    className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-lg font-medium transition-all duration-200"
                  >
                    Run
                  </button>

                  <button
                    onClick={submitCode}
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium transition-all duration-200"
                  >
                    Submit
                  </button>
                </div>

                <div className="h-64 overflow-y-auto p-5">
                  <div className="bg-slate-950 rounded-lg border border-slate-800 p-4 mb-5">
                    <div className="flex justify-between items-center">
                      <span
                        className={`font-bold text-lg ${
                          runStatus === "Accepted"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {runStatus || "Not Executed"}
                      </span>

                      <span className="text-sm text-gray-400">
                        Runtime: 12 ms
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm mt-1">Memory: 42 MB</p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p className="text-gray-400 mb-2">Input</p>
                      <div className="bg-slate-950 rounded-lg p-3 border border-slate-800">
                        <pre>{testInput}</pre>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-400 mb-2">Expected Output</p>
                      <div className="bg-slate-950 rounded-lg p-3 border border-slate-800">
                        <pre>{expectedOutput}</pre>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-400 mb-2">Your Output</p>
                      <div className="bg-slate-950 rounded-lg p-3 border border-slate-800">
                        <pre>{output}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {status && (
            <div
              className="
             p-5
             text-xl
             font-bold
            "
            >
              {status}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
