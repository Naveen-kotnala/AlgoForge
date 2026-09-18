import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 h-screen p-6">
      <h1 className="text-3xl font-bold text-green-400 mb-10">AlgoForge</h1>

      <div className="space-y-4">
        <Link
          to="/admin/add-problem"
          className="block bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl"
        >
          ➕ Add Problem
        </Link>

        <Link
          to="/admin/problems"
          className="block bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl"
        >
          📚 Manage Problems
        </Link>

        <Link
          to="/admin/users"
          className="block bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl"
        >
          👥 Users
        </Link>

        <Link
          to="/admin/stats"
          className="block bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl"
        >
          📊 Statistics
        </Link>
      </div>
    </div>
  );
}

export default AdminSidebar;


// import { useState } from "react";

// function ProblemForm() {
//   const [title, setTitle] = useState("");

//   const [difficulty, setDifficulty] = useState("Easy");

//   const [tags, setTags] = useState("");

//   const [functionName, setFunctionName] = useState("");

//   const [description, setDescription] = useState("");

//   const [constraints, setConstraints] = useState("");

//   const [examples, setExamples] = useState([
//     {
//       input: "",
//       output: "",
//       explanation: "",
//     },
//   ]);

//   const addExample = () => {
//     setExamples([
//       ...examples,
//       {
//         input: "",
//         output: "",
//         explanation: "",
//       },
//     ]);
//   };

//   const updateExample = (index, field, value) => {
//     const updated = [...examples];

//     updated[index][field] = value;

//     setExamples(updated);
//   };

//   const [starterCode, setStarterCode] = useState({
//     cpp: "",
//     java: "",
//     python: "",
//   });

//   const updateStarterCode = (language, value) => {
//     setStarterCode({
//       ...starterCode,
//       [language]: value,
//     });
//   };

//   const [returnType, setReturnType] = useState("");

//   const [parameters, setParameters] = useState([
//     {
//       type: "",
//       name: "",
//     },
//   ]);

//   const addParameter = () => {
//     setParameters([
//       ...parameters,
//       {
//         type: "",
//         name: "",
//       },
//     ]);
//   };

//   const updateParameter = (index, field, value) => {
//     const updated = [...parameters];

//     updated[index][field] = value;

//     setParameters(updated);
//   };
//   const [testCases, setTestCases] = useState([
//     {
//       input: "",
//       output: "",
//     },
//   ]);
//   const addTestCase = () => {
//     setTestCases([
//       ...testCases,
//       {
//         input: "",
//         output: "",
//       },
//     ]);
//   };

//   const updateTestCase = (index, field, value) => {
//     const updated = [...testCases];

//     updated[index][field] = value;

//     setTestCases(updated);
//   };

//   return (
//     <div className="space-y-8 max-w-6xl mx-auto">
//       {/* Title */}

//       <div>
//         <label className="block mb-2 text-lg font-semibold text-white">Title</label>

//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full bg-slate-800 rounded-lg p-3 outline-none"
//         />
//       </div>

//       {/* Difficulty */}

//       <div>
//         <label className="block mb-2 text-lg font-semibold text-white">Difficulty</label>

//         <select
//           value={difficulty}
//           onChange={(e) => setDifficulty(e.target.value)}
//           className="w-full bg-slate-800 rounded-lg p-3"
//         >
//           <option>Easy</option>
//           <option>Medium</option>
//           <option>Hard</option>
//         </select>
//       </div>

//       {/* Tags */}

//       <div>
//         <label className="block mb-2 text-lg font-semibold text-white">Tags</label>

//         <input
//           type="text"
//           placeholder="Array, HashMap"
//           value={tags}
//           onChange={(e) => setTags(e.target.value)}
//           className="w-full bg-slate-800 rounded-lg p-3 outline-none"
//         />
//       </div>

//       {/* Function Name */}

//       <div>
//         <label className="block mb-2 text-lg font-semibold text-white">Function Name</label>

//         <input
//           type="text"
//           placeholder="twoSum"
//           value={functionName}
//           onChange={(e) => setFunctionName(e.target.value)}
//           className="w-full bg-slate-800 rounded-lg p-3 outline-none"
//         />
//       </div>

//       {/* Description */}

//       <div>
//         <label className="block mb-2 text-lg font-semibold text-white">Description</label>

//         <textarea
//           rows={8}
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="
//       w-full
//       bg-slate-800
//       rounded-lg
//       p-3
//       outline-none
//       resize-none
//     "
//           placeholder="Write complete problem description..."
//         />
//       </div>

//       {/* Constraints */}

//       <div>
//         <label className="block mb-2 text-lg font-semibold text-white">Constraints</label>

//         <textarea
//           rows={5}
//           value={constraints}
//           onChange={(e) => setConstraints(e.target.value)}
//           className="
//       w-full
//       bg-slate-800
//       rounded-lg
//       p-3
//       outline-none
//       resize-none
//     "
//           placeholder="Example:
// 1 <= n <= 10^5
// -10^9 <= nums[i] <= 10^9"
//         />
//       </div>

//       <h2 className="text-2xl font-bold mt-8 mb-4">Examples</h2>

//       {examples.map((example, index) => (
//         <div
//           key={index}
//           className="bg-slate-900 border border-slate-700 rounded-xl p-5 mb-5"
//         >
//           <h3 className="font-semibold mb-4">Example {index + 1}</h3>

//           <input
//             type="text"
//             placeholder="Input"
//             value={example.input}
//             onChange={(e) => updateExample(index, "input", e.target.value)}
//             className="w-full bg-slate-800 p-3 rounded-lg mb-3"
//           />

//           <input
//             type="text"
//             placeholder="Output"
//             value={example.output}
//             onChange={(e) => updateExample(index, "output", e.target.value)}
//             className="w-full bg-slate-800 p-3 rounded-lg mb-3"
//           />

//           <textarea
//             rows={3}
//             placeholder="Explanation"
//             value={example.explanation}
//             onChange={(e) =>
//               updateExample(index, "explanation", e.target.value)
//             }
//             className="w-full bg-slate-800 p-3 rounded-lg resize-none"
//           />
//         </div>
//       ))}

//       <button
//         type="button"
//         onClick={addExample}
//         className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
//       >
//         + Add Example
//       </button>

//       <h2 className="text-2xl font-bold mt-10 mb-4">Starter Code</h2>

//       <div className="space-y-5">
//         <div>
//           <label className="block mb-2 text-lg font-semibold text-white">C++</label>

//           <textarea
//             rows={8}
//             value={starterCode.cpp}
//             onChange={(e) => updateStarterCode("cpp", e.target.value)}
//             className="w-full bg-slate-800 rounded-lg p-3 resize-none"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 text-lg font-semibold text-white">Java</label>

//           <textarea
//             rows={8}
//             value={starterCode.java}
//             onChange={(e) => updateStarterCode("java", e.target.value)}
//             className="w-full bg-slate-800 rounded-lg p-3 resize-none"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 text-lg font-semibold text-white">Python</label>

//           <textarea
//             rows={8}
//             value={starterCode.python}
//             onChange={(e) => updateStarterCode("python", e.target.value)}
//             className="w-full bg-slate-800 rounded-lg p-3 resize-none"
//           />
//         </div>
//       </div>
//       <h2 className="text-2xl font-bold mt-10 mb-4">Visible Test Cases</h2>

//       {testCases.map((test, index) => (
//         <div
//           key={index}
//           className="bg-slate-900 border border-slate-700 rounded-xl p-5 mb-5"
//         >
//           <h3 className="font-semibold mb-4">Test Case {index + 1}</h3>

//           <label>Input</label>

//           <textarea
//             rows={4}
//             value={test.input}
//             onChange={(e) => updateTestCase(index, "input", e.target.value)}
//             className="w-full bg-slate-800 rounded-lg p-3 mb-3"
//             placeholder='{"nums":[2,7,11,15],"target":9}'
//           />

//           <label>Output</label>

//           <textarea
//             rows={2}
//             value={test.output}
//             onChange={(e) => updateTestCase(index, "output", e.target.value)}
//             className="w-full bg-slate-800 rounded-lg p-3"
//             placeholder="[0,1]"
//           />
//         </div>
//       ))}

//       <button
//         type="button"
//         onClick={addTestCase}
//         className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
//       >
//         + Add Test Case
//       </button>

//       <h2 className="text-2xl font-bold mt-10 mb-4">Function Signature</h2>

//       <div className="space-y-5">
//         <div>
//           <label className="block mb-2">Return Type</label>

//           <input
//             type="text"
//             value={returnType}
//             onChange={(e) => setReturnType(e.target.value)}
//             placeholder="vector<int>"
//             className="w-full bg-slate-800 rounded-lg p-3"
//           />
//         </div>

//         {parameters.map((param, index) => (
//           <div key={index} className="grid grid-cols-2 gap-4">
//             <input
//               type="text"
//               placeholder="Type"
//               value={param.type}
//               onChange={(e) => updateParameter(index, "type", e.target.value)}
//               className="bg-slate-800 rounded-lg p-3"
//             />

//             <input
//               type="text"
//               placeholder="Name"
//               value={param.name}
//               onChange={(e) => updateParameter(index, "name", e.target.value)}
//               className="bg-slate-800 rounded-lg p-3"
//             />
//           </div>
//         ))}

//         <button
//           type="button"
//           onClick={addParameter}
//           className="bg-blue-600 px-5 py-2 rounded-lg"
//         >
//           + Add Parameter
//         </button>
//       </div>

//       <button
//         className="
//         bg-green-600
//         hover:bg-green-700
//         px-6
//         py-3
//         rounded-lg
//         font-semibold
//         "
//       >
//         Save Problem
//       </button>
//     </div>
//   );
// }

// export default ProblemForm;

