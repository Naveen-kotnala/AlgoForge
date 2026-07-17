import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Problems() {
  const [search, setSearch] = useState("");

  const [difficulty, setDifficulty] = useState("All");

  const [problems, setProblems] = useState([]);

  const [solvedProblems, setSolvedProblems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Problems

        const res = await axios.get("http://localhost:5000/api/problems");

        setProblems(res.data);

        // Fetch Solved Problems

        const token = localStorage.getItem("token");

        if (token) {
          const solved = await axios.get(
            "http://localhost:5000/api/submissions/solved",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );

          setSolvedProblems(solved.data);

          console.log("Solved:", solvedProblems);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filteredProblems = problems.filter((problem) => {
    const searchMatch = problem.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const difficultyMatch =
      difficulty === "All" || problem.difficulty === difficulty;

    return searchMatch && difficultyMatch;
  });

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      <section className="pt-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold">Problems</h1>

          <p className="text-gray-400 mt-3">
            Practice coding problems and improve your DSA skills.
          </p>

          <p className="text-purple-400 mt-3">
            Total Problems: {problems.length}
          </p>

          {/* Search */}

          <div className="mt-10">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search problems..."
              className="
            w-full
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            px-5
            py-4
            outline-none
            focus:border-purple-500
            "
            />
          </div>

          {/* Difficulty */}

          <div className="mt-5">
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            px-5
            py-3
            "
            >
              <option>All</option>

              <option>Easy</option>

              <option>Medium</option>

              <option>Hard</option>
            </select>
          </div>

          {/* Problems */}

          <div
            className="
          mt-10
          bg-slate-900
          rounded-2xl
          border
          border-slate-800
          overflow-hidden
          "
          >
            {filteredProblems.map((problem, index) => (
              <div
                key={problem._id}
                className="
              flex
              justify-between
              items-center
              p-6
              border-b
              border-slate-800
              hover:bg-slate-800
              transition
              "
              >
                <div>
                  <div className="flex items-center gap-3">
                    {solvedProblems.includes(problem._id) && (
                      <span className="text-green-400 text-xl">✅</span>
                    )}

                    <span className="text-gray-500">#{index + 1}</span>

                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-semibold">{problem.title}</h2>

                      {solvedProblems.includes(problem._id) && (
                        <span
                          className="
                       text-green-400
                         text-xl
                         font-bold
                        "
                        >
                          ✓
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-3">
                    {problem.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="
                      bg-slate-800
                      text-gray-300
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <span
                    className={`
                  px-4
                  py-1
                  rounded-full
                  text-sm

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

                  <Link
                    to={`/code/${problem._id}`}
                    className="
                  bg-purple-600
                  px-5
                  py-2
                  rounded-lg
                  hover:bg-purple-700
                  "
                  >
                    Solve
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Problems;
