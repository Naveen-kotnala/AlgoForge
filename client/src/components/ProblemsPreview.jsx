import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProblemsPreview() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/problems");

        // only first 3 problems show
        setProblems(res.data.slice(0, 3));
      } catch (error) {
        console.log("Problem fetch error:", error);
      }
    };

    fetchProblems();
  }, []);

  return (
    <section
      className="
    py-24
    px-6 lg:px-8
    bg-slate-950
    "
    >
      <div
        className="
      max-w-7xl
      mx-auto
      "
      >
        {/* HEADER */}

        <div
          className="
        flex
        flex-col
        md:flex-row
        justify-between
        md:items-center
        mb-12
        gap-5
        "
        >
          <div>
            <div
              className="
            inline-block
            px-4 py-2
            rounded-full
            bg-purple-500/10
            border border-purple-500/20
            text-purple-300
            text-sm
            mb-4
            "
            >
              🔥 Trending Problems
            </div>

            <h2
              className="
            text-4xl
            font-extrabold
            text-white
            "
            >
              Featured Problems
            </h2>

            <p
              className="
            text-gray-400
            mt-3
            "
            >
              Solve real interview questions asked by companies.
            </p>
          </div>

          <Link
            to="/problems"
            className="
          text-purple-400
          hover:text-purple-300
          font-semibold
          "
          >
            View All Problems →
          </Link>
        </div>

        {/* PROBLEM CARDS */}

        <div
          className="
        grid
        md:grid-cols-3
        gap-6
        "
        >
          {problems.map((problem) => (
            <div
              key={problem._id}
              className="
            group
            bg-slate-900
            border border-slate-800
            rounded-3xl
            p-6
            hover:border-purple-500/50
            hover:-translate-y-2
            transition
            "
            >
              <h3
                className="
              text-xl
              font-bold
              text-white
              line-clamp-2
              "
              >
                {problem.title}
              </h3>

              <div
                className="
              flex
              flex-wrap
              gap-3
              mt-5
              "
              >
                <span
                  className="
                px-3 py-1
                rounded-full
                text-sm
                bg-purple-500/20
                text-purple-400
                "
                >
                  {problem.tags?.[0] || "DSA"}
                </span>

                <span
                  className={`
                px-3 py-1
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
              </div>

              <Link
                to={`/problems/${problem._id}`}
                className="
              block
              mt-6
              text-center
              py-3
              rounded-xl
              bg-gradient-to-r
              from-purple-600
              to-cyan-500
              text-white
              font-semibold
              hover:scale-105
              transition
              "
              >
                Solve Problem
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemsPreview;
