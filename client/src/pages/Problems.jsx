import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

function Problems() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [difficulty, setDifficulty] = useState("All");

  const [topic, setTopic] = useState("All");

  const [problems, setProblems] = useState([]);

  const [solvedProblems, setSolvedProblems] = useState([]);

  const [showAllTopics, setShowAllTopics] = useState(false);

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

  const topics = [
    "All",
    ...new Set(problems.flatMap((problem) => problem.tags || [])),
  ];

  const visibleTopics = showAllTopics ? topics : topics.slice(0, 7);

  const filteredProblems = problems.filter((problem) => {
    const searchMatch = problem.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const difficultyMatch =
      difficulty === "All" || problem.difficulty === difficulty;

    const topicMatch = topic === "All" || problem.tags?.includes(topic);

    return searchMatch && difficultyMatch && topicMatch;
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

          {/* Filters */}

          <div className="mt-6 space-y-4">
            {/* Difficulty */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-gray-400 font-medium">Difficulty:</span>

              {["All", "Easy", "Medium", "Hard"].map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`px-4 py-2 rounded-full text-sm transition
        ${
          difficulty === level
            ? "bg-purple-600 text-white"
            : "bg-slate-900 border border-slate-700 hover:bg-slate-800"
        }`}
                >
                  {level}
                </button>
              ))}
            </div>

            {/* Topics */}
            <div className="mt-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-gray-400 font-medium">Topics:</span>

                {visibleTopics.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setTopic(tag)}
                    className={`px-4 py-2 rounded-full text-sm transition
        ${
          topic === tag
            ? "bg-green-600 text-white"
            : "bg-slate-900 border border-slate-700 hover:bg-slate-800"
        }`}
                  >
                    {tag}
                  </button>
                ))}

                {topics.length > 7 && (
                  <button
                    onClick={() => setShowAllTopics(!showAllTopics)}
                    className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700"
                  >
                    {showAllTopics ? "▲ Less" : "▼ More"}
                  </button>
                )}
              </div>
            </div>
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
                onClick={() => navigate(`/problems/${problem._id}`)}
                className="
              flex
              justify-between
              items-center
              p-6
              border-b
              border-slate-800
              hover:bg-slate-800
              transition
              cursor-pointer
              "
              >
                <div>
                  <div className="flex items-center gap-3">
                    {solvedProblems.includes(problem._id) && (
                      <span className="text-green-400 text-xl">✅</span>
                    )}

                    <span className="text-gray-500 font-medium">
                      {problem.problemNumber}.
                    </span>

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
                    to={`/problems/${problem._id}`}
                    onClick={(e) => e.stopPropagation()}
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
