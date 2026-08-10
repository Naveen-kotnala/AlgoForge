import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Editor from "@monaco-editor/react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";

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

  const [editorSettings, setEditorSettings] = useState({
    defaultLanguage: "cpp",
    editorFontSize: 16,
  });

  // =========================
  // FETCH PROBLEM
  // =========================

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        console.log("ID FROM URL:", id);

        const res = await axios.get(`http://localhost:5000/api/problems/${id}`);

        console.log("PROBLEM DATA:", res.data);

        setProblem(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProblem();
  }, [id]);

  // =========================
  // FETCH SETTINGS
  // =========================

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/users/settings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setEditorSettings(res.data);
        setLanguage(res.data.defaultLanguage);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSettings();
  }, []);

  // =========================
  // LOAD TEMPLATE
  // =========================

  useEffect(() => {
    if (problem) {
      console.log("LOADING TEMPLATE:", language);

      const template = problem.starterCode?.[language] || "";

      setCode(template);
    }
  }, [language, problem]);

  // =========================
  // RUN CODE
  // =========================

  const runCode = async () => {
    console.log("RUN LANGUAGE:", language);
    console.log("Run button clicked");

    console.log("====== FRONTEND ======");
    console.log("Language:", language);
    console.log("First Line:", code.split("\n")[0]);

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

  // =========================
  // SUBMIT CODE
  // =========================

  const submitCode = async () => {
    if (!code.trim()) {
      setRunStatus("Code is empty");
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

      setRunStatus(res.data.status.trim());
      setOutput(res.data.message);

      setActiveTab("result");
    } catch (error) {
      console.log(error);

      setRunStatus("Submission Failed");

      setOutput(error.response?.data?.message || "Submission Failed");
    }
  };

  // =========================
  // FILE NAME
  // =========================

  const fileName =
    language === "cpp"
      ? "Solution.cpp"
      : language === "java"
        ? "Solution.java"
        : "solution.py";

  // =========================
  // LOADING
  // =========================

  if (!problem) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
          Loading...
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div
        className="
          min-h-screen
          bg-slate-950
          text-white
          pt-24
          px-3
          sm:px-5
          lg:px-6
          pb-5
        "
      >
        <div
          className="
            max-w-[1600px]
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-4
            lg:gap-6
          "
        >
          {/* ========================= */}
          {/* PROBLEM PANEL */}
          {/* ========================= */}

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-4
              sm:p-5
              lg:p-6
              overflow-y-auto
              lg:h-[calc(100vh-120px)]
            "
          >
            {/* TITLE */}

            <h1
              className="
                text-xl
                sm:text-2xl
                lg:text-3xl
                font-bold
                leading-tight
              "
            >
              {problem.problemNumber}. <span>{problem.title}</span>
            </h1>

            {/* DIFFICULTY */}

            <span
              className={`
                inline-block
                mt-2
                px-4
                py-1
                rounded-full
                text-sm
                font-semibold
                ${
                  problem.difficulty === "Easy"
                    ? "bg-green-500/20 text-green-400"
                    : problem.difficulty === "Medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                }
              `}
            >
              {problem.difficulty}
            </span>

            {/* DESCRIPTION */}

            <h2
              className="
                text-lg
                sm:text-xl
                font-semibold
                mt-7
              "
            >
              Problem Description
            </h2>

            <p
              className="
                text-gray-400
                mt-3
                leading-7
                text-sm
                sm:text-base
              "
            >
              {problem.description}
            </p>

            {/* EXAMPLES */}

            <h2
              className="
                text-lg
                sm:text-xl
                font-semibold
                mt-7
              "
            >
              Example
            </h2>

            {problem.examples?.map((example, index) => (
              <div
                key={index}
                className="
                  bg-slate-950
                  p-4
                  rounded-xl
                  mt-3
                  space-y-4
                  border
                  border-slate-800
                  overflow-x-auto
                "
              >
                <p className="text-sm sm:text-base">
                  <strong>Input:</strong>
                  <br />
                  {example.input}
                </p>

                <p className="text-sm sm:text-base">
                  <strong>Output:</strong>
                  <br />
                  {example.output}
                </p>

                {example.explanation && (
                  <p className="text-sm sm:text-base">
                    <strong>Explanation:</strong>
                    <br />
                    {example.explanation}
                  </p>
                )}
              </div>
            ))}

            {/* CONSTRAINTS */}

            <h2
              className="
                text-lg
                sm:text-xl
                font-semibold
                mt-7
              "
            >
              Constraints
            </h2>

            <div
              className="
                bg-slate-950
                rounded-xl
                p-4
                mt-3
                text-gray-300
                whitespace-pre-line
                text-sm
                sm:text-base
                border
                border-slate-800
                overflow-x-auto
              "
            >
              {problem.constraints}
            </div>
          </div>

          {/* ========================= */}
          {/* EDITOR PANEL */}
          {/* ========================= */}

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              overflow-hidden
              flex
              flex-col
              h-162.5
              lg:h-[calc(100vh-120px)]
            "
          >
            {/* EDITOR HEADER */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                justify-between
                sm:items-center
                gap-3
                px-4
                sm:px-5
                py-3
                border-b
                border-slate-800
                shrink-0
              "
            >
              <p>{fileName}</p>

              <select
                value={language}
                onChange={(e) => {
                  const selected = e.target.value;

                  console.log("CHANGED LANGUAGE:", selected);

                  setLanguage(selected);
                }}
                className="
                  bg-slate-800
                  border
                  border-slate-700
                  px-3
                  py-2
                  rounded-lg
                  text-sm
                  outline-none
                  focus:border-purple-500
                  w-full
                  sm:w-auto
                "
              >
                <option value="cpp">C++</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
              </select>
            </div>

            {/* EDITOR + OUTPUT */}

            <PanelGroup direction="vertical" className="flex-1 min-h-0">
              {/* MONACO EDITOR */}

              <Panel defaultSize={72} minSize={35}>
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
                    minimap: {
                      enabled: false,
                    },
                    fontSize: editorSettings.editorFontSize,
                    automaticLayout: true,
                    scrollBeyondLastLine: false,
                  }}
                />
              </Panel>

              {/* RESIZE HANDLE */}

              <PanelResizeHandle
                className="
                  h-1
                  bg-slate-700
                  hover:bg-green-500
                  cursor-row-resize
                "
              />

              {/* OUTPUT */}

              <Panel defaultSize={28} minSize={15}>
                <div className="h-full flex flex-col">
                  {/* BUTTONS */}

                  <div
                    className="
                      flex
                      items-center
                      justify-end
                      gap-3
                      px-3
                      sm:px-5
                      py-3
                      border-b
                      border-slate-800
                      bg-slate-900
                    "
                  >
                    <button
                      onClick={runCode}
                      className="
                        bg-slate-800
                        hover:bg-slate-700
                        px-4
                        sm:px-5
                        py-2
                        rounded-lg
                        text-sm
                        sm:text-base
                      "
                    >
                      Run
                    </button>

                    <button
                      onClick={submitCode}
                      className="
                        bg-green-600
                        hover:bg-green-700
                        px-4
                        sm:px-5
                        py-2
                        rounded-lg
                        text-sm
                        sm:text-base
                      "
                    >
                      Submit
                    </button>
                  </div>

                  {/* RESULT */}

                  <div
                    className="
                      flex-1
                      overflow-auto
                      p-3
                      sm:p-5
                    "
                  >
                    {/* STATUS */}

                    <div
                      className="
                        bg-slate-950
                        rounded-lg
                        border
                        border-slate-800
                        p-4
                        mb-5
                      "
                    >
                      <div
                        className="
                          flex
                          flex-col
                          sm:flex-row
                          justify-between
                          gap-4
                        "
                      >
                        <div>
                          <p className="text-sm text-gray-400">Status</p>

                          <p
                            className={`
                              text-xl
                              font-bold
                              ${
                                runStatus.trim() === "Accepted"
                                  ? "text-green-400"
                                  : "text-red-400"
                              }
                            `}
                          >
                            {runStatus || "Not Executed"}
                          </p>
                        </div>

                        <div className="sm:text-right">
                          <p className="text-sm text-gray-400">Runtime</p>

                          <p className="text-white">12 ms</p>
                        </div>
                      </div>
                    </div>

                    {/* INPUT */}

                    <div className="space-y-5">
                      <div>
                        <p className="text-gray-400 mb-2">Input</p>

                        <div
                          className="
                            bg-slate-950
                            rounded-lg
                            p-3
                            border
                            border-slate-800
                            overflow-x-auto
                          "
                        >
                          <pre className="whitespace-pre-wrap">{testInput}</pre>
                        </div>
                      </div>

                      {/* EXPECTED OUTPUT */}

                      <div>
                        <p className="text-gray-400 mb-2">Expected Output</p>

                        <div
                          className="
                            bg-slate-950
                            rounded-lg
                            p-3
                            border
                            border-slate-800
                            overflow-x-auto
                          "
                        >
                          <pre className="whitespace-pre-wrap">
                            {expectedOutput}
                          </pre>
                        </div>
                      </div>

                      {/* YOUR OUTPUT */}

                      <div>
                        <p className="text-gray-400 mb-2">Your Output</p>

                        <div
                          className="
                            bg-slate-950
                            rounded-lg
                            p-3
                            border
                            border-slate-800
                            overflow-x-auto
                          "
                        >
                          <pre className="whitespace-pre-wrap">{output}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Panel>
            </PanelGroup>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodeEditor;
