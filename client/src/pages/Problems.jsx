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

          console.log("Solved:", solved.data);
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
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pt-28 sm:pt-32 px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-7xl mx-auto">
          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl font-bold">Problems</h1>

          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Practice coding problems and improve your DSA skills.
          </p>

          <p className="text-purple-400 mt-3">
            Total Problems: {problems.length}
          </p>

          {/* SEARCH */}
          <div className="mt-8 sm:mt-10">
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
                px-4 sm:px-5
                py-3 sm:py-4
                outline-none
                focus:border-purple-500
                text-sm sm:text-base
              "
            />
          </div>

          {/* FILTERS */}
          <div className="mt-6 space-y-5">
            {/* DIFFICULTY */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-gray-400 font-medium">Difficulty:</span>

              {["All", "Easy", "Medium", "Hard"].map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      transition
                      ${
                        difficulty === level
                          ? "bg-purple-600 text-white"
                          : "bg-slate-900 border border-slate-700 hover:bg-slate-800"
                      }
                    `}
                >
                  {level}
                </button>
              ))}
            </div>

            {/* TOPICS */}
            <div className="mt-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-gray-400 font-medium">Topics:</span>

                {visibleTopics.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setTopic(tag)}
                    className={`
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      transition
                      ${
                        topic === tag
                          ? "bg-green-600 text-white"
                          : "bg-slate-900 border border-slate-700 hover:bg-slate-800"
                      }
                    `}
                  >
                    {tag}
                  </button>
                ))}

                {topics.length > 7 && (
                  <button
                    onClick={() => setShowAllTopics(!showAllTopics)}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-slate-800
                      border
                      border-slate-700
                      hover:bg-slate-700
                    "
                  >
                    {showAllTopics ? "▲ Less" : "▼ More"}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* PROBLEMS */}
          <div
            className="
              mt-8 sm:mt-10
              bg-slate-900
              rounded-2xl
              border
              border-slate-800
              overflow-hidden
            "
          >
            {filteredProblems.map((problem) => (
              <div
                key={problem._id}
                onClick={() => navigate(`/problems/${problem._id}`)}
                className="
                  flex
                  flex-col
                  sm:flex-row
                  justify-between
                  sm:items-center
                  gap-5
                  p-4 sm:p-6
                  border-b
                  border-slate-800
                  hover:bg-slate-800
                  transition
                  cursor-pointer
                "
              >
                {/* LEFT SIDE */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-2 sm:gap-3">
                    {solvedProblems.includes(problem._id) && (
                      <span className="text-green-400 text-xl shrink-0">
                        ✅
                      </span>
                    )}

                    <span className="text-gray-500 font-medium shrink-0">
                      {problem.problemNumber}.
                    </span>

                    <div className="flex items-center gap-3 min-w-0">
                      <h2
                        className="
                        text-lg
                        sm:text-xl
                        font-semibold
                        wrap-break-word
                      "
                      >
                        {problem.title}
                      </h2>

                      {solvedProblems.includes(problem._id) && (
                        <span
                          className="
                            text-green-400
                            text-xl
                            font-bold
                            shrink-0
                          "
                        >
                          ✓
                        </span>
                      )}
                    </div>
                  </div>

                  {/* TAGS */}
                  <div
                    className="
                    flex
                    flex-wrap
                    gap-2
                    mt-3
                    pl-0
                  "
                  >
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

                {/* RIGHT SIDE */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    sm:justify-end
                    gap-4 sm:gap-5
                    w-full
                    sm:w-auto
                    shrink-0
                  "
                >
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
                      transition
                      shrink-0
                    "
                  >
                    Solve
                  </Link>
                </div>
              </div>
            ))}

            {/* NO RESULTS */}
            {filteredProblems.length === 0 && (
              <div
                className="
                py-16
                text-center
                text-gray-400
              "
              >
                No problems found.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Problems;
