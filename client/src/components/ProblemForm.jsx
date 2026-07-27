import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProblemForm() {
  const { id } = useParams();
  const [title, setTitle] = useState("");

  const [difficulty, setDifficulty] = useState("Easy");

  const [tags, setTags] = useState("");

  const [functionName, setFunctionName] = useState("");

  const [description, setDescription] = useState("");

  const [constraints, setConstraints] = useState("");

  const [examples, setExamples] = useState([
    {
      input: "",
      output: "",
      explanation: "",
    },
  ]);

  const addExample = () => {
    setExamples([
      ...examples,
      {
        input: "",
        output: "",
        explanation: "",
      },
    ]);
  };

  const updateExample = (index, field, value) => {
    const updated = [...examples];

    updated[index][field] = value;

    setExamples(updated);
  };

  const [starterCode, setStarterCode] = useState({
    cpp: "",
    java: "",
    python: "",
  });

  const updateStarterCode = (language, value) => {
    setStarterCode({
      ...starterCode,
      [language]: value,
    });
  };

  const [returnType, setReturnType] = useState("");

  const [parameters, setParameters] = useState([
    {
      type: "",
      name: "",
    },
  ]);

  const addParameter = () => {
    setParameters([
      ...parameters,
      {
        type: "",
        name: "",
      },
    ]);
  };

  const updateParameter = (index, field, value) => {
    const updated = [...parameters];

    updated[index][field] = value;

    setParameters(updated);
  };
  const [testCases, setTestCases] = useState([
    {
      input: "",
      output: "",
    },
  ]);
  const addTestCase = () => {
    setTestCases([
      ...testCases,
      {
        input: "",
        output: "",
      },
    ]);
  };

  const updateTestCase = (index, field, value) => {
    const updated = [...testCases];

    updated[index][field] = value;

    setTestCases(updated);
  };

  const saveProblem = async () => {
    try {
      const token = localStorage.getItem("token");

      const payload = {
        title,
        difficulty,
        tags: tags.split(",").map((tag) => tag.trim()),
        functionName,
        description,
        constraints,
        examples,
        starterCode,
        testCases,
        hiddenTestCases: [],
        returnType,
        parameters,
      };

      const res = await axios.post(
        "http://localhost:5000/api/admin/problem",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Failed");
    }
  };

  useEffect(() => {
    if (!id) return;

    const fetchProblem = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/problems/${id}`);

        const p = res.data;

        setTitle(p.title);
        setDifficulty(p.difficulty);
        setTags(p.tags.join(", "));
        setFunctionName(p.functionName);
        setDescription(p.description);
        setConstraints(p.constraints);

        setExamples(p.examples);

        setStarterCode(p.starterCode);

        setReturnType(p.returnType);

        setParameters(p.parameters);

        setTestCases(p.testCases);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProblem();
  }, [id]);

  return (
    <div className="space-y-10 max-w-5xl mx-auto text-white">
      {/* Title */}

      <div>
        <label className="block mb-2 text-lg font-semibold text-white">
          Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      focus:border-green-500
      transition
    "
        />
      </div>

      {/* Difficulty */}

      <div>
        <label className="block mb-2 text-lg font-semibold text-white">
          Difficulty
        </label>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      focus:border-green-500
    "
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      {/* Tags */}

      <div>
        <label className="block mb-2 text-lg font-semibold text-white">
          Tags
        </label>

        <input
          type="text"
          placeholder="Array, HashMap"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      focus:border-green-500
      transition
    "
        />
      </div>

      {/* Function Name */}

      <div>
        <label className="block mb-2 text-lg font-semibold text-white">
          Function Name
        </label>

        <input
          type="text"
          placeholder="twoSum"
          value={functionName}
          onChange={(e) => setFunctionName(e.target.value)}
          className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      focus:border-green-500
      transition
    "
        />
      </div>

      {/* Description */}

      <div>
        <label className="block mb-2 text-lg font-semibold text-white">
          Description
        </label>

        <textarea
          rows={8}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      resize-none
      focus:border-green-500
      transition
    "
          placeholder="Write complete problem description..."
        />
      </div>

      {/* Constraints */}

      <div>
        <label className="block mb-2 text-lg font-semibold text-white">
          Constraints
        </label>

        <textarea
          rows={5}
          value={constraints}
          onChange={(e) => setConstraints(e.target.value)}
          className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      resize-none
      focus:border-green-500
      transition
    "
          placeholder="Example:
1 <= n <= 10^5
-10^9 <= nums[i] <= 10^9"
        />
      </div>

      <h2
        className="
        text-3xl
        font-bold
        text-green-400
        border-b
        border-slate-700
        pb-3
        mt-12
        mb-6
      "
      >
        Examples
      </h2>

      {examples.map((example, index) => (
        <div
          key={index}
          className="
      bg-slate-950
      border
      border-slate-700
      rounded-2xl
      p-6
      mb-6
      shadow-lg
    "
        >
          <h3 className="font-semibold mb-4">Example {index + 1}</h3>

          <input
            type="text"
            placeholder="Input"
            value={example.input}
            onChange={(e) => updateExample(index, "input", e.target.value)}
            className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      focus:border-green-500
      transition
      mb-3
    "
          />

          <input
            type="text"
            placeholder="Output"
            value={example.output}
            onChange={(e) => updateExample(index, "output", e.target.value)}
            className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      focus:border-green-500
      transition
      mb-3
    "
          />

          <textarea
            rows={3}
            placeholder="Explanation"
            value={example.explanation}
            onChange={(e) =>
              updateExample(index, "explanation", e.target.value)
            }
            className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      resize-none
      focus:border-green-500
      transition
    "
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addExample}
        className="
      bg-slate-800
      hover:bg-slate-700
      border
      border-slate-700
      px-5
      py-3
      rounded-xl
      transition
    "
      >
        + Add Example
      </button>

      <h2
        className="
        text-3xl
        font-bold
        text-green-400
        border-b
        border-slate-700
        pb-3
        mt-12
        mb-6
      "
      >
        Starter Code
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block mb-2 text-lg font-semibold text-white">
            C++
          </label>

          <textarea
            rows={8}
            value={starterCode.cpp}
            onChange={(e) => updateStarterCode("cpp", e.target.value)}
            className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      resize-none
      focus:border-green-500
      transition
    "
          />
        </div>

        <div>
          <label className="block mb-2 text-lg font-semibold text-white">
            Java
          </label>

          <textarea
            rows={8}
            value={starterCode.java}
            onChange={(e) => updateStarterCode("java", e.target.value)}
            className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      resize-none
      focus:border-green-500
      transition
    "
          />
        </div>

        <div>
          <label className="block mb-2 text-lg font-semibold text-white">
            Python
          </label>

          <textarea
            rows={8}
            value={starterCode.python}
            onChange={(e) => updateStarterCode("python", e.target.value)}
            className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      resize-none
      focus:border-green-500
      transition
    "
          />
        </div>
      </div>
      <h2
        className="
        text-3xl
        font-bold
        text-green-400
        border-b
        border-slate-700
        pb-3
        mt-12
        mb-6
      "
      >
        Visible Test Cases
      </h2>

      {testCases.map((test, index) => (
        <div
          key={index}
          className="
      bg-slate-950
      border
      border-slate-700
      rounded-2xl
      p-6
      mb-6
      shadow-lg
    "
        >
          <h3 className="font-semibold mb-4">Test Case {index + 1}</h3>

          <label>Input</label>

          <textarea
            rows={4}
            value={test.input}
            onChange={(e) => updateTestCase(index, "input", e.target.value)}
            className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      resize-none
      focus:border-green-500
      transition
      mb-3
    "
            placeholder='{"nums":[2,7,11,15],"target":9}'
          />

          <label>Output</label>

          <textarea
            rows={2}
            value={test.output}
            onChange={(e) => updateTestCase(index, "output", e.target.value)}
            className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      resize-none
      focus:border-green-500
      transition
    "
            placeholder="[0,1]"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addTestCase}
        className="
      bg-slate-800
      hover:bg-slate-700
      border
      border-slate-700
      px-5
      py-3
      rounded-xl
      transition
    "
      >
        + Add Test Case
      </button>

      <h2
        className="
        text-3xl
        font-bold
        text-green-400
        border-b
        border-slate-700
        pb-3
        mt-12
        mb-6
      "
      >
        Function Signature
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block mb-2 text-lg font-semibold text-white">
            Return Type
          </label>

          <input
            type="text"
            value={returnType}
            onChange={(e) => setReturnType(e.target.value)}
            placeholder="vector<int>"
            className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      focus:border-green-500
      transition
    "
          />
        </div>

        {parameters.map((param, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Type"
              value={param.type}
              onChange={(e) => updateParameter(index, "type", e.target.value)}
              className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      focus:border-green-500
      transition
    "
            />

            <input
              type="text"
              placeholder="Name"
              value={param.name}
              onChange={(e) => updateParameter(index, "name", e.target.value)}
              className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      focus:border-green-500
      transition
    "
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addParameter}
          className="
      bg-slate-800
      hover:bg-slate-700
      border
      border-slate-700
      px-5
      py-3
      rounded-xl
      transition
    "
        >
          + Add Parameter
        </button>
      </div>

      <button
        type="button"
        onClick={saveProblem}
        className="
        w-full
        mt-10
        bg-green-600
        hover:bg-green-700
        rounded-xl
        py-4
        text-lg
        font-bold
        transition
        shadow-lg
        "
      >
        💾 Save Problem
      </button>
    </div>
  );
}

export default ProblemForm;
